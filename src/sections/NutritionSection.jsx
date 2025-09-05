import { useMediaQuery } from "react-responsive";
import { nutrientLists } from "../constants";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText, ScrollTrigger } from "gsap/all";
const NutritionSection = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    })

    const [lists, setlists] = useState(nutrientLists)
    useEffect(() => {
        if (isMobile) {
            setlists(nutrientLists.slice(0, 3))
        } else {
            setlists(nutrientLists)
        }
    }, [isMobile])


    useGSAP(() => {
        const titleSplit = SplitText.create(".nutrition-title", { type: "chars" });

        const paraSplit = SplitText.create(".nutrition-section p", {
            type: "words,lines",
            linesClass: "paragraph-line",
        });

        const revealTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".nutrition-section",
                start: "top 80%",
                end: "bottom center",
                // scrub: true,
                // markers:true,
            }
        })

        revealTl.to(".nutrition-text-scroll",
            {
                opacity: 100,
                // duration: 1,
                ease: "power1.out",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            }
        ).from(titleSplit.chars, {
            y: "100%",
            stagger: 0.02,
        }).from(paraSplit.lines, {
            y: 150,
            rotate: 5,
            ease: "power1.out",
            stagger: 0.02,
        }, "-=0.5").from(".list-wrapper > div", {
            scale: 0,
            ease: "back.out(1.7)",
            stagger: 0.1,
        }, "-=0.5");
    })

    return (
        <section className="nutrition-section">
            <img src="/images/slider-dip.png" alt="background" className="w-full object-cover" />
            <img src="/images/big-img.png" alt="background" className="big-img" />

            <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
                <div className="general-title flex relative flex-col justify-center items-center gap-24">
                    <div className="overflow-hidden place-self-start">
                        <h1 className="nutrition-title">It still does</h1>
                    </div>
                    <div
                        style={{
                            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                        }}
                        className="nutrition-text-scroll place-self-start"
                    >
                        <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3">
                            <h2 className="text-milk-yellow">Body Good</h2>
                        </div>
                    </div>
                </div>

                <div className="flex md:justify-center items-center translate-y-5">
                    <div className="md:max-w-xs max-w-md">
                        <p className="text-lg md:text-right text-balance font-paragraph">
                            Milk contains a wide array of nutrients, including vitamins, minerals, and protein, and this is lactose free
                        </p>
                    </div>
                </div>

                <div className="nutrition-box">
                    <div className="list-wrapper">
                        {
                            lists.map((nutrient, index) => (
                                <div key={index} className="relative flex-1 col-center">
                                    <div>
                                        <p className="md:text-lg font-paragraph">{nutrient.label}</p>
                                        <p className="font-paragraph text-sm mt-2">up to</p>
                                        <p className="text-2xl md:text-4xl tracking-tighter font-bold ">{nutrient.amount}</p>
                                    </div>

                                    {
                                        index !== lists.length - 1 && <div className="spacer-border" />
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NutritionSection