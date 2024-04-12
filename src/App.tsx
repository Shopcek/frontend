import React from 'react'

import './assets/scss/themes.scss'

// import { AnimatedBackground } from 'components/animated-bg'

import Route from './routes'
function App() {
    return (
        <React.Fragment>
            {/* <AnimatedBackground> */}

            <div className="bg">
                <Route />
{/* 
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div> */}
            </div>
            {/* </AnimatedBackground> */}
        </React.Fragment>
    )
}

export default App
