import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import Provider from "./provider";
import { Toaster } from "@/components/ui/toaster"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
    <link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  rel="stylesheet"
/></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
        {children}
        <Toaster />
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
