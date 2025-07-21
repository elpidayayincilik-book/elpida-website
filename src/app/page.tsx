import AboutUs from "@/components/AboutUs/AboutUs";
import BooksList from "@/components/Books/BooksList";
// import IntroParagraph from "@/components/IntroParagraph/IntroParagraph";
// import IntroWithInk from "@/components/Intro/Intro";
import "./globals.css";
import IntroSlider from "@/components/Slider/IntroSlider";

export default function Home() {
  return (
    <div className="z-[16] bg-white flex flex-col justify-center items-center">
      <IntroSlider />
      <BooksList />
      <AboutUs />
    </div>
  );
}
