import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const Loader = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [Quote, setQuote] = useState({});

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = () => setLoading(false);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <div className={`fixed h-screen transition-all duration-300 gap-12 w-full  flex-col items-center justify-center z-40  bg-gradient-to-bl from-dark-blue to-light-blue fade-in ${loading ? "flex pointer-events-auto " : "pointer-events-none hidden "}`}>
      <div className="loader">
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
      </div>
    </div>
  );
};

export default Loader;
