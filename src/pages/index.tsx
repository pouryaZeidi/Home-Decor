import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import Introducing from "@/components/Introducing";
import TableContent from "@/components/TableContent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main >
      <HeroSection/>
      <Introducing/>
      <TableContent/>
    </main>
  );
}
