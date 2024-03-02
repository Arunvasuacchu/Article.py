import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/Arunvasuacchu", "_blank")}
          className="black_btn shadow-lg"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI</span>
      </h1>
      <h2 className="desc shadow-lg">
      In a world inundated with information, where every corner of the digital landscape offers a deluge of content, navigating the sea of knowledge can be overwhelming. Amidst this abundance, there arises a crucial.Enter our article summarizer 
      </h2>
    </header>
  );
};

export default Hero;
