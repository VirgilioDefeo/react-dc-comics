import Header from "./assets/Header"
import Main from "./assets/Main"
import Footer from "./assets/Footer"
import comics from './assets/dc-comics-2/comics';


function App() {

  return (
    <>
     <Header/>
    <Main comics={comics} />
     <Footer/>


    </>
  )
}

export default App
