import NavBar from "./components/NavBar.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import { gsap, ScrollTrigger, ScrollSmoother } from "gsap/all";
import MessageSection from "./sections/MessageSection.jsx";
import FlavorSection from "./sections/FlavorSection.jsx";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection.jsx";
import BenefitSection from "./sections/BenefitSection.jsx";
import FooterSection from "./sections/FooterSection.jsx";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
    useGSAP(() => {
        ScrollSmoother.create({
            smooth: 3,
            effects: true,
            // normalizeScroll: true,
        });
    });
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
