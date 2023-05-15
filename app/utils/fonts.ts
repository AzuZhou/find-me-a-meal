import { Vollkorn, Open_Sans } from "next/font/google";

const vollkorn = Vollkorn({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
});

export { vollkorn, openSans };
