import { Exo_2 } from "next/font/google";
import Header from "../../public/components/Header";

const exo_2 = Exo_2({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function Home() {
  return (
    <main
      className={` ${exo_2.className}`}
    >
      <Header />
    </main>
  );
}
