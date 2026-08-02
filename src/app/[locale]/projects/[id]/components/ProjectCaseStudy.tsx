import Image from "next/image";
import type { ProjectDetails } from "@/app/types/projectDetails";
import EmptyData from "@/app/components/EmptyData";

interface ProjectCaseStudyProps {
  project: ProjectDetails;
  locale: string;
}

export default function ProjectCaseStudy({ project, locale }: ProjectCaseStudyProps) {
  const isArabic = locale === "ar";

  function hasValidFileUrl(url?: string | null) {
    if (!url) return false;

    try {
      const pathname = new URL(url).pathname;
      const fileName = pathname.split("/").filter(Boolean).pop();

      return Boolean(fileName && fileName.includes("."));
    } catch {
      return false;
    }
  }
  const hasBeforeImage = hasValidFileUrl(project.image_before);
  const hasAfterImage = hasValidFileUrl(project.image_after);
  const hasBeforeAfterImages = hasBeforeImage || hasAfterImage;

  return (
    <div>
      <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-[24px]">
        <Image src={project.image} alt={project.name} fill priority sizes="(max-width: 990px) 100vw, 75vw" className="object-cover" />
      </div>

      <div className="mb-10">
        {project.subtitle && <span className="mb-3 block text-[14px] font-[600] text-primary">{project.subtitle}</span>}

        <h1 className="mb-5 text-[28px] font-[700] leading-[1.5] text-blackGrey md:text-[38px]">
          {project.name}
        </h1>

        {project.content && <div className="whitespace-pre-line text-[15px] leading-[2] text-grey md:text-[16px]">{project.content}</div>}
      </div>

      {(project.image_before || project.image_after) && (
        <section className="mb-12">
          <h2 className="mb-6 text-[24px] font-[700] text-blackGrey">{isArabic ? "قبل وبعد التنفيذ" : "Before and After"}</h2>

          {hasBeforeAfterImages ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {hasBeforeImage && (
                <div>
                  <span className="mb-3 block text-[14px] font-[700] text-grey">{isArabic ? "قبل التنفيذ" : "Before"}</span>

                  <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                    <Image src={project.image_before} alt={`${project.name} ${isArabic ? "قبل التنفيذ" : "before"}`} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" />
                  </div>
                </div>
              )}

              {hasAfterImage && (
                <div>
                  <span className="mb-3 block text-[14px] font-[700] text-primary">{isArabic ? "بعد التنفيذ" : "After"}</span>

                  <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                    <Image src={project.image_after} alt={`${project.name} ${isArabic ? "بعد التنفيذ" : "after"}`} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" />
                  </div>
                </div>
              )}
            </div>
          ) : (
           <EmptyData locale={locale} />
          )}
        </section>
      )}

      <div className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        <ProjectList title={isArabic ? "أهداف المشروع" : "Project Goals"} items={project.goals} />

        <ProjectList title={isArabic ? "تحديات المشروع" : "Project Challenges"} items={project.challenges} />

        <ProjectList title={isArabic ? "مراحل التنفيذ" : "Implementation Steps"} items={project.steps} numbered />
      </div>
    </div>
  );
}

interface ProjectListProps {
  title: string;
  items: {
    content: string;
  }[];
  numbered?: boolean;
}

function ProjectList({ title, items, numbered = false }: ProjectListProps) {
  if (!items?.length) {
    return null;
  }

  return (
    <div className="rounded-[20px] border border-[#E4E7EC] bg-white p-6">
      <h2 className="mb-5 text-[20px] font-[700] text-blackGrey">
        {title}
      </h2>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={`${item.content}-${index}`} className="flex items-start gap-3">
            <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-primary/10 text-[12px] font-[700] text-primary">
              {numbered ? index + 1 : "✓"}
            </span>

            <p className="pt-[2px] text-[14px] leading-[1.8] text-grey">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}