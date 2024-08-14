import { useForm, FormProvider } from "react-hook-form";
import { GrMail } from "react-icons/gr";
import { BsFillCheckSquareFill, BsFillXSquareFill } from "react-icons/bs";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { VscLoading } from "react-icons/vsc";
import Input from "../components/Input";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const siteKey = import.meta.env.VITE_SITE_KEY;
  const recaptcha = useRef();
  const methods = useForm();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState(
    "Greška Servera! Molimo pokušajte ponovno."
  );
  const [buttonClicked, setButtonClicked] = useState(false);

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const onSubmit = methods.handleSubmit((formData) => {
    setButtonClicked(true);

    verifyReCaptcha(formData);
  });

  const verifyReCaptcha = async (formData) => {
    const captchaValue = recaptcha.current.getValue();
    if (!captchaValue) {
      setErrorText(t("Form_CaptchaError"));
      setButtonClicked(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    } else {
      try {
        const res = await fetch(`${import.meta.env.VITE_API}/verify`, {
          method: "POST",
          body: JSON.stringify({ captchaValue }),
          headers: {
            "content-type": "application/json",
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();

        if (data.success) {
          // Make form submission
          handleSubmit(formData);
        } else {
          setErrorText(t("Form_CaptchaValidationError"));
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 5000);
        }
      } catch (error) {
        setErrorText(t("Form_ServerError"));
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
      }
    }
  };

  const handleSubmit = async (formData) => {
    console.log(formData);
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/api/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_API_KEY,
        },
        body: JSON.stringify({
          to: formData.email,
          subject: formData.name,
          message: formData.desc,
          event: formData.event,
          number: formData.number,
        }),
      });

      if (response.ok) {
        methods.reset();
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        throw new Error(`Server error! Status: ${response.status}`);
      }
    } catch (err) {
      setErrorText(t("Form_ServerError"));
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    } finally {
      if (recaptcha.current) {
        recaptcha.current.reset();
      }
      setButtonClicked(false);
    }
  };

  const name_validation = {
    name: "name",
    label:
      currentLanguage === "en" || currentLanguage === "en-US" ? "name" : "ime",
    type: "text",
    id: "name",
    placeholder:
      currentLanguage === "en" || currentLanguage === "en-US"
        ? "Write your name ..."
        : "Unesi svoje ime ...",
    validation: {
      required: {
        value: true,
        message: t("Form_Required"),
      },
      maxLength: {
        value: 30,
        message:
          currentLanguage === "en" || currentLanguage === "en-US"
            ? "30 characters max"
            : "Max 30 slova",
      },
    },
  };

  const num_validation = {
    name: "number",
    label:
      currentLanguage === "en" || currentLanguage === "en-US"
        ? "phone number"
        : "broj mobitela",
    type: "number",
    id: "number",
    placeholder:
      currentLanguage === "en" || currentLanguage === "en-US"
        ? "Write your number ..."
        : "Unesi broj mobitela ...",
    validation: {
      required: {
        value: true,
        message:
          currentLanguage === "en" || currentLanguage === "en-US"
            ? "Please enter a valid phone"
            : "Molimo unesite ispravan broj",
      },
      maxLength: {
        value: 15,
        message:
          currentLanguage === "en" || currentLanguage === "en-US"
            ? "15 characters max"
            : "Max 15 slova",
      },
      minLength: {
        value: 6,
        message:
          currentLanguage === "en" || currentLanguage === "en-US"
            ? "6 characters min"
            : "Min 6 slova",
      },
      pattern: {
        value: /^[0-9]+$/,
        message:
          currentLanguage === "en" || currentLanguage === "en-US"
            ? "Please enter a valid phone"
            : "Molimo unesite ispravan broj",
      },
    },
  };

  const email_validation = {
    name: "email",
    label: "email",
    type: "email",
    id: "email",
    placeholder:
      currentLanguage === "en" || currentLanguage === "en-US"
        ? "Type email ..."
        : "Unesi svoj email ...",
    validation: {
      required: {
        value: true,
        message: t("Form_Required"),
      },
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message:
          currentLanguage === "en" || currentLanguage === "en-US"
            ? "Please enter a valid email address"
            : "Molimo unesite ispravan e-mail",
      },
    },
  };

  const event_validation = {
    name: "event",
    label:
      currentLanguage === "en" || currentLanguage === "en-US"
        ? "event"
        : "dogadaj",
    type: "text",
    id: "event",
    placeholder:
      currentLanguage === "en" || currentLanguage === "en-US"
        ? "Event type ..."
        : "Odaberi vrstu događaja",
    validation: {
      required: {
        value: true,
        message: t("Form_Required"),
      },
    },
    options:
      currentLanguage === "en" || currentLanguage === "en-US"
        ? ["Wedding", "Birthday", "Graduation", "Other"]
        : ["Vjenčanje", "Rođendan", "Krštenje", "Karmine", "Ostalo"],
  };

  const desc_validation = {
    name: "desc",
    label:
      currentLanguage === "en" || currentLanguage === "en-US"
        ? "message"
        : "poruka",
    type: "desc",
    id: "desc",
    multiline: true,
    placeholder:
      currentLanguage === "en" || currentLanguage === "en-US"
        ? "Type message ..."
        : "Napisi poruku ...",
    validation: {
      required: {
        value: true,
        message: t("Form_Required"),
      },
      minLength: {
        value: 3,
        message:
          currentLanguage === "en" || currentLanguage === "en-US"
            ? "min 3 characters"
            : "min 3 slova",
      },
    },
  };

  return (
    <div className="bg-white xl:px-12 px-6 py-6 xl:py-8 rounded-3xl border-2 border-black">
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          noValidate
          autoComplete="off"
          className="container"
        >
          <div className="grid xl:gap-5 gap-3 md:grid-cols-2">
            <Input {...name_validation} />
            <Input {...num_validation} />
            <Input {...email_validation} />
            <Input {...event_validation} />
            <Input {...desc_validation} className="md:col-span-2" />
            <ReCAPTCHA
              ref={recaptcha}
              sitekey={siteKey}
              className="scale-90 xl:scale-100 xl:mx-0 -mx-4"
            />
          </div>
          <div className="xl:gap-3 gap-2 mt-5 flex ">
            <button
              disabled={buttonClicked}
              onClick={onSubmit}
              className={`flex items-center gap-1 xl:p-5 p-3 xl:text-base text-sm font-semibold rounded-md ${
                buttonClicked
                  ? "text-gray-500 bg-gray-300 cursor-not-allowed"
                  : "text-white bg-blue-600 hover:bg-blue-800"
              }`}
            >
              {buttonClicked ? (
                <VscLoading className="mr-1 mt-0.5 animate-spin" />
              ) : (
                <GrMail className="mr-1 mt-0.5" />
              )}
              {t("Form_Btn_Submit")}
            </button>
            <AnimatePresence mode="wait" initial={false}>
              {success && (
                <motion.p
                  className="flex xl:text-base text-sm items-center gap-2 font-semibold text-green-500 xl:mr-0 -mr-8"
                  {...framer_popup}
                >
                  <BsFillCheckSquareFill className="xl:mt-0.5 text-xl xl:text-base" />{" "}
                  {t("Form_Success")}
                </motion.p>
              )}
              {error && (
                <motion.p
                  className="flex xl:text-base text-sm items-center gap-2 font-semibold xl:mr-0 -mr-8 text-orange-600"
                  {...framer_popup}
                >
                  <BsFillXSquareFill className="xl:mt-0.5 text-xl xl:text-base" />{" "}
                  {errorText}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

const framer_popup = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

export default Form;
