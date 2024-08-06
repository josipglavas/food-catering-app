import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

import LogoFooter from "../assets/logo-footer.png";
import { useTranslation } from "react-i18next";

export function FooterComponent() {
  const { t } = useTranslation();

  return (
    <Footer container className="pt-6 bg-slate-950">
      <div className="w-full px-24">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 ">
          <div>
            <img src={LogoFooter} className="w-36 mt-3" alt="Flowbite Logo" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title={t("Footer_About")} />
              <FooterLinkGroup col>
                <FooterLink href="#">
                  <p className="text-slate-300">Flowbite</p>
                </FooterLink>
                <FooterLink href="#">
                  <p className="text-slate-300">Tailwind CSS</p>
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title={t("Footer_FollowUs")} />
              <FooterLinkGroup col>
                <FooterLink href="#">
                  <p className="text-slate-300">Github</p>
                </FooterLink>
                <FooterLink href="#">
                  <p className="text-slate-300">Discord</p>
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title={t("Footer_Legal")} />
              <FooterLinkGroup col>
                <FooterLink href="#">
                  <p className="text-slate-300">Privacy Policy</p>
                </FooterLink>
                <FooterLink href="#">
                  <p className="text-slate-300">Terms &amp; Conditions</p>
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="/" by="OuiChef™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
            <FooterIcon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
