import Image from "next/image";
import Header from "./Header";
import Content from "./Content";
import { useDispatch } from "react-redux";
import Footer from "./Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Content />
      <Footer />
    </main>
  );
}
