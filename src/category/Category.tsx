import { Link } from "react-router";
import Nav from "../how-to-play/components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useEffect } from "react";
import { fetchData } from "../features/dataSlice";
import { setSelectedCategory } from "../features/gameSlice";

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
    console.log(
      "this the category for " + category,
      data?.categories[category],
    );
  };
  return (
    <div>
      <Nav img="/Pick-a-Category.svg" />
      <div className="bg-custom-gradient-how-to-play fixed bottom-0 left-0 right-0 top-0 -z-30"></div>
      <div className="mt-[8rem]">
        <div className="flex flex-col items-center gap-2.5">
          {categories.map((category) => (
            <Link to={`/game/${category.toLowerCase()}`} key={category}>
              <button
                onClick={() =>
                  handleFilterCategory(category as keyof DataType["categories"])
                }
                className="w-[21.25rem] gap-0.5 rounded-[1.25rem] bg-[#2463FF] px-[4rem] py-[1.5rem] text-[1.5rem] uppercase leading-[1.8rem] tracking-[0.075rem] text-white shadow-[inset_0px_-2px_0px_3px_#140E66,inset_0px_1px_0px_6px_#3C74FF]"
              >
                {category}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
