import Address from "@/sections/address";
import Benefits from "@/sections/benefits";
import Connect from "@/sections/connect";
import Feedback from "@/sections/feedback";
import Health from "@/sections/health";
import Hero from "@/sections/hero";
import Product from "@/sections/product";
import Sertificate from "@/sections/sertificate";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Benefits />
      <Connect
        title="Не теряйте времени на болезни"
        subtitle="отправьте заявку сейчас и начните свой путь к здоровью!"
        bgColor="bg-green"
        desktopImg="/images/bg/connect-1.png"
        mobileImg="/images/bg/connect-1-sm.png"
      />
      <Health />
      <Product />
      <Connect
        title="Готовы к позитивным изменениям?"
        subtitle="Оставьте заявку и откройте для себя силу нашего натурального комплекса!"
        bgColor="bg-orange"
        desktopImg="/images/bg/connect-2.png"
        mobileImg="/images/bg/connect-2.png"
        buttonClass="bg-green hover:bg-green/90"
      />
      <Sertificate />
      <Feedback />
      <Connect
        title="Пройдите первый шаг к лучшему здоровью"
        subtitle="заполните форму заявки и мы свяжемся с вами незамедлительно!"
        bgColor="bg-green"
        desktopImg="/images/bg/connect-3.png"
        mobileImg="/images/bg/connect-3-sm.png"
      />
      <Address />
    </Fragment>
  );
}
