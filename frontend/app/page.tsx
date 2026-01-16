import Button from "@/components/Button";
import { ColoredSpan } from "@/components/ColoredSpan";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
export default function Home() {
  return (
    <div className="flex items-center justify-center ">
      <main className="flex max-w-220 flex-col items-center justify-between py-20 px-5 gap-10 md:gap-12">
        <div className="flex gap-2 md:gap-5 bg-custom-white py-2.5 px-5 md:py-5 md:px-10 rounded-full items-center shadow-[0_0_20px_rgba(92,195,153,0.8)]">
          <img
            src="/2_Logo_Bulle.png"
            alt="Bulle Logo"
            className="h-10 md:h-15"
          />
          <h2 className="uppercase text-sm md:text-xl lg:text-3xl text-nowrap text-dark-gray font-bold">
            Créer un site web <span className="border-b-3">vraiment</span>{" "}
            unique
          </h2>
        </div>
        <div>
          <p className="text-3xl md:text-4xl lg:text-6xl font-semibold text-center">
            Votre <ColoredSpan>site</ColoredSpan> doit{" "}
            <ColoredSpan>donner envie</ColoredSpan> de{" "}
            <ColoredSpan>rester</ColoredSpan>, pas de{" "}
            <ColoredSpan className="line-through decoration-dark-gray">revenir</ColoredSpan> <ColoredSpan color="text-custom-white" className="line-through decoration-dark-gray">en</ColoredSpan>{" "}
            <ColoredSpan className="line-through decoration-dark-gray">arrière</ColoredSpan>.
          </p>
        </div>

        <p className="text-custom-gray font-semibold text-center text-base md:text-xl">
          Design moderne, SEO solide, Suivi complet : on construit un site qui
          retient vos visiteurs et vous apporte des résultats.
        </p>

        <div className="flex flex-wrap gap-5 justify-center">
          <div className="relative">
            <Button icon={<FaCalendarAlt />}>Prendre RDV</Button>
            <img
              src="/3_Un_Ptit_Click.png"
              alt="un petit click"
              className="hidden md:block absolute -left-12 top-12"
            />
          </div>

          <Button
            icon={<FaArrowDown />}
            variant="secondary"
            iconPosition="right"
          >
            Découvrir nos projets
          </Button>
        </div>
      </main>
    </div>
  );
}
