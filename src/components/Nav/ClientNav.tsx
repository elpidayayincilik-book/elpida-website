// import Link from "next/link";
import NavbarButtons from "./NavbarButtons";
function ClientNav() {
  return (
    <div className="w-full  gap-4 flex  justify-between  items-center   ">
      <NavbarButtons className="flex gap-4 font-serif md:flex hidden" />
    </div>
  );
}
export default ClientNav;
