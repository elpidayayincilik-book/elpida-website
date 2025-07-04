"use client";
import { submitComment } from "@/actions/actions";
import commentBg from "@/assets/commentBg.png";
import { ICommentSubmit } from "@/types/types";
import { useState } from "react";
function Comment({ bookId }: { bookId: number }) {
  const [comment, setComment] = useState<ICommentSubmit>({
    bookId: bookId,
    comment: "",
    email: "",
  });
  const [commentRes, setCommentRes] = useState<null | boolean>(null);
  const handleSubmit = async () => {
    const data = await submitComment(comment);
    if (!data) {
      setCommentRes(false);
    }
    setCommentRes(true);
    console.log("resDATA", data);

    setComment({
      comment: "",
      email: "",
      bookId,
    });
  };
  return (
    <div
      className="bg-no-repeat bg-cover bg-center  w-full xl:h-[600] lg:h-[600]  h-[600] flex justify-center items-center place-items-center p-1 md:p-12 "
      style={{
        backgroundImage: `url(${commentBg.src})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white p-12 rounded-2xl lg:w-[80vw] w-full flex flex-col gap-6">
        <div className="w-full flex flex-col gap-6 ">
          <div>
            <label className="block text-sm/6 font-medium text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="block min-w-120 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  placeholder="kullanıcı@mail"
                  value={comment.email}
                  onChange={(e) =>
                    setComment((curr) => ({
                      ...curr,
                      email: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm/6 font-medium text-gray-900">
              Yorum
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <textarea
                  rows={5}
                  name="comment"
                  id="comment"
                  className="block min-w-120 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  placeholder="kullanıcı@mail"
                  onChange={(e) =>
                    setComment((curr) => ({
                      ...curr,
                      comment: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <button
          disabled={comment.comment === "" || comment.email === ""}
          onClick={handleSubmit}
          className="cursor-pointer bg-gray-900 hover:bg-black text-white px-5 py-2 w-fit rounded-3xl "
        >
          GÖNDER
        </button>

        {commentRes === true ? (
          <div className="border-4 border-green-500  p-4 rounded-full">
            <p className="text-green-700 text-center">
              Yorumunuz İçin Teşekkür Ederiz. Yorumunuz inclemenin ardından
              sitemizdeki yerini alacak
            </p>
          </div>
        ) : (
          ""
        )}
        {commentRes === false ? (
          <div className="border-1 border-red-500 text-red">
            <p> Lütfen Tekrar Deneyin </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default Comment;
