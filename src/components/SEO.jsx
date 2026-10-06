import { useEffect } from "react";

const SITE_URL = "https://www.flybytoursandtravels.in";
const DEFAULT_IMAGE = `${SITE_URL}/assets/og-image.jpg`;

const SEO = ({
  title = "FlyBy Tours & Travels | Travel, Visa and Tour Services",
  description = "FlyBy Tours & Travels in Mananthavady, Wayanad offers flight bookings, visa services, tour packages, hotel bookings, taxi services and study abroad guidance.",
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  noIndex = false,
}) => {
  useEffect(() => {
    const fullTitle = title.includes("FlyBy")
      ? title
      : `${title} | FlyBy Tours & Travels`;

    const canonicalUrl = `${SITE_URL}${path}`;

    document.title = fullTitle;

    const setMeta = (name, content) => {
      if (!content) return;

      let element = document.head.querySelector(`meta[name="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    const setProperty = (property, content) => {
      if (!content) return;

      let element = document.head.querySelector(
        `meta[property="${property}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta(
      "robots",
      noIndex ? "noindex, nofollow" : "index, follow"
    );

    setProperty("og:title", fullTitle);
    setProperty("og:description", description);
    setProperty("og:url", canonicalUrl);
    setProperty("og:type", type);
    setProperty("og:image", image);
    setProperty("og:site_name", "FlyBy Tours & Travels");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    let canonical = document.head.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);

    return () => {
      document.title =
        "FlyBy Tours & Travels | Travel, Visa and Tour Services";
    };
  }, [title, description, path, image, type, noIndex]);

  return null;
};

export default SEO;