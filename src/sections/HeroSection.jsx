import {useGSAP} from "@gsap/react";
import { SplitText, gsap, ScrollTrigger} from "gsap/all";

const HeroSection = () => {
    useGSAP(()=>{
        //make sure your animations run properly without any issues and extra things that need to be done can be avoided if we use useGSAP


        const tl = gsap.timeline({
            delay: 1,
        })

        const titleSplit = SplitText.create(".hero-title",
            {
                type: "chars",
            })

        tl.to(".hero-content",{
            opacity: 1,
            y:0,
            ease: "power1.inOut",
        }).to(".hero-text-scroll",{
            clipPath:"polygon(0% 0%,100% 0, 100% 100%, 0% 100%)",
            ease: "circ.inOut",
            // duration: .75,
        },"-=0.5").from(titleSplit.chars, {
            y: "200%",
            stagger: 0.03,
            ease: "power2.out",
        },"-=0.5")

        const heroTl = gsap.timeline({
        scrollTrigger: {
        trigger:".hero-container",
            // markers: true,
            start: "1% top",
            end: "bottom top",
            scrub: true,
            }
        })

        heroTl.to(".hero-container",{
            scale: 1.2,
            // skew: 25,
            rotate: 15,
            yPercent: 30,
            ease: "power1.out",

        })
    })
    return (
        <section>
            <div className="hero-container">
                <img src="/images/hero-bg.png" alt="Hero"  className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150"/>
                <div className="hero-content opacity-0">
                    <div className="overflow-hidden">
                        <h1 className="hero-title">Freaking Delicious</h1>
                    </div>
                    <div style={{
                        clipPath:"polygon(50% 0%,50% 0, 50% 100%, 50% 100%)",
                    }} className="hero-text-scroll -translate-y-30 md:-translate-y-10">
                        <div className="hero-subtitle">
                            <h1>Protein + Caffeine</h1>
                        </div>
                    </div>
                    <h2>Live life to the fullest with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.</h2>
                    <button className="hero-button cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
                        <p>Chug a SPYLT</p>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;