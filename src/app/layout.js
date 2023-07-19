import "bootstrap/dist/css/bootstrap.min.css";

//import './globals.css';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Header from "@/app/_includes/Header";
import Footer from "@/app/_includes/Footer";



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
