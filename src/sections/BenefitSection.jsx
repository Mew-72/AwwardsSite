import {gsap,ScrollTrigger} from "gsap/all"
import ClipPathTitle from "../components/ClipPathTitle"
import { useGSAP } from "@gsap/react"
import VideoPin from "../components/VideoPin"
import { useMediaQuery } from "react-responsive"

const BenefitSection = () => {

    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    })

    useGSAP(() => {
        const benefitTl = gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: ".benefit-section",
                start: "top 10%",
                end: "top top", //trigger at top of benefit section when top of viewport hits top of section
                scrub: 1.5,
                // markers: true,
            }
        })

        benefitTl.to(".benefit-section .first-title", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out",
            opacity: 100,
            // duration: 1,
        }).to(".benefit-section .second-title", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out",
            opacity: 100,
            // duration: 1,
        }).to(".benefit-section .third-title", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out",
            opacity: 100,
            // duration: 1,
        }).to(".benefit-section .fourth-title", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out",
            opacity: 100,
            // duration: 1,
        })
    })

    return (
        <section className="benefit-section">
            <div className="container mx-auto pt-20">
                <div className="col-center">
                    <p>Unlock the Advantages:<br />
                        Explore the Key Benefits of Choosing SPYLT</p>
                    
                    <div className="mt-20 col-center">
                        <ClipPathTitle title={"Shelf stable"}
                            color={"#faeade"}
                            bg={"#c88e64"}
                            className={"first-title"}
                        borderColor={"#222123"}/>
                        <ClipPathTitle title={"Protein + Caffeine"}
                            color={"#222123"}
                            bg={"#faeade"}
                            className={"second-title"}
                        borderColor={"#222123"}/>
                        <ClipPathTitle title={"Infinitely recyclable"}
                            color={"#faeade"}
                            bg={"#7F3B2D"}
                            className={"third-title"}
                        borderColor={"#222123"}/>
                        <ClipPathTitle title={"Lactose free"}
                            color={"#2E2D2F"}
                            bg={"#FED775"}
                            className={"fourth-title"}
                        borderColor={"#222123"}/>
                    </div>

                    <div className="md:mt-0 mt-10">
                        <p>And much more ...</p>
                    </div>
                </div>
            </div>

            <div className="relative overlay-box h-fit">
                <VideoPin />
            </div>

            {isMobile && <h1 className="2xl:text-[8.5rem] md:text-8xl text-5xl font-bold uppercase leading-[12.5vw] tracking-[-.35vw] text-[#222123] text-center pb-4 skew-3 bg-amber-50">Unlock the Moment Now</h1> }
            { !isMobile && <h1 className="general-title text-[#222123] text-center pb-4 skew-3 bg-amber-50">Unlock the Moment Now</h1> }
      </section>
  )
}

export default BenefitSection