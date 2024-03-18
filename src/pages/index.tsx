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

export default function Home() {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Hero />
      <SingleRecommend />
      <Benefits />
      <Health />
      <Product />
      <Connect
        id="consultation1"
        title={t("connect2.title")}
        subtitle={t("connect2.subtitle")}
        bgColor="bg-orange"
        desktopImg="/images/bg/connect-2.png"
        mobileImg="/images/bg/connect-2.png"
        buttonClass="bg-green hover:bg-green/90"
      />
      <Sertificate />
      <Feedback />
      <Connect
        id="consultation2"
        title={t("connect1.title")}
        subtitle={t("connect1.subtitle")}
        bgColor="bg-green"
        desktopImg="/images/bg/connect-1.png"
        mobileImg="/images/bg/connect-1-sm.png"
      />
      {/* <Connect
        id="consultation2"
        title={t("connect3.title")}
        subtitle={t("connect3.subtitle")}
        bgColor="bg-green"
        desktopImg="/images/bg/connect-3.png"
        mobileImg="/images/bg/connect-3-sm.png"
      /> */}
      <Address />
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
