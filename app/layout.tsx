import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const roboto = localFont({
  src: [
    {
      path: '/fonts/Roboto-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/Roboto-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-roboto',
});


export const metadata: Metadata = {
  title: "Venkatesh's Portfolio",
  description: "Developer Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
