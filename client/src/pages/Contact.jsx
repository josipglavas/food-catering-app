import { useTranslation } from "react-i18next";
import Form from "./Form";
import { useEffect } from "react";
const Contact = () => {
  const { t } = useTranslation();
  const phone = "555-555-5555";
  const mail = "m.bluth@example.com";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-20 py-8 bg-neutral-200">
      <h1 className="text-7xl mt-8 mb-12">{t("Contact_Title")}</h1>
      <h2 className="text-3xl my-2">
        {t("Contact_CallUs")}
        <a className="text-blue-500" href={`tel:${phone}`}>
          {" "}
          +{phone}
        </a>
      </h2>
      <h2 className="text-3xl my-2">
        {t("Contact_EmailUs")}{" "}
        <a href={`mailto:${mail}`} className="text-blue-500">
          {" "}
          {mail}
        </a>
      </h2>
      <h2 className="text-3xl mt-12">{t("Contact_Form")}</h2>
      <div className="py-16 w-10/12">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
