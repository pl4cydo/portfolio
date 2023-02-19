// import { useState } from 'react'
import Header from './tools/header'
import Perfil from './tools/Perfil'
import ObjectArea from './tools/ObjectArea'
// import Footer1 from './tools/Footer'


function App() {
  
  console.log(window.screen.width)

  return (
    <main>
        <Header />
        <div id="mainBox">
            <Perfil />
            <ObjectArea />
        </div>
        {/* <Footer1 /> */}
    </main>
  )
}

export default App
