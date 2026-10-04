import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { company } from "@content/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sevenhalflab.com"),
  title: { default: `${company.name}: casa di produzione cinematografica, Napoli`, template: `%s | ${company.name}` },
  description:
    "Casa di produzione cinematografica e audiovisiva indipendente con sede a Napoli. Cortometraggi, documentari, riprese subacquee e distribuzione indipendente.",
  icons: { icon: "/media/brand/mark.png" },
  openGraph: { siteName: company.name, locale: "it_IT", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={archivo.variable}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-schermo focus:px-3 focus:py-2 focus:text-fondale">
          Salta al contenuto
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
