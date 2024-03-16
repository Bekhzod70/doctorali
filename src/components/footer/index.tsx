import { socialLinks } from "@/constants/social-links";
import Logo from "../icons/logo";
import { footerLinks } from "./data";
import Translation from "../translation";

const Footer = () => {
  return (
    <footer className="rounded-t-[40px] pt-[80px] pb-[100px] bg-green">
      <div className="container">
        <div className="flex lg:flex-row flex-col lg:gap-5 gap-y-[50px]">
          <div className="lg:w-[690px]">
            <div className="max-w-[115px]">
              <Logo />
            </div>
            <p className="mt-5 text-white text-paragraph2 max-w-[248px]">
              <Translation text="footer.quote" />
            </p>
          </div>
          <div className="lg:w-[335px]">
            <p className="text-button2 text-orange mb-[30px] font-medium">
              <Translation text="links.contact" />
            </p>
            <ul className="flex flex-col gap-y-[15px]">
              <li>
                <a
                  href="tel:+998711234567"
                  className="footer-contact-link"
                  target="_blank"
                >
                  +998 (71) 123-4567
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
                <a
                  href={socialLinks.map}
                  className="footer-contact-link"
                  target="_blank"
                >
                  ул. Ислома Каримова, 15, Ташкент, Узбекистан, 100047
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.instagram}
                  className="footer-contact-link"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              {/* <li>
                <a
                  href={socialLinks.facebook}
                  className="footer-contact-link"
                  target="_blank"
                >
                  Facebook
                </a>
              </li> */}
              <li>
                <a
                  href={socialLinks.telegram}
                  className="footer-contact-link"
                  target="_blank"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:w-[335px]">
            <div className="flex flex-col gap-y-5">
              {footerLinks.map(({ label, url }) => (
                <a
                  href={url}
                  key={label}
                  className="text-button1 text-white font-medium hover:underline"
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
