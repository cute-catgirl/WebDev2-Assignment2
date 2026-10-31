/*
    Written by: Phoebe Atuchina
    Date: 2026-10-27

    This is the layout structure of the page. It describes how other components should be aligned, and what they should contain.

    Inputs: Navbar.tsx
*/

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-orange-50">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;