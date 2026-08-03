import Intro from "../components/Intro";
import BrandsSlider from "../components/Brands";
import WhyEpoxy from "../components/WhyEpoxy";
import Services from "../components/Services";
import ProjectsSlider from "../components/ProjectsSlider";
import ProcessSection from "../components/ProcessSection";
import FaqSection from "../components/Faqs";
import { getHomeData } from "../services/home";
import WhyEpoxyHome from "@/components/home/WhyEpoxy";
import DesignGallerySection from "../components/DesignGallerySection";


export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const data = await getHomeData(locale);
  return (
    <>
      <Intro locale={locale} slide={data?.slide} />
      <BrandsSlider locale={locale} clients={data?.clients || []} />
      <WhyEpoxy locale={locale} />
      <Services services={data?.services || []} locale={locale} />
      <ProjectsSlider
        projects={data?.projects || []}
        locale={locale}
      />
      <DesignGallerySection categories={data?.categories ?? []} designs={data?.designs ?? []} locale={locale} />
      <ProcessSection processes={data?.steps || []} locale={locale} />
      <FaqSection faqs={data?.questions || []} info={data?.informations || {}} locale={locale} />

    </>
  );
}