import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

const SectionTitle = ({ className, children }: Props) => {
  return (
    <h1
      className={`md:text-heading2 sm:text-heading3 text-[32px] max-sm:leading-[32px] !font-times-new-roman ${className}`}
    >
      {children}
    </h1>
  );
};
export default SectionTitle;
