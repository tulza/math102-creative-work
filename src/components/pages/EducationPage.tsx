import { parallax } from "@/styles/parallaxStyle";
import { useContext } from "react";
import { ThemeContext, TransitionContext } from "@/App";
import useMousePos from "@/hooks/useMousePos";
import Button from "@components/Button";
import Card from "@components/Card";
import InvertBypass from "@components/InvertBypass";

const EducationPage = () => {
  const { mouseX, mouseY } = useMousePos();
  const { handleTransitionTo } = useContext(TransitionContext);
  const { isDarkmode, handleToggleTheme } = useContext(ThemeContext);
  return (
    <div className="bold relative flex h-full w-full select-none bg-white p-10">
      <Button
        text={isDarkmode ? "Light Mode" : "Dark Mode"}
        className="absolute right-10 top-10 z-30"
        style={parallax(mouseX, mouseY, 0.01)}
        onClick={handleToggleTheme}
      />
      <Button
        text="Back"
        className="absolute left-10 top-10 z-30"
        style={parallax(mouseX, mouseY, 0.01)}
        onClick={() => {
          handleTransitionTo("main");
        }}
      />
      <div
        className="light mt-20 flex w-full flex-col items-center px-10"
        style={parallax(mouseX, mouseY, 0.02)}
      >
        <p className="bold text-3xl">My major is computer science.</p>
        <p className="bold mb-4 text-xl">
          so, how does it apply to my courses and studies?
        </p>
        <p>Overall computer science is a fairly math heavy field</p>
        <p>so, am I happy about it?</p>
        <p className="bold my-4">
          well here are some of my takes of math previous classes.{" "}
          <InvertBypass>🔥</InvertBypass>
        </p>
        <hr className=" mb-10 w-full border-DarkGray" />
        <div
          className="mb-4 flex justify-center gap-4"
          style={parallax(mouseX, mouseY, 0.02)}
        >
          <Card
            text="Compsci130"
            description="while the math were very basic, all logics use math"
          />
          <Card
            text="Physics140"
            description="uses of boolean in this course were definitely interesting as simple as it is, the many way it could be expressed and use were very interesting"
          />
          <Card
            text="Stats101"
            description="Math is very much expressed in percentage in this course, and the use of it to forecast events, I found that pretty cool"
          />
        </div>
        <div
          className="flex justify-center gap-4"
          style={parallax(mouseX, mouseY, 0.01)}
        >
          <Card
            text="Compsci110"
            description="boolean algebra used were far more advance and have cause many headache i rate math 10/10 "
          />
          <Card
            text="so what do i think?"
            description="In at least compsci, math is everywhere, and I already use It. It really subjective and depends on how creative I use or apply it to anything"
          />
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
