import type { Metadata } from "next";
import Link from "next/link";

import LegalPageLayout, { LegalSection } from "@/app/components/legal/LegalPageLayout";

interface PrivacyPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === "ar";

  const title = isArabic ? "سياسة الخصوصية | الأولى للإيبوكسي" : "Privacy Policy | Aloula Epoxy";
  const description = isArabic
    ? "تعرف على كيفية جمع واستخدام وحماية البيانات الشخصية عند استخدام موقع الأولى للإيبوكسي أو إرسال طلبات الخدمات."
    : "Learn how personal data is collected, used, and protected when using the Aloula Epoxy website or submitting service requests.";

  return {
    title,
    description,
    keywords: isArabic
      ? ["سياسة الخصوصية", "حماية البيانات", "الأولى للإيبوكسي", "بيانات المستخدم"]
      : ["privacy policy", "data protection", "Aloula Epoxy", "personal data"],
    alternates: {
      canonical: `/${locale}/privacy-policy`,
      languages: {
        ar: "/ar/privacy-policy",
        en: "/en/privacy-policy",
        "x-default": "/ar/privacy-policy",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `/${locale}/privacy-policy`,
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

export default async function PrivacyPolicyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  const isArabic = locale === "ar";

  const pageTitle = isArabic ? "سياسة الخصوصية" : "Privacy Policy";
  const pageDescription = isArabic
    ? "نحترم خصوصيتك ونلتزم بالتعامل مع بياناتك الشخصية بمسؤولية ووضوح عند استخدام الموقع أو طلب خدماتنا."
    : "We respect your privacy and are committed to handling your personal data responsibly and transparently when you use our website or request our services.";

  const schema = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    name: pageTitle,
    description: pageDescription,
    inLanguage: isArabic ? "ar" : "en",
    url: `/${locale}/privacy-policy`,
    publisher: {
      "@type": "Organization",
      name: isArabic ? "الأولى للإيبوكسي" : "Aloula Epoxy",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <LegalPageLayout locale={locale} title={pageTitle} description={pageDescription} lastUpdated={isArabic ? "5 أغسطس 2026" : "August 5, 2026"}>
        <LegalSection id="introduction" title={isArabic ? "1. مقدمة" : "1. Introduction"}>
          <p>
            {isArabic
              ? "توضح سياسة الخصوصية هذه أنواع البيانات التي قد نجمعها عند استخدامك لموقع الأولى للإيبوكسي، وكيفية استخدام هذه البيانات وحمايتها والخيارات المتاحة لك."
              : "This privacy policy explains the types of data we may collect when you use the Aloula Epoxy website, how that data is used and protected, and the choices available to you."}
          </p>

          <p>
            {isArabic
              ? "باستخدامك للموقع أو إرسال بياناتك من خلال النماذج، فإنك توافق على الممارسات الموضحة في هذه السياسة."
              : "By using the website or submitting information through our forms, you agree to the practices described in this policy."}
          </p>
        </LegalSection>

        <LegalSection id="collected-data" title={isArabic ? "2. البيانات التي نجمعها" : "2. Information we collect"}>
          <p>
            {isArabic
              ? "قد نجمع البيانات التي تقدمها لنا مباشرة عند إرسال طلب خدمة أو طلب تصميم أو رسالة تواصل، مثل الاسم ورقم الهاتف والبريد الإلكتروني والعنوان أو المنطقة ونوع المكان ومساحة المشروع والملاحظات."
              : "We may collect information you provide directly when submitting a service request, design request, or contact message, such as your name, phone number, email address, location, area, place type, project size, and notes."}
          </p>

          <p>
            {isArabic
              ? "قد نجمع أيضًا الصور والملفات التي ترفعها للمساعدة في تقييم الموقع أو إعداد تصور بصري للتصميم المطلوب."
              : "We may also collect images and files that you upload to help us assess the project area or prepare a visual design concept."}
          </p>

          <p>
            {isArabic
              ? "قد يتم جمع بعض المعلومات التقنية تلقائيًا، مثل نوع الجهاز والمتصفح وعنوان بروتوكول الإنترنت والصفحات التي تمت زيارتها ووقت الاستخدام."
              : "Certain technical information may be collected automatically, including device type, browser, IP address, pages visited, and usage time."}
          </p>
        </LegalSection>

        <LegalSection id="data-use" title={isArabic ? "3. كيفية استخدام البيانات" : "3. How we use information"}>
          <p>
            {isArabic
              ? "نستخدم البيانات للتواصل معك، ودراسة طلبك، وإعداد عروض الأسعار، وتقديم التصورات والخدمات المطلوبة، وتحسين تجربة استخدام الموقع."
              : "We use your information to contact you, review your request, prepare quotations, provide requested concepts and services, and improve your website experience."}
          </p>

          <p>
            {isArabic
              ? "قد نستخدم بيانات التواصل لإرسال تحديثات متعلقة بطلبك أو مشروعك، ولا نستخدمها في رسائل تسويقية غير ضرورية دون أساس مناسب."
              : "We may use your contact details to send updates related to your request or project. We do not use them for unnecessary marketing communications without an appropriate basis."}
          </p>
        </LegalSection>

        <LegalSection id="cookies" title={isArabic ? "4. ملفات تعريف الارتباط والتحليلات" : "4. Cookies and analytics"}>
          <p>
            {isArabic
              ? "قد يستخدم الموقع ملفات تعريف الارتباط وتقنيات التحليل لفهم كيفية استخدام الزوار للموقع، وتحسين الأداء، واكتشاف المشكلات الفنية."
              : "The website may use cookies and analytics technologies to understand how visitors use the website, improve performance, and identify technical issues."}
          </p>

          <p>
            {isArabic
              ? "يمكنك التحكم في ملفات تعريف الارتباط أو تعطيلها من إعدادات متصفحك، مع العلم أن بعض خصائص الموقع قد لا تعمل بالشكل المتوقع بعد تعطيلها."
              : "You can manage or disable cookies through your browser settings. Some website features may not function as expected when cookies are disabled."}
          </p>
        </LegalSection>

        <LegalSection id="data-sharing" title={isArabic ? "5. مشاركة البيانات" : "5. Sharing information"}>
          <p>
            {isArabic
              ? "لا نقوم ببيع بياناتك الشخصية أو تأجيرها للآخرين."
              : "We do not sell or rent your personal information to others."}
          </p>

          <p>
            {isArabic
              ? "قد نشارك الحد الأدنى من البيانات مع مزودي الخدمات الذين يساعدوننا في الاستضافة أو التحليلات أو التواصل أو تنفيذ المشروع، بشرط استخدامها فقط للغرض المحدد."
              : "We may share the minimum necessary information with service providers that support hosting, analytics, communication, or project delivery, provided they use it only for the specified purpose."}
          </p>

          <p>
            {isArabic
              ? "قد يتم الإفصاح عن البيانات عندما يكون ذلك مطلوبًا بموجب القانون أو لحماية حقوقنا أو حقوق المستخدمين."
              : "Information may be disclosed when required by law or when necessary to protect our rights or the rights of users."}
          </p>
        </LegalSection>

        <LegalSection id="storage-security" title={isArabic ? "6. تخزين البيانات وحمايتها" : "6. Data storage and security"}>
          <p>
            {isArabic
              ? "نتخذ إجراءات فنية وتنظيمية معقولة لحماية البيانات من الوصول غير المصرح به أو الفقد أو التعديل أو الإفصاح."
              : "We take reasonable technical and organizational measures to protect information against unauthorized access, loss, alteration, or disclosure."}
          </p>

          <p>
            {isArabic
              ? "رغم ذلك، لا توجد وسيلة نقل أو تخزين إلكتروني آمنة بشكل كامل، ولذلك لا يمكن ضمان الحماية المطلقة للبيانات."
              : "However, no electronic transmission or storage method is completely secure, and absolute protection cannot be guaranteed."}
          </p>
        </LegalSection>

        <LegalSection id="data-retention" title={isArabic ? "7. مدة الاحتفاظ بالبيانات" : "7. Data retention"}>
          <p>
            {isArabic
              ? "نحتفظ بالبيانات للمدة اللازمة لمعالجة طلبك وتقديم الخدمات والوفاء بالالتزامات القانونية أو المحاسبية، ثم يتم حذفها أو إخفاء هويتها عندما لا تعود هناك حاجة مشروعة للاحتفاظ بها."
              : "We retain information for as long as necessary to process your request, provide services, and meet legal or accounting obligations. It is then deleted or anonymized when there is no longer a legitimate need to retain it."}
          </p>
        </LegalSection>

        <LegalSection id="user-rights" title={isArabic ? "8. حقوقك" : "8. Your rights"}>
          <p>
            {isArabic
              ? "يمكنك طلب معرفة البيانات التي نحتفظ بها عنك، أو تصحيحها، أو تحديثها، أو طلب حذفها في الحالات التي يسمح بها القانون."
              : "You may request access to the personal information we hold about you, ask for corrections or updates, or request deletion where permitted by law."}
          </p>

          <p>
            {isArabic
              ? "قد نحتاج إلى التحقق من هويتك قبل تنفيذ بعض الطلبات لحماية بياناتك من الوصول غير المصرح به."
              : "We may need to verify your identity before completing certain requests to protect your information from unauthorized access."}
          </p>
        </LegalSection>

        <LegalSection id="uploaded-images" title={isArabic ? "9. الصور والملفات المرفوعة" : "9. Uploaded images and files"}>
          <p>
            {isArabic
              ? "يجب ألا ترفع صورًا أو ملفات لا تملك الحق في استخدامها أو تحتوي على بيانات شخصية لأشخاص آخرين دون موافقتهم."
              : "You must not upload images or files that you do not have the right to use or that contain another person's personal information without their permission."}
          </p>

          <p>
            {isArabic
              ? "تُستخدم الملفات المرفوعة لتقييم الطلب أو إعداد التصميم أو تنفيذ الخدمة، ولا يتم استخدامها لأغراض أخرى إلا بموافقة أو أساس قانوني مناسب."
              : "Uploaded files are used to assess your request, prepare a design, or deliver the service. They are not used for other purposes without consent or another appropriate legal basis."}
          </p>
        </LegalSection>

        <LegalSection id="external-services" title={isArabic ? "10. الخدمات والروابط الخارجية" : "10. Third-party services and links"}>
          <p>
            {isArabic
              ? "قد يحتوي الموقع على روابط أو خدمات تابعة لجهات خارجية مثل منصات التواصل أو الخرائط أو أدوات التحليل. تخضع هذه الخدمات لسياسات الخصوصية الخاصة بها."
              : "The website may include third-party links or services such as social platforms, maps, or analytics tools. These services are governed by their own privacy policies."}
          </p>
        </LegalSection>

        <LegalSection id="children" title={isArabic ? "11. خصوصية الأطفال" : "11. Children's privacy"}>
          <p>
            {isArabic
              ? "خدمات الموقع غير موجهة للأطفال، ولا نتعمد جمع بيانات شخصية من الأطفال. عند اكتشاف جمع بيانات طفل دون موافقة مناسبة، سنعمل على حذفها."
              : "The website is not directed toward children, and we do not knowingly collect personal information from children. If such information is identified without appropriate consent, we will take steps to delete it."}
          </p>
        </LegalSection>

        <LegalSection id="policy-updates" title={isArabic ? "12. تحديث سياسة الخصوصية" : "12. Updates to this policy"}>
          <p>
            {isArabic
              ? "قد نقوم بتحديث هذه السياسة لمواكبة التغييرات في خدماتنا أو المتطلبات القانونية. سيتم نشر النسخة المحدثة على هذه الصفحة مع تعديل تاريخ آخر تحديث."
              : "We may update this policy to reflect changes to our services or legal requirements. The updated version will be published on this page with a revised last-updated date."}
          </p>
        </LegalSection>

        <LegalSection id="contact" title={isArabic ? "13. التواصل بشأن الخصوصية" : "13. Privacy inquiries"}>
          <p>
            {isArabic
              ? "لطلب الوصول إلى بياناتك أو تعديلها أو حذفها، أو للاستفسار عن سياسة الخصوصية، تواصل معنا من خلال صفحة التواصل."
              : "To request access, correction, or deletion of your information, or to ask questions about this privacy policy, contact us through our contact page."}
          </p>

          <Link href={`/${locale}/contact-us`} className="inline-flex rounded-[10px] bg-primary px-5 py-3 text-[14px] font-[600] text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(22,95,174,0.25)]">
            {isArabic ? "تواصل معنا" : "Contact us"}
          </Link>
        </LegalSection>
      </LegalPageLayout>
    </>
  );
}