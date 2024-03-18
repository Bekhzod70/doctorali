import { socialLinks } from "@/constants/social-links";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import Translation from "@/components/translation";

const Address = () => {
  return (
    <Section id="contacts">
      <SectionTitle className="max-w-[712px] sm:mb-16 mb-7">
        <Translation text="footer.quote" />
      </SectionTitle>
      <div className="flex sm:flex-row flex-col max-xl:flex-wrap sm:gap-5 gap-2">
        <div className="address-wrapper">
          <p className="address-title">
            <Translation text="address.phone" />
          </p>
          <a href="tel:+998787773103" className="address-link">
            +998 (78) 777-31-03
          </a>
        </div>
        <div className="address-wrapper">
          <p className="address-title">
            <Translation text="address.social" />
          </p>
          <div className="flex gap-x-4 flex-wrap">
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
            <a
              href={socialLinks.youtube}
              className="address-link"
              target="_blank"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Address;
