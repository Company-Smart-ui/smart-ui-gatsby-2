import React, { useContext, useEffect } from "react";
import * as style from "./header.module.scss";
import { Burger } from "./burger/burger";
import { useOpen } from "../../../hooks/useOpen";
import { NavItem } from "./navItem/navItem";
import { StaticImage } from "gatsby-plugin-image";
import { MESSENGERS } from "../../../global/data";

import { Messenger } from "../../../global/messengers/messengers.js";

import { I18nextContext, Link } from "gatsby-plugin-react-i18next";
import { LangSwitch } from "../langSwitch/langSwitch";
import { useNoScroll } from "../../../hooks/useNoScroll";
import { useTranslation } from "react-i18next";

export const NAVIGATION = {
  home: { text: "Home", link: "/" },
  team: { text: "Our team", link: "/team/" },
  portfolio: { text: "Portfolio", link: "/portfolio/" },
};
export const Header = ({ path }) => {
  const { language: currentLng } = useContext(I18nextContext);
  const {
    isOpen: scrolled,
    onOpen: onScrolled,
    onClose: offScrolled,
  } = useOpen();
  const { t } = useTranslation();
  const dataHeader = t("Header", { returnObjects: true });
  const translatedNavigation = {};
  try {
    const dataNav =
      Array.isArray(dataHeader) &&
      dataHeader.filter((d) => d?.__component === "header.header-menu")[0];
    Object.entries(NAVIGATION).forEach((nav) => {
      const field = nav[0];
      translatedNavigation[field] = { text: dataNav[field], link: nav[1].link };
    });
  } catch (e) {
    console.log(e);
  }

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 1) {
        onScrolled();
      } else {
        offScrolled();
      }
    };
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [onScrolled, offScrolled]);
  const { isOpen, onToggle, onClose } = useOpen();
  useNoScroll(isOpen);
  const headerClass =
    path === "team" || path.startsWith("team") ? style.headerDark : "" ||
    path === "project" || path.startsWith("project") ? style.headerProject : "";

  //   console.log(path);
  return (
    <header
      className={`${scrolled ? style.scrolled + " scrolled " : " "} ${
        style.header
      } ${isOpen ? style.open : " "} ${headerClass}`}
    >
      <Burger {...{ isOpen, onToggle }} />
      <div className={style.logo}>
        <Link to={NAVIGATION.home.link} language={currentLng}>
          <svg width="180"  viewBox="0 0 126 24" fill="none">
            <path d="M0.362711 20.3972C0.15365 20.1045 0.0595729 19.7282 0.080479 19.2683C0.101385 18.8083 0.373164 18.4111 0.895816 18.0766C1.23031 17.8676 1.58572 17.7839 1.96203 17.8257C2.33834 17.8467 2.70419 18.0348 3.05959 18.3902C3.66587 18.9965 4.30351 19.4669 4.9725 19.8014C5.6415 20.1359 6.47774 20.3031 7.48123 20.3031C7.79482 20.2822 8.13977 20.2404 8.51608 20.1777C8.89239 20.0941 9.21643 19.9268 9.48821 19.6759C9.7809 19.4042 9.92724 18.9965 9.92724 18.4529C9.92724 17.993 9.77045 17.6271 9.45685 17.3554C9.14326 17.0836 8.72514 16.8536 8.20249 16.6655C7.70074 16.4773 7.13628 16.2996 6.5091 16.1324C5.86101 15.9442 5.19201 15.7351 4.50211 15.5052C3.83312 15.2752 3.21639 14.9825 2.65193 14.6271C2.08746 14.2508 1.62753 13.7595 1.27213 13.1532C0.916722 12.547 0.739021 11.7839 0.739021 10.864C0.739021 9.81872 1.03171 8.93021 1.61708 8.1985C2.20245 7.46678 2.95506 6.90232 3.87493 6.50511C4.81571 6.10789 5.79829 5.90928 6.82269 5.90928C7.47078 5.90928 8.15022 5.99291 8.86103 6.16016C9.57184 6.3065 10.2513 6.55737 10.8994 6.91277C11.5475 7.24727 12.091 7.69675 12.53 8.26122C12.76 8.57481 12.8959 8.95112 12.9377 9.39014C12.9795 9.82917 12.7809 10.2264 12.3419 10.5818C12.0283 10.8327 11.6624 10.9476 11.2443 10.9267C10.8262 10.8849 10.4813 10.7386 10.2095 10.4877C9.85407 10.0278 9.37323 9.66192 8.76695 9.39014C8.18158 9.11836 7.50214 8.98248 6.72861 8.98248C6.41502 8.98248 6.07007 9.02429 5.69376 9.10791C5.33836 9.17063 5.02477 9.32743 4.75299 9.5783C4.48121 9.80827 4.34532 10.1846 4.34532 10.7072C4.34532 11.1881 4.50211 11.5748 4.81571 11.8675C5.1293 12.1393 5.54742 12.3693 6.07007 12.5574C6.61363 12.7247 7.18855 12.8919 7.79482 13.0592C8.422 13.2264 9.05964 13.425 9.70773 13.655C10.3558 13.885 10.9516 14.1881 11.4952 14.5644C12.0388 14.9407 12.4778 15.432 12.8123 16.0383C13.1468 16.6236 13.314 17.3763 13.314 18.2961C13.314 19.3623 13.0004 20.2718 12.3733 21.0244C11.7461 21.777 10.9621 22.3519 10.0213 22.7491C9.08055 23.1254 8.11887 23.3136 7.13628 23.3136C5.90282 23.3136 4.66936 23.1045 3.4359 22.6864C2.20245 22.2474 1.17805 21.4843 0.362711 20.3972ZM25.2751 5.90928C26.9476 5.90928 28.181 6.31695 28.9755 7.13229C29.7699 7.92672 30.2925 8.96157 30.5434 10.2368L30.0103 9.95461L30.2612 9.45286C30.512 8.97202 30.8988 8.45982 31.4215 7.91627C31.9441 7.3518 32.5713 6.88141 33.303 6.50511C34.0556 6.10789 34.8919 5.90928 35.8117 5.90928C37.317 5.90928 38.4564 6.23333 39.2299 6.88142C40.0243 7.5295 40.5679 8.39711 40.8606 9.48422C41.1532 10.5504 41.2996 11.7421 41.2996 13.0592V21.0871C41.2996 21.6307 41.1219 22.0906 40.7665 22.4669C40.4111 22.8223 39.9616 23 39.418 23C38.8745 23 38.425 22.8223 38.0696 22.4669C37.7142 22.0906 37.5365 21.6307 37.5365 21.0871V13.0592C37.5365 12.3693 37.4529 11.7525 37.2856 11.209C37.1184 10.6445 36.8152 10.195 36.3762 9.86053C35.9372 9.52603 35.31 9.35878 34.4947 9.35878C33.7002 9.35878 33.0208 9.52603 32.4563 9.86053C31.8919 10.195 31.4633 10.6445 31.1706 11.209C30.8988 11.7525 30.7629 12.3693 30.7629 13.0592V21.0871C30.7629 21.6307 30.5852 22.0906 30.2298 22.4669C29.8744 22.8223 29.4249 23 28.8814 23C28.3378 23 27.8883 22.8223 27.5329 22.4669C27.1775 22.0906 26.9998 21.6307 26.9998 21.0871V13.0592C26.9998 12.3693 26.9162 11.7525 26.749 11.209C26.5817 10.6445 26.2786 10.195 25.8395 9.86053C25.4005 9.52603 24.7733 9.35878 23.958 9.35878C23.1636 9.35878 22.4841 9.52603 21.9197 9.86053C21.3552 10.195 20.9266 10.6445 20.6339 11.209C20.3621 11.7525 20.2263 12.3693 20.2263 13.0592V21.0871C20.2263 21.6307 20.0486 22.0906 19.6932 22.4669C19.3378 22.8223 18.8883 23 18.3447 23C17.8012 23 17.3517 22.8223 16.9963 22.4669C16.6409 22.0906 16.4632 21.6307 16.4632 21.0871V8.13578C16.4632 7.59222 16.6409 7.14274 16.9963 6.78734C17.3517 6.41103 17.8012 6.22287 18.3447 6.22287C18.8883 6.22287 19.3378 6.41103 19.6932 6.78734C20.0486 7.14274 20.2263 7.59222 20.2263 8.13578V9.48422L19.7559 9.39014C19.944 9.03474 20.2054 8.65843 20.5399 8.26122C20.8743 7.84309 21.282 7.45633 21.7629 7.10093C22.2437 6.74552 22.7768 6.46329 23.3622 6.25423C23.9475 6.02427 24.5852 5.90928 25.2751 5.90928ZM59.1076 5.90928C59.6512 5.90928 60.1007 6.08698 60.4561 6.44239C60.8115 6.79779 60.9892 7.25772 60.9892 7.82219V21.0871C60.9892 21.6307 60.8115 22.0906 60.4561 22.4669C60.1007 22.8223 59.6512 23 59.1076 23C58.5641 23 58.1146 22.8223 57.7592 22.4669C57.4038 22.0906 57.2261 21.6307 57.2261 21.0871V19.5505L57.916 19.8327C57.916 20.1045 57.7697 20.439 57.477 20.8362C57.1843 21.2125 56.7871 21.5888 56.2853 21.9651C55.7836 22.3415 55.1878 22.6655 54.4979 22.9373C53.8289 23.1882 53.0971 23.3136 52.3027 23.3136C50.8602 23.3136 49.5536 22.9477 48.3828 22.216C47.2121 21.4634 46.2818 20.439 45.5919 19.1428C44.9229 17.8257 44.5884 16.3205 44.5884 14.6271C44.5884 12.9128 44.9229 11.4076 45.5919 10.1114C46.2818 8.79432 47.2016 7.76992 48.3515 7.03821C49.5013 6.28559 50.7766 5.90928 52.1773 5.90928C53.0762 5.90928 53.902 6.04517 54.6546 6.31695C55.4073 6.58873 56.0554 6.93368 56.5989 7.3518C57.1634 7.76992 57.592 8.1985 57.8846 8.63752C58.1982 9.05565 58.355 9.41105 58.355 9.70374L57.2261 10.1114V7.82219C57.2261 7.27863 57.4038 6.82915 57.7592 6.47375C58.1146 6.09744 58.5641 5.90928 59.1076 5.90928ZM52.7731 19.8641C53.693 19.8641 54.4979 19.6341 55.1878 19.1742C55.8777 18.7143 56.4108 18.0871 56.7871 17.2926C57.1843 16.4982 57.3829 15.6097 57.3829 14.6271C57.3829 13.6236 57.1843 12.7247 56.7871 11.9302C56.4108 11.1358 55.8777 10.5086 55.1878 10.0487C54.4979 9.58875 53.693 9.35878 52.7731 9.35878C51.8741 9.35878 51.0797 9.58875 50.3898 10.0487C49.6999 10.5086 49.1563 11.1358 48.7591 11.9302C48.3828 12.7247 48.1947 13.6236 48.1947 14.6271C48.1947 15.6097 48.3828 16.4982 48.7591 17.2926C49.1563 18.0871 49.6999 18.7143 50.3898 19.1742C51.0797 19.6341 51.8741 19.8641 52.7731 19.8641ZM66.9452 23C66.4017 23 65.9522 22.8223 65.5968 22.4669C65.2414 22.0906 65.0637 21.6307 65.0637 21.0871V8.13578C65.0637 7.59222 65.2414 7.14274 65.5968 6.78734C65.9522 6.41103 66.4017 6.22287 66.9452 6.22287C67.4888 6.22287 67.9383 6.41103 68.2937 6.78734C68.6491 7.14274 68.8268 7.59222 68.8268 8.13578V11.0835L68.6073 8.98248C68.8372 8.48073 69.1299 8.0417 69.4853 7.66539C69.8616 7.26818 70.2797 6.94413 70.7397 6.69326C71.1996 6.42148 71.6909 6.22287 72.2136 6.09744C72.7362 5.972 73.2589 5.90928 73.7815 5.90928C74.4087 5.90928 74.9313 6.08698 75.3495 6.44239C75.7885 6.79779 76.008 7.21591 76.008 7.69675C76.008 8.38665 75.8303 8.8884 75.4749 9.20199C75.1195 9.49467 74.7327 9.64102 74.3146 9.64102C73.9174 9.64102 73.5515 9.56785 73.217 9.4215C72.9035 9.27516 72.5376 9.20199 72.1195 9.20199C71.7432 9.20199 71.3564 9.29607 70.9592 9.48422C70.5829 9.65147 70.2275 9.92325 69.893 10.2996C69.5794 10.6759 69.3181 11.1463 69.109 11.7107C68.9208 12.2543 68.8268 12.9024 68.8268 13.655V21.0871C68.8268 21.6307 68.6491 22.0906 68.2937 22.4669C67.9383 22.8223 67.4888 23 66.9452 23ZM78.8489 6.53646H86.2811C86.7828 6.53646 87.2009 6.70371 87.5354 7.03821C87.8699 7.37271 88.0372 7.79083 88.0372 8.29258C88.0372 8.77342 87.8699 9.18108 87.5354 9.51558C87.2009 9.82917 86.7828 9.98597 86.2811 9.98597H78.8489C78.3472 9.98597 77.9291 9.81872 77.5946 9.48422C77.2601 9.14972 77.0928 8.7316 77.0928 8.22986C77.0928 7.74902 77.2601 7.3518 77.5946 7.03821C77.9291 6.70371 78.3472 6.53646 78.8489 6.53646ZM82.2044 2.61657C82.7479 2.61657 83.187 2.80473 83.5214 3.18104C83.8769 3.53644 84.0546 3.98592 84.0546 4.52948V18.4843C84.0546 18.777 84.1068 19.0174 84.2114 19.2055C84.3368 19.3937 84.4936 19.5296 84.6817 19.6132C84.8908 19.6968 85.1103 19.7387 85.3403 19.7387C85.5912 19.7387 85.8211 19.6968 86.0302 19.6132C86.2392 19.5087 86.4797 19.4564 86.7514 19.4564C87.0441 19.4564 87.3054 19.5923 87.5354 19.8641C87.7863 20.1359 87.9117 20.5122 87.9117 20.993C87.9117 21.5784 87.5877 22.0592 86.9396 22.4355C86.3124 22.8118 85.633 23 84.9013 23C84.4622 23 83.9709 22.9686 83.4274 22.9059C82.9047 22.8223 82.403 22.6446 81.9221 22.3728C81.4622 22.0801 81.0754 21.6411 80.7618 21.0557C80.4483 20.4704 80.2915 19.6655 80.2915 18.6411V4.52948C80.2915 3.98592 80.4692 3.53644 80.8246 3.18104C81.2009 2.80473 81.6608 2.61657 82.2044 2.61657ZM92.9348 15.2543C92.3913 15.2543 91.9313 15.0766 91.555 14.7212C91.1996 14.3658 91.0219 13.9163 91.0219 13.3728C91.0219 12.8292 91.1996 12.3902 91.555 12.0557C91.9313 11.7003 92.3913 11.5226 92.9348 11.5226H98.3913C98.9349 11.5226 99.3843 11.7107 99.7397 12.087C100.116 12.4424 100.304 12.8919 100.304 13.4355C100.304 13.9581 100.116 14.3971 99.7397 14.7526C99.3843 15.0871 98.9349 15.2543 98.3913 15.2543H92.9348ZM116.375 6.22287C116.919 6.22287 117.368 6.41103 117.724 6.78734C118.079 7.14274 118.257 7.59222 118.257 8.13578V16.101C118.257 18.317 117.64 20.0731 116.407 21.3693C115.173 22.6655 113.396 23.3136 111.076 23.3136C108.755 23.3136 106.978 22.6655 105.745 21.3693C104.532 20.0731 103.926 18.317 103.926 16.101V8.13578C103.926 7.59222 104.103 7.14274 104.459 6.78734C104.814 6.41103 105.264 6.22287 105.807 6.22287C106.351 6.22287 106.8 6.41103 107.156 6.78734C107.511 7.14274 107.689 7.59222 107.689 8.13578V16.101C107.689 17.3763 107.971 18.3275 108.535 18.9547C109.1 19.561 109.947 19.8641 111.076 19.8641C112.225 19.8641 113.083 19.561 113.647 18.9547C114.211 18.3275 114.494 17.3763 114.494 16.101V8.13578C114.494 7.59222 114.671 7.14274 115.027 6.78734C115.382 6.41103 115.832 6.22287 116.375 6.22287ZM125.874 21.0871C125.874 21.6307 125.697 22.0906 125.341 22.4669C124.986 22.8223 124.536 23 123.993 23C123.449 23 123 22.8223 122.644 22.4669C122.289 22.0906 122.111 21.6307 122.111 21.0871V8.13578C122.111 7.59222 122.289 7.14274 122.644 6.78734C123 6.41103 123.449 6.22287 123.993 6.22287C124.536 6.22287 124.986 6.41103 125.341 6.78734C125.697 7.14274 125.874 7.59222 125.874 8.13578V21.0871ZM123.961 4.18453C123.251 4.18453 122.749 4.06955 122.456 3.83958C122.164 3.60961 122.017 3.20195 122.017 2.61657V2.02075C122.017 1.41448 122.174 1.00681 122.488 0.797747C122.822 0.56778 123.324 0.452796 123.993 0.452796C124.725 0.452796 125.237 0.56778 125.529 0.797747C125.822 1.02771 125.968 1.43538 125.968 2.02075V2.61657C125.968 3.22285 125.812 3.64097 125.498 3.87094C125.184 4.08 124.672 4.18453 123.961 4.18453Z" fill="url(#paint0_linear_207_2660)"/>
            <defs>
              <linearGradient id="paint0_linear_207_2660" x1="48.6913" y1="-1" x2="58.8212" y2="26.7428" gradientUnits="userSpaceOnUse">
                <stop stopColor="#28B674"/>
                <stop offset="1" stopColor="#8CC641"/>
              </linearGradient>
            </defs>
          </svg>
        </Link>
      </div>

      <div className={style.menu}>
        <nav className={"nav"}>
          <ul className={"navList"}>
            {Object.entries(translatedNavigation).map((item, i) => {
              const data = item[1];
              return (
                <NavItem
                  {...data}
                  currentLng={currentLng}
                  onClose={onClose}
                  active={path === data.link.replace(/\//g, "")}
                  key={i}
                  id={i}
                />
              );
            })}
          </ul>
          <LangSwitch delay={(Object.entries(NAVIGATION).length + 1) / 5} />
          <Messenger data={MESSENGERS} />
        </nav>

        <StaticImage
          className={"menuImg  "}
          objectFit={"contain"}
          width={500}
          placeholder={"tracedSVG"}
          src={"./menuImg.jpg"}
          alt={""}
        />
      </div>
    </header>
  );
};
