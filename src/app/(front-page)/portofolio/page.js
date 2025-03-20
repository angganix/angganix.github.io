import BreadCrumb from "@/components/widgets/BreadCrumb";
import ViewPortofolio from "@/components/widgets/ViewPortofolio";
import React from "react";

export const metadata = {
  title: `Portofolio - ${process.env.NEXT_PUBLIC_APP_NAME}`,
};

const Portofolio = () => {
  const list = [
    {
      title: "Arief Media",
      image: "/images/arief-media.png",
      category: "Company Profile",
      stack: ["Wordpress"],
      link: "https://ariefmedia.com/",
    },
    {
      title: "Grand Madani Residence",
      image: "/images/grand-madani.png",
      category: "Company Profile",
      stack: ["Wordpress"],
      link: "https://grandmadaniresidence.com/",
    },
    {
      title: "Namanya ID",
      image: "/images/namanya.webp",
      category: "PPOB Topup Diamond MLBB",
      stack: [
        "Wordpress",
        "Duitku Payment Gateway (API)",
        "VIP Reseller (API)",
        "Bootstrap CSS",
      ],
    },
    {
      title: "Bakmi Buncit",
      image: "/images/bakmi-buncit.webp",
      category: "Company Profile",
      stack: ["NextJS", "React", "SwiperJS", "TailwindCSS"],
      link: "https://bakmibuncit.com/",
    },
    {
      title: "Maxindo Mitra Solusi",
      image: "/images/maxindo.webp",
      category: "Company Profile",
      stack: ["VueJS", "PHP", "MySQL", "Bootstrap CSS"],
      link: "https://maxindo.net.id/",
    },
    {
      title: "HRIS (Human Resource Information System)",
      image: "/images/hris.webp",
      category: "Employee Management Application",
      stack: [
        "VueJS",
        "React",
        "PHP",
        "MySQL",
        "Whatsapp Web JS",
        "jQuery",
        "Bootstrap CSS",
      ],
    },
    {
      title: "AyumylumStore",
      image: "/images/ayumylumstore.webp",
      category: "Ecommerce",
      stack: ["Laravel", "React", "Firebase", "MySQL", "Bootstrap CSS"],
    },
    {
      title: "DrSpces Reward",
      image: "/images/drspecs.png",
      category: "Cashback Reward App",
      stack: [
        "Laravel",
        "React",
        "Firebase",
        "MySQL",
        "SocketIO",
        "TailwindCSS",
      ],
      link: "https://drspecsindonesia.com",
    },
    {
      title: "Server Administration Application",
      image: "/images/data-server-management.webp",
      category: "Server Administration",
      stack: [
        "PHP",
        "VueJS",
        "LNMS (API)",
        "Firebase",
        "Uptime Robot",
        "Bootstrap CSS",
      ],
    },
    {
      title: "Device Monitoring",
      image: "/images/device-monitoring.webp",
      category: "Network Monitoring",
      stack: ["React", "ExpressJS", "MySQL", "Socket.IO", "Bootstrap CSS"],
    },
    {
      title: "Anime List",
      image: "/images/anime-list.webp",
      category: "Tools",
      stack: ["React", "GraphQL", "Styled Components"],
      link: "https://anime-list-collections.vercel.app/",
    },
    {
      title: "Aplikasi Mekanik",
      image: "/images/mekanik-app.webp",
      category: "Inventory",
      stack: ["React", "ExpressJS", "MySQL", "TailwindCSS"],
    },
  ];

  return (
    <div className="px-4 lg:px-28">
      <div className="py-8">
        <div className="flex lg:justify-between lg:items-center w-full mb-8 lg:mb-12 flex-col lg:flex-row gap-2">
          <h1 className="text-2xl font-semibold">Angga NIX Live Project</h1>
          <BreadCrumb activeText="Portofolio" />
        </div>
        <div className="flex flex-col gap-8 items-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full max-w-6xl">
            {list.map((item, index) => (
              <ViewPortofolio item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
