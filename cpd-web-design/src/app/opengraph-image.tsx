import { ImageResponse } from "next/og";

export const alt = "CPD Web Design: your website, built free. You just pay to keep it running.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#DCE8F7", color: "#000000", padding: 64, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ fontSize: 30, fontWeight: 700, display: "flex" }}>CPD Web Design</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 96, fontWeight: 500, lineHeight: 0.95, letterSpacing: -4 }}>
            <span>Your website,</span>
            <span>built free.</span>
          </div>
          <div style={{ fontSize: 36, display: "flex", color: "#5C6066" }}>You just pay to keep it running.</div>
        </div>
        <div style={{ width: 320, display: "flex", flexDirection: "column", background: "#FFFFFF", color: "#000000", padding: 30, fontSize: 22, fontFamily: "monospace" }}>
          <div style={{ display: "flex", justifyContent: "center", fontWeight: 700 }}>DOCUMENTO COMMERCIALE</div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 24 }}>
            {["Design", "Build", "Launch"].map((l) => (
              <div key={l} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span>{l}</span>
                <span>0,00</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", borderTop: "2px dashed #000000", paddingTop: 14, marginTop: 10, fontWeight: 800, fontSize: 32 }}>
            <span>TOTALE</span>
            <span>0,00</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
