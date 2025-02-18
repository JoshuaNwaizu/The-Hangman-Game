import Header from "./components/Header";
import Inputs from "./components/Inputs";
import KeyPad from "./components/KeyPad";
import useKeyboard from "./components/useKeyboard";
import Modal from "./Modal";

const InGame = () => {
  useKeyboard();
  return (
    <div className="flex flex-col items-center justify-center gap-[5rem]">
      <Header />
      <div className="bg-custom-gradient-how-to-play fixed bottom-0 left-0 right-0 top-0 -z-30"></div>
      <Inputs />
      <KeyPad />
      <Modal />
    </div>
  );
};

export default InGame;
