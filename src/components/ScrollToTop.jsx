import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const sectionId = hash.replace("#", "");

      const scrollToSection = () => {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          return true;
        }

        return false;
      };

      if (scrollToSection()) {
        return;
      }

      const timeout = window.setTimeout(() => {
        scrollToSection();
      }, 300);

      return () => {
        window.clearTimeout(timeout);
      };
    }

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;