import { Mail, MapPin, Phone } from "lucide-react";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import { socialLinks } from "@/constants/social-links";

const ContactInfo = () => {
  return (
    <Section id="contacts">
      <SectionTitle className="sm:mb-20 mb-10 text-center">
        Kontaktlar
      </SectionTitle>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
        <div
          className="md:py-10 py-5 lg:px-20 px-5 bg-light"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-[18px]">
            <div className="md:size-14 size-12 shrink-0 rounded-full bg-primary-gradient center-mode">
              <Phone className="text-white" />
            </div>
            <a href="tel:+998787773103"> +998 (78) 777-31-03</a>
          </div>
        </div>
        <div
          className="md:py-10 py-5 lg:px-20 px-5 bg-light"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-[18px]">
            <div className="md:size-14 size-12 shrink-0 rounded-full bg-primary-gradient center-mode">
              <Mail className="text-white" />
            </div>
            <a href="mailto:support@doctorali.uz"> support@doctorali.uz</a>
          </div>
        </div>
        <div
          className="md:py-10 py-5 lg:px-20 px-5 bg-light"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-[18px]">
            <div className="md:size-14 size-12 shrink-0 rounded-full bg-primary-gradient center-mode">
              <MapPin className="text-white" />
            </div>
            <p>{"Farg'ona viloyati Uchko'prik tumani O'rozmergan 94"}</p>
          </div>
        </div>
        <div
          className="md:py-10 py-5 lg:px-20 px-5 bg-light"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-between gap-[18px]">
            <a
              href={socialLinks.instagram}
              className="md:size-14 size-12 shrink-0 rounded-full center-mode"
            >
              <img
                src="/mehrigiyo/images/icons/Instagram.svg"
                alt="Instagram"
              />
            </a>
            <a
              href={socialLinks.facebook}
              className="md:size-14 size-12 shrink-0 rounded-full center-mode"
            >
              <img src="/mehrigiyo/images/icons/Facebook.svg" alt="Facebook" />
            </a>
            <a
              href={socialLinks.youtube}
              className="md:size-14 size-12 shrink-0 rounded-full center-mode"
            >
              <img src="/mehrigiyo/images/icons/Youtube.svg" alt="Youtube" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactInfo;
