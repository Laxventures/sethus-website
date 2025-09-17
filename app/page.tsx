import Home from "./home/page"
import Experience from "./experience/page"
import About from "./about/page"
import Certificates from "./certificates/page"
import Footer from "./components/footer"

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 bg-background text-foreground">
        <main className="">
          <Home />
          <About />
          <Experience />
          <Certificates />
        </main>
        <Footer />
      </div>
    </div>
  )
}
