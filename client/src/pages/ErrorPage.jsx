import { useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="h-screen bg-neutral-200">
      <Navbar />
      <div id="error-page" className="xl:px-20 px-8 py-8">
        <h1 className="text-7xl pb-10">Oops!</h1>
        <p className="text-2xl">{t("Error_Paragraph")}</p>
        <Button
          Class={"uppercase mt-10"}
          Text={t("Error_Btn_Return")}
          onClick={() => navigate("/")}
        />
        {/* <p>
          <i>{error.statusText || error.message}</i>
        </p> */}
      </div>
    </div>
  );
};

export default ErrorPage;
