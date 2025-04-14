import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import studynotion from "../Assets/studynotion.png";
import malkhana from "../Assets/malkhana.png";
import gpt from "../Assets/gpt.png";
import restro from "../Assets/restro.png";
import protonix from "../Assets/protonix.png";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase pt-10">
      <div className="w-full">
        <h1 className="justify-center items-center font-bold text-5xl whitespace-nowrap bg-white-50/90 text-black p-4 pl-2 pr-2 rounded-xl mb-8 font-serif">
          "Turning Ideas into Interactive Experiences"
        </h1>

        <div className="showcaselayout">
          {/* Malkhana */}
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper border-white border-8 rounded-xl">
              <img src={malkhana} alt="Malkhana App" />
            </div>
            <div className="text-content">
              <h2>Evidence Management Made Simple with Malkhana</h2>
              <p className="text-white-50 md:text-xl">
                A powerful MERN stack app designed for fast, secure, and user-friendly evidence management.
              </p>
              <a href="https://malkhana-management-system.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button className="cta-button  hover:bg-blue-800">
                  View Project
                </button>
              </a>
            </div>
          </div>

          {/* Restro */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-blue-300">
                <img src={restro} alt="Restaurant App" />
              </div>
              <h2>Delicious Moments Await — Explore Our Restaurant Menu</h2>
              <a href="https://restaurant-app-link.com" target="_blank" rel="noopener noreferrer">
                <button className="cta-button  hover:bg-blue-800">
                  View Project
                </button>
              </a>
            </div>

            {/* GPT App */}
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-blue-300">
                <img src={gpt} alt="GPT-based App" />
              </div>
              <h2>Closing a GPT-based app or session</h2>
              <a href="https://gpt-app-link.com" target="_blank" rel="noopener noreferrer">
                <button className="cta-button  hover:bg-blue-800">
                  View Project
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="showcaselayout pt-6">
          

          {/* StudyNotion */}
          <div ref={rydeRef} className="first-project-wrapper rounded-2xl">
            <div className="image-wrapper border-white border-8 rounded-xl">
              <img src={studynotion} alt="StudyNotion App" />
            </div>
            <div className="text-content">
              <h2>Learning Made Simple with StudyNotion</h2>
              <p className="text-white-50 md:text-xl">
                A powerful MERN stack app designed for fast, secure, and user-friendly evidence management.
              </p>
              <a href="https://study-notion-ten-delta.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button className="cta-button   hover:bg-blue-800">
                  View Project
                </button>
              </a>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* Protonix */}
            <div className="project">
              <div className="image-wrapper bg-blue-300">
                <img src={protonix} alt="Protonix Website" />
              </div>
              <h2>Company Website — PROTONIX AI PVT LTD</h2>
              <a href="https://protonix.tech/" target="_blank" rel="noopener noreferrer">
                <button className="cta-button  hover:bg-blue-800">
                  View Project
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
