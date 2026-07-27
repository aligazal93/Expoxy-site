import Image from "next/image";

export default function WhyUs({ locale }: { locale: string }) {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat py-[70px] lg:py-[100px]" style={{ backgroundImage: "url('/images/bk-2.png')" }} dir="rtl">
            <div className="container">

                <div className="mb-[45px] text-center">
                    <p className="mb-[16px] text-[14px] font-medium text-[#08A5EA]">لماذا تختار الأولى للإيبوكسي ؟</p>

                    <h2 className="text-[26px] font-bold leading-[1.5] text-white md:text-[32px] lg:text-[36px]">
                        نحول المساحات العادية إلى أرضيات استثنائية
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 xl:grid-cols-4">

                    {/* التصميم والإبداع */}
                    <div className="group rounded-[20px] border border-white/[0.10] bg-[#062F3E]/80 px-4 lg:px-[28px] py-[38px] transition-all duration-300 hover:-translate-y-[6px] hover:border-[#08A5EA]/50">
                        <div className="mb-[26px] flex">
                            <Image src="/images/ic-1.png" alt="التصميم والإبداع" width={58} height={58} className="h-[58px] w-[58px] object-contain" />
                        </div>

                        <h3 className="mb-[18px] text-[21px] font-bold text-white">
                            التصميم والإبداع
                        </h3>

                        <p className="mx-auto  text-[15px] font-normal line-clamp-5 leading-[2] text-white/80">
                            كل مساحة تحمل طابعًا مختلفًا، لذلك لا نعتمد الحلول الجاهزة. نبتكر تصاميم إيبوكسي مخصصة تجمع بين الجمال والوظيفة، ونساعد عملاءنا على اختيار التصميم الذي يعكس ذوقهم ويتناسب مع طبيعة المكان.
                        </p>
                    </div>

                    {/* الثقة والالتزام */}
                    <div className="group rounded-[20px] border border-white/[0.10] bg-[#062F3E]/80 px-[28px] py-[38px] transition-all duration-300 hover:-translate-y-[6px] hover:border-[#08A5EA]/50">
                        <div className="mb-[26px] flex">
                            <Image src="/images/ic-2.png" alt="الثقة والالتزام" width={58} height={58} className="h-[58px] w-[58px] object-contain" />
                        </div>

                        <h3 className="mb-[18px] text-[21px] font-bold text-white">
                            الثقة والالتزام
                        </h3>

                        <p className="mx-auto  text-[15px] font-normal line-clamp-5 leading-[2] text-white/80">
                            نؤمن أن نجاح أي مشروع يبدأ بالوضوح والالتزام، لذلك نحرص على تقديم تجربة عمل احترافية تبدأ من الاستشارة الأولى وحتى التسليم النهائي، مع تواصل مستمر وشفافية في جميع مراحل التنفيذ.
                        </p>
                    </div>

                    {/* الجودة */}
                    <div className="group rounded-[20px] border border-white/[0.10] bg-[#062F3E]/80 px-[28px] py-[38px] transition-all duration-300 hover:-translate-y-[6px] hover:border-[#08A5EA]/50">
                        <div className="mb-[26px] flex">
                            <Image src="/images/ic-3.png" alt="الجودة" width={58} height={58} className="h-[58px] w-[58px] object-contain" />
                        </div>

                        <h3 className="mb-[18px] text-[21px] font-bold text-white">
                            الجودة
                        </h3>

                        <p className="mx-auto text-[15px] font-normal line-clamp-5 leading-[2] text-white/80">
                            الأرضيات المميزة لا تعتمد على المظهر فقط، بل على جودة التنفيذ أيضًا. نستخدم خامات عالية الجودة وتقنيات تنفيذ دقيقة لضمان أرضيات تجمع بين الفخامة، المتانة، وسهولة الصيانة على المدى الطويل.
                        </p>
                    </div>

                    {/* التصور قبل التنفيذ */}
                    <div className="group rounded-[20px] border border-white/[0.10] bg-[#062F3E]/80 px-[28px] py-[38px] transition-all duration-300 hover:-translate-y-[6px] hover:border-[#08A5EA]/50">
                        <div className="mb-[26px] flex">
                            <Image src="/images/ic-4.png" alt="التصور قبل التنفيذ" width={58} height={58} className="h-[58px] w-[58px] object-contain" />
                        </div>

                        <h3 className="mb-[18px] text-[21px] font-bold text-white">
                            التصور قبل التنفيذ
                        </h3>

                        <p className="mx-auto  text-[15px] font-normal line-clamp-5 leading-[2] text-white/80">
                            نمنح عملاءنا القدرة على رؤية النتيجة قبل بدء العمل، من خلال التصورات البصرية الأولية، بحيث نضمن اختيار الأرضية داخل المساحة واختيار التصميم الأنسب بثقة أكبر قبل التنفيذ الفعلي.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}