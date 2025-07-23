async function About() {
  // const about = await fetch("api/getAbout", {
  //   cache: "force-cache",
  //   next: {
  //     revalidate: 36000,
  //   },
  // });

  // const data = await about.json();

  return (
    <div className="flex justify-center flex-col items-center p-4">
      <h1 className="font-bold text-xl font-serif ">HAKKIMIZDA</h1>
      <p className="pt-4 whitespace-pre-line ">{"data"}</p>
    </div>
  );
}
export default About;
