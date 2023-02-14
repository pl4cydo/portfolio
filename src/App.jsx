import { useState } from 'react'
import Header from './tools/header'
import Perfil from './tools/Perfil'
import ObjectArea from './tools/ObjectArea'
import TimeLine from './tools/TimeLine'
import Footer1 from './tools/Footer'

function App() {

  return (
    <main>
        <Header />
        <div id="mainBox">
            <Perfil />
            <ObjectArea />
            <TimeLine />
        </div>
        <Footer1 />
    </main>
  )
}

export default App
