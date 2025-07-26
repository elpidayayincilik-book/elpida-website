async function Cache() {
  const data = await fetch("https://www.elpidakitap.com.tr/api/getBooks", {
    cache: "default",
    next: {
      revalidate: 3600,
    },
    headers: {
      "x-secret-key": process.env.SECRET_KEY ?? "",
    },
  });
  const dataToShow = await data.json();

  return (
    <div>
      <p>{dataToShow[0].title}</p>
    </div>
  );
}
export default Cache;
