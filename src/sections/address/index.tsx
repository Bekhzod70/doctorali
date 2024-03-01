import { socialLinks } from "@/constants/social-links";
import Section from "../components/section";
import SectionTitle from "../components/section-title";

const Address = () => {
  return (
    <Section>
      <SectionTitle className="max-w-[512px] mb-16">
        Мы всегда рады помочь вам
      </SectionTitle>
      <div className="flex max-xl:flex-wrap justify-evenly gap-5">
        <div className="address-wrapper">
          <p className="address-title">Телефон для связи</p>
          <a href="tel:+998711234567" className="address-link">
            +998 (71) 123-4567
          </a>
        </div>
        <div className="address-wrapper">
          <p className="address-title">Электронная почта</p>
          <a href="mailto:suport@doctorali.uz" className="address-link">
            suport@doctorali.uz
          </a>
        </div>
        <div className="address-wrapper">
          <p className="address-title">Соц сети</p>
          <div>
            <a href={socialLinks.instagram} className="address-link mb-3">
              Instagram
            </a>
            <a href={socialLinks.facebook} className="address-link mb-3">
              Facebook
            </a>
            <a href={socialLinks.telegram} className="address-link">
              Telegram
            </a>
          </div>
        </div>
        <div className="address-wrapper">
          <p className="address-title">Физический адрес</p>
          <a href={socialLinks.map} className="address-link">
            ул. Ислома Каримова, 15, Ташкент, Узбекистан, 100047
          </a>
        </div>
      </div>
    </Section>
  );
};
export default Address;
