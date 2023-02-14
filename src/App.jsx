import { useState } from 'react'
import Header from './tools/header'
import Perfil from './tools/Perfil'
import ObjectArea from './tools/ObjectArea'
import TimeLine from './tools/TimeLine'

function App() {

  return (
    <main>
        <Header />
        <div id="mainBox">
            <Perfil />
            <ObjectArea />
            <TimeLine />
        </div>
        <footer>
            <p>Haku Interprise</p>
        </footer>
    </main>
  )
}

export default App
