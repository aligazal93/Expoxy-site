"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const categories = [
  { id: "all", name: "الكل" },
  { id: "3d", name: "إيبوكسي 3D" },
  { id: "residential", name: "رخامي" },
  { id: "metallic", name: "ميتالِك" },
  { id: "offices", name: "مكاتب" },
  { id: "bathrooms", name: "حمامات" },
  { id: "pools", name: "مسابح" },
];

const designs = [
  {
    id: 1,
    code: "AE-GD-001",
    title: "ألواح المحيط 3D",
    type: "رخامي",
    suitableFor: "الصالات، المداخل",
    category: "3d",
    image: "/images/proj-1.png",
  },
  {
    id: 2,
    code: "AE-GD-002",
    title: "لؤلؤ ميتاليك فضي",
    type: "رخامي",
    suitableFor: "الصالات، المداخل",
    category: "metallic",
    image: "/images/proj-2.png",
  },
  {
    id: 3,
    code: "AE-GD-003",
    title: "عروق ذهبية على عاج",
    type: "رخامي",
    suitableFor: "الصالات، المداخل",
    category: "residential",
    image: "/images/proj-3.png",
  },
  {
    id: 4,
    code: "AE-GD-004",
    title: "كريمي هادئ",
    type: "رخامي",
    suitableFor: "الصالات، المداخل",
    category: "residential",
    image: "/images/proj-1.png",
  },
  {
    id: 5,
    code: "AE-GD-005",
    title: "بيرل أبيض بعروق ذهبية",
    type: "رخامي",
    suitableFor: "الصالات، المداخل",
    category: "metallic",
    image: "/images/proj-2.png",
  },
  {
    id: 6,
    code: "AE-GD-006",
    title: "أونيكس أسود بعروق ذهب",
    type: "رخامي",
    suitableFor: "الصالات، المداخل",
    category: "offices",
    image: "/images/proj-3.png",
  },
];

export default function DesignCatalogSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredDesigns = useMemo(() => {
    if (activeTab === "all") return designs;

    return designs.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <section className="py-[70px] lg:py-[100px]" dir="rtl">
      <div className="container">
        <div className="mx-auto mb-8 max-w-[720px] text-center">
          <span className="mb-2 block text-[14px] font-medium text-gray-400">
            كتالوج التصاميم
          </span>

          <h2 className="mb-3 text-[28px] font-bold leading-[1.4] text-[#15232d] md:text-[36px]">
            اختر التصميم الذي يلامس ذوقك
          </h2>

          <p className="text-[14px] leading-7 text-gray-500 md:text-[15px]">
            مجموعة مختارة من التصاميم المتوفرة، حدد تصميمك وأرسله معنا في
            طلب المعاينة.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => {
            const isActive = activeTab === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveTab(category.id)}
                className={`
                  rounded-full border px-8 py-3
                  text-[13px] font-medium
                  transition-all duration-300
                  cursor-pointer
                  ${
                    isActive
                      ? "border-[#13a9ea] bg-[#13a9ea] text-white"
                      : "border-[#d9e1e5] bg-white text-[#7c8991] hover:bg-primary hover:text-white"
                  }
                `}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div
          key={activeTab}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredDesigns.map((design) => (
            <DesignCard key={design.id} design={design} />
          ))}
        </div>

        {filteredDesigns.length === 0 && (
          <div className="py-16 text-center text-gray-400">
            لا توجد تصميمات في هذا القسم حاليًا.
          </div>
        )}
      </div>
    </section>
  );
}

function DesignCard({ design }) {
  return (
    <article
      className="
        group overflow-hidden rounded-[22px]
        border border-[#e3ded8]
        bg-white
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]
      "
    >
      {/* Image */}
      <div className="relative aspect-[1.08/1] overflow-hidden">
        <Image
          src={design.image}
          alt={design.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <span
          className="
            absolute left-4 top-4
            rounded-full border border-[#19aeed]
            bg-white px-7 py-3
            text-custom14 font-semibold
            text-[#19aeed]
          "
        >
          {design.code}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="mb-2 block text-[14px] text-gray">
          {design.type}
        </span>

        <h3 className="mb-2 text-[20px] font-bold text-[#15232d]">
          {design.title}
        </h3>

        <p className="mb-5 text-[14px] text-gray-500">
          مناسب لـ: {design.suitableFor}
        </p>

        <div className="flex justify-start">
          <button
            type="button"
            className="
              rounded-full border border-[#18aeef]
              px-6 py-3 cursor-pointer
              text-[14px] font-medium text-[#18aeef]
              transition-all duration-300
              hover:bg-[#18aeef] hover:text-white
            "
          >
            أريد هذا التصميم لأرضيتي
          </button>
        </div>
      </div>
    </article>
  );
}