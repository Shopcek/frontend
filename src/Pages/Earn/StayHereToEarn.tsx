import { useEarn } from 'oldcontext/earn'
import { Button } from 'react-bootstrap'

import { useEffect, useState } from 'react'

function addOneZero(time: number) {
    if (time < 10) {
        return `0${time}`
    } else {
        return time
    }
}

function calculateXp(difference: number) {
    let seconds = Math.floor(difference / 1000)

    return seconds
}

export default function StayHereToEarn() {
    // let { time, setTime, addXpRES } = useEarn()
    const now = new Date().valueOf()
    // const difference = now - time

    let [is1s, setis1] = useState(false)
    useEffect(() => {}, [
        setInterval(() => {
            setis1(!is1s)
        }, 1000)
    ])

    // Get individual components
    // const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    // const hours = Math.floor(difference / (1000 * 60 * 60))
    // const minutes = Math.floor(difference / (1000 * 60))
    // const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    return (
        <section className="section pb-0">
            <div className="stay-here-to-earn">
                <div className="top-container">
                    <div className="title">
                        <h1>Stay Here To Earn</h1>
                    </div>
                    <div className="claim">
                        <Button
                            className="btn btn btn-primary"
                            onClick={() => {
                                // addXpRES.fn({
                                //     variables: {
                                //         point: calculateXp(difference)
                                //     }
                                // })

                                // setTime(new Date().valueOf())
                            }}
                        >
                            Claim
                        </Button>
                        <p>Earn rewards based on the time you spend here</p>
                    </div>

                    <div className="blue-box-container">
                        <div className="col">
                            <div className="blue-box divider">
                                <p>{addOneZero(0)}</p>
                            </div>
                            <p className="time">Days</p>
                        </div>
                        <div className="divider">:</div>
                        <div className="col">
                            <div className="blue-box divider">
                                <p>{addOneZero(0)}</p>
                            </div>
                            <p className="time">Hours</p>
                        </div>
                        <div className="divider">:</div>
                        <div className="col">
                            <div className="blue-box divider">
                                <p>{addOneZero(0)}</p>
                            </div>
                            <p className="time">Minutes</p>
                        </div>
                        <div className="divider">:</div>
                        <div className="col">
                            <div className="blue-box divider">
                                <p>{addOneZero(0)}</p>
                            </div>
                            <p className="time">Seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
