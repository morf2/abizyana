import Link from "next/link";
import { services } from "@/lib/services";

type ServiceCardsProps = {
  excludeSlug?: string;
  limit?: number;
};

export default function ServiceCards({ excludeSlug, limit }: ServiceCardsProps) {
  const visibleServices = services
    .filter((service) => service.slug !== excludeSlug)
    .slice(0, limit);

  return (
    <div className="service-cards">
      {visibleServices.map((service) => (
        <Link
          className="service-card"
          href={`/uslugi/${service.slug}/`}
          key={service.slug}
          prefetch={false}
        >
          <span>{service.stamp}</span>
          <h3>{service.shortName}</h3>
          <p>{service.metaDescription}</p>
          <strong>Подробнее →</strong>
        </Link>
      ))}
    </div>
  );
}
