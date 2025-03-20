import BreadCrumb from "@/components/widgets/BreadCrumb";
import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export const metadata = {
  title: `Contact - ${process.env.NEXT_PUBLIC_APP_NAME}`,
};

const Contact = () => {
  // Data kontak dengan ikon dan link
  const contacts = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-12 h-12 text-[#0A66C2]" />,
      link: "https://linkedin.com/in/anggaekopratama",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-12 h-12 text-[#E4405F]" />,
      link: "https://instagram.com/angga_nix",
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="w-12 h-12 text-[#1877F2]" />,
      link: "https://facebook.com/angga.ultimated",
    },
    {
      name: "Youtube",
      icon: <FaYoutube className="w-12 h-12 text-[#FF0000]" />,
      link: "https://youtube.com/@musnix",
    },
    {
      name: "Github",
      icon: <FaGithub className="w-12 h-12 text-[#181717]" />,
      link: "https://github.com/angganix",
    },
    {
      name: "Whatsapp",
      icon: <FaWhatsapp className="w-12 h-12 text-[#25D366]" />,
      link: "https://wa.me/6285951218906?text=Saya ingin membuat aplikasi, bisakah bantu saya ?",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="w-12 h-12 text-[#EA4335]" />,
      link: "mailto:angganix@gmail.com",
    },
  ];

  return (
    <div className="px-4 lg:px-28">
      <div className="py-8">
        <div className="flex lg:justify-between lg:items-center w-full mb-8 lg:mb-24 flex-col lg:flex-row gap-2">
          <h1 className="text-2xl font-semibold">Hubungi Angga NIX</h1>
          <BreadCrumb activeText="Contact" />
        </div>
        <div className="flex flex-col gap-8 items-center">
          <div className="grid grid-cols-2 lg:grid-cols-7 gap-4 w-full max-w-6xl">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
              >
                <div className="mb-4">{contact.icon}</div>
                <p className="text-lg font-medium text-gray-700">
                  {contact.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
