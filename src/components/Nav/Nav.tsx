import Menu from "./Menu";
import IntroWithInk from "../Intro/Intro";
import ClientNav from "./ClientNav";

async function Nav() {
  return (
    <div className=" w-full bg-gray-100 flex flex-col w-full justify-center items-center">
      <div className="z-0 flex md:justify-start justify-end md:items-center items-end w-full min-w-fit xl:w-[80vw] lg:w-[90vw] h-full px-4 lg:px-4 py-2">
        <ClientNav />
        <Menu />
      </div>
      <IntroWithInk />
    </div>
  );
}
export default Nav;
// elpida website supabase database password wKfZimofb7me2wzC
