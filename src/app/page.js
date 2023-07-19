//import dynamic from "next/dynamic";
//import Image from "next/image";
//import styles from "./page.module.css";
import './globals.css';
import SpotLight from "./home/Spotlight";


export const metadata = {
  title: "ecm-kerala",
  description: "election-commission-kerala",
};

export default function Home() {
  return (
    <main>
      <SpotLight />
      
    </main>
  );
}
