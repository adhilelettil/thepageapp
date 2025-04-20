import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "./component/header/Header";
import Nav from "./component/navigation/Nav";
import Footer from "./component/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}