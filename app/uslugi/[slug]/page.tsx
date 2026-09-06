import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLanding from "@/components/ServiceLanding";
import { getService, services } from "@/lib/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return {};

  const pathname = `/uslugi/${service.slug}/`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: pathname },
    openGraph: {
      type: "website",
      locale: "ru_RU",
      title: service.metaTitle,
      description: service.metaDescription,
      url: pathname,
      images: [
        {
          url: "/logo.png",
          width: 397,
          height: 89,
          alt: "Абизяна",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: service.metaTitle,
      description: service.metaDescription,
      images: ["/logo.png"],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  return <ServiceLanding service={service} />;
}
