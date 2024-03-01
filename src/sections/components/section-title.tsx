import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

const SectionTitle = ({ className, children }: Props) => {
  return (
    <h1
      className={`sm:text-heading2 xs:text-heading3 text-[44px] max-xs:leading-[44px] font-remark ${className}`}
    >
      {children}
    </h1>
  );
};
export default SectionTitle;
