import Image from "next/image";

const clients = [
  {
    id: 1,
    name: "اسم العميل الأول",
    logo: "/images/b-1.png",
  },
  {
    id: 2,
    name: "اسم العميل الثاني",
    logo: "/images/b-1.png",

  },
  {
    id: 3,
    name: "اسم العميل الثالث",
     logo: "/images/b-1.png",

  },

];

export default function ClientsSlider() {
  return (
    <section className="overflow-hidden border-b border-black/[0.05] bg-white py-7" aria-labelledby="trusted-clients-title">
      <div className="container flex items-center gap-8 lg:gap-[60px]">

        {/* Title */}
        <div className="w-[100px] shrink-0 text-start lg:w-[120px]">
          <h2 id="trusted-clients-title" className="text-custom20 font-[700] leading-[1.5] text-grey">
            عملاء
            <span className="block font-[700]">يثقون بنا</span>
          </h2>
        </div>

        {/* Slider */}
        <div className="min-w-0 flex-1 overflow-hidden" dir="ltr">
          <div className="clients-track">

            {/* Original */}
            <ClientsGroup clients={clients} />

            {/* Duplicate */}
            <ClientsGroup clients={clients} duplicate />

          </div>
        </div>

      </div>
    </section>
  );
}

function ClientsGroup({ clients, duplicate = false }) {
  return (
    <div className="clients-group" aria-hidden={duplicate ? "true" : undefined}>
      {clients.map((client) => (
        <div key={`${duplicate ? "copy-" : ""}${client.id}`} className="flex h-[55px] w-[130px] shrink-0 items-center justify-center lg:w-[150px]">
          <Image
            src={client.logo}
            alt={duplicate ? "" : client.name}
            width={150}
            height={55}
            loading="lazy"
            className="max-h-[55px] w-auto max-w-[150px] object-contain grayscale opacity-60 transition-[filter,opacity] duration-300 hover:grayscale-0 hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );
}