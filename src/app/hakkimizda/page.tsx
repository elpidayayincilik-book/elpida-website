import { getAbout } from "@/actions/actions";

async function About() {
  const data = await getAbout();

  return (
    <div className=" w-full  flex justify-center flex-col items-center p-4">
      <h1 className=" font-bold text-xl font-serif ">HAKKIMIZDA</h1>
      <p className="md:w-[60vw] pt-4 whitespace-pre-line ">{data}</p>
    </div>
  );
}
export const revalidate = 60;
export default About;
