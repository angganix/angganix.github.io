import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaHand,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="hero"
      className="px-4 lg:px-0 bg-gradient-to-b from-white via-lime-50 to-lime-100 overflow-hidden py-16"
    >
      <div className="lg:max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 align-middle">
          <div className="col-span-12 lg:col-span-7 py-12 lg:py-24 order-last lg:order-first">
            <div className="flex flex-col justify-center h-full">
              <h1 className="text-2xl lg:text-3xl font-semibold mb-6">
                <FaHand
                  className="-rotate-45 text-yellow-400 inline"
                  size={32}
                />{" "}
                Hi, Saya Angga NIX
                <br />
                Full Stack Developer.
              </h1>
              <p className="font-light mb-5">
                Seorang pengembang web dan aplikasi mobile cross platform yang
                telah{" "}
                <strong>
                  bekerja lebih dari 11 tahun dalam dunia teknologi
                </strong>
                . mengemban tugas di berbagai pengalaman seperti{" "}
                <strong>
                  {" "}
                  Network Engineer, Server Administrator, dan Software Engineer
                </strong>
                .
              </p>
              <div className="flex justify-center lg:justify-start gap-x-4">
                <Link
                  href="/about"
                  className="group p-3 px-4 rounded-lg border-2 border-lime-600 font-medium text-lime-600 hover:bg-lime-600 hover:text-white transition-all duration-200 ease-in-out flex items-center gap-x-1.5"
                >
                  <span>Tentang Saya</span>
                  <FaArrowRight className="group-hover:ml-1.5 transition-all duration-200 ease-in-out hidden lg:block" />
                </Link>
                <Link
                  href="/contact"
                  className="group p-3 px-4 rounded-lg border-0 bg-lime-600 text-white font-medium hover:bg-lime-700 transition-all duration-200 ease-in-out flex items-center gap-x-1.5"
                >
                  <FaPhone className="group-hover:mr-1.5 transition-all duration-200 ease-in-out hidden lg:block" />
                  <span>Hubungi Saya</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 order-first lg:order-last">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="rounded-full overflow-hidden bg-gradient-to-t from-lime-200 via-lime-100 to-transparent relative w-72 h-72 mt-8 lg:mt-0 mb-3">
                <Image
                  alt={process.env.NEXT_PUBLIC_APP_DESCRIPTION}
                  src="/images/profile.png"
                  sizes="100vw"
                  className="transform rotate-2"
                  fill={true}
                  priority="high"
                />
              </div>
              <div className="flex items-center gap-x-1 justify-center">
                <Link
                  target="_blank"
                  href="https://github.com/angganix"
                  className="rounded-full p-2 border border-white bg-white/50 hover:bg-white hover:shadow-sm transition-all duration-200 ease-in-out"
                  title="Github"
                >
                  <FaGithub size={28} />
                </Link>
                <Link
                  target="_blank"
                  href="https://linkedin.com/in/anggaekopratama"
                  className="rounded-full p-2 border border-white bg-white/50 hover:bg-white hover:shadow-sm transition-all duration-200 ease-in-out"
                  title="Linkedin"
                >
                  <FaLinkedin size={28} className="text-blue-600" />
                </Link>
                <Link
                  target="_blank"
                  href="https://instagram.com/angga_nix"
                  className="rounded-full p-2 border border-white bg-white/50 hover:bg-white hover:shadow-sm transition-all duration-200 ease-in-out"
                  title="Instagram"
                >
                  <FaInstagram size={28} className="text-rose-600" />
                </Link>
                <Link
                  target="_blank"
                  href="https://facebook.com/angga.ultimated"
                  className="rounded-full p-2 border border-white bg-white/50 hover:bg-white hover:shadow-sm transition-all duration-200 ease-in-out"
                  title="Facebook"
                >
                  <FaFacebook size={28} className="text-blue-600" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/channel/UCt-l89JPfsFZsTlT2XoWvCw"
                  className="rounded-full p-2 border border-white bg-white/50 hover:bg-white hover:shadow-sm transition-all duration-200 ease-in-out"
                  title="Youtube"
                >
                  <FaYoutube size={28} className="text-red-600" />
                </Link>
                <Link
                  target="_blank"
                  href="https://wa.me/6285951218906"
                  className="rounded-full p-2 border border-white bg-white/50 hover:bg-white hover:shadow-sm transition-all duration-200 ease-in-out"
                  title="Whatsapp"
                >
                  <FaWhatsapp size={28} className="text-lime-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
