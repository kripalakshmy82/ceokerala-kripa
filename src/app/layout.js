
// importing Application Font
import { Inter } from "next/font/google";

// Configuring Application font
const inter = Inter({ subsets: ["latin"], weight:["500"] });

// Importing Application Styles
import './globals.css';

// Impoting Application Root Component
import Header from "@/app/_includes/Header";
import Footer from "@/app/_includes/Footer";

// Root Layout for the application
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
