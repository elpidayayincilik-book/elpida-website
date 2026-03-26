async function About() {
  const about = await fetch("https://www.elpidakitap.com.tr/api/getAbout", {
    cache: "default",
    next: {
      revalidate: 60,
    },
  });

  const data = await about.json();

  return (
    <div className=" w-full  flex justify-center flex-col items-center p-4">
      <h1 className=" font-bold text-xl font-serif ">HAKKIMIZDA</h1>
      <p className="md:w-[60vw] pt-4 whitespace-pre-line ">{data}</p>
    </div>
  );
}
export default About;
