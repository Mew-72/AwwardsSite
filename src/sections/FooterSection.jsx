import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const links = [
    { label: "GitHub", href: "https://github.com/Mew-72" },
    { label: "Repository", href: "https://github.com/Mew-72/AwwardsSite" },
    { label: "Issues", href: "https://github.com/Mew-72/AwwardsSite/issues" },
    { label: "Pull Requests", href: "https://github.com/Mew-72/AwwardsSite/pulls" },
    { label: "Awwwards", href: "https://www.awwwards.com/" },
];

const FooterSection = () => {
    useGSAP(() => {
        document.fonts.ready.then(() => {
            const footerTitle = SplitText.create(".footer-main-title", { type: "chars" });

            const footerTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".footer-section",
                    start: "top 75%",
                    end: "bottom bottom",
                },
            });

            footerTl
                .to(".footer-text-scroll", {
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    ease: "circ.out",
                    duration: 0.8,
                })
                .from(
                    footerTitle.chars,
                    {
                        yPercent: 120,
                        opacity: 0,
                        ease: "power2.out",
                        stagger: 0.02,
                    },
                    "-=0.45"
                )
                .from(
                    ".footer-description",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power1.out",
                    },
                    "-=0.4"
                )
                .from(
                    ".footer-link",
                    {
                        scale: 0.8,
                        y: 25,
                        opacity: 0,
                        stagger: 0.08,
                        ease: "back.out(1.7)",
                    },
                    "-=0.3"
                )
                .from(
                    ".footer-ring",
                    {
                        scale: 0,
                        opacity: 0,
                        stagger: 0.1,
                        ease: "back.out(1.7)",
                    },
                    "-=0.8"
                );

            return () => {
                footerTitle.revert();
            };
        })
    });

    return (
        <section className="footer-section">
            <div className="footer-glow footer-ring" />
            <div className="footer-glow-secondary footer-ring" />

            <div className="container mx-auto md:px-10 px-5 py-24 relative z-10">
                <div className="col-center text-center">
                    <p className="text-milk font-paragraph uppercase tracking-[0.2em] text-sm md:text-base">
                        You made it to the final sip
                    </p>

                    <div
                        className="footer-text-scroll mt-6"
                        style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
                    >
                        <h1 className="footer-main-title">Stay Wild. Stay SPYLT.</h1>
                    </div>

                    <p className="footer-description mt-8">
                        If this landing page sparked ideas, let’s connect and build the next bold experience.
                    </p>

                    <div className="footer-links mt-12">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn footer-link"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="copyright-box">
                <p>Built with React, GSAP, and Tailwind</p>
                <p>© {new Date().getFullYear()} Mew-72. All rights reserved.</p>
            </div>
        </section>
    );
};

export default FooterSection;
