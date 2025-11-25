import Image from "next/image";
import avatarSrc from "./avatar.png";
import { clsx } from "clsx";

export function Profile({className}) {
  return (
    <div className="flex items-center gap-2 text-teal-600">
    <Image className="w-12 rounded-[50px]" src={avatarSrc} alt="avatar" />
    <div className={clsx(className, "flex flex-col text-left")} >
      <div className="text-lg leading-[1.2]">Paromovevg</div>
      <div className="text-slate-400 text-xs">Рейтинг: 1230</div>
    </div>
  </div>
  )
}