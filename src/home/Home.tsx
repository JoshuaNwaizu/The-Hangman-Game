import { Link } from "react-router";
import Button from "../components/Button";
import PlayButton from "../components/PlayButton";

const Home = () => {
  return (
    <section className="flex h-svh items-center justify-center">
      <div className="bg-custom-gradient relative flex h-[29.0625rem] w-[20.25rem] shrink-0 flex-col items-center justify-center gap-[4rem] rounded-[3rem] shadow-[inset_0px_-8px_0px_4px_#140E66,inset_0px_6px_0px_8px_#2463FF]">
        <img
          src="/images/logo.svg"
          alt="Logo"
          className="absolute top-[-3rem] h-[7.21rem] w-[15.65844rem]"
        />
        <div className="flex translate-y-10 flex-col items-center justify-center gap-[3.5rem]">
          <Link to="/pick-a-category">
            <PlayButton />
          </Link>
          <Link to="/how-to-play">
            <Button name="how to play" className="uppercase" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
