import { useFormContext } from "react-hook-form";
import { isFormInvalid } from "../utils/isFormInvalid.js";
import { findInputError } from "../utils/findInputError.js";
import { AnimatePresence, motion } from "framer-motion";
import { MdError } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Input = ({
  name,
  label,
  type,
  id,
  placeholder,
  validation,
  multiline,
  options,
  className,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { t } = useTranslation();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  const input_tailwind =
    "xl:p-5 p-3 font-medium rounded-lg w-full border border-slate-300 placeholder:opacity-60";

  return (
    <div className={`flex flex-col w-full xl:gap-2 gap-1 ${className}`}>
      <div className="flex justify-between">
        <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputErrors.error.message}
              key={inputErrors.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      {multiline ? (
        <textarea
          id={id}
          type={type}
          className={`${input_tailwind} min-h-[8rem] max-h-[25rem] resize-y`}
          placeholder={placeholder}
          {...register(name, validation)}
        ></textarea>
      ) : options ? (
        <select
          id={id}
          className={input_tailwind}
          {...register(name, validation)}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          className={input_tailwind}
          placeholder={placeholder}
          {...register(name, validation)}
        />
      )}
    </div>
  );
};

const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

export default Input;
