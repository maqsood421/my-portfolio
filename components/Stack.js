import React from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";

const stackItems = [
  { id: 1, name: "React", icon: FaReact, color: "#61DAFB" },
  { id: 2, name: "Next.js", icon: TbBrandNextjs, color: "#000000" },
  { id: 3, name: "Node.js", icon: IoLogoNodejs, color: "#339933" },
  { id: 4, name: "Express.js", icon: SiExpress, color: "#000000" },
  { id: 5, name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { id: 6, name: "MySQL", icon: SiMysql, color: "#00758F" }
];

const Stack = () => {
  return (
    <section id="stack" className="py-16 glass">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-5xl text-gray-200 font-bold mb-4">My Stack</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {stackItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center flex-col rounded-xl p-4"
            >
              <div className="mb-4 bg-white/10 p-6 rounded-xl">
                {React.createElement(item.icon, {
                  className: "w-32 h-32",
                  style: { color: item.color }
                })}
              </div>
              <p className="text-gray-400 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
