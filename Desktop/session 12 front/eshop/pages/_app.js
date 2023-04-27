import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import localFont from "next/font/local";

const globalFont = localFont({ src: "../public/fonts/IRANSansWeb.woff" });

function MyApp({ Component, pageProps }) {
  return (
    <main className={globalFont.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
