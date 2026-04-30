import { motion } from "framer-motion";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const Contact = () => {
  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <div className="text-secondary mt-6 space-y-4 text-[16px] leading-8">
          <p>
            Saya terbuka untuk rekrutmen kapan saja (Open Hire Anytime) untuk
            posisi Full Stack Web Developer, Frontend Developer, atau project
            contract/freelance pengembangan website dan sistem bisnis.
          </p>
          <p>
            <span className="font-semibold text-white">Email:</span>{" "}
            mariezibrahim93@gmail.com
            <br />
            <span className="font-semibold text-white">WhatsApp:</span>{" "}
            +6282298511930
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:mariezibrahim93@gmail.com"
            className="rounded-xl bg-[#2563eb] px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#1d4ed8]"
          >
            Kirim Email
          </a>
          <a
            href="https://wa.me/6282298511930?text=Halo%20Maris%2C%20kami%20ingin%20hire%20kamu"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-[#16a34a] px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#15803d]"
          >
            Chat WhatsApp
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
