import Card from "./components/Card";
import Nav from "./components/Nav";

const HowToPlay = () => {
  return (
    <div>
      <Nav img="/How-to-Play.svg" />
      <div className="bg-custom-gradient-how-to-play fixed bottom-0 left-0 right-0 top-0 -z-30"></div>
      <div className="mb-[4rem] mt-[8rem] flex flex-col items-center justify-center gap-4">
        <Card
          num={"01"}
          title="choose a category"
          text="First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word."
        />
        <Card
          num={"02"}
          title="guess letters"
          text="Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses."
        />
        <Card
          num={"03"}
          title="win or lose"
          text="You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose."
        />
      </div>
    </div>
  );
};

export default HowToPlay;
