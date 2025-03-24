import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const Features = () => {
  return (
    <section className="bg-m-gray/10 py-16 pb-28">
        <div className="container mx-auto px-4 max-w-[1200px]">
            <div className="text-center">
                <h3 className="text-m-verydark-violet text-2xl md:text-3xl lg:text-4xl font-bold pb-4">Advanced Statistics</h3>
                <p className="text-m-gray max-w-[450px] mx-auto">Track how your links are performing across the web with our 
                advanced statistics dashboard.</p>
            </div>

            <div className="relative flex flex-col gap-16 md:flex-row text-center md:text-left items-center md:items-start mt-16">
              <Card className="relative w-full md:flex-1/3 md:mt-8 md:flex max-w-[400px] justify-end rounded-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-m-verydark-violet pb-2 pt-8">Brand Recognition</CardTitle>
                  <CardDescription className="text-m-gray">Boost your brand recognition with each click. Generic links don’t 
                  mean a thing. Branded links help instil confidence in your content.</CardDescription>
                </CardHeader>
                <Avatar className="absolute -top-8 left-1/2 -translate-x-1/2 md:translate-none md:left-6 bg-m-dark-violet">
                  <AvatarImage src="/images/icon-brand-recognition.svg"/>
                  <AvatarFallback>Brand Recognition</AvatarFallback>
                </Avatar>
              </Card>
              <Card className="relative w-full md:flex-1/3 md:mt-16 md:flex max-w-[400px] justify-end rounded-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-m-verydark-violet pb-2 pt-8">Detailed Records</CardTitle>
                  <CardDescription className="text-m-gray">Gain insights into who is clicking your links. Knowing when and where 
                  people engage with your content helps inform better decisions.</CardDescription>
                </CardHeader>
                <Avatar className="absolute -top-8 left-1/2 -translate-x-1/2 md:translate-none md:left-6 bg-m-dark-violet">
                  <AvatarImage src="/images/icon-detailed-records.svg"/>
                  <AvatarFallback>Brand Recognition</AvatarFallback>
                </Avatar>
              </Card>
              <Card className="relative w-full md:flex-1/3 md:mt-24 md:flex max-w-[400px] justify-end rounded-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-m-verydark-violet pb-2 pt-8">Fully Customizable</CardTitle>
                  <CardDescription className="text-m-gray">Improve brand awareness and content discoverability through customizable 
                  links awareness and content supercharging audience engagement.</CardDescription>
                </CardHeader>
                <Avatar className="absolute -top-8 left-1/2 -translate-x-1/2 md:translate-none md:left-6 bg-m-dark-violet">
                  <AvatarImage src="/images/icon-fully-customizable.svg"/>
                  <AvatarFallback>Brand Recognition</AvatarFallback>
                </Avatar>
              </Card>
              <div className="absolute left-1/2 -translate-x-1/2 md:translate-none md:left-0 md:right-0 md:h-2 w-2 md:w-full bg-m-cyan top-1 bottom-1 md:top-1/2 -z-10"></div>
            </div>
        </div>
    </section>
  )
}
