import { useState,ChangeEvent, FormEvent } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { ListUrls } from "./ListUrls";

export const Generator = () => {
    const [inputText, setInputText] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [urlShorts, setUrlShorts] = useState<string[]>([])
    const [urls, setUrls] = useState<string[]>([])
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState<string>('')

    const handleChangue = (e:ChangeEvent<HTMLInputElement>
    ) => {
        setInputText(e.target.value.trim())
    }

    const onSubmit = async(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Hola mundo')

        if(!inputText) return

        const encodedUrl = encodeURIComponent(inputText)
        console.log(encodedUrl)
        setLoading(true)

        try {
            const response = await fetch("/api/shorten", {
                method: "POST",
                headers:  {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `url=${encodedUrl}`
            })

            const data = await response.json();

            if(data.error) {
                setError(data.error)
            } else {
                setUrlShorts([...urlShorts, data.result_url])
                setUrls([...urls, inputText])
            }

            
        }
        catch(err) {
            setError("Error al conectar con el servicio");
            console.log(err)
        }

        setLoading(false)
    }

  return (
    <section className="bg-m-gray/10">
        <div className="relative container mx-auto px-4 max-w-[1200px] -top-14">
            <form 
                className="flex flex-col md:flex-row p-10 bg-m-dark-violet rounded-lg gap-6 md:gap-4 mb-4"
                onSubmit={(e) => onSubmit(e)}
            >
                <Input 
                    className="bg-white py-6 placeholder:text-lg"
                    placeholder="Shorten a link here"
                    value={inputText}
                    onChange={ (e) => handleChangue(e)}
                />
                <Button type="submit" className="py-6 text-lg font-semibold" variant={"cyan"}>Shorten It!</Button>
            </form>
            <ListUrls
                loading = {loading}
                urlShorts = {urlShorts}
                urls = {urls}
            />

        </div>
    </section>
  )
}
