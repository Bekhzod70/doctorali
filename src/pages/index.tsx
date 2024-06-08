import Address from "@/sections/address";
import Benefits from "@/sections/benefits";
import Connect from "@/sections/connect";
import Feedback from "@/sections/feedback";
import Health from "@/sections/health";
import Hero from "@/sections/hero";
import Product from "@/sections/product";
import Sertificate from "@/sections/sertificate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Fragment } from "react";
import { useTranslation } from "next-i18next";
import SingleRecommend from "@/sections/single-recommend";
import Faq from "@/sections/faq";
import Overall from "@/sections/overall";
import Problem from "@/sections/problem";
import OurProduct from "@/sections/our-product";
import Advantages from "@/sections/advantages";
import CompanyHistory from "@/sections/company-history";
import WorkProcess from "@/sections/work-process";
import DownloadApp from "@/sections/download-app";
// import Individual from "@/sections/individual";
import OurTeam from "@/sections/our-team";
import OurSertificates from "@/sections/our-sertificates";
import VideoInformation from "@/sections/video-information";
import ContactInfo from "@/sections/contact-info";
import World from "@/sections/world";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Hero /> 
      <Overall />
      <Problem />
      <OurProduct />
      <Advantages />
      <CompanyHistory />
      <World />
      <WorkProcess />
      <DownloadApp />
      {/* <Individual /> */}
      <OurTeam />
      <OurSertificates />
      <VideoInformation />
      {/* <Benefits /> */}
      {/* <SingleRecommend /> */}
      {/* <Health /> */}
      {/* <Product /> */}
      {/* <Connect
        id="consultation1"
        title={t("connect2.title")}
        subtitle={t("connect2.subtitle")}
        bgColor="bg-orange"
        desktopImg="/mehrigiyo/images/bg/connect-2.png"
        mobileImg="/mehrigiyo/images/bg/connect-2.png"
        buttonClass="bg-green hover:bg-green/90"
      /> */}
      {/* <Feedback /> */}
      {/* <Sertificate /> */}
      {/* <Connect
        image
        id="consultation2"
        title={t("connect1.title")}
        subtitle={t("connect1.subtitle")}
        bgColor="bg-green"
        desktopImg="/mehrigiyo/images/bg/connect-1.png"
        mobileImg="/mehrigiyo/images/bg/connect-1-sm.png"
      /> */}
      <Faq />
      <Connect
        id="consultation1"
        title={
          "Konsultatsiya oling"
        }
        subtitle={" Mutaxassislarimizdan mahsulotlar boʻyicha bepul konsultatsiya oling va sogʻlom hayot tomon ilk qadamni qoʻying!  "}
        bgColor="bg-green"
        desktopImg="/mehrigiyo/images/bg/connect-3.png"
        mobileImg="/mehrigiyo/images/bg/connect-3-sm.png"
      />
      <ContactInfo />
      {/* <Address /> */}
    </Fragment>
  );
}

// @ts-ignore
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
