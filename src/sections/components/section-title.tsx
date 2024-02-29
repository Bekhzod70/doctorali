import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

const SectionTitle = ({ className, children }: Props) => {
  return (
    <h1 className={`text-heading1 font-remark ${className}`}>{children}</h1>
  );
};
export default SectionTitle;
