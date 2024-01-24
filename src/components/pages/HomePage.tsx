import { loremIpsom } from "@/data/dialogue";
import { motion } from "framer-motion";
import Button from "../ImageButton";
import { LeftArrow, RightArrow } from "@/images/imageExport.js";

const HomePage = () => {
  return (
    <div
      id="Container"
      className="mx-auto flex h-full w-[1000px] flex-col py-10"
    >
      <div id="Header" className=" flex justify-between text-xl font-bold">
        <code>Math 102 Creative work</code>
        <code>Tjit528</code>
      </div>

      <div
        id="Content"
        className="flex h-full flex-col items-center justify-center gap-10"
      >
        <motion.div className="w-[600px] outline"></motion.div>
        <div>
          {loremIpsom.map((dialogue, index) => (
            <p key={index}>{dialogue}</p>
          ))}
        </div>
        <div className="flex">
          <Button
            image={LeftArrow}
            text="back"
            OnClick={() => {
              console.log("back");
            }}
          />
          <Button
            className="flex-row-reverse"
            image={RightArrow}
            text="next"
            OnClick={() => {
              console.log("next");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;