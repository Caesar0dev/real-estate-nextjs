import Image from "next/image";
import SectionHero from "@/components/SectionHero/SectionHero";

export default function Home() {
    return (
        <div className="nc-PageHome relative overflow-hidden">
            <div className="container px-4">
                <SectionHero />
            </div>
        </div>
    );
}
