import ShaderBackground from "@/components/ShaderBackground"
import HeroContent from "@/components/HeroContent"
import PulsingCircle from "@/components/PulsingCircle"
import Header from "@/components/Header"
import TeaCards from "@/components/TeaCards"
import Reviews from "@/components/Reviews"
import Footer from "@/components/Footer"
import Featured from "@/components/Featured"

const Index = () => {
  return (
    <ShaderBackground>
      <Header />
      <div className="min-h-screen relative">
        <HeroContent />
        <PulsingCircle />
      </div>
      <TeaCards />
      <Featured />
      <Reviews />
      <Footer />
    </ShaderBackground>
  )
}

export default Index