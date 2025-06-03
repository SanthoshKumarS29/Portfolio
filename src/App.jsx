import './App.css'
import ThemeProvider from './components/ldMode/ThemeProvider'
import RenderPages from './components/site/RenderPages'

function App() {
  

  return (
    <ThemeProvider>
      <RenderPages />
    </ThemeProvider>
  )
}

export default App
