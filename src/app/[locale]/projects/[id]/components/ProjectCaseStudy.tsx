"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCaseStudy() {
  const [comparePosition, setComparePosition] = useState(50);

  return (
    <section className="overflow-hidden bg-white py-[70px] md:py-[90px]">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className=" mb-10  text-center"
        >
          <h2 className="text-[26px] text-start font-[700] leading-[1.5] text-blackGrey sm:text-[32px] lg:text-[38px]">
            تنفيذ أرضية إيبوكسي رخامي فاخر لفيلا سكنية
          </h2>

          <p className="text-start mt-4 max-w-[950px] text-[14px] font-[400] leading-[2] text-greyColor sm:text-[15px] lg:text-[16px]">
            تم تنفيذ أرضية إيبوكسي رخامي بتشطيب لامع داخل فيلا سكنية، بهدف منح المساحة مظهرًا فاخرًا يتناغم مع التصميم الداخلي، مع توفير أرضية متينة وسهلة التنظيف تناسب الاستخدام اليومي.
          </p>
        </motion.div>

        {/* Goals & Challenges */}
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-14 lg:mb-14 lg:gap-20">

          {/* Goals */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="mb-5 text-[24px] font-[700] text-blackGrey lg:text-[28px]">
              أهداف المشروع
            </h3>

            <ul className="space-y-3 text-[14px] leading-[1.9] text-[#707070] sm:text-[15px]">
              <li className="flex items-start gap-3 ">
                <span className="mt-[11px] h-[5px] w-[5px] shrink-0 rounded-full bg-secondary" />
                <span>إضفاء مظهر فاخر يتناسب مع تصميم الفيلا.</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-[11px] h-[5px] w-[5px] shrink-0 rounded-full bg-secondary" />
                <span>استبدال الأرضية التقليدية بحل أكثر متانة وسهولة في الصيانة.</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-[11px] h-[5px] w-[5px] shrink-0 rounded-full bg-secondary" />
                <span>تنفيذ تشطيب يعكس الإضاءة الطبيعية ويمنح المساحة اتساعًا بصريًا.</span>
              </li>
            </ul>
          </motion.div>

          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <h3 className="mb-5 text-[24px] font-[700] text-blackGrey lg:text-[28px]">
              التحديات
            </h3>

            <ul className="space-y-3 text-[14px] leading-[1.9] text-[#707070] sm:text-[15px]">
              <li className="flex items-start gap-3">
                <span className="mt-[11px] h-[5px] w-[5px] shrink-0 rounded-full bg-secondary" />
                <span>الحاجة إلى تنفيذ الأرضية دون التأثير على عناصر التشطيب الموجودة.</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-[11px] h-[5px] w-[5px] shrink-0 rounded-full bg-secondary" />
                <span>تحقيق تطابق الألوان مع تصميم الديكور الداخلي.</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-[11px] h-[5px] w-[5px] shrink-0 rounded-full bg-secondary" />
                <span>ضمان نعومة السطح وتجانس اللمعة على كامل المساحة.</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Before / After */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="group relative mb-12 h-[300px] w-full overflow-hidden rounded-[22px] bg-[#F5F5F5] shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:h-[380px] md:h-[440px] lg:h-[500px]"
          dir="ltr"
        >
          {/* BEFORE */}
          <Image
            src="/images/before.png"
            alt="الأرضية قبل تنفيذ الإيبوكسي"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1240px"
            className="select-none object-cover"
          />

          <div className="absolute inset-0 will-change-[clip-path]" style={{ clipPath: `inset(0 ${100 - comparePosition}% 0 0)` }}>
            <Image
              src="/images/after.png"
              alt="الأرضية بعد تنفيذ الإيبوكسي"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1240px"
              className="select-none object-cover"
            />
          </div>

          {/* Labels */}
          <div className="pointer-events-none absolute bottom-4 left-4 z-20 rounded-full bg-black/55 px-4 py-2 text-[13px] font-[600] text-white backdrop-blur-md sm:bottom-6 sm:left-6 sm:text-[15px]">
            بعد
          </div>

          <div className="pointer-events-none absolute bottom-4 right-4 z-20 rounded-full bg-black/55 px-4 py-2 text-[13px] font-[600] text-white backdrop-blur-md sm:bottom-6 sm:right-6 sm:text-[15px]">
            قبل
          </div>

          {/* Divider */}
          <div className="pointer-events-none absolute bottom-0 top-0 z-20 w-[3px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.2)]" style={{ left: `${comparePosition}%`, transform: "translateX(-50%)" }} />

          {/* Handle */}
          <div className="pointer-events-none absolute top-1/2 z-30 flex h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[4px] border-white bg-primary shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:scale-110 sm:h-[52px] sm:w-[52px]" style={{ left: `${comparePosition}%` }}>
            <div className="flex items-center gap-[5px]">
              <span className="h-[7px] w-[7px] rotate-45 border-b-2 border-l-2 border-white" />
              <span className="h-[7px] w-[7px] rotate-45 border-r-2 border-t-2 border-white" />
            </div>
          </div>

          {/* Slider */}
          <input
            type="range"
            min="0"
            max="100"
            value={comparePosition}
            onChange={(event) => setComparePosition(Number(event.target.value))}
            aria-label="مقارنة الأرضية قبل وبعد تنفيذ الإيبوكسي"
            className="absolute inset-0 z-40 h-full w-full cursor-ew-resize opacity-0"
          />
        </motion.div>

        {/* Execution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="block w-full "
        >
          <h3 className="mb-6 text-[26px] font-[700] text-blackGrey sm:text-[30px]">
            مراحل التنفيذ
          </h3>

          <div className="relative border-r border-borderColor pr-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative mb-6"
            >
              <span className="absolute -right-[33px] top-[7px] h-[11px] w-[11px] rounded-full border-[3px] border-white bg-primary shadow-[0_0_0_2px_#165FAE]" />
              <h4 className="text-[16px] font-[600] text-blackGrey">معاينة الموقع وقياس المساحة</h4>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative mb-6"
            >
              <span className="absolute -right-[33px] top-[7px] h-[11px] w-[11px] rounded-full border-[3px] border-white bg-primary shadow-[0_0_0_2px_#165FAE]" />
              <h4 className="text-[16px] font-[600] text-blackGrey">تجهيز ومعالجة السطح</h4>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative mb-6"
            >
              <span className="absolute -right-[33px] top-[7px] h-[11px] w-[11px] rounded-full border-[3px] border-white bg-primary shadow-[0_0_0_2px_#165FAE]" />
              <h4 className="text-[16px] font-[600] text-blackGrey">تنفيذ التصميم الرخامي</h4>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <span className="absolute -right-[33px] top-[7px] h-[11px] w-[11px] rounded-full border-[3px] border-white bg-primary shadow-[0_0_0_2px_#165FAE]" />
              <h4 className="text-[16px] font-[600] text-blackGrey">تطبيق طبقات الإيبوكسي النهائية</h4>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}