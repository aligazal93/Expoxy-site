import Image from "next/image";

export default function ServiceInfo({ locale }: { locale: string }) {
    return (
        <section className="bg-white py-[60px] md:py-[80px] lg:py-[100px]">
            <div className="container p-[14px] sm:p-[20px] md:p-[30px] lg:p-[40px]">
                <div className="grid items-start gap-[45px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-[70px]">

                    <div>
                        <h2 className="mb-[22px] text-[28px] font-[700] leading-[1.5] text-blackGrey md:text-[34px] lg:text-[40px]">
                            حلول متكاملة لأرضيات إيبوكسي
                            <br className="hidden md:block" />
                            تبدأ من الفكرة وتنتهي بالتنفيذ
                        </h2>

                        <p className="mb-[18px] text-[14px] font-[400] leading-[2] text-[#707070] md:text-[16px] w-full lg:w-[80%]">
                            في الأولى للإيبوكسي نقدم تجربة متكاملة تبدأ من فهم احتياجات العميل وطبيعة المساحة، ثم مساعدته في اختيار التصميم المناسب، وتنتهي بتنفيذ احترافي يحقق التوازن بين الجمال والجودة.
                        </p>

                        <p className="mb-[18px] text-[14px] font-[400] leading-[2] text-[#707070] md:text-[16px] w-full lg:w-[80%]">
                            سواء كان مشروعك لمنزل، أو مساحة تجارية، أو منشأة تحتاج أرضيات عالية التحمل، نعمل على تقديم حلول مدروسة تناسب الاستخدام الحقيقي للمكان وتمنحك نتيجة تجمع بين التصميم المميز والأداء طويل المدى.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 gap-x-[28px] gap-y-[30px] sm:grid-cols-2">

                        <div className="border-t-1 border-[#CFCECD] pt-[18px]">
                            <h3 className="mb-[12px] text-[16px] font-[700] text-blackGrey md:text-[17px]">
                                استشارتك واختيار التصميم
                            </h3>

                            <p className="text-[13px] font-[400] leading-[1.9] text-greyColor md:text-[14px]">
                                نستمع إلى أفكارك ونفهم طبيعة استخدام المساحة، ثم نساعدك في اختيار التصميم والألوان المناسبة لتحقيق أفضل نتيجة ممكنة.
                            </p>
                        </div>

                        <div className="border-t border-[#CFCECD] pt-[18px]">
                            <h3 className="mb-[12px] text-[16px] font-[700] text-blackGrey md:text-[17px]">
                                التصور البصري قبل التنفيذ
                            </h3>

                            <p className="text-[13px] font-[400] leading-[1.9] text-greyColor md:text-[14px]">
                                قبل بدء التنفيذ نمنحك تصورًا واضحًا للشكل النهائي، مما يساعدك على اتخاذ القرار بثقة ومعرفة النتيجة المتوقعة مسبقًا.
                            </p>
                        </div>

                        <div className="border-t-1 border-[#CFCECD] pt-[18px]">
                            <h3 className="mb-[12px] text-[16px] font-[700] text-blackGrey md:text-[17px]">
                                اختيار الخامات المناسبة
                            </h3>

                            <p className="text-[13px] font-[400] leading-[1.9] text-greyColor md:text-[14px]">
                                نعتمد على خامات إيبوكسي عالية الجودة ومناسبة لكل استخدام لضمان أرضية تجمع بين المتانة والمظهر المميز وسهولة الصيانة.
                            </p>
                        </div>

                        <div className="border-t-1 border-[#CFCECD] pt-[18px]">
                            <h3 className="mb-[12px] text-[16px] font-[700] text-blackGrey md:text-[17px]">
                                تنفيذ احترافي بإشراف متخصص
                            </h3>

                            <p className="text-[13px] font-[400] leading-[1.9] text-greyColor md:text-[14px]">
                                يتم تنفيذ المشروع بأيدي فريق متخصص ومتابعة دقيقة لكل مرحلة لضمان الحصول على أفضل تشطيب وأعلى مستوى من الجودة.
                            </p>
                        </div>

                    </div>

                </div>
                <div className="mt-[45px] overflow-hidden rounded-[20px] md:mt-[55px] md:rounded-[25px] lg:mt-[65px]">
                    <Image src="/images/serv-2.png" alt="أرضيات إيبوكسي بتصميم احترافي" width={1400} height={650} sizes="(max-width: 767px) 100vw, (max-width: 1239px) 95vw, 1200px" className="h-auto w-full object-cover" />
                </div>

            </div>
        </section>
    );
}