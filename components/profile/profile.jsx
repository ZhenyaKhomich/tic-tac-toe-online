import Image from "next/image";
import avatarSrc from '../game/images/avatar1.png'
import { clsx } from "clsx";

export function Profile({className, name, rating, avatar=avatarSrc}) {
  return (
    <div className="flex items-center gap-2 text-teal-600">
    <Image className="w-12 rounded-[50px]" src={avatar} width={40}
  height={40} alt="avatar" />
    <div className={clsx(className, "flex flex-col text-left overflow-hidden")} >
      <div className="text-lg leading-[1.2] truncate">{name}</div>
      <div className="text-slate-400 text-xs">Рейтинг: {rating}</div>
    </div>
  </div>
  )
}