import React from 'react'

import { Header } from './containers'
import { Navbar } from './components'

import './App.css'

const App = () => {
    return (
        <div className='app-wrapper'>
            <div className='section-grid'>
                <Navbar />
                <Header />
            </div>
        </div>
    )
}

export default App