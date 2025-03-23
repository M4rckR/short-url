import { CallToAction } from "@/components/CallToAction"
import { Features } from "@/components/Features"
import { HeroMain } from "@/components/HeroMain"
import { MainLayout } from "@/layout/MainLayout"

export const HomePage = () => {
  return (
    <MainLayout>
      <HeroMain/>
      <Features/>
      <CallToAction/>
    </MainLayout>
  )
}
