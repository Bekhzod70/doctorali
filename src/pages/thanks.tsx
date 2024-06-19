import Translation from "@/components/translation";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// pages/submit.js
export default function Thanks() {
  const { t } = useTranslation();

    return (
      <div>
        <div className="w-full h-[80vh] flex flex-col justify-center items-center">

          <h1 className="text-center text-[28px]"><Translation text="thanks.Success_line1" /> <br />
          <Translation text="thanks.Success_line2" /> <br />
          <Translation text="thanks.Success_line3" /></h1>
          <Link href="/"className="flex items-center justify-center gap-2 text-[18px] mt-5 bg-green px-5 py-2 text-white">
          <ArrowLeft className="shrink-0 size-5" />
          <Translation text="thanks.GoBack" /></Link>
        </div>
      </div>
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
