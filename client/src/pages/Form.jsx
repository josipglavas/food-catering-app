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
  const [errorText, setErrorText] = useState("Error");
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
      } finally {
        setButtonClicked(false);
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
        message: "required",
      },
      maxLength: {
        value: 30,
        message: "30 characters max",
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
        message: "Please enter a valid phone",
      },
      maxLength: {
        value: 15,
        message: "15 characters max",
      },
      minLength: {
        value: 6,
        message: "min 6 characters",
      },
      pattern: {
        value: /^[0-9]+$/,
        message: "Please enter a valid phone",
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
        message: "required",
      },
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email address",
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
        message: "required",
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
        message: "required",
      },
      minLength: {
        value: 6,
        message: "min 6 characters",
      },
    },
  };

  return (
    <div className="bg-white px-12 py-8 rounded-3xl border-2 border-black">
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          noValidate
          autoComplete="off"
          className="container"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Input {...name_validation} />
            <Input {...num_validation} />
            <Input {...email_validation} />
            <Input {...event_validation} />
            <Input {...desc_validation} className="md:col-span-2" />
            <ReCAPTCHA ref={recaptcha} sitekey={siteKey} />
          </div>
          <div className="gap-3 mt-5 flex">
            <button
              disabled={buttonClicked}
              onClick={onSubmit}
              className={`flex items-center gap-1 p-5 font-semibold rounded-md ${
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
                  className="flex items-center gap-1 font-semibold text-green-500"
                  {...framer_popup}
                >
                  <BsFillCheckSquareFill /> {t("Form_Success")}
                </motion.p>
              )}
              {error && (
                <motion.p
                  className="flex items-center gap-1 font-semibold text-orange-600"
                  {...framer_popup}
                >
                  <BsFillXSquareFill className="mt-0.5" /> {errorText}
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
