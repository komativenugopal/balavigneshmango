import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { OurBusinesses } from "@/components/our-businesses"
import { MangoVarieties } from "@/components/mango-varieties"
import { Locations } from "@/components/locations"
import { TermsConditions } from "@/components/terms-conditions"
import { Footer } from "@/components/footer"
import { LanguageSelector } from "@/components/language-selector"

export default function Home() {
  return (
    <main className="min-h-screen">
      <LanguageSelector />
      <Header />
      <Hero />
      <OurBusinesses />
      <MangoVarieties />
      <Locations />
      <TermsConditions />
      <Footer />
    </main>
  )
}
