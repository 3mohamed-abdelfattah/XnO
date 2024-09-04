import { HomePage } from '@/pages/home'
import { GameProvider } from '@/context/GameContext'

function App() {
  return (
    <GameProvider>
      <HomePage />
    </GameProvider>
  )
}

export default App