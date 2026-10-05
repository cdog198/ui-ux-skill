/**
 * Every stop on the map. Edit text, coordinates and images here; components read from this file only.
 *
 * - `number` is just the label on the marker. Tours start anywhere and the order varies, so the app never
 *   treats stop I as the start; it works out "next stop" from where the cart actually is.
 * - Coordinates are [longitude, latitude]. Points marked with `coordsNote` were placed by judgement
 *   (a viewpoint on a big hill, a long street) – check them on the ground.
 * - English is the source text. Other languages live in src/data/translations/ and are merged in
 *   by src/data/content.ts.
 * - Images and models are placeholders until the real files are dropped in at the same paths.
 *   See CREDITS.md for sources and licences.
 */
import type { ImageRef, Stop } from './types';

const img = (id: string, kind: 'then' | 'now' | 'photo', en: string): ImageRef => ({
  src: `/images/stops/${id}/${kind}.jpg`,
  caption: { en },
});

const media = (id: string, thenCaption: string, nowCaption: string) => ({
  photo: img(id, 'photo', nowCaption),
  thenNow: { then: img(id, 'then', thenCaption), now: img(id, 'now', nowCaption) },
  model: { src: `/models/${id}.glb`, poster: `/images/stops/${id}/model-poster.jpg` },
});

export const stops: Stop[] = [
  {
    id: 'colosseum',
    number: 1,
    coords: [12.49223, 41.89021],
    ...media('colosseum', 'The Flavian Amphitheatre around AD 80 (reconstruction)', 'The Colosseum today'),
    flyover: { center: [12.49223, 41.89021], height: 30, range: 320, pitchDeg: -30 },
    text: {
      en: {
        status: 'reviewed',
        name: 'Colosseum',
        hook: 'Fifty thousand Romans, a hundred days of games, and an arena built on the drained lake of an emperor nobody missed.',
        history: [
          'Vespasian began the Flavian Amphitheatre around AD 72 on the site of the private lake of Nero’s Golden House – a pointed gift of public land back to the people. His son Titus opened it in AD 80 with a hundred days of games, and Domitian added the hypogeum, the maze of tunnels and lifts beneath the arena floor.',
          'Up to about 50,000 spectators were seated strictly by rank: senators at the front, women and the poor in the wooden gallery at the top. On hot days sailors from the imperial fleet rigged the velarium, a vast canvas awning hung from the masts whose sockets you can still see around the top ring.',
          'Gladiator fights faded out in the 5th century and animal hunts in the 6th. An earthquake in 1349 brought down the southern side, and for centuries the ruin was a quarry: its travertine went into palaces, bridges and St Peter’s. The pockmarks all over the walls are where medieval scavengers dug out the iron clamps that held the blocks together.',
        ],
        funFacts: [
          'The name probably comes from the Colossus of Nero, a 30-metre bronze statue that stood next door – not from the building’s size.',
          'There were 80 entrance arches; 76 were numbered for the public and you can still read numerals like LII above some of them.',
          'In 1749 Pope Benedict XIV consecrated the arena to the Christian martyrs, which finally stopped people carting the stone away.',
        ],
        photoTip: 'Walk a few metres up Via Nicola Salvi or the Colle Oppio terrace for the classic three-tier view. Late afternoon light turns the travertine gold.',
      },
    },
  },
  {
    id: 'colle-oppio',
    number: 2,
    coords: [12.4933, 41.89245],
    coordsNote: 'Placed at the Largo Gaetana Agnesi balcony above the Colosseum. Move it if you stop elsewhere in the park.',
    ...media('colle-oppio', 'Nero’s Domus Aurea, as imagined in a reconstruction', 'The Colosseum from Colle Oppio'),
    flyover: { center: [12.4945, 41.8925], height: 40, range: 380 },
    text: {
      en: {
        status: 'reviewed',
        name: 'Colle Oppio viewpoint',
        hook: 'Under these lawns lies Nero’s Golden House – buried so well that Renaissance painters had to climb down into it.',
        history: [
          'After the Great Fire of AD 64, Nero seized a huge slice of the burnt city for the Domus Aurea, a palace of gilded halls, gardens and a private lake. Its showpiece wing ran across this spur of the Esquiline Hill.',
          'His successors erased him. Trajan filled the palace rooms with earth and built his great baths on top, opened in AD 109 – which is exactly why the frescoes survived. Around 1480 people fell through into the dark rooms below; artists like Raphael and Pinturicchio lowered themselves in on ropes to copy the paintings, and scratched their names on the vaults.',
          'Because the rooms looked like caves, the fanciful painted decoration became known as grottesche – the origin of our word “grotesque”. The park you see today was laid out in the 1920s and 30s by Raffaele De Vico, framing one of the best balconies in Rome over the Colosseum.',
        ],
        funFacts: [
          'Nero’s dining room was said to rotate continuously, day and night, like the heavens.',
          'The Domus Aurea can be visited on guided tours with VR headsets – book ahead, it often sells out.',
          'The ruined walls scattered through the park belong to the Baths of Trajan, the first of Rome’s giant imperial bath complexes.',
        ],
        photoTip: 'Lean on the railing at Largo Gaetana Agnesi and frame the Colosseum between the umbrella pines – best in the soft light before sunset.',
      },
    },
  },
  {
    id: 'circus-maximus',
    number: 3,
    coords: [12.4851, 41.8861],
    ...media('circus-maximus', 'The Circus Maximus at its imperial height (reconstruction)', 'The Circus Maximus today'),
    flyover: { center: [12.4855, 41.8862], height: 20, range: 650, pitchDeg: -25 },
    text: {
      en: {
        status: 'reviewed',
        name: 'Circus Maximus',
        hook: 'The biggest stadium the ancient world ever built – and possibly the biggest ever built for sport, full stop.',
        history: [
          'Romans raced chariots in this valley between the Palatine and Aventine hills from the time of the kings. Julius Caesar rebuilt it on a monumental scale, and under the emperors the track stretched about 600 metres, with seating for well over 150,000 people.',
          'Four teams – the Reds, Whites, Greens and Blues – had fan clubs as passionate as any football ultras. Races ran seven laps around the central barrier, the spina, where giant marble eggs and bronze dolphins were turned to count the laps.',
          'The emperors watched from their palace on the Palatine, whose ruins still overlook the track. The last recorded races were held in AD 549, and the valley later silted up into fields and market gardens. Today it is a park, a concert venue and, when Italy wins something big, the place Rome comes to celebrate.',
        ],
        funFacts: [
          'The obelisk in Piazza del Popolo, next to the Pincio, once stood on the spina here – Augustus brought it from Egypt.',
          'The small medieval tower at the eastern end, the Torre della Moletta, was part of the Frangipane family’s fortifications.',
          'Pliny the Elder claimed it held 250,000 spectators. Modern estimates are lower, but it still dwarfs any stadium today.',
        ],
        photoTip: 'Stand on the Aventine side, Via del Circo Massimo, and shoot across the track to the palace ruins on the Palatine.',
      },
    },
  },
  {
    id: 'orange-garden',
    number: 4,
    coords: [12.4794, 41.88505],
    coordsNote: 'Placed at the terrace at the far end of the garden, not the entrance gate on Via di Santa Sabina.',
    ...media('orange-garden', 'The Aventine and the Savelli fortress in an old engraving', 'The terrace of the Orange Garden'),
    flyover: { center: [12.4797, 41.8848], height: 40, range: 300 },
    text: {
      en: {
        status: 'reviewed',
        name: 'Orange Garden',
        hook: 'A quiet garden of bitter oranges, a balcony over the Tiber, and a keyhole with the best view in Rome around the corner.',
        history: [
          'The Giardino degli Aranci – officially Parco Savello – sits inside the walls of a 12th–13th century fortress of the Savelli, one of the powerful baronial families of medieval Rome. Raffaele De Vico turned it into a public garden in 1932.',
          'The oranges are a nod to St Dominic, who is said to have brought the first orange tree to Rome from Spain around 1220 and planted it in the cloister of Santa Sabina next door. A descendant of that tree is still growing there; you can glimpse it through a small hole in the church portico.',
          'Walk to the end of the avenue for one of the great panoramas of Rome: the river below, Trastevere’s rooftops, and the dome of St Peter’s lined up on the horizon.',
        ],
        funFacts: [
          'Two hundred metres away, the keyhole in the gate of the Knights of Malta frames St Peter’s dome perfectly – three sovereign territories in one glance.',
          'The oranges are bitter Seville oranges: lovely to look at, terrible to eat.',
          'The marble mask fountain by the entrance, by Giacomo della Porta, once stood in the Roman Forum back when it was a cow pasture.',
        ],
        photoTip: 'At sunset, kneel by the balustrade so the dome of St Peter’s sits just above the stone rail. Then queue for the Knights of Malta keyhole.',
      },
    },
  },
  {
    id: 'santa-sabina',
    number: 5,
    coords: [12.4802, 41.88437],
    ...media('santa-sabina', 'The interior of Santa Sabina in a 19th-century view', 'The nave of Santa Sabina today'),
    flyover: { center: [12.4802, 41.88437], height: 35, range: 220 },
    text: {
      en: {
        status: 'reviewed',
        name: 'Basilica of Santa Sabina',
        hook: 'Sixteen centuries old and almost unchanged – step inside and you are standing in the Rome of the late empire.',
        history: [
          'Santa Sabina was built between about 422 and 432 by Peter of Illyria, a priest from the Balkans, on the site of a Roman house. It is one of the best-preserved early Christian basilicas anywhere: a tall, light nave lined with 24 fluted Corinthian columns, reused from an earlier pagan building.',
          'Its carved cypress-wood doors, from around 430, include one of the oldest surviving images of the Crucifixion. In the 1210s Pope Honorius III gave the church to St Dominic and his new order of preachers; the Dominicans are still here, and their headquarters stand next door.',
          'Every Ash Wednesday the Pope comes to Santa Sabina to begin Lent, walking in procession from the nearby church of Sant’Anselmo.',
        ],
        funFacts: [
          'The windows are filled with thin sheets of selenite rather than glass, which give the nave its soft, milky light.',
          'A black stone on a column inside is said to have been thrown at St Dominic by the devil while he prayed.',
          'Look for the small hole in the portico wall: through it you can see the orange tree descended from St Dominic’s.',
        ],
        photoTip: 'Mid-morning, stand at the back of the nave and shoot towards the apse as the light falls through the selenite windows.',
      },
    },
  },
  {
    id: 'trastevere',
    number: 6,
    coords: [12.47007, 41.88938],
    coordsNote: 'Placed at Piazza di Santa Maria in Trastevere, the heart of the district.',
    ...media('trastevere', 'Piazza di Santa Maria in Trastevere in a 19th-century print', 'Piazza di Santa Maria in Trastevere today'),
    flyover: { center: [12.4705, 41.8893], height: 30, range: 450 },
    text: {
      en: {
        status: 'reviewed',
        name: 'Trastevere',
        hook: 'Across the river, cobbles, ivy and laundry lines – the locals here call themselves the truest Romans of all.',
        history: [
          'The name means simply “across the Tiber”. In ancient times this bank was outside the city proper: a district of sailors, potters, tanners and immigrants, including one of Rome’s oldest Jewish communities and many Syrians and Greeks.',
          'Santa Maria in Trastevere, on the main square, is one of the oldest churches in Rome, traditionally founded in the 3rd century and rebuilt in the 1140s. Its golden 12th-century mosaics glow on the façade at night, and inside are Pietro Cavallini’s famous mosaics of the Life of the Virgin from the 1290s.',
          'Trasteverini have always been proud and a little apart; they still hold their own festival, the Festa de’ Noantri – “of us others” – every July. Today the maze of lanes is Rome’s favourite place for an evening out.',
        ],
        funFacts: [
          'The fountain in the piazza is thought to be one of the oldest in Rome, with roots in the Roman period; its current form is by Carlo Fontana.',
          'Trastevere was the 14th of the 14 regions Augustus divided Rome into.',
          'The black cobbles are sampietrini, the basalt setts first used to pave St Peter’s Square – hard on heels, lovely in the rain.',
        ],
        photoTip: 'Wander to Via della Scala or Vicolo del Cinque at dusk, when the ivy, lanterns and pastel walls line up for the perfect street shot.',
      },
    },
  },
  {
    id: 'acqua-paola',
    number: 7,
    coords: [12.46525, 41.88882],
    ...media('acqua-paola', 'The Fontanone in an 18th-century engraving by Giuseppe Vasi', 'The Fontanone today'),
    flyover: { center: [12.46525, 41.88882], height: 30, range: 220 },
    text: {
      en: {
        status: 'reviewed',
        name: 'Fontana dell’Acqua Paola',
        hook: 'The Romans call it “il Fontanone” – the big fountain – and it opens one of the most famous films about the city.',
        history: [
          'Pope Paul V Borghese restored the ancient aqueduct of Trajan, which had brought water to Trastevere since AD 109, and celebrated its new terminus with this triumphal fountain, built in 1610–1612 by Giovanni Fontana and Flaminio Ponzio.',
          'It is made of recycled grandeur: the marble came from the Temple of Minerva in the Forum of Nerva, and the granite columns from the old basilica of St Peter. The big basin in front was added in 1690 by Carlo Fontana.',
          'The giant inscription proudly names the pope and his family. Paolo Sorrentino’s Oscar-winning film The Great Beauty (2013) opens right here, with a choir singing on the terrace.',
        ],
        funFacts: [
          'The eagles and dragons on the top are the heraldic symbols of the Borghese family.',
          'Its water comes from springs around Lake Bracciano, about 40 km north-west of Rome – and later from the lake itself.',
          'Its triumphal-arch design became a model for later Roman fountains, the Trevi among them.',
        ],
        photoTip: 'Cross the road and turn around: the terrace opposite has a wide view over the whole centre of Rome. Come back after dark when the fountain is lit.',
      },
    },
  },
  {
    id: 'janiculum',
    number: 8,
    coords: [12.46157, 41.89155],
    coordsNote: 'Placed at Piazzale Giuseppe Garibaldi. The terrace balustrade runs along its eastern edge.',
    ...media('janiculum', 'Defending the Janiculum during the siege of 1849', 'The view from the Janiculum Terrace'),
    flyover: { center: [12.4625, 41.8918], height: 60, range: 500 },
    text: {
      en: {
        status: 'reviewed',
        name: 'Janiculum Terrace',
        hook: 'Every day at noon a cannon fires below this terrace – and has done, on and off, since 1847.',
        history: [
          'The Janiculum, named after the two-faced god Janus, is not one of the classical seven hills: it lies across the river, outside the ancient city. But it is the highest point in central Rome, and the panorama from Piazzale Garibaldi takes in nearly every dome and bell tower in the city.',
          'In 1849 this hill was the front line of the short-lived Roman Republic, defended by Giuseppe Garibaldi and his volunteers against a French army sent to restore the pope. The busts lining the avenue are of those volunteers, and the great equestrian statue of Garibaldi (1895) looks out over the city he fought for.',
          'A little further along, his Brazilian-born wife Anita gallops on horseback with a baby in one arm and a pistol in the other; her remains are buried in the monument’s base.',
        ],
        funFacts: [
          'The noon cannon was introduced so that all the city’s church bells could ring at the same, correct time.',
          'The small lighthouse along the avenue was a gift from Italians living in Argentina, in 1911.',
          'On summer evenings there’s often a puppet theatre for children near the Garibaldi monument.',
        ],
        photoTip: 'Stand at the balustrade around golden hour: the domes of Sant’Andrea della Valle and the Pantheon line up beautifully. Be here at 12:00 for the cannon.',
      },
    },
  },
  {
    id: 'via-giulia',
    number: 9,
    coords: [12.46895, 41.89635],
    coordsNote: 'Via Giulia is about 1 km long. Placed near its middle, by Palazzo Falconieri and the Arco Farnese.',
    ...media('via-giulia', 'Via Giulia in an 18th-century engraving', 'The Arco Farnese on Via Giulia today'),
    flyover: { center: [12.46895, 41.89635], height: 30, range: 380 },
    text: {
      en: {
        status: 'reviewed',
        name: 'Via Giulia',
        hook: 'The first great straight street of Renaissance Rome – a pope’s grand plan that was never quite finished.',
        history: [
          'Around 1508 Pope Julius II asked Donato Bramante, the architect of the new St Peter’s, to cut a perfectly straight road through the tangle of medieval Rome. Running about a kilometre parallel to the river, Via Giulia was meant to lead to a vast new law court, the Palazzo dei Tribunali.',
          'The court was never completed – the huge rusticated blocks at its base are still nicknamed “the sofas of Via Giulia”. But the street became the most fashionable address in the city, lined with palaces, churches and the homes of bankers and cardinals.',
          'Halfway along, Michelangelo designed the ivy-covered Arco Farnese as the first stage of a private bridge to link Palazzo Farnese with the Villa Farnesina across the river. The bridge was never built; the arch stays, one of the most photographed corners of Rome.',
        ],
        funFacts: [
          'The Fontana del Mascherone, a huge marble face spouting water, is said to have run with wine during a Farnese festival in 1720.',
          'The Carceri Nuove, built in 1655, were considered a model “humane” prison of their time.',
          'Via Giulia is still known for its antique dealers – peer into the workshops as you pass.',
        ],
        photoTip: 'Stand a few metres south of the Arco Farnese and shoot through it down the street, with the ivy hanging into the frame.',
      },
    },
  },
  {
    id: 'piazza-navona',
    number: 10,
    coords: [12.47308, 41.89922],
    ...media('piazza-navona', 'The Stadium of Domitian (reconstruction)', 'Piazza Navona and the Fountain of the Four Rivers'),
    flyover: { center: [12.47308, 41.89922], height: 30, range: 380 },
    text: {
      en: {
        status: 'reviewed',
        name: 'Piazza Navona',
        hook: 'Look at its shape: you are standing inside a 1,900-year-old stadium.',
        history: [
          'Emperor Domitian built a stadium here around AD 86 for Greek-style athletics, with seats for some 20,000–30,000 people. Over the centuries houses were built into its tiers, so the piazza kept the exact long, rounded outline of the running track.',
          'In the 1640s Pope Innocent X, whose family palace faces the square, turned it into a Baroque showpiece. Gian Lorenzo Bernini’s Fountain of the Four Rivers (1651) shows the Nile, Ganges, Danube and Río de la Plata – one great river for each continent then known – beneath an obelisk.',
          'Facing it is Sant’Agnese in Agone, with a façade by Bernini’s great rival Francesco Borromini. The name Navona itself comes from the ancient games: in agone became “Navona”.',
        ],
        funFacts: [
          'Legend says the Nile covers his face so he doesn’t have to look at Borromini’s church. Nice story, but the fountain was finished before the church façade was begun.',
          'From the 1650s to the 1860s the drains were blocked on summer weekends and the piazza flooded for carriages to splash through.',
          'You can still visit the stadium’s foundations under the north end of the square.',
        ],
        photoTip: 'Come early, before the painters set up, and shoot low from the south end so the obelisk rises out of the fountain.',
      },
    },
  },
  {
    id: 'pantheon',
    number: 11,
    coords: [12.47687, 41.89861],
    ...media('pantheon', 'The Pantheon in an 18th-century painting by Giovanni Paolo Panini', 'The Pantheon today'),
    flyover: { center: [12.47687, 41.89861], height: 30, range: 260 },
    text: {
      en: {
        status: 'reviewed',
        name: 'Pantheon',
        hook: 'Almost 1,900 years old and still the largest unreinforced concrete dome in the world.',
        history: [
          'The inscription credits Marcus Agrippa, who built the first temple here around 25 BC. But the building you see is Emperor Hadrian’s, completed around AD 125 – he modestly kept Agrippa’s name over the door.',
          'Inside, the dome is 43.3 metres across and exactly as high, so a perfect sphere would fit in the space. The concrete gets lighter as it rises, mixed with pumice near the top, and the only light comes through the oculus, nearly 9 metres wide and open to the sky.',
          'In 609 it was given to the Pope and consecrated as a church, which is why it survived when so many temples were stripped. Raphael is buried here, as are the first two kings of Italy.',
        ],
        funFacts: [
          'When it rains, it rains inside. The slightly domed floor and its 22 small drain holes carry the water away.',
          'At Pentecost, firefighters drop thousands of red rose petals through the oculus.',
          'Pope Urban VIII Barberini stripped bronze from the portico in the 1620s, inspiring the quip “What the barbarians didn’t do, the Barberini did.”',
        ],
        photoTip: 'Inside around noon, the sun disc moves across the coffers. Outside, frame the portico from the fountain in Piazza della Rotonda at blue hour.',
      },
    },
  },
  {
    id: 'sant-ignazio',
    number: 12,
    coords: [12.47968, 41.89897],
    ...media('sant-ignazio', 'Andrea Pozzo’s design for the painted dome', 'The ceiling of Sant’Ignazio today'),
    flyover: { center: [12.47968, 41.89897], height: 30, range: 220 },
    text: {
      en: {
        status: 'reviewed',
        name: 'Sant’Ignazio di Loyola',
        hook: 'Look up at the dome. Now walk ten steps and look again – it isn’t there.',
        history: [
          'The Jesuits built this huge church from 1626 to honour their founder, St Ignatius of Loyola, next to their college, the Collegio Romano. The money ran out before a dome could be built.',
          'In 1685 the Jesuit painter Andrea Pozzo solved the problem with a canvas: a flat painting that, seen from the right spot, looks exactly like a soaring dome. Then he painted the whole nave ceiling with the Apotheosis of St Ignatius, a dizzying sky full of saints, angels and the four continents, where real architecture melts into painted architecture.',
          'Outside, the little Piazza di Sant’Ignazio (1727–28) by Filippo Raguzzini is laid out like a stage set, its curved buildings arranged like theatre wings facing the church.',
        ],
        funFacts: [
          'Yellow marble discs set in the floor mark the exact spots where the illusions work best.',
          'A large mirror in the nave lets you admire the ceiling without bending your neck.',
        ],
        photoTip: 'Stand on the marble disc in the centre of the nave and shoot straight up with your widest lens. Then try it from the mirror.',
      },
    },
  },
  {
    id: 'spanish-steps',
    number: 13,
    coords: [12.48278, 41.90599],
    ...media('spanish-steps', 'Piazza di Spagna and the steps in an 18th-century view', 'The Spanish Steps today'),
    flyover: { center: [12.48278, 41.90599], height: 40, range: 320 },
    text: {
      en: {
        status: 'reviewed',
        name: 'Spanish Steps',
        hook: 'Paid for by the French, named after the Spanish, and made famous by the English poets who lived at the bottom.',
        history: [
          'The church at the top, Trinità dei Monti, belonged to the French, while the square below took its name from the Spanish embassy to the Holy See. A French diplomat left money in his will to link the two, and Francesco De Sanctis built the elegant, curving staircase of 135 steps in 1723–1725.',
          'At the bottom is the Barcaccia, the half-sunken boat fountain by Pietro Bernini and his son Gian Lorenzo (1627–29), said to recall a boat left stranded here by the great Tiber flood of 1598. Because the water pressure here was low, they sank the fountain below street level.',
          'In the 18th and 19th centuries this was the heart of the English quarter of Grand Tourists. The poet John Keats died in 1821 in the pink house to the right of the steps, now the Keats–Shelley House.',
        ],
        funFacts: [
          'Sitting on the steps is now banned, with fines for those who do – walk them instead.',
          'Every spring the steps are lined with pots of pink azaleas.',
          'Audrey Hepburn ate her famous gelato on these steps in Roman Holiday (1953).',
        ],
        photoTip: 'Climb to the top and look down Via dei Condotti, the luxury shopping street, perfectly aligned with the steps. Early morning is quietest.',
      },
    },
  },
  {
    id: 'pincio',
    number: 14,
    coords: [12.47835, 41.91125],
    coordsNote: 'Placed on the main terrace above Piazza del Popolo (Piazzale Napoleone I).',
    ...media('pincio', 'Piazza del Popolo and the Pincio in a 19th-century view', 'The view from the Pincio Terrace'),
    flyover: { center: [12.4775, 41.9110], height: 40, range: 420 },
    text: {
      en: {
        status: 'reviewed',
        name: 'Pincio Terrace',
        hook: 'Rome’s most romantic sunset, with a view straight down onto Piazza del Popolo and across to St Peter’s.',
        history: [
          'In ancient times the Pincian Hill was the “hill of gardens”, covered in the villas and pleasure grounds of wealthy Romans like Lucullus. The terrace and gardens you see now were designed by Giuseppe Valadier in the early 1800s, during the French occupation of Rome, together with the piazza below.',
          'Down in Piazza del Popolo, the obelisk was carved for Pharaohs Seti I and Ramesses II, brought to Rome by Augustus in 10 BC and set up in the Circus Maximus. Pope Sixtus V moved it here in 1589.',
          'The paths of the Pincio are lined with more than 200 marble busts of famous Italians, from Dante to Garibaldi – many of them with broken noses from generations of vandals.',
        ],
        funFacts: [
          'The twin churches facing the piazza look identical but aren’t: their plans are different shapes, cleverly disguised.',
          'Hidden in the gardens is a water clock from 1867, still ticking, driven by a small stream of water.',
          'Piazza del Popolo was the main entrance to Rome for travellers arriving from the north.',
        ],
        photoTip: 'Arrive 20 minutes before sunset and claim a spot at the balustrade: the dome of St Peter’s sits right in the middle of the skyline.',
      },
    },
  },
  {
    id: 'quirinale',
    number: 15,
    coords: [12.48716, 41.89947],
    coordsNote: 'Placed on Piazza del Quirinale, in front of the palace gate.',
    ...media('quirinale', 'Piazza del Quirinale in an 18th-century engraving', 'The Quirinal Palace and the Dioscuri today'),
    flyover: { center: [12.4880, 41.8998], height: 40, range: 380 },
    text: {
      en: {
        status: 'reviewed',
        name: 'Palazzo del Quirinale',
        hook: 'Home to popes, then kings, and now the President of Italy – on the highest of Rome’s seven hills.',
        history: [
          'Pope Gregory XIII began the palace in 1583 as a summer residence, high above the damp, malarial air of the river. It grew into the main papal residence, and several conclaves to elect new popes were held here in the 19th century.',
          'When Rome became the capital of a united Italy in 1870, the kings of Italy moved in. Since 1946 it has been the official residence of the President of the Republic, and it is one of the largest palaces in the world, with well over a thousand rooms.',
          'In the piazza stand the colossal Dioscuri, the twin horse-tamers Castor and Pollux, Roman statues that once decorated the Baths of Constantine. Pope Pius VI added the obelisk, from the Mausoleum of Augustus, in 1786.',
        ],
        funFacts: [
          'Napoleon had rooms prepared here for himself but never came to Rome to use them.',
          'The presidential guard, the Corazzieri, must be at least 1.90 m tall.',
          'The palace is open to visitors on set days – book on the Quirinale website.',
        ],
        photoTip: 'Walk to the balustrade on the west side of the piazza at sunset: the dome of St Peter’s floats on the horizon above the rooftops.',
      },
    },
  },
  {
    id: 'trevi',
    number: 16,
    coords: [12.48331, 41.90093],
    ...media('trevi', 'The Trevi Fountain in an 18th-century view by Giovanni Paolo Panini', 'The Trevi Fountain today'),
    flyover: { center: [12.48331, 41.90093], height: 30, range: 200 },
    text: {
      en: {
        status: 'reviewed',
        name: 'Trevi Fountain',
        hook: 'Toss a coin over your left shoulder and you will come back to Rome. Around a million and a half euros a year say it works.',
        history: [
          'The water here comes from the Aqua Virgo, an aqueduct built by Agrippa in 19 BC that still flows today. Legend says a young girl showed thirsty Roman soldiers the spring – you can see her in the relief on the right of the façade.',
          'The fountain itself was designed by Nicola Salvi and built from 1732 to 1762 against the back of Palazzo Poli. In the centre, Oceanus rides a shell chariot pulled by sea horses, one wild and one calm, symbols of the changing moods of the sea.',
          'Anita Ekberg’s midnight wade in Fellini’s La Dolce Vita (1960) made it world-famous. The coins thrown in are collected and given to Caritas, the Catholic charity, to feed people in need.',
        ],
        funFacts: [
          'The correct method: right hand, over your left shoulder, back to the fountain.',
          'Two coins means you’ll fall in love in Rome; three means you’ll marry here.',
          'Access to the basin edge can be limited or ticketed at busy times – check before you go.',
        ],
        photoTip: 'Come at 7 am or late at night when it’s lit and quiet. Shoot from the right-hand steps for a diagonal view of Oceanus and the horses.',
      },
    },
  },
];

export const stopsById: Record<string, Stop> = Object.fromEntries(stops.map((s) => [s.id, s]));
