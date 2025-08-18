import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star } from "lucide-react";

// Map only image sources by slug; content comes from i18n translations
const imageMap = {
  flutter: "/images/flutter-course.svg",
  frontend: "/images/frontend-course.svg",
  python: "/images/python-course.svg",
  csharp: "/images/csharp-course.svg",
  basics: "https://miro.medium.com/v2/resize:fit:1400/1*ImTT0nd7BZUPe3S8XS_juA.png",
  kids: "https://assets.skyfilabs.com/playto/img/best-programming-languages-for-kids.webp",
} as const;

// Optional rating map if we want to display rating stars
const ratingMap: Partial<Record<keyof typeof imageMap, number>> = {
  flutter: 4.5,
  frontend: 4.0,
  python: 4.9,
  csharp: 4.9,
  basics: 4.6,
  kids: 5.0,
};

const isValidCourseKey = (key: string): key is keyof typeof imageMap => {
  return key in imageMap;
};

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const { t, i18n } = useTranslation();

  const key = (courseId ?? "").toString();
  const valid = isValidCourseKey(key);

  // Validate both known slug and existence of translation resources
  const hasTranslations = valid && i18n.exists(`courseDetailsInfo.${key}.title`);

  if (!valid || !hasTranslations) {
    return (
      <section className="py-20 px-4 max-w-3xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">{t("courseDetails.notFound.title")}</h1>
        <p className="text-muted-foreground mb-6">{t("courseDetails.notFound.description")}</p>
        <Button asChild>
          <Link to="/">{t("courseDetails.notFound.backButton")}</Link>
        </Button>
      </section>
    );
  }

  // Read content from translations
  const title = t(`courseDetailsInfo.${key}.title`);
  const description = t(`courseDetailsInfo.${key}.description`);
  const level = t(`courseDetailsInfo.${key}.level`);
  const duration = t(`courseDetailsInfo.${key}.duration`);
  const students = t(`courseDetailsInfo.${key}.students`);
  const currency = t("courseDetailsInfo.currency");
  const originalPrice = t(`courseDetailsInfo.${key}.originalPrice`);
  const discountedPrice = t(`courseDetailsInfo.${key}.discountedPrice`);
  const features = t(`courseDetailsInfo.${key}.features`, { returnObjects: true }) as string[];

  const image = imageMap[key as keyof typeof imageMap];
  const rating = ratingMap[key as keyof typeof ratingMap];

  const phoneNumber = "+201080941234"; // unify with WhatsAppFloat

  const handleEnroll = () => {
    const message = t("courseDetails.enrollment.whatsappMessage", {
      courseTitle: title,
    });
    const encodedMessage = encodeURIComponent(message);
    const number = phoneNumber.replace(/\D/g, "");
    const whatsappURL = `https://wa.me/${number}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={image}
          alt={String(title)}
          className="w-full md:w-1/2 rounded-lg object-cover"
          loading="lazy"
          width={800}
          height={600}
        />
        <div className="flex-1 space-y-4 text-left">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>
              <Clock className="inline w-4 h-4 mr-1" />
              {duration}
            </span>
            <span>
              <Users className="inline w-4 h-4 mr-1" />
              {students}
            </span>
            {typeof rating === "number" && (
              <span>
                <Star className="inline w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                {rating}
              </span>
            )}
          </div>
          {Array.isArray(features) && features.length > 0 && (
            <ul className="list-disc list-inside space-y-1">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          )}
          <div className="text-lg">
            <span className="line-through text-muted-foreground">
              {originalPrice} {currency}
            </span>
            <span className="ml-2 font-bold text-primary">
              {discountedPrice} {currency}
            </span>
          </div>
          <Badge>{level}</Badge>
          <Button
            className="mt-4 w-full btn-glow"
            onClick={handleEnroll}
            aria-label={t("courseDetails.enrollment.button")}
          >
            {t("courseDetails.enrollment.button")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsPage;
