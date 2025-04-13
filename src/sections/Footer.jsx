import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container pl-36">
        
        <div className="socials flex gap-4">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center whitespace-nowrap">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} SHUBHAM SIDDHAPURA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
