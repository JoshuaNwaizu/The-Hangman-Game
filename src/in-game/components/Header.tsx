import { useParams } from "react-router";
import Menu from "./Menu";
import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../features/gameSlice";

const Header = () => {
  const { category } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const { lives } = useSelector((state: RootState) => state.game);
  const lifeBarWidth = `${(lives / 5) * 3.125}rem`;
  return (
    <nav className="fixed left-0 top-3 z-10 flex h-[4.5rem] w-full justify-center backdrop-blur-sm">
      <div className="flex w-[21.25rem] shrink-0 items-center justify-between">
        <div className="flex items-center gap-4">
          <Menu onClick={() => dispatch(openModal())} />
          <h2 className="text-[2.5rem] capitalize leading-[3rem] tracking-[-0.0125rem] text-white">
            {category}
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex w-[3.5625rem] items-start rounded-[6rem] bg-white p-[0.25rem]">
            <div
              style={{ width: lifeBarWidth }}
              className="h-[0.5rem] shrink-0 rounded-[6rem] bg-[#261676]"
            ></div>
          </div>
          <span>
            <img
              src="/images/icon-heart.svg"
              alt="life"
              className="h-[1.5rem] w-[1.63488rem]"
            />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
