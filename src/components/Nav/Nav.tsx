import Menu from "./Menu";
import IntroWithInk from "../Intro/Intro";
import ClientNav from "./ClientNav";

function Nav() {
  return (
    <div className=" w-full bg-gray-200 flex flex-col w-full justify-center items-center">
      <div className="z-0 flex md:justify-between justify-end items-center w-full xl:w-[80vw] lg:w-[90vw] h-full px-4 lg:px-6 py-2">
        <ClientNav />

        <div className="">
          <Menu />
        </div>
      </div>
      <IntroWithInk />
    </div>
  );
}
export default Nav;
// elpida website supabase database password wKfZimofb7me2wzC
