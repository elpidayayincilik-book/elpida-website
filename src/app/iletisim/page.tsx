"use client";
import { submitContactMessage } from "@/actions/actions";
import Alert from "@/components/alert/Alert";
import { IContact } from "@/types/types";
import { useState } from "react";
function Contact() {
  const [contactBody, setContactBody] = useState<IContact>({
    email: "",
    message: "",
    name: "",
    phone_number: "",
  });
  const [contactRes, setContactRes] = useState<null | boolean>(null);
  const handleSubmit = async () => {
    const data = await submitContactMessage(contactBody);
    console.log("data client", data);

    if (data) {
      setContactRes(true);
      setContactBody({
        email: "",
        message: "",
        name: "",
        phone_number: "",
      });
      return;
    }
    setContactRes(false);
  };

  return (
    <div className=" flex justify-center items-center ">
      <div className=" lg:w-[80vw] flex flex-col justify-center p-2 ">
        <p className="bg-gray-800 w-full text-center text-white p-2 text-lg  rounded-full ">
          Bize Ulaşın
        </p>

        <div className="z-[800] lg:grid  lg:grid-cols-3 justify-center p-2 text-center ">
          <div className=" grid p-3 ">
            <p className="font-bold text-xl  font-serif ">Adres</p>
            <p className="font-serif"> Çankaya/ANKARA</p>
          </div>{" "}
          <div className=" grid p-3 ">
            <p className="font-bold text-xl  font-serif ">Mail</p>
            <p className="font-serif"> elpidayayincilik@gmail.com </p>
          </div>{" "}
          <div className=" grid p-3 ">
            <p className="font-bold text-xl  font-serif ">WhatsApp Hattı</p>
            <p className="font-serif"> +90 533 813 77 96</p>
          </div>
        </div>
        <div className="bg-white p-2 md:p-12 rounded-2xl lg:w-[80vw] flex flex-col gap-6">
          <div className="  flex flex-col  gap-3 ">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 flex-wrap gap-3 justify-between ">
              <div className="">
                <label className="block  text-sm/6 font-medium text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="w-full  py-1.5  text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      placeholder="kullanıcı@mail"
                      value={contactBody.email}
                      onChange={(e) =>
                        setContactBody((currentBody: IContact) => ({
                          ...currentBody,
                          email: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
              </div>
              <div className=" ">
                <label className="block text-sm/6 font-medium text-gray-900">
                  İsim
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="block   py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      placeholder="kullanıcı@mail"
                      value={contactBody.name}
                      onChange={(e) =>
                        setContactBody((curr) => ({
                          ...curr,
                          name: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
              </div>
              <div className=" ">
                <label className="block text-sm/6 font-medium text-gray-900">
                  Telefon
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    <input
                      name="email"
                      id="email"
                      className="py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      placeholder="kullanıcı@mail"
                      value={contactBody.phone_number}
                      onChange={(e) =>
                        setContactBody((curr) => ({
                          ...curr,
                          phone_number: e.target.value,
                        }))
                      }
                    />
                  </div>
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
                    className="block  grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    placeholder="kullanıcı@mail"
                    value={contactBody.message}
                    onChange={(e) =>
                      setContactBody((curr) => ({
                        ...curr,
                        message: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className=" bg-gray-900 hover:bg-black text-white px-5 py-2 w-fit rounded-3xl "
            type="submit"
          >
            GÖNDER
          </button>

          {contactRes === true ? (
            <Alert message="Mesajınız ulaştı. Teşekkür ederiz." positive />
          ) : (
            ""
          )}
          {contactRes === false ? (
            <Alert message="Lütfen tekrar deneyin." positive={false} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
export default Contact;
