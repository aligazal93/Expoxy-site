import type { Metadata } from "next";
import Link from "next/link";

import LegalPageLayout, { LegalSection } from "@/app/components/legal/LegalPageLayout";

interface TermsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === "ar";

  const title = isArabic ? "الشروط والأحكام | الأولى للإيبوكسي" : "Terms and Conditions | Aloula Epoxy";
  const description = isArabic
    ? "اطلع على الشروط والأحكام المنظمة لاستخدام موقع الأولى للإيبوكسي وخدمات تصميم وتنفيذ أرضيات الإيبوكسي."
    : "Read the terms and conditions governing the use of the Aloula Epoxy website and its epoxy flooring design and installation services.";

  return {
    title,
    description,
    keywords: isArabic
      ? ["الشروط والأحكام", "الأولى للإيبوكسي", "أرضيات إيبوكسي", "خدمات الإيبوكسي"]
      : ["terms and conditions", "Aloula Epoxy", "epoxy flooring", "epoxy services"],
    alternates: {
      canonical: `/${locale}/terms-and-conditions`,
      languages: {
        ar: "/ar/terms-and-conditions",
        en: "/en/terms-and-conditions",
        "x-default": "/ar/terms-and-conditions",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `/${locale}/terms-and-conditions`,
      locale: isArabic ? "ar_SA" : "en_US",
      alternateLocale: isArabic ? ["en_US"] : ["ar_SA"],
      siteName: isArabic ? "الأولى للإيبوكسي" : "Aloula Epoxy",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function TermsAndConditionsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  const isArabic = locale === "ar";

  const pageTitle = isArabic ? "الشروط والأحكام" : "Terms and Conditions";
  const pageDescription = isArabic
    ? "توضح هذه الصفحة الشروط التي تنظم استخدامك لموقع الأولى للإيبوكسي والاستفادة من الخدمات والمحتوى المتاح من خلاله."
    : "This page explains the terms governing your use of the Aloula Epoxy website and the services and content available through it.";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    description: pageDescription,
    inLanguage: isArabic ? "ar" : "en",
    url: `/${locale}/terms-and-conditions`,
    isPartOf: {
      "@type": "WebSite",
      name: isArabic ? "الأولى للإيبوكسي" : "Aloula Epoxy",
      url: "/",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <LegalPageLayout locale={locale} title={pageTitle} description={pageDescription} lastUpdated={isArabic ? "5 أغسطس 2026" : "August 5, 2026"}>
        <LegalSection id="introduction" title={isArabic ? "1. مقدمة وقبول الشروط" : "1. Introduction and acceptance"}>
          <p>
            {isArabic
              ? "مرحبًا بك في موقع الأولى للإيبوكسي. باستخدامك لهذا الموقع أو إرسال طلب للحصول على إحدى خدماتنا، فإنك تقر بأنك قرأت هذه الشروط وفهمتها ووافقت على الالتزام بها."
              : "Welcome to the Aloula Epoxy website. By using this website or submitting a request for any of our services, you confirm that you have read, understood, and agreed to these terms."}
          </p>

          <p>
            {isArabic
              ? "في حال عدم موافقتك على أي جزء من هذه الشروط، يرجى التوقف عن استخدام الموقع وعدم إرسال أي طلبات من خلاله."
              : "If you do not agree with any part of these terms, please stop using the website and do not submit requests through it."}
          </p>
        </LegalSection>

        <LegalSection id="services" title={isArabic ? "2. الخدمات المقدمة" : "2. Services provided"}>
          <p>
            {isArabic
              ? "نقدم خدمات متخصصة في تصميم وتجهيز وتنفيذ أرضيات الإيبوكسي للمساحات السكنية والتجارية والصناعية، وقد تشمل الخدمات إعداد تصور بصري مبدئي قبل التنفيذ."
              : "We provide specialized epoxy flooring design, preparation, and installation services for residential, commercial, and industrial spaces. Services may include an initial visual concept before installation."}
          </p>

          <p>
            {isArabic
              ? "تختلف تفاصيل الخدمة والتكلفة ومدة التنفيذ حسب مساحة الموقع، وحالة الأرضية، والتصميم المختار، والمتطلبات الفنية الخاصة بالمشروع."
              : "Service details, cost, and completion time vary depending on the project area, floor condition, selected design, and technical requirements."}
          </p>
        </LegalSection>

        <LegalSection id="requests" title={isArabic ? "3. الطلبات وعروض الأسعار" : "3. Requests and quotations"}>
          <p>
            {isArabic
              ? "إرسال نموذج طلب أو طلب تصميم من خلال الموقع لا يُعد عقدًا نهائيًا أو قبولًا ملزمًا لتنفيذ المشروع."
              : "Submitting a service or design request through the website does not constitute a final contract or binding acceptance to perform the project."}
          </p>

          <p>
            {isArabic
              ? "يصبح الاتفاق ملزمًا بعد معاينة الموقع عند الحاجة، وتحديد نطاق العمل، واعتماد السعر والمدة والشروط النهائية بين الطرفين."
              : "An agreement becomes binding after any required site inspection, confirmation of the scope of work, and approval of the final price, timeline, and terms by both parties."}
          </p>
        </LegalSection>

        <LegalSection id="user-obligations" title={isArabic ? "4. التزامات المستخدم" : "4. User obligations"}>
          <p>
            {isArabic
              ? "يلتزم المستخدم بتقديم معلومات صحيحة وحديثة عند تعبئة النماذج، بما في ذلك الاسم ورقم الهاتف والمساحة وموقع المشروع وأي صور أو ملاحظات مطلوبة."
              : "Users must provide accurate and current information when completing forms, including their name, phone number, project area, location, images, and any required notes."}
          </p>

          <p>
            {isArabic
              ? "لا يجوز استخدام الموقع بطريقة غير قانونية، أو محاولة تعطيله، أو إرسال ملفات ضارة، أو انتحال شخصية شخص آخر، أو استخدام المحتوى دون تصريح."
              : "The website must not be used unlawfully, disrupted, used to transmit harmful files, used to impersonate another person, or used to reproduce content without authorization."}
          </p>
        </LegalSection>

        <LegalSection id="designs" title={isArabic ? "5. التصميمات والتصورات البصرية" : "5. Designs and visual concepts"}>
          <p>
            {isArabic
              ? "التصورات والصور الرقمية المعروضة قبل التنفيذ هي نماذج تقريبية تهدف إلى توضيح الفكرة العامة، وقد تختلف النتيجة الفعلية بشكل بسيط بسبب الإضاءة، وألوان الشاشات، وطبيعة الأرضية، والخامات المستخدمة."
              : "Digital previews and visual concepts provided before installation are approximate representations intended to illustrate the general idea. Final results may vary slightly due to lighting, screen colors, floor conditions, and materials."}
          </p>

          <p>
            {isArabic
              ? "يجب اعتماد التصميم والخامات والألوان النهائية قبل بدء التنفيذ وفق الاتفاق المبرم بين الطرفين."
              : "The final design, materials, and colors must be approved before installation in accordance with the agreement between both parties."}
          </p>
        </LegalSection>

        <LegalSection id="intellectual-property" title={isArabic ? "6. حقوق الملكية الفكرية" : "6. Intellectual property rights"}>
          <p>
            {isArabic
              ? "جميع النصوص والتصميمات والصور والشعارات والرسومات والهوية البصرية والمحتوى المنشور على الموقع مملوكة للأولى للإيبوكسي أو مستخدمة بموجب تصريح."
              : "All text, designs, images, logos, graphics, branding, and other website content are owned by Aloula Epoxy or used with permission."}
          </p>

          <p>
            {isArabic
              ? "لا يجوز نسخ أو إعادة نشر أو تعديل أو استخدام أي جزء من محتوى الموقع لأغراض تجارية دون موافقة كتابية مسبقة."
              : "No part of the website may be copied, republished, modified, or used commercially without prior written permission."}
          </p>
        </LegalSection>

        <LegalSection id="payments" title={isArabic ? "7. الأسعار والدفع والإلغاء" : "7. Pricing, payment, and cancellation"}>
          <p>
            {isArabic
              ? "يتم تحديد الأسعار وطرق الدفع ومواعيد الدفعات حسب طبيعة كل مشروع، وتكون التفاصيل المعتمدة موضحة في عرض السعر أو الاتفاق النهائي."
              : "Prices, payment methods, and payment schedules are determined according to each project and will be stated in the approved quotation or final agreement."}
          </p>

          <p>
            {isArabic
              ? "قد تترتب تكاليف على إلغاء المشروع بعد شراء الخامات أو بدء التجهيز أو التنفيذ، ويتم تحديد ذلك وفق مرحلة المشروع والاتفاق المعتمد."
              : "Cancellation after materials have been purchased or preparation or installation has begun may result in charges based on the project stage and the approved agreement."}
          </p>
        </LegalSection>

        <LegalSection id="liability" title={isArabic ? "8. حدود المسؤولية" : "8. Limitation of liability"}>
          <p>
            {isArabic
              ? "نبذل جهدًا معقولًا لضمان دقة المعلومات واستمرار عمل الموقع، لكننا لا نضمن خلو الموقع من الانقطاعات أو الأخطاء الفنية المؤقتة."
              : "We make reasonable efforts to ensure the accuracy of information and the availability of the website, but we do not guarantee uninterrupted or error-free operation."}
          </p>

          <p>
            {isArabic
              ? "لا نتحمل المسؤولية عن الأضرار الناتجة عن سوء استخدام الموقع، أو تقديم معلومات غير صحيحة، أو ظروف خارجة عن السيطرة، أو تأخير ناتج عن جهات خارجية."
              : "We are not responsible for damages resulting from website misuse, inaccurate information supplied by users, circumstances beyond our control, or delays caused by third parties."}
          </p>
        </LegalSection>

        <LegalSection id="external-links" title={isArabic ? "9. الروابط الخارجية" : "9. External links"}>
          <p>
            {isArabic
              ? "قد يحتوي الموقع على روابط لمنصات أو مواقع خارجية. يتم توفير هذه الروابط للتسهيل فقط، ولا نتحمل مسؤولية محتواها أو سياساتها أو مستوى الحماية الذي توفره."
              : "The website may contain links to third-party websites or platforms. These links are provided for convenience only, and we are not responsible for their content, policies, or security practices."}
          </p>
        </LegalSection>

        <LegalSection id="updates" title={isArabic ? "10. تعديل الشروط" : "10. Changes to these terms"}>
          <p>
            {isArabic
              ? "يحق لنا تحديث هذه الشروط عند الحاجة لمواكبة التغييرات القانونية أو الفنية أو التشغيلية. تصبح التعديلات نافذة عند نشرها على هذه الصفحة."
              : "We may update these terms when necessary to reflect legal, technical, or operational changes. Updated terms become effective once published on this page."}
          </p>
        </LegalSection>

        <LegalSection id="governing-law" title={isArabic ? "11. القانون المعمول به" : "11. Governing law"}>
          <p>
            {isArabic
              ? "تخضع هذه الشروط للقوانين والأنظمة المعمول بها في الدولة التي تمارس فيها الشركة نشاطها، ويتم حل أي نزاع وفق الإجراءات النظامية المختصة."
              : "These terms are governed by the laws and regulations applicable in the country where the company operates. Any dispute will be handled through the relevant legal procedures."}
          </p>
        </LegalSection>

        <LegalSection id="contact" title={isArabic ? "12. التواصل معنا" : "12. Contact us"}>
          <p>
            {isArabic
              ? "لأي استفسار بخصوص الشروط والأحكام، يمكنك التواصل معنا من خلال صفحة التواصل."
              : "For questions regarding these terms and conditions, you can contact us through our contact page."}
          </p>

          <Link href={`/${locale}/contact-us`} className="inline-flex rounded-[10px] bg-primary px-5 py-3 text-[14px] font-[600] text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(22,95,174,0.25)]">
            {isArabic ? "تواصل معنا" : "Contact us"}
          </Link>
        </LegalSection>
      </LegalPageLayout>
    </>
  );
}