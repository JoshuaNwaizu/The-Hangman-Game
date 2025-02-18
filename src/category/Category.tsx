import { Link } from "react-router";
import Nav from "../how-to-play/components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useEffect } from "react";
import { fetchData } from "../features/dataSlice";
import { setSelectedCategory } from "../features/gameSlice";
import { motion } from "framer-motion";

export interface DataType {
  categories: {
    movies: { name: string; selected: boolean }[];
    tvShows: { name: string; selected: boolean }[];
    countries: { name: string; selected: boolean }[];
    capitalCity: { name: string; selected: boolean }[];
    animals: { name: string; selected: boolean }[];
  };
}

export interface MainData {
  name: string;
  selected: boolean;
}

const categories: string[] = [
  "Movies",
  "TV Shows",
  "Countries",
  "Capital Cities",
  "Animals",
  "Sports",
];
const Category = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleFilterCategory = (category: keyof DataType["categories"]) => {
    if (data) {
      const filtered = data.categories[category];
      dispatch(setSelectedCategory(filtered));
    }
  };
  return (
    <div>
      <Nav img="/Pick-a-Category.svg" />
      <div className="bg-custom-gradient-how-to-play fixed bottom-0 left-0 right-0 top-0 -z-30"></div>
      <div className="mt-[8rem] md:mt-[15rem] md:flex md:flex-col md:items-center">
        <div className="md-w-[42.5rem] flex flex-col items-center gap-2.5 md:grid md:grid-cols-2 md:justify-center md:gap-[2rem] xl:grid xl:grid-cols-3">
          {categories.map((category, i) => (
            <motion.div
              key={category}
              initial={{ x: i % 2 === 0 ? "-20vw" : "20vw", opacity: 0 }}
              animate={{ x: "0vw", opacity: 1 }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: i * 0.1, // Stagger effect
              }}
            >
              <Link to={`/game/${category.toLowerCase()}`}>
                <button
                  onClick={() =>
                    handleFilterCategory(
                      category as keyof DataType["categories"],
                    )
                  }
                  className="w-[21.25rem] gap-0.5 rounded-[1.25rem] bg-[#2463FF] px-[4rem] py-[1.5rem] text-[1.5rem] uppercase leading-[1.8rem] tracking-[0.075rem] text-white shadow-[inset_0px_-2px_0px_3px_#140E66,inset_0px_1px_0px_6px_#3C74FF] md:h-[11.41669rem] md:w-[20.25rem] md:rounded-[2.5rem] md:px-[3rem] md:py-[0.75rem] md:text-[3rem] md:leading-[3.6rem] md:tracking-[0.15rem] xl:h-[11.875rem] xl:w-[24rem]"
                >
                  {category}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
