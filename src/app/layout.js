import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    "Advance Power Controls | Industrial Automation & Power Control Solutions",
  description:
    "Advance Power Controls provides reliable industrial automation and power control equipment including Jumbo Displays, Photo Electric Controllers, Process Indicators, Load Cell Controllers, Sensors, and more. Trusted solutions for efficiency, accuracy, and safety.",
  keywords: [
    "Advance Power Controls",
    "Industrial Automation",
    "Power Control Equipment",
    "Jumbo Display",
    "Photo Electric Controller",
    "Process Indicator",
    "Load Cell Controller",
    "Signal Isolator",
    "Programmable Counter",
    "Industrial Sensors",
    "Automation Solutions",
  ],
  icons: {
    icon: "/Favicon2.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TTGWBZG8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <NavBar />
        <div className="flex flex-col flex-[1_0_auto]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
