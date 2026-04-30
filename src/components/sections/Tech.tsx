import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { Header } from "../atoms/Header";

const languageLevels = [
  { name: "JavaScript", value: 92 },
  { name: "TypeScript", value: 84 },
  { name: "HTML/CSS", value: 90 },
  { name: "Node.js", value: 80 },
  { name: "Python", value: 70 },
];

const Tech = () => {
  return (
    <>
      <Header
        useMotion={true}
        p="Kemampuan Teknis"
        h2="Diagram Bahasa Pemrograman."
      />

      <div className="bg-black-100 mt-8 rounded-2xl p-6">
        <div className="space-y-4">
          {languageLevels.map((item) => (
            <div key={item.name}>
              <div className="mb-2 flex items-center justify-between text-sm text-white">
                <span>{item.name}</span>
                <span>{item.value}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-[#2a3554]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
