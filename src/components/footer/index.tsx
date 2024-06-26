import { socialLinks } from "@/constants/social-links";
import { footerLinks } from "./data";
import Translation from "../translation";


const Footer = () => {
  return (
    <footer className="pt-[80px] pb-[100px] bg-[#04312B]">
      <div className="container">
        <div className="flex lg:flex-row flex-col max-sm:items-center lg:gap-5 gap-y-[50px]">
          <div className="lg:w-[690px] max-sm:mx-auto">
            <div className="max-w-[115px] max-sm:mx-auto">
              <img src="/images/lgoo.svg" alt="logo" />
            </div>
            <p className="mt-5 text-white text-paragraph2 max-sm:text-center max-w-[248px]">
              <Translation text="footer.quote" />
            </p>
          </div>
          <div className="lg:w-[535px] max-sm:text-center">
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
                  {""}
                  <Translation text="contacts.address" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
