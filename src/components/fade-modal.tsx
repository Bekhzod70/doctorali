import React, { SetStateAction, useEffect } from "react";
import { X } from "lucide-react";

interface Props {
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

const FadeModal = ({ children, open, setOpen }: Props) => {
  // useEffect(() => {
  //   const html = document.querySelector("html")!;
  //   if (open) {
  //     html.style.overflow = "hidden";
  //   } else {
  //     html.style.overflow = "auto";
  //   }
  // }, [open]);

  return (
    <section
      className={`${
        open ? "visible opacity-100" : "invisible opacity-0"
      } min-h-screen w-full duration-300 transition-all overflow-y-scroll bg-[#000]/50 z-[555] fixed top-0 left-0 bottom-0 right-0`}
      onClick={() => setOpen(false)}
    >
      <div className="tablet:fixed absolute right-8 z-30 top-5">
        <X
          className="text-3xl text-white cursor-pointer"
          onClick={() => setOpen(false)}
        />
      </div>
      <div
        className={`${
          open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        } duration-300 transition-all  h-full`}
      >
        {children}
      </div>
    </section>
  );
};

export default FadeModal;
