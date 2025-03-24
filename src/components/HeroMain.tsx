import { Button } from "./ui/button"

export const HeroMain = () => {
  return (
    <section className="container px-4 mx-auto max-w-[1200px] mt-8 mb-32">
        <div className="flex flex-col justify-center items-center relative space-y-6 md:flex-row lg:gap-8">
            <img className="block translate-x-8 max-w-[400px] lg:max-w-none  md:order-2 md:w-1/2" src="/images/illustration-working.svg" alt="lustracion hero" />
            <div className="md:w-1/2 flex flex-col items-center px-6 space-y-4 sm:px-16 md:px-0 md:order-1 md:items-start">
                <h1 className="text-center text-3xl font-bold md:text-left md:text-5xl lg:text-6xl">More than just shorter links</h1>
                <p className="text-center text-m-gray md:text-left lg:pb-4">
                Build your brand’s recognition and get detailed insights 
                on how your links are performing.
                </p>
                <Button className="rounded-3xl px-8 py-6 font-bold text-lg" variant={"cyan"} >Get Started</Button>
            </div>
        </div>
    </section>
  )
}
