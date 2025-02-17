import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router";
import {
  handleCloseModal,
  handleNavigateToPickCategory,
  handleQuitGame,
} from "./components/useableFunctions";
import { useEffect, useState } from "react";

const Modal = () => {
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();
  const { toggleModal, isGameWon, isGuessedComplete, lives } = useSelector(
    (state: RootState) => state.game,
  );
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (toggleModal) {
      if (isGuessedComplete) {
        // Delay the modal for 2 seconds only if the game is won
        const timer = setTimeout(() => {
          setShowModal(true);
        }, 1500);

        return () => clearTimeout(timer);
      } else {
        setShowModal(true);
      }
    } else {
      setShowModal(false);
    }
  }, [toggleModal, isGameWon]);

  if (!showModal) {
    return null;
  }

  console.log("is game won", isGameWon);
  console.log("toggleModal", toggleModal);
  console.log(lives);

  return (
    <div className={""}>
      <div className="fixed bottom-0 left-0 right-0 top-0 z-[49] h-screen bg-gradient-to-b from-[#190131] to-[#282B96] opacity-[.7]"></div>
      <AnimatePresence>
        <motion.section
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            ease: "backInOut",
          }}
          className="fixed bottom-0 left-0 right-0 top-0 z-[50] flex h-screen items-center justify-center"
        >
          <div className="flex h-svh items-center justify-center">
            <div className="bg-custom-gradient relative flex h-[29.0625rem] w-[20.25rem] shrink-0 flex-col items-center justify-center gap-[4rem] rounded-[3rem] shadow-[inset_0px_-8px_0px_4px_#140E66,inset_0px_6px_0px_8px_#2463FF] md:h-[27.8rem] md:w-[37rem]">
              <img
                src={
                  isGuessedComplete
                    ? "/you-win.svg"
                    : lives === 0
                      ? "/you-lose.svg"
                      : "/pause.svg"
                }
                alt="Logo"
                className="absolute top-[-3rem] h-[7.21rem] w-[15.65844rem] md:top-[-4rem]"
              />

              <div className="flex translate-y-10 flex-col items-center justify-center gap-[2rem] md:translate-y-7">
                <Button
                  name="continue"
                  className="uppercase"
                  onClick={() =>
                    handleCloseModal(
                      dispatch,
                      navigate,
                      isGuessedComplete,
                      lives,
                    )
                  }
                />
                <Button
                  name="new category"
                  className="uppercase"
                  onClick={() =>
                    handleNavigateToPickCategory(dispatch, navigate)
                  }
                />

                <Button
                  name="quit game"
                  onClick={() => handleQuitGame(dispatch, navigate)}
                  className="bg-gradient-to-b from-[#FE71FE] via-[#FE71FE] to-[#7199FF] uppercase shadow-[inset_0px_-2px_0px_3px_#140E66,inset_0px_1px_0px_6px_#C642FB]"
                />
              </div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>
    </div>
  );
};

export default Modal;
