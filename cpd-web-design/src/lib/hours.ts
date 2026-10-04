/** Opening-hours helpers, always evaluated in Rome time regardless of the visitor's timezone. */

export type Slot = { open: string; close: string };

const toMin = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** Current weekday (0 = Sunday) and minutes since midnight in Europe/Rome. */
export function romeNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Rome",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "0";
  return { day: WEEKDAYS.indexOf(get("weekday")), minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

/** Today's date in Rome as YYYY-MM-DD (for <input type="date" min>). */
export function romeToday(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Rome" }).format(date);
}

export type OpenStatus =
  | { open: true; until: string }
  | { open: false; nextDay: number; nextTime: string; daysAhead: number }
  | { open: false; nextDay: null; nextTime: null; daysAhead: null };

export function openStatus(week: Slot[][], now = romeNow()): OpenStatus {
  for (const slot of week[now.day] ?? []) {
    if (now.minutes >= toMin(slot.open) && now.minutes < toMin(slot.close)) return { open: true, until: slot.close };
  }
  for (let ahead = 0; ahead < 8; ahead++) {
    const day = (now.day + ahead) % 7;
    const next = (week[day] ?? []).find((s) => ahead > 0 || toMin(s.open) > now.minutes);
    if (next) return { open: false, nextDay: day, nextTime: next.open, daysAhead: ahead };
  }
  return { open: false, nextDay: null, nextTime: null, daysAhead: null };
}

/** Bookable times for a given date, every 30 min, last seating 60 min before close. */
export function bookingTimes(week: Slot[][], isoDate: string): string[] {
  if (!isoDate) return [];
  const day = new Date(`${isoDate}T12:00:00`).getDay();
  const isToday = isoDate === romeToday();
  const nowMin = romeNow().minutes;
  const out: string[] = [];
  for (const slot of week[day] ?? []) {
    for (let m = toMin(slot.open); m <= toMin(slot.close) - 60; m += 30) {
      if (isToday && m <= nowMin + 30) continue;
      out.push(`${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`);
    }
  }
  return out;
}

export function weekdayOf(isoDate: string) {
  return new Date(`${isoDate}T12:00:00`).getDay();
}
