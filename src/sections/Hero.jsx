import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { words ,socialImgs   } from "../constants";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-10 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-15 px-5">
          <div className="flex flex-col gap-3">
            <div className="hero-text">
              <h1>
                SHAPING
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1 className="">into INTERACTIVE </h1>
              <h1>Experiences</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m SHUBHAM SIDDHAPURA,
              <h1 className=" text-lg  text-amber-200 text-justify"> I'm a dedicated Web and Software Developer with a knack for building scalable, high-performing applications. From sleek user interfaces to robust backend systems, 
                I bring ideas to life with clean code and creative solutions. Let's create something impactful!</h1>
            </p>
            <div className=" w-36 h-36  flex gap-4">
                      {socialImgs.map((socialImg, index) => (
                        <a
                          key={index}
                          href={socialImg.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon"
                        >
                          <img src={socialImg.imgPath} className="hover:bg-blue-500 rounded-xl" alt={`${socialImg.name} icon`} />
                        </a>
                      ))}
                    </div>
            
            
      
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout p-52 ">
          </div>
        </figure>
      </div>

    </section>
  );
};

export default Hero;
