import "../styles/globals.css";
import { gsap, Power3 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Loader } from "../components";
import Script from "next/script";
gsap.registerPlugin(ScrollTrigger);

const animateX = () => {
  return gsap.utils.toArray(".scrollX").forEach((line) => {
    let number = line.getAttribute("data-scrollx");
    gsap.to(`.scrollX[data-scrollx="${number}"]`, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: `.scrollX[data-scrollx='${number}']`,
        once: true,
        start: "center bottom",
        end: "center center",
      },
    });
  });
};
const animateH = () => {
  return gsap.utils.toArray(".scrollLineH").forEach((line) => {
    let number = line.getAttribute("data-scrollh");
    gsap.to(`.scrollLineH[data-scrollh="${number}"]`, {
      width: "100%",
      scrollTrigger: {
        trigger: `.scrollLineH[data-scrollh='${number}']`,
        scrub: 1,
        start: "top bottom",
        end: "bottom center",
      },
    });
  });
};
const animateInfo = () => {
  return gsap.utils.toArray(".scrollInfo").forEach((line) => {
    let number = line.getAttribute("data-scrolli");
    gsap.to(`.scrollInfo[data-scrolli="${number}"]`, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: `.scrollInfo[data-scrolli='${number}']`,
        scrub: 1,
        start: "top bottom",
        end: "+=400",
      },
    });
  });
};
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    animateInfo();
    animateH();
    animateX();
  }, [router.asPath]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-M81NWHMCTJ"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-M81NWHMCTJ', {
    page_path: window.location.pathname,
    });
    `,
        }}
      />
      <Loader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
