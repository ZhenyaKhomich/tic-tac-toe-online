import Image from "next/image";
import logoSrc from "./logo.svg";
import { Profile } from "../profile";
import { ArrowDownIcon } from "./icons/arrow-down-icon";
import { UiButton } from "../uikit/ui-button";

export function Header() {
  return (
    <header className=" flex items-center bg-white h-24 px-8 py-0.5 box-content shadow-lg">
      <Image src={logoSrc} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-6"></div>
      <UiButton className="w-44" size="lg" variant="primary">
        Играть
      </UiButton>
      <button className="ml-auto flex items-center gap-2 cursor-pointer text-teal-600 hover:text-teal-500  transition-colors">
        <Profile />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
