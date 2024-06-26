import { Mail, MapPin, Phone } from "lucide-react";
import Section from "../components/section";
import SectionTitle from "../components/section-title";
import { socialLinks } from "@/constants/social-links";
import Translation from "@/components/translation";

const ContactInfo = () => {
  return (
    <Section id="contacts">
      <SectionTitle className="sm:mb-20 mb-10 text-center">
        <Translation text="links.contact" />
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
            <a href="tel:+998787773103" className="underline"> +998 (78) 777-31-03</a>
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
            <a href="mailto:support@doctorali.uz" className="underline"> support@doctorali.uz</a>
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
            <p>{""}
            <Translation text="contacts.address" /></p>
          </div>
        </div>
        <div
          className="md:py-10 py-5 lg:px-20 px-5 bg-light"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-between px-[40px] gap-[18px]">
            <a
              href={socialLinks.facebook}
              className="md:size-14 size-12 shrink-0 rounded-full center-mode"
            >
              <img className="w-[50px]" src="/images/icons/facebook.png" alt="Facebook" />
            </a>
            <a
              href={socialLinks.instagram}
              className="md:size-14 size-12 shrink-0 rounded-full center-mode"
            >
              <img
                className="w-[55px]"
                src="/images/icons/instagram.png"
                alt="Instagram"
              />
            </a>
            <a
              href={socialLinks.youtube}
              className="md:size-14 size-12 shrink-0 rounded-full center-mode"
            >
              <img 
              className="w-[50px]"
              src="/images/icons/youtube.png" alt="Youtube" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactInfo;
