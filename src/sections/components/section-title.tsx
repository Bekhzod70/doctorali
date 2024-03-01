import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

const SectionTitle = ({ className, children }: Props) => {
  return (
    <h1 className={`sm:text-heading2 text-heading3 font-remark ${className}`}>
      {children}
    </h1>
  );
};
export default SectionTitle;
