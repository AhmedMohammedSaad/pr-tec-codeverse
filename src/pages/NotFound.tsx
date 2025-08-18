import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4" aria-labelledby="not-found-title" role="main">
      <section className="text-center max-w-xl">
        <p className="text-6xl font-extrabold text-gray-900" aria-hidden>
          {t("notFound.error")}
        </p>
        <h1 id="not-found-title" className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
          {t("notFound.title")}
        </h1>
        <p className="mt-2 text-base text-gray-600">
          {t("notFound.subtitle")}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          {t("notFound.description")}
        </p>
        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          <Link
            to="/"
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label={t("notFound.actions.home")}
          >
            {t("notFound.actions.home")}
          </Link>
          <Link
            to="/courses"
            className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label={t("notFound.actions.courses")}
          >
            {t("notFound.actions.courses")}
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label={t("notFound.actions.contact")}
          >
            {t("notFound.actions.contact")}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
