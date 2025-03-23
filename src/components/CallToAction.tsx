import { Link } from "react-router"
import { Button } from "./ui/button"

export const CallToAction = () => {
  return (
    <section className="bg-[url('/images/bg-boost-mobile.svg')] md:bg-[url('/images/bg-boost-desktop.svg')] bg-cover bg-center bg-m-dark-violet py-16 text-center relative flex flex-col items-center gap-4">
        <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">Boost your link today</h3>
        <Button className="rounded-xl px-8 py-6 text-sm" variant={"cyan"} asChild>
            <Link to="/">Get Started</Link>
        </Button>
    </section>
  )
}
 