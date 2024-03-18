import { socialLinks } from "@/constants/social-links";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import Translation from "@/components/translation";

const Address = () => {
  return (
    <Section id="contacts">
      <SectionTitle className="max-w-[712px] sm:mb-16 mb-7">
        <Translation text="address.title" />
      </SectionTitle>
      <div className="flex sm:flex-row flex-col max-xl:flex-wrap sm:gap-5 gap-2">
        <div className="address-wrapper">
          <p className="address-title">
            <Translation text="address.phone" />
          </p>
          <a href="tel:+998711234567" className="address-link">
            +998 (71) 123-4567
          </a>
        </div>
        <div className="address-wrapper">
          <p className="address-title">
            <Translation text="address.social" />
          </p>
          <div className="flex gap-4">
            <a
              href={socialLinks.instagram}
              className="address-link"
              target="_blank"
            >
              Instagram
            </a>
            <a
              href={socialLinks.telegram}
              className="address-link"
              target="_blank"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Address;
