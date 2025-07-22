import AboutUs from "@/components/AboutUs/AboutUs";
import BooksList from "@/components/Books/BooksList";
// import IntroParagraph from "@/components/IntroParagraph/IntroParagraph";
// import IntroWithInk from "@/components/Intro/Intro";
import "./globals.css";
import IntroSlider from "@/components/Slider/IntroSlider";
import ScrollToHash from "@/utils/ScrollToHash";

export default async function Home() {
  return (
    <div className="z-[16] bg-white flex flex-col justify-center items-center">
      <ScrollToHash />
      <IntroSlider />
      <BooksList />
      <AboutUs />
    </div>
  );
}
