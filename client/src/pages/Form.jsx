import { useForm, FormProvider } from "react-hook-form";
import { GrMail } from "react-icons/gr";
import { BsFillCheckSquareFill, BsFillXSquareFill } from "react-icons/bs";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { VscLoading } from "react-icons/vsc";
import Input from "../components/Input";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const siteKey = import.meta.env.VITE_SITE_KEY;
  const recaptcha = useRef();
  const methods = useForm();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("Error");
  const [buttonClicked, setButtonClicked] = useState(false);

  const onSubmit = methods.handleSubmit((formData) => {
    setButtonClicked(true);

    verifyReCaptcha(formData);
  });

  const verifyReCaptcha = async (formData) => {
    const captchaValue = recaptcha.current.getValue();
    if (!captchaValue) {
      setErrorText("Please verify the reCAPTCHA!");
      setButtonClicked(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    } else {
      const res = await fetch(`${import.meta.env.VITE_API}/verify`, {
        method: "POST",
        body: JSON.stringify({ captchaValue }),
        headers: {
          "content-type": "application/json",
          "x-api-key": import.meta.env.VITE_API_KEY,
        },
      });
      const data = await res.json();
      if (data.success) {
        // make form submission
        handleSubmit(formData);
      } else {
        alert("reCAPTCHA validation failed!");
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
        throw new Error("Server error! Please try again.");
      }
    } catch (err) {
      console.log(err);
      setErrorText("Server error! Please try again.");
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
    if (recaptcha.current) {
      recaptcha.current.reset();
    }
    setButtonClicked(false);
  };

  const name_validation = {
    name: "name",
    label: "name",
    type: "text",
    id: "name",
    placeholder: "Write your name ...",
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
    label: "number",
    type: "number",
    id: "number",
    placeholder: "Write your number ...",
    validation: {
      required: {
        value: true,
        message: "required",
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
    placeholder: "Type email ...",
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

  const desc_validation = {
    name: "desc",
    label: "desc",
    type: "desc",
    id: "desc",
    multiline: true,
    placeholder: "Type message ...",
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
          <Input {...desc_validation} className="md:col-span-2" />
          <ReCAPTCHA ref={recaptcha} sitekey={siteKey} />
        </div>
        <div className="gap-3 mt-5">
          <button
            disabled={buttonClicked}
            onClick={onSubmit}
            className={`flex items-center gap-1 p-5 mb-4 font-semibold rounded-md ${
              buttonClicked
                ? "text-gray-500 bg-gray-300 cursor-not-allowed"
                : "text-white bg-blue-600 hover:bg-blue-800"
            }`}
          >
            {buttonClicked ? (
              <VscLoading className="mr-0.5 animate-spin" />
            ) : (
              <GrMail className="mr-0.5" />
            )}
            Send E-mail
          </button>
          <AnimatePresence mode="wait" initial={false}>
            {success && (
              <motion.p
                className="flex items-center gap-1 font-semibold text-green-500"
                {...framer_popup}
              >
                <BsFillCheckSquareFill /> E-mail has been sent successfully
              </motion.p>
            )}
            {error && (
              <motion.p
                className="flex items-center gap-1 font-semibold text-orange-600"
                {...framer_popup}
              >
                <BsFillXSquareFill /> {errorText}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </form>
    </FormProvider>
  );
};

const framer_popup = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

export default Form;
