import { Mail, MapPin, Phone } from "lucide-react";
import Section from "../components/section";
import SectionTitle from "../components/section-title";

const ContactInfo = () => {
  return (
    <Section id="contacts">
      <SectionTitle className="sm:mb-20 mb-10 text-center">
        Kontaktlar
      </SectionTitle>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
        <div className="md:py-10 py-5 lg:px-20 px-10 bg-light">
          <div className="flex items-center gap-[18px]">
            <div className="md:size-14 size-12 shrink-0 rounded-full bg-primary-gradient center-mode">
              <Phone className="text-white" />
            </div>
            <a href="tel:9209481722">(920) 948-1722</a>
          </div>
        </div>
        <div className="md:py-10 py-5 lg:px-20 px-10 bg-light">
          <div className="flex items-center gap-[18px]">
            <div className="md:size-14 size-12 shrink-0 rounded-full bg-primary-gradient center-mode">
              <Mail className="text-white" />
            </div>
            <a href="mailto:paula611@gmail.com">paula611@gmail.com</a>
          </div>
        </div>
        <div className="md:py-10 py-5 lg:px-20 px-10 bg-light">
          <div className="flex items-center gap-[18px]">
            <div className="md:size-14 size-12 shrink-0 rounded-full bg-primary-gradient center-mode">
              <MapPin className="text-white" />
            </div>
            <a href="mailto:paula611@gmail.com">
              199 Oakway Lane, Woodland Hills, CA 91303
            </a>
          </div>
        </div>
        <div className="md:py-10 py-5 lg:px-20 px-10 bg-light">
          <div className="flex items-center justify-between gap-[18px]">
            <a
              href=""
              className="md:size-14 size-12 shrink-0 rounded-full center-mode"
            >
              <img src="/images/icons/Instagram.svg" alt="Instagram" />
            </a>
            <a
              href=""
              className="md:size-14 size-12 shrink-0 rounded-full center-mode"
            >
              <img src="/images/icons/Facebook.svg" alt="Facebook" />
            </a>
            <a
              href=""
              className="md:size-14 size-12 shrink-0 rounded-full center-mode"
            >
              <img src="/images/icons/Youtube.svg" alt="Youtube" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactInfo;
