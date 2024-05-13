import { Nunito } from "next/font/google";
import { Poppins } from "next/font/google";
import Loginpage from "@/pages/Loginpage";

const nunito = Nunito({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return <main className="">{/* <Loginpage /> */}</main>;
}
