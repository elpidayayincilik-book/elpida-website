import Image from "next/image";

async function LastPublished() {
  // const data = await  getLastPublished()
  const data = {
    id: 1,
    title: "Karamazov Kardeşler",
    picture:
      "https://jzixtbfuvspcnohqtzvi.supabase.co/storage/v1/object/sign/book-images/91JHHqEbX4L._UF1000,1000_QL80_.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OWM2YWY5My04MjdkLTRkNTctYmM2My04ODEyZTA2MDM4ZDciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJib29rLWltYWdlcy85MUpISHFFYlg0TC5fVUYxMDAwLDEwMDBfUUw4MF8uanBnIiwiaWF0IjoxNzUwNzY0OTE2LCJleHAiOjIwNjYxMjQ5MTZ9.ffxTltN0mpEqalTtYYwMrqqd44rUEM70ToqoQxFDkPo",
    detail:
      "Dostoyevski'nin hayatının zirve romanı olarak bilinir. Romanın büyük bir bölümü Staraya Russa'da yazılmıştır. Dostoyevski, oldukça ağır bir dili olan roman için iki yıla yakın zaman harcamış ve 1880 yılının Kasım ayında bitirmiştir. Kitabın yayımlanmasından yaklaşık dört ay sonra yine bu kitap için hazırladığı büyük çaplı bir proje olan Büyük Bir Günahkar'ın Anıları ile uğraşırken ölmüştür.",
  };
  return (
    <div className="px-8 py-3  ">
      <p className="font-bold font-serif text-2xl py-6 text-center border-t-1 border-t-gray">
        Son Çıkan
      </p>
      <div className="lg:w-[75vw] w-full relative">
        <div className=" shadow-xl flex justify-center bg-slate-50 rounded-xl p-4">
          <div
            key={data.title}
            className="flex md:flex-row flex-col md:justify-start justify-center md:items-start items-center w-full "
          >
            <div className="justify-center min-w-[140] h-[240] relative md:w-[180]  px-6 py-3 ">
              <Image
                src={data.picture}
                fill={true}
                alt={data.detail}
                sizes="100%"
              />
            </div>
            <div className="flex flex-col p-4 md:pl-6 space-y-3 justify-start ">
              <p className="text-xl md:text-2xl font-serif font-bold">
                {data.title}
              </p>
              <div>
                {/* <div className="absolute top-4 left-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                      <path
                        fill="currentColor"
                        d="M8.4 6.2a1 1 0 0 1 1.2 1.6c-1.564 1.173-2.46 2.314-2.973 3.31A3.5 3.5 0 1 1 4 14.558a7.6 7.6 0 0 1 .508-3.614C5.105 9.438 6.272 7.796 8.4 6.2m9 0a1 1 0 0 1 1.2 1.6c-1.564 1.173-2.46 2.314-2.973 3.31A3.5 3.5 0 1 1 13 14.558a7.6 7.6 0 0 1 .508-3.614c.598-1.506 1.764-3.148 3.892-4.744"
                      />
                    </g>
                  </svg>
                </div> */}
                <p className="text-2xl font-serif font-medium text-lg md:text-xl">
                  {data.detail.slice(0, 100)}...
                </p>
                {/* <div className="flex flex-row justify-end items-end"> */}
                <div className="absolute top-4 right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-[32] lg:w-[64] h-[32] lg:h-[64]"
                  >
                    {" "}
                    <g fill="none">
                      <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                      <path
                        fill="currentColor"
                        d="M16.5 6A3.5 3.5 0 0 1 20 9.442c.09.865.077 2.141-.508 3.614c-.598 1.506-1.764 3.148-3.892 4.744a1 1 0 1 1-1.2-1.6c1.564-1.173 2.46-2.313 2.973-3.31A3.5 3.5 0 1 1 16.5 6m-9 0A3.5 3.5 0 0 1 11 9.442c.09.865.077 2.141-.508 3.614c-.597 1.506-1.764 3.148-3.892 4.744a1 1 0 1 1-1.2-1.6c1.564-1.173 2.46-2.313 2.973-3.31A3.5 3.5 0 1 1 7.5 6"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LastPublished;
