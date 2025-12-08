import clsx from "clsx";
import "../app/global.css";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: "400",
  subsets: ["latin", "cyrillic"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={clsx(inter.className, 'text-slate-900')}>
      <Component {...pageProps} />;
      <div id="modals"></div>
    </div>
  );
}
