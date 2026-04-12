import { gsap, ScrollTrigger, ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import NavBar from "./components/NavBar.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import MessageSection from "./sections/MessageSection.jsx";
import FlavorSection from "./sections/FlavorSection.jsx";
import NutritionSection from "./sections/NutritionSection.jsx";
import BenefitSection from "./sections/BenefitSection.jsx";
import FooterSection from "./sections/FooterSection.jsx";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    useGSAP(() => {
        let smoother;
        if (!isMobile) {
            smoother = ScrollSmoother.create({
                smooth: 3,
                effects: true,
            });
        }
        return () => {
            smoother && smoother.kill();
        };
    }, [isMobile]);
    return (
        <main>
            <NavBar />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <HeroSection />
                    <MessageSection />
                    <FlavorSection />
                    <NutritionSection />
                    <BenefitSection />
                    <FooterSection />
                </div>
            </div>
        </main>
    )
}
export default App;
