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
    <div className="bg-neutral-200 py-8">
      <div className="xl:px-20 px-8 pb-8 bg-neutral-200">
        <h1 className="xl:text-7xl text-2xl xl:mt-8 xl:mb-12 mb-6">
          {t("Contact_Title")}
        </h1>
        <h2 className="xl:text-3xl text-base my-2">
          {t("Contact_CallUs")}
          <a className="text-blue-500" href={`tel:${phone}`}>
            {" "}
            +{phone}
          </a>
        </h2>
        <h2 className="xl:text-3xl text-base my-2">
          {t("Contact_EmailUs")}{" "}
          <a href={`mailto:${mail}`} className="text-blue-500">
            {" "}
            {mail}
          </a>
        </h2>
        <h2 className="xl:text-3xl text-base xl:mt-12 xl:mt-8 mt-6">
          {t("Contact_Form_Pt1")}
          <a className="text-blue-500" href="#Form">
            {t("Contact_Form_Pt2")}
          </a>
          {t("Contact_Form_Pt3")}
        </h2>
      </div>
      <div
        className="xl:my-10 px-4 xl:px-20 my-2 xl:pt-6 pt-0 pb-6 xl:w-10/12 w-full"
        id="Form"
      >
        <Form />
      </div>
    </div>
  );
};

export default Contact;
