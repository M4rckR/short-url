import ClipLoader from "react-spinners/ClipLoader";
import { Separator } from "@/components/ui/separator"
import { Button } from "./ui/button";

type ListUrlProps = {
    loading: boolean,
    urlShorts: string[],
    urls: string[]
}

export const ListUrls = ({loading, urlShorts, urls}:ListUrlProps) => {
  return (
    <div>
        {loading && 
            <div className="w-full mx-auto">
                <ClipLoader/>
            </div>
        }

         
        <div className="space-y-4">
            {
                urls.length > 0? 
                urls.map((item, i) => (
                    <div className="bg-white py-4 rounded-xl md:flex justify-between" key={i}>
                        <div className="md:flex md:px-4 md:justify-between w-full items-center">
                            <p className="px-4 md:px-0 py-2 md:py-0 truncate">{item}</p>
                            <Separator className="md:hidden"/>
                            <p className="text-m-cyan px-4 md:px-0 py-2 md:py-0 pb-4">{urlShorts[i]}</p>
                        </div>
                        <div className="px-4">
                            <Button className="w-full py-6 md:py-4 text-sm font-semibold" variant={"cyan"}>Copy</Button>
                        </div>
                    </div>
                )) : 
                null
            }
        </div>
            
          
    </div>
  )
}
