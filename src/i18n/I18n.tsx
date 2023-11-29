import { useTranslation } from "react-i18next";

type I18nProps = {
  text: string;
};

export default function I18n(props: I18nProps) {
  const { text } = props;
  const { t } = useTranslation();
  return t(text);
}
