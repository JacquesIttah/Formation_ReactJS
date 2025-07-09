import React from 'react'
import { Link } from 'react-router'

function Home() {
  return (
    <div>
    <h1>Hello World!</h1>
    <p>
        Créer vos Memes perso
    </p>
    <p>
        <Link to='/editor'>Nouveau</Link><br/>
        <Link to='/editor/0'>Edit0</Link><br/>
        <Link to='/tHumbnail'>THumbnail</Link><br/>
    </p>
    </div>
  )
}

export default Home