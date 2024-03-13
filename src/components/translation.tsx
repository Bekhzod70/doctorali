// ** Third Party Import
import { useTranslation } from "next-i18next";

interface Props {
  text: string;
}

const Translation = ({ text }: Props) => {
  const { t } = useTranslation();

  return <>{t(text)}</>;
};

export default Translation;
