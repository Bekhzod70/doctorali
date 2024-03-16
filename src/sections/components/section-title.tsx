import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

const SectionTitle = ({ className, children }: Props) => {
  return (
    <h1
      className={`md:text-heading2 sm:text-heading3 text-[36px] max-sm:leading-[36px] font-remark ${className}`}
    >
      {children}
    </h1>
  );
};
export default SectionTitle;
