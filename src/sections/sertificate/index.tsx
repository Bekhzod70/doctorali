// import { Swiper } from "swiper/react";
// import { SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import Section from "../components/section";
// import SectionTitle from "../components/section-title";
// import { Button } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
// import { sertificateData } from "./data";
// import { Controlled as ControlledZoom } from "react-medium-image-zoom";
// import "react-medium-image-zoom/dist/styles.css";
// import { useState } from "react";
// import Translation from "@/components/translation";

// const Sertificate = () => {
//   const [zoom, setZoomed] = useState(0);

//   return (
//     <Section>
//       <div className="flex justify-between items-end mb-16">
//         <div>
//           <SectionTitle className="max-w-[576px]">
//             <Translation text="label.sertificate"/>
//           </SectionTitle>
//         </div>

//         <div className="hidden gap-[10px] sm:flex">
//           <Button
//             size="icon"
//             variant="warning"
//             className="sertificate-arrow-right arrow disabled:bg-gray-light disabled:opacity-100 group"
//           >
//             <ChevronLeft className="text-white group-disabled:text-gray" />
//           </Button>
//           <Button
//             size="icon"
//             variant="warning"
//             className="sertificate-arrow-left arrow disabled:bg-gray-light disabled:opacity-100 group"
//           >
//             <ChevronRight className="text-white group-disabled:text-gray" />
//           </Button>
//         </div>
//       </div>
//       <div>
//         <Swiper
//           modules={[Navigation]}
//           navigation={{
//             nextEl: ".sertificate-arrow-left",
//             prevEl: ".sertificate-arrow-right",
//           }}
//           breakpoints={{
//             300: {
//               slidesPerView: 1,
//               spaceBetween: 10,
//             },
//             700: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },
//             900: {
//               slidesPerView: 3,
//               spaceBetween: 10,
//             },
//             1400: {
//               slidesPerView: 4,
//               spaceBetween: 10,
//             },
//           }}
//           id="sertificate-slider"
//           className="h-full !items-end"
//         >
//           {sertificateData.map((sertificateImgUrl, i) => (
//             <SwiperSlide key={i} className="!h-[unset]">
//               <div className="w-[335px] relative child:!cursor-pointer slider-item-wrapper">
//                 <Button
//                   size="icon"
//                   className="absolute top-[30px] right-[30px] z-20"
//                   onClick={() => setZoomed(i + 1)}
//                 >
//                   <ZoomIn className="text-orange" />
//                 </Button>
//                 <ControlledZoom
//                   isZoomed={zoom === i + 1}
//                   onZoomChange={(value) => {
//                     if (!value) {
//                       setZoomed(0);
//                     }
//                   }}
//                   zoomImg={{
//                     src: sertificateImgUrl,
//                     alt: "Sertificate",
//                   }}
//                   zoomMargin={20}
//                 >
//                   <img
//                     src={sertificateImgUrl}
//                     alt="Sertificate"
//                     className="w-full !cursor-default"
//                   />
//                 </ControlledZoom>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="flex gap-[10px] sm:hidden justify-center mt-10">
//           <Button
//             size="icon"
//             variant="warning"
//             className="sertificate-arrow-right arrow disabled:bg-gray-light disabled:opacity-100 group"
//           >
//             <ChevronLeft className="text-white group-disabled:text-gray" />
//           </Button>
//           <Button
//             size="icon"
//             variant="warning"
//             className="sertificate-arrow-left arrow disabled:bg-gray-light disabled:opacity-100 group"
//           >
//             <ChevronRight className="text-white group-disabled:text-gray" />
//           </Button>
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default Sertificate;
import React, { useState } from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye, X } from "lucide-react";
import Section from "../components/section";
import Translation from "@/components/translation";
import SectionTitle from "../components/section-title";
import { Button } from "@/components/ui/button";

const data = [
  {
    id: 1,
    image_url: "/images/sertificate/iso-sert.png",
    info: "ISO sertifikati. Xalqaro Standartlashtirish Tashkiloti (ISO) tomonidan nashr etilgan, dunyodagi eng mashhur sifat menejmenti sertifikati hisoblanadi.",
  },
  {
    id: 2,
    image_url: "/images/sertificate/usda.png",
    info: "USDA Organic sertifikati. Bu AQSh Qishloq xo’jaligi Departamentining sifat standartiga muvofiq organik mahsulotlarni olish to’g’risidagi sertifikati hisoblanadi.",
  },
  {
    id: 3,
    image_url: "/images/sertificate/halal.png",
    info: "Halol sertifikati. Mahsulot tarkibidagi iste’mol qiluvchi moddalar va ishlab chiqarish jarayonlari Islom va shariat ahkomlariga muvofiq ravishda amalga oshirilganini tasdiqlovchi xalqaro hujjat.",
  },
  {
    id: 4,
    image_url: "/images/sertificate/euro-leaf.png",
    info: "EU Organic sertifikati. BIO/Organik mahsulotlarning umumiy qabul qilingan belgisi, Yevropa Biosertifikati.",
  },
];

const Sertificates = () => {
  const [selectedImg, setSelectedImg] = useState("");
  const [selectedInfo, setSelectedInfo] = useState("");

  return (
    <Section>
      <div>
        <SectionTitle className="max-w-[576px] mb-8">
          <Translation text="label.sertificate" />
        </SectionTitle>
      </div>
      <div
        className={`w-full center-mode fixed top-0 left-0 right-0 z-[1000] bg-[#000]/80 transition-all duration-200 h-full ${
          selectedImg.length ? "visible opacity-1" : "invisible opacity-0"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedImg("");
        }}
      >
        <div className="absolute right-10 top-5">
          <X
            className="text-white cursor-pointer text-4xl"
            onClick={() => {
              setSelectedImg("");
            }}
          />
        </div>
        {selectedImg.length && (
          <div className="fixed w-full h-full top-0 left-0 z-20 p-4">
            <div
              className="flex items-center justify-center w-full h-full relative"
              onClick={() => {
                setSelectedImg("");
              }}
            >
              <div className="lg:w-1/2 w-full relative flex md:flex-row flex-col items-center justify-center bg-[#fff] md:p-8 p-3 rounded-lg gap-4">
                <Image
                  src={selectedImg}
                  alt="logo"
                  width={500}
                  height={500}
                  className="w-20"
                />
                <p className="text-base">{selectedInfo}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="sm:hidden">
        <div className="">
          <Swiper
            modules={[Pagination, Navigation]}
            navigation={{
              nextEl: ".sertificate-arrow-left",
              prevEl: ".sertificate-arrow-right",
            }}
            slidesPerView="auto"
            spaceBetween={8}
            pagination={{
              clickable: true,
              el: "#pagination-sertificate-wrapper",
              bulletClass: "sertificate-bullet",
              bulletActiveClass: "sertificate-bullet-active",
            }}
            className="h-full !items-end"
          >
            {data.map(({ id, image_url, info }, i) => (
              <SwiperSlide key={i} className="!h-[unset] !w-auto">
                <div
                  className="overlay-sertificate bg-gray-light rounded-[14px] w-[200px] p-[20px] group outline-none cursor-pointer relative"
                  key={id}
                  onClick={() => {
                    setSelectedImg(image_url);
                    setSelectedInfo(info);
                  }}
                >
                  <div className="sert-hover opacity-0 group-hover:visible group-hover:opacity-100 transition-all">
                    <Eye className="w-[40px] h-[40px] bg-[#00000048] p-1 rounded-md font-extraBold text-3xl z-20 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white" />
                  </div>
                  <div className="certifications-box flex items-center justify-center">
                    <Image
                      width={500}
                      height={500}
                      src={image_url}
                      loading="lazy"
                      alt="play icon"
                      className="w-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-between items-center mt-10">
            <div
              id="pagination-sertificate-wrapper"
              className="flex gap-[6px] w-auto"
            ></div>
            <div className="flex gap-[10px] sm:hidden justify-center">
              <Button
                size="icon"
                variant="warning"
                className="sertificate-arrow-right arrow disabled:bg-gray-light disabled:opacity-100 group"
              >
                <ChevronLeft className="text-white group-disabled:text-gray" />
              </Button>
              <Button
                size="icon"
                variant="warning"
                className="sertificate-arrow-left arrow disabled:bg-gray-light disabled:opacity-100 group"
              >
                <ChevronRight className="text-white group-disabled:text-gray" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Desktop ================= */}
      <div className="flex-wrap justify-evenly gap-4 sm:flex hidden">
        {data.map(({ id, image_url, info }, i) => (
          <div key={i} className="!h-[unset]">
            <div
              className="overlay-sertificate bg-gray-light rounded-[14px] w-[200px] p-[20px] group outline-none cursor-pointer relative"
              key={id}
              onClick={() => {
                setSelectedImg(image_url);
                setSelectedInfo(info);
              }}
            >
              <div className="sert-hover opacity-0 group-hover:visible group-hover:opacity-100 transition-all">
                <Eye className="w-[40px] h-[40px] bg-[#00000048] p-1 rounded-md font-extraBold text-3xl z-20 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white" />
              </div>
              <div className="certifications-box flex items-center justify-center">
                <Image
                  width={500}
                  height={500}
                  src={image_url}
                  loading="lazy"
                  alt="play icon"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Sertificates;
