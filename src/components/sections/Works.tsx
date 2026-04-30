import { motion } from "framer-motion";
import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.35, 0.65)}>
      <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[320px]">
        <div className="relative h-[220px] w-full overflow-hidden rounded-2xl bg-[#0f1527]">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
            onError={(e) => {
              const target = e.currentTarget;
              target.src = "/logo.png";
              target.className = "h-full w-full object-contain p-8";
            }}
          />

          <div className="absolute inset-0 m-3 flex justify-end">
            <button
              type="button"
              onClick={() => window.open(sourceCodeLink, "_blank")}
              className="black-gradient flex h-10 w-10 items-center justify-center rounded-full"
            >
              <img
                src={github}
                alt="github"
                className="h-1/2 w-1/2 object-contain"
              />
            </button>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-[22px] font-bold text-white">{name}</h3>
          <p className="text-secondary mt-2 text-[14px] leading-6">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
