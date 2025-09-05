import { useGSAP } from '@gsap/react'
import gsap, { SplitText, ScrollTrigger } from 'gsap/all'

const FlavorTitle = () => {

    useGSAP(() => {
        const firstTextSplit = SplitText.create(".first-text-split h1", {
            type: "chars"
        })
        const secondTextSplit = SplitText.create(".second-text-split h1", {
            type: "chars"
        })

        gsap.from(firstTextSplit.chars, {
            yPercent: 200,
            stagger: 0.03,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".flavor-section",
                // markers: true,
                start: "top 40%"
            }
        })

        gsap.to(".flavor-text-scroll", {
            clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
            // duration: 0.75,
            scrollTrigger: {
                trigger: ".flavor-text-scroll",
                start: "top 45%",
                // markers: true,
            }
        })

        gsap.from(secondTextSplit.chars, {
            yPercent: 150,
            ease: "power1.inOut",
            stagger: 0.015,
            scrollTrigger: {
                trigger: ".flavor-text-scroll",
                start: "top 45%",
                // markers: true,

            }
        })
        // const revealTl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ""
        //     }
        // })
    })

    return (
        <div className='general-title col-center lg:ml-3 h-full 2xl:gap-32 xl:gap-24 gap-16'>
            <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
                <h1>we have 6</h1>
            </div>

            <div className="flavor-text-scroll" style={{
                clipPath: "polygon(50% 0%,50% 0, 50% 100%, 50% 100%)",
            }}>
                <div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
                    <h2 className='text-milk'>freaking</h2>
                </div>
            </div>

            <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
                <h1>delicious flavors</h1>
            </div>
        </div>
    )
}

export default FlavorTitle