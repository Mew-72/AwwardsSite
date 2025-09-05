import NavBar from "./components/NavBar.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import { gsap, ScrollTrigger, ScrollSmoother } from "gsap/all";
import MessageSection from "./sections/MessageSection.jsx";
import FlavorSection from "./sections/FlavorSection.jsx";
import { useGSAP } from "@gsap/react";
import { use } from "react";
import NutritionSection from "./sections/NutritionSection.jsx";
import BenefitSection from "./sections/BenefitSection.jsx";
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
                    <div>
                        <h1 className="text-9xl text-center py-20">End of the Page</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default App;