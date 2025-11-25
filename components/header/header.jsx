import Image from "next/image";
import logoSrc from "./logo.svg";
// import avatarSrc from "./avatar.png";
import { Profile } from "../profile";
import { ArrowDownIcon } from "./icons/arrow-down-icon";

export function Header() {
  return (
    <header className=" flex items-center bg-white h-24 px-8 py-0.5 box-content shadow-lg">
      <Image src={logoSrc} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-6"></div>
      <button className="w-[180px] text-white bg-teal-600 rounded-lg px-5 py-2 text-2xl leading-[1.2] cursor-pointer hover:bg-teal-500  transition-colors">
        Играть
      </button>
      <button className="ml-auto flex items-center gap-2 cursor-pointer text-teal-600 hover:text-teal-500  transition-colors">
      <Profile />
      <ArrowDownIcon />
      </button>
    </header>
  );
}
