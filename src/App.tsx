import { Benefits } from './components/benefits/benefits'
import { Footer } from './components/footer/footer'
import { FrequentlyQuestions } from './components/frequently-questions/frequently-quetions'
import { Header } from './components/header'
import { Hero } from './components/hero/hero'
import { PersonalizedService } from './components/personalized-service/personalized-service'
import { StartNow } from './components/start-now/start-now'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <PersonalizedService />
      <StartNow />
      <FrequentlyQuestions />
      <Footer />
    </>
  )
}

export default App
