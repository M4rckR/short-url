import { CallToAction } from "@/components/CallToAction"
import { Features } from "@/components/Features"
import { Generator } from "@/components/Generator"
import { HeroMain } from "@/components/HeroMain"
import { MainLayout } from "@/layout/MainLayout"

export const HomePage = () => {
  return (
    <MainLayout>
      <HeroMain/>
      <Generator/>
      <Features/>
      <CallToAction/>
    </MainLayout>
  )
}
