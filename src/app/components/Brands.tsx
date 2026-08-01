import Image from "next/image";
import type { Client } from "@/app/types/home";

interface BrandsSliderProps {
  locale?: string;
  clients?: Client[];
}

export default function BrandsSlider({ locale = "ar", clients = [] }: BrandsSliderProps) {
  const isArabic = locale === "ar";

  if (clients.length === 0) return null;

  return (
    <section dir={locale} className="overflow-hidden border-b border-black/[0.05] bg-white py-7" aria-labelledby="trusted-clients-title">
      <div className="container flex items-center gap-6 lg:gap-[60px]">
        <div className="w-[100px] shrink-0 text-start lg:w-[120px]">
          <h2 id="trusted-clients-title" className="text-custom20 font-[700] leading-[1.5] text-grey">
            {isArabic ? (
              <>
                عملاء
                <span className="block">يثقون بنا</span>
              </>
            ) : (
              <>
                Clients
                <span className="block">trust us</span>
              </>
            )}
          </h2>
        </div>

        <div dir={locale} className="min-w-0 flex-1 overflow-hidden">
          <div className={`clients-track ${isArabic ? "" : "clients-track-reverse"}`}>
            <ClientsGroup clients={clients} />
            <ClientsGroup clients={clients} hidden />
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientsGroup({ clients, hidden = false }: { clients: Client[]; hidden?: boolean }) {
  return (
    <div className="clients-group" aria-hidden={hidden}>
      {clients.map((client, index) => (
        <div key={index} className="flex h-[55px] w-[130px] shrink-0 items-center justify-center lg:w-[150px]">
          <Image src={client.logo} alt={"Client logo"} width={150} height={55} loading="lazy" className="h-auto max-h-[55px] w-auto max-w-[150px] object-contain transition duration-300" />
        </div>
      ))}
    </div>
  );
}