import { Benefits } from './components/benefits/benefits'
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
    </>
  )
}

export default App
