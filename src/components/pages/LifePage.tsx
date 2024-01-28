import { parallax } from "@/styles/parallaxStyle";
import Button from "../Button";
import { useContext } from "react";
import { ThemeContext, TransitionContext } from "@/App";
import useMousePos from "@/hooks/useMousePos";
import InvertBypass from "../invertBypass";

const LifePage = () => {
  const { mouseX, mouseY } = useMousePos();
  const { handleTransitionTo } = useContext(TransitionContext);
  const { isDarkmode, handleToggleTheme } = useContext(ThemeContext);
  return (
    <div className="bold relative flex h-full w-full select-none flex-col overflow-x-hidden bg-white p-10">
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
      <Button
        text="Return"
        className=" fixed bottom-10 right-10 z-30 w-max px-20"
        style={parallax(mouseX, mouseY, 0.03)}
        onClick={() => {
          handleTransitionTo("main");
        }}
      />
      <hr className="border-Gray mb-10 mt-20 w-full"></hr>
      <div
        className="mx-auto h-full w-[750px] select-text outline-white"
        style={parallax(mouseX, mouseY, 0.005)}
      >
        <p className="text-3xl" style={parallax(mouseX, mouseY, 0.01)}>
          My experience with math <InvertBypass>🔢📏</InvertBypass>
        </p>
        <p className="text-Gray light text-xl">
          an overall evaluation of my experience with math from years of it in
          my daily life and education
        </p>
        <p className="text-DarkGray text-sm">
          Tjit528&emsp;·&emsp;29/01/2024&emsp;·&emsp;1 min read
        </p>
        <hr className="border-Gray my-10"></hr>
        <div
          className="light flex flex-col gap-6"
          style={parallax(mouseX, mouseY, 0.005)}
        >
          <p>
            Throughout my life, math had been a very crucial component in
            everything. From everyday basic tasks and through every stage of my
            education,{" "}
            <span className="bold">math could be found anywhere I go to</span>.
          </p>
          <p>
            Starting from elementary when I thoughts of maths as a fun game
            where I would just write the number, put in a few plus or minus
            signs and see and calculate what it would add up to, those were good
            days when things were simple. <InvertBypass>😡</InvertBypass>
          </p>
          <p>
            In early years of highschool, I had struggled with math since many
            concepts were far too difficult for me to understand I couldn't
            catch up, although it proved itself to me to very helpful in many of
            my hobbies such as{" "}
            <span className="bold">video gaming and cooking.</span> I would plan
            out how much of something I would need and execute it out whether it
            would be my game quest or measuring ingredients, and all of this
            could be thanks to math.
          </p>
          <p>
            Now that I have started university and had lived alone for a period
            math had help me accomplished many basic tasks and needs. and with
            my passion toward computer science, I was able incorporate many more
            of the advance concept that was taught in school, and into my games
            and websites projects such as this!
          </p>
          <p>
            Overall math is great for what I do!{" "}
            <span className="bold">ᕕ( ᐛ )ᕗ</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LifePage;
