import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";
import ResponsiveNav from "../components/Home/Navbar/ResponsiveNav";

const font = Poppins({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets : ['latin'],
  display: "swap"
})

export const metadata: Metadata = {
  title: "Travel_Site",
  description: "travel landing page using next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNav/>
        {children}
      </body>
    </html>
  );
}
