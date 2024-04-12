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
import Individual from "@/sections/individual";
import OurTeam from "@/sections/our-team";

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
      <WorkProcess />
      <DownloadApp />
      <Individual />
      <OurTeam />
      {/* <Benefits /> */}
      {/* <SingleRecommend /> */}
      {/* <Health /> */}
      {/* <Product /> */}
      {/* <Connect
        id="consultation1"
        title={t("connect2.title")}
        subtitle={t("connect2.subtitle")}
        bgColor="bg-orange"
        desktopImg="/images/bg/connect-2.png"
        mobileImg="/images/bg/connect-2.png"
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
        desktopImg="/images/bg/connect-1.png"
        mobileImg="/images/bg/connect-1-sm.png"
      /> */}
      {/* <Connect
        id="consultation2"
        title={t("connect3.title")}
        subtitle={t("connect3.subtitle")}
        bgColor="bg-green"
        desktopImg="/images/bg/connect-3.png"
        mobileImg="/images/bg/connect-3-sm.png"
      /> */}
      {/* <Faq /> */}
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
