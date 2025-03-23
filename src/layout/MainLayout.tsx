import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { ReactNode } from "react"

type MainLayoutProps = {
    children: ReactNode
}


export const MainLayout = ({children}:MainLayoutProps) => {
  return (
    <>  
        <header>
            <Header/>
        </header>

        <main>
            {children}
        </main>

        <footer>
            <Footer/>
        </footer>
    </>
  )
}
