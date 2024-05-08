import { PropsWithChildren } from "react";

const Chip = ({ children }: PropsWithChildren) => {
  return (
    <span className="inline-block py-[10px] px-5 rounded-full border border-white text-white text-base mb-5">
      {children}
    </span>
  );
};
export default Chip;
