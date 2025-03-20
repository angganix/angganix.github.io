import BreadCrumb from "@/components/widgets/BreadCrumb";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: `About - ${process.env.NEXT_PUBLIC_APP_NAME}`,
};

const About = () => {
  return (
    <div className="px-4 lg:px-28">
      <div className="py-8">
        <div className="flex lg:justify-between lg:items-center w-full mb-8 lg:mb-24 flex-col lg:flex-row gap-2">
          <h1 className="text-2xl font-semibold">About Angga NIX</h1>
          <BreadCrumb activeText="About" />
        </div>
        <div className="flex flex-col gap-8 items-center">
          <div className="rounded-full overflow-hidden bg-gradient-to-t shadow-lg shadow-gray-800/25 from-lime-200 via-lime-100 to-transparent relative w-64 h-64 mt-8 lg:mt-0 mb-3">
            <Image
              alt={process.env.NEXT_PUBLIC_APP_DESCRIPTION}
              src="/images/profile.jpg"
              sizes="100vw"
              className="transform rotate-2 object-cover"
              fill={true}
              priority="high"
            />
          </div>
          <h1 className="text-5xl font-semibold">
            {process.env.NEXT_PUBLIC_APP_NAME}
          </h1>
          <div className="bg-white rounded-lg shadow-lg shadow-gray-200/20 p-4 lg:p-8 transform transition-all">
            <p className="text-lg text-gray-700 leading-relaxed">
              Halo! Saya seorang Fullstack Web Developer dengan pengalaman lebih
              dari 10 tahun di dunia teknologi. Saya lulusan Sistem Informasi
              (SI) dan telah menggeluti dunia pengembangan aplikasi sejak awal
              karir saya. Selama ini, saya sangat menikmati proses belajar dan
              berkontribusi dalam menciptakan solusi teknologi yang bermanfaat.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Saya pernah membuat banyak aplikasi, baik itu aplikasi web,
              desktop, maupun aplikasi smartphone. Beberapa proyek yang saya
              kerjakan masih digunakan hingga saat ini, dan itu menjadi
              kebanggaan tersendiri bagi saya. Saya selalu berusaha untuk
              membuat aplikasi yang tidak hanya berfungsi dengan baik, tetapi
              juga mudah digunakan oleh pengguna.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Dalam perjalanan karir saya, saya pernah menjadi mentor di sebuah
              bootcamp Fullstack JavaScript, di mana saya mengajarkan React dan
              Node.js kepada para peserta. Pengalaman ini sangat berharga karena
              saya bisa berbagi pengetahuan sekaligus belajar dari
              pertanyaan-pertanyaan menarik yang diajukan oleh peserta.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Saya menguasai berbagai teknologi terkini yang banyak digunakan di
              industri, seperti{" "}
              <span className="font-semibold text-lime-600">Laravel</span>,{" "}
              <span className="font-semibold text-lime-600">React</span>,{" "}
              <span className="font-semibold text-lime-600">Vue</span>,{" "}
              <span className="font-semibold text-lime-600">Next.js</span>, dan{" "}
              <span className="font-semibold text-lime-600">Nuxt.js</span>. Saya
              juga familiar dengan{" "}
              <span className="font-semibold text-lime-600">GraphQL</span>,{" "}
              <span className="font-semibold text-lime-600">Apache Kafka</span>,
              dan <span className="font-semibold text-lime-600">Firebase</span>{" "}
              untuk membangun aplikasi yang scalable dan efisien.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Selain mengembangkan aplikasi dari nol, saya juga sering melakukan
              integrasi dengan pihak ketiga menggunakan API. Ini memungkinkan
              saya untuk menghubungkan satu atau lebih aplikasi, sehingga data
              dapat tersinkronisasi dengan baik dan terpusat. Hal ini sangat
              penting untuk memastikan konsistensi data di berbagai platform.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Saya percaya bahwa teknologi harus bisa memudahkan kehidupan
              manusia. Oleh karena itu, saya selalu berusaha untuk membuat
              solusi yang sederhana namun efektif. Saya tidak suka membuat
              sesuatu yang berlebihan atau terlalu rumit jika sebenarnya bisa
              diselesaikan dengan cara yang lebih sederhana.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Salah satu prinsip yang saya pegang adalah `less is more`. Saya
              lebih memilih fokus pada kualitas daripada kuantitas. Misalnya,
              saya lebih suka membuat fitur yang benar-benar dibutuhkan dan
              memastikan fitur tersebut bekerja dengan sempurna, daripada
              menambahkan banyak fitur yang justru membuat aplikasi menjadi
              berat dan sulit dikelola.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Saya juga sangat terbuka dengan kolaborasi dan diskusi. Saya
              percaya bahwa ide-ide terbaik sering muncul dari diskusi dengan
              orang lain. Jika Anda memiliki proyek atau ide yang ingin
              dikembangkan, jangan ragu untuk menghubungi saya. Saya selalu
              senang mendengar cerita dan tantangan baru.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Di luar pekerjaan, saya suka mengikuti perkembangan teknologi
              terbaru dan mencoba tools atau framework baru. Ini membantu saya
              untuk terus berkembang dan tidak ketinggalan dengan tren industri.
              Saya juga senang berbagi pengetahuan melalui blog atau forum
              diskusi.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Terima kasih sudah membaca sedikit cerita tentang saya. Jika Anda
              tertarik untuk berkolaborasi atau sekadar berdiskusi tentang
              teknologi, jangan ragu untuk menghubungi saya. Saya selalu senang
              bertemu dengan orang-orang yang memiliki passion yang sama di
              dunia teknologi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
