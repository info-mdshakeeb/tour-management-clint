import Footer from "@/components/Footer/Footer";
import HeroMain from "@/components/Hero/HeroMain";
import MainNav from "@/components/NavBars/MainNav";
import Explore from "@/components/services/Explore";
import Services from "@/components/services/Services";

export default function Home() {
    return (
        <div className="">
            <MainNav />
            <HeroMain />
            <Services />
            <Explore />
            <Footer />
        </div>
    )
}
