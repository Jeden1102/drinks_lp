import HomePage from "./pages/HomePage";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init()
  return (
    <>
        <HomePage/>
    </>
  )
}

export default App
