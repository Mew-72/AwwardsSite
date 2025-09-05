import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, SplitText } from "gsap/all";

const MessageSection = () => {

    useGSAP(() => {
        const firstMsgSplit = SplitText.create(".first-message", {
            type: "words"
        })
        const secMsgSplit = SplitText.create(".second-message", {
            type: "words"
        })
        const paraMsgSplit = SplitText.create(".message-content p",{
            type: "words, lines",
            linesClass: "paragraph-line",
        });

        gsap.to(firstMsgSplit.words, {
            color: "#faeade",
            ease: "power1.in",
            stagger: 1,
            scrollTrigger: {
                trigger: ".message-content",
                start: "top center",
                end: "90% bottom",
                scrub: true,
                // markers: true,
            }
        })

        gsap.to(secMsgSplit.words, {
            color: "#faeade",
            ease: "power1.in",
            stagger: 1,
            scrollTrigger: {
                trigger: ".second-message",
                start: "top center",
                end: "bottom center",
                scrub: true,
                // markers: true,
            }
        })

        const revealTl = gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: ".msg-text-scroll",
                start: "top 150%",
                scrub: true,
                // markers: true
            }
        })

        revealTl.to(".msg-text-scroll", {
            clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.inOut",
            duration: 1,
        })

        gsap.from(".k h2", {
            x: 150,
            scrollTrigger: {
                trigger: ".k h2",
                scrub: true,
                start: "top 80%",
                // markers: true,
            }
        })

        const paraTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".message-content p",
                start: "top center",
                // scrub: true,
                // markers: true
            }
        })

        paraTl.from(paraMsgSplit.words, {
            yPercent: 300,
            rotate: 3,
            ease: "power1.inOut",
            duration: 1, 
            stagger: 0.01,
            
        })
    })

    return <section className="message-content">
        <div className="container mx-auto flex-center py-28 relative">
            <div className="w-full h-full">
                <div className="msg-wrapper">
                    <h1 className="first-message"> stir up your fearless past and</h1>
                    <div className="msg-text-scroll" style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}>
                        <div className="k md:pb-5 pb-3 bg-light-brown px-5 border-none">
                            <h2 className="text-red-brown">fuel up</h2>
                        </div>
                    </div>

                    <h1 className="second-message">your future with every sip of perfect protein</h1>
                </div>
                <div className="msg flex-center md:mt-20 mt-10">
                    <div className="max-w-md flex-center overflow-hidden">
                        <p>Rev your rebel spirit and feed the adventure of life with SPYLT, where you're one chug away from greatness.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default MessageSection;