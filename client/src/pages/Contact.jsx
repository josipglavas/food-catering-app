import { useTranslation } from "react-i18next";
import Form from "./Form";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>{t("Contact")}</p>
      <Form />
    </>
  );
};

export default Contact;
