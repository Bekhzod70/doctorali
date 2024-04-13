import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Navbar from "@/components/navbar/index";
import Footer from "@/components/footer";
import { appWithTranslation } from "next-i18next";
import { ArrowUp, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Translation from "@/components/translation";

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
      <div>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
      <div
        className="fixed bottom-20 right-5 z-50 w-14 h-14 bg-green center-mode rounded-full shadow-lg"
        onClick={handleScrollUp}
      >
        <ArrowUp className="text-white" />
      </div>
      <a
        href="tel:+998787773103"
        className="fixed left-0 sm:hidden bottom-0 z-50 right-0"
        style={{
          boxShadow: "0rem 0rem 0.1rem rgba(0,0,0,0.3)",
        }}
      >
        <Button className="w-full !rounded-none h-auto py-3 max-sm:text-sm">
          <Phone className="shrink-0 max-sm:w-5 h-5" />
          <span className="sm:hidden">
            <Translation text="links.connect" />
          </span>
          <span className="sm:block hidden">
            <Translation text="connect.btn" />
          </span>
        </Button>
      </a>
      <a
        href="#consultation1"
        className="fixed left-0 sm:block hidden bottom-0 z-50 right-0"
        style={{
          boxShadow: "0rem 0rem 0.1rem rgba(0,0,0,0.3)",
        }}
      >
        <Button className="w-full h-auto py-3 max-sm:text-sm !rounded-none">
          <Phone className="shrink-0 max-sm:w-5 h-5" />
          <span className="sm:hidden">
            <Translation text="links.connect" />
          </span>
          <span className="sm:block hidden">
            <Translation text="connect.btn" />
          </span>
        </Button>
      </a>
    </>
  );
}

export default appWithTranslation(App);
