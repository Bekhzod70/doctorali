import { socialLinks } from "@/constants/social-links";
import Logo from "../icons/logo";
import { footerLinks } from "./data";
import Translation from "../translation";

const Footer = () => {
  return (
    <footer className="pt-[80px] pb-[100px] bg-[#04312B]">
      <div className="container">
        <div className="flex lg:flex-row flex-col max-sm:items-center lg:gap-5 gap-y-[50px]">
          <div className="lg:w-[690px] max-sm:mx-auto">
            <div className="max-w-[115px] max-sm:mx-auto">
              <Logo />
            </div>
            <p className="mt-5 text-white text-paragraph2 max-sm:text-center max-w-[248px]">
              <Translation text="footer.quote" />
            </p>
          </div>
          <div className="lg:w-[335px] max-sm:text-center">
            <p className="text-button2 text-orange mb-[30px] font-medium">
              <Translation text="links.contact" />
            </p>
            <ul className="flex flex-col gap-y-[15px]">
              <li>
                <a
                  href="tel:+998787773103"
                  className="footer-contact-link"
                  target="_blank"
                >
                  +998 (78) 777-31-03
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@doctorali.uz"
                  className="footer-contact-link"
                  target="_blank"
                >
                  support@doctorali.uz
                </a>
              </li>
              <li>
                <div className="footer-contact-link hover:no-underline">
                  {"Farg'ona viloyati Uchko'prik tumani O'rozmergan 94"}
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:w-[335px] max-sm:text-center">
            <div className="flex flex-col gap-y-5">
              {footerLinks.map(({ label, url }) => (
                <a
                  href={url}
                  key={label}
                  className="sm:text-button1 text-base text-white font-medium hover:underline"
                >
                  <Translation text={label} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
