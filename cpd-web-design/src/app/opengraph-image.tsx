import { ImageResponse } from "next/og";

export const alt = "CPD Web Design: your website, built free. You just pay to keep it running.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#F2ECE1", color: "#15120E", padding: 64, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ fontSize: 28, letterSpacing: 6, display: "flex" }}>CPD WEB DESIGN · ROMA</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 92, fontWeight: 800, lineHeight: 1, letterSpacing: -2 }}>
            <span>YOUR WEBSITE,</span>
            <span style={{ color: "#B8321A" }}>BUILT FREE.</span>
          </div>
          <div style={{ fontSize: 36, fontStyle: "italic", display: "flex" }}>You just pay to keep it running.</div>
        </div>
        <div style={{ width: 330, display: "flex", flexDirection: "column", background: "#FBF8F2", padding: 32, transform: "rotate(3deg)", fontSize: 24, boxShadow: "0 20px 40px rgba(0,0,0,.2)" }}>
          <div style={{ display: "flex", justifyContent: "center", letterSpacing: 4, marginBottom: 24 }}>SCONTRINO</div>
          {["Design", "Build", "Launch"].map((l) => (
            <div key={l} style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <span>{l}</span>
              <span>€ 0,00</span>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between", borderTop: "3px solid #15120E", paddingTop: 14, marginTop: 14, fontWeight: 800 }}>
            <span>TOTAL</span>
            <span style={{ color: "#B8321A", fontSize: 44 }}>€0</span>
          </div>
          <div style={{ display: "flex", marginTop: 28, border: "4px solid #B8321A", color: "#B8321A", fontSize: 44, fontWeight: 800, padding: "4px 16px", alignSelf: "center", transform: "rotate(-12deg)" }}>FREE</div>
        </div>
      </div>
    ),
    size,
  );
}
