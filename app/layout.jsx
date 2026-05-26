import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://comagetexas.com"),
  title: {
    default: "Comage Container Lines Texas Inc. | Air & Ocean Cargo",
    template: "%s | Comage Container Lines Texas Inc.",
  },
  description:
    "Comage Container Lines Texas Inc. specializes in air and ocean cargo, offering a full range of shipping and logistical services. We bring the world to your business.",
  keywords: [
    "freight forwarding Texas",
    "air cargo",
    "ocean freight",
    "customs clearance",
    "logistics",
    "Comage",
  ],
  openGraph: {
    title: "Comage Container Lines Texas Inc.",
    description: "Air and ocean cargo services at their finest.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
