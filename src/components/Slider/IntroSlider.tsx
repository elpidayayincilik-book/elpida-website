import { ISlider } from "@/types/types";
import SwiperCLient from "./Swiper";
import { getSliders } from "@/actions/actions";

// import ReactMarkdown from "react-markdown";
// import Markdown from "react-markdown";

async function IntroSlider() {
  const sliders: ISlider[] | null = await getSliders();

  //   const markdown = `
  // # Hi, *Pluto*!.
  // ## This is a Heading
  // _You **can** combine them_
  //   `;

  return (
    <div className=" ">
      {/* <div className="p-16 prose prose-lg ">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div> */}
      <SwiperCLient sliders={sliders!} />
    </div>
  );
}
export default IntroSlider;
