import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={14}
    tiltMaxAngleY={14}
    glareColor="#6ee7ff"
    glareMaxOpacity={0.15}
    transitionSpeed={1200}
    className="max-w-[250px] w-full xs:w-[250px]"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.65)}
      className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
    >
      <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-center rounded-[20px] px-8 py-6">
        <h3 className="text-center text-[19px] font-bold text-white">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.about.content}
      </motion.p>

      <motion.details
        variants={fadeIn("up", "spring", 0.15, 0.75)}
        className="bg-black-100 mt-8 max-w-4xl rounded-2xl border border-[#2a3554] p-5"
      >
        <summary className="cursor-pointer text-[15px] font-semibold text-white">
          Klik untuk lihat detail data diri & pengalaman
        </summary>
        <div className="text-secondary mt-4 space-y-2 text-[14px] leading-7">
          <p>
            <span className="font-semibold text-white">Alamat lengkap:</span> Kp.
            Cipangisikan RT 02 RW 11, Desa Warnasari, Kecamatan Pangalengan,
            Kabupaten Bandung, Jawa Barat 40378, Indonesia.
          </p>
          <p>
            <span className="font-semibold text-white">Lama bekerja:</span> 2018 -
            sekarang.
          </p>
          <p>
            <span className="font-semibold text-white">Kolaborasi:</span> Telah
            mengerjakan website dan sistem bisnis untuk beberapa perusahaan dalam
            negeri termasuk KPBS Mitra Ternak.
          </p>
        </div>
      </motion.details>

      <div className="mt-16 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
