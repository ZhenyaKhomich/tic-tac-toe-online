import Link from "next/link";
import { ArrowLeftIcon } from "./icons/arrow-left-icon";

export function BackLink() {
  return (
    <Link className="flex items-center gap-2  text-teal-600 text-xs -mb-0.5" href="#">
      <ArrowLeftIcon />
      На главную
    </Link>
  );
}
