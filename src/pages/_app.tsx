import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/index";

const remarkFont = localFont({
  src: "../fonts/remark.ttf",
  weight: "400",
  variable: "--remark-font",
});

const interFont = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--inter-font",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${interFont.style.fontFamily};
          font-weight: 400;
        }
      `}</style>
      <div className={`${remarkFont.variable} ${interFont.variable}`}>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}
