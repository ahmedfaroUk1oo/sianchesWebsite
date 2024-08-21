import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sianches",
  description: "We Help You Realize Your Dream Property",
};

export default function RootLayout({ children }) {
  return (
    <> 
     <Head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
   < link rel="canonical" href="#" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"></ link>
  </Head>
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html></>
  );
}
