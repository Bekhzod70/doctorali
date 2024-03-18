import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Navbar from "@/components/navbar/index";
import Footer from "@/components/footer";
import { appWithTranslation } from "next-i18next";
import { ArrowUp } from "lucide-react";

const remarkFont = localFont({
  src: "../fonts/remark.ttf",
  weight: "400",
  variable: "--remark-font",
});

const sansFont = localFont({
  src: "../fonts/PTSans-Regular.ttf",
  weight: "400",
  variable: "--pt-sans",
});

const alegreyaFont = localFont({
  src: "../fonts/Alegreya-VariableFont_wght.ttf",
  weight: "400",
  variable: "--alegreya-font",
});

const interFont = localFont({
  src: [
    {
      path: "../fonts/Inter-Regular.ttf",
      weight: "400",
    },
    {
      path: "../fonts/Inter-Medium.ttf",
      weight: "500",
    },
  ],
  variable: "--inter-font",
});

function App({ Component, pageProps }: AppProps) {
  const handleScrollUp = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${interFont.style.fontFamily};
          font-weight: 400;
        }
      `}</style>
      <div
        className={`${remarkFont.variable} ${interFont.variable} ${alegreyaFont.variable}`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
      <div
        className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-green center-mode rounded-full shadow-lg"
        onClick={handleScrollUp}
      >
        <ArrowUp className="text-white" />
      </div>
    </>
  );
}

export default appWithTranslation(App);
