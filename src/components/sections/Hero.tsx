import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { config } from "../../constants/config";

const Hero = () => {
  return (
    <section className="relative mx-auto w-full pb-16 pt-28 sm:pt-36">
      <div
        className={`mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div className="w-full rounded-2xl bg-[#151030] p-6 shadow-xl">
          <img
            src="/profile-maris.jpg"
            alt="Maris Ibrahim"
            className="mb-5 h-20 w-20 rounded-2xl border-2 border-[#6b7cff] object-cover shadow-lg"
          />
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="breathing-name">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="mailto:mariezibrahim93@gmail.com"
              className="rounded-xl bg-[#2563eb] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#1d4ed8]"
            >
              Email
            </a>
            <a
              href="https://wa.me/6282298511930?text=Halo%20Maris%2C%20kami%20tertarik%20untuk%20hire%20kamu"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-[#16a34a] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#15803d]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="xs:bottom-10 mt-10 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
