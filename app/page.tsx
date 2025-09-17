import Home from "./home/page";
import Experience from "./experience/page";
import About from "./about/page";
import Certificates from "./certificates/page";
import Footer from "./components/footer";

export default function Index() {
  return (
    <div className="sm:px-8 pb-20 gap-16">
      <div className="mx-auto w-full max-w-7xl lg:px-8  bg-[#18181B] dark:bg-[#18181B] text-black dark:text-white">
        <main className="">
          <Home />
          <About />
          <Experience />
          <Certificates />
        </main>
         <Footer />
      </div>
    </div>
  );
}
