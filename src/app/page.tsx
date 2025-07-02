import AboutUs from "@/components/AboutUs/AboutUs";
import BooksList from "@/components/Books/BooksList";
// import IntroParagraph from "@/components/IntroParagraph/IntroParagraph";
import IntroWithInk from "@/components/IntroWithInk/IntroWithInk";
import LastPublished from "@/components/LastPublished/LastPublished";
import "./globals.css";

export default function Home() {
  return (
    <>
      <IntroWithInk />
      <div className="z-[16] flex flex-col justify-center items-center">
        <BooksList />
        <AboutUs />
        <LastPublished />
      </div>
    </>
  );
}
