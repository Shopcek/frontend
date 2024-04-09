// import { useEarn } from 'oldcontext/earn'
import { Button } from 'react-bootstrap'
import moment from 'moment'

import { useEffect, useState } from 'react'

import { EarnProvider, useEarn } from '../../context/earn'
import { useUser } from 'context/user'
import { useNavigate } from 'react-router-dom'
import { useRefetch } from 'context/refetch'

function addOneZero(time: number) {
    if (time < 10) {
        return `0${time}`
    } else {
        return time
    }
}

export default function StayHereToEarn() {
    function Component() {
        const { xp } = useRefetch()
        const navigate = useNavigate()
        const { xpGQL, time, claimGQL, lastClaimGQL } = useEarn()
        const { sessionStartTime, status } = useUser()

        const [disabled, setDisabled] = useState(true)
        useEffect(() => {
            if (!sessionStartTime) {
                setDisabled(true)
            }

            switch (lastClaimGQL.status) {
                case 'success': {
                    setDisabled(moment().diff(moment(lastClaimGQL.data.createdAt), 'hours') <= 24)
                    break
                }
                default: {
                    setDisabled(true)
                }
            }
        }, [lastClaimGQL.status, time])

        const [pastTime, setPastTime] = useState({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        })
        useEffect(() => {
            if (!sessionStartTime) {
                return
            }

            if (disabled) {
                return
            }

            const days = moment().diff(moment(sessionStartTime), 'days')
            const hours = moment().diff(moment(sessionStartTime), 'hours') % 24
            const minutes = moment().diff(moment(sessionStartTime), 'minutes') % 60
            const seconds = moment().diff(moment(sessionStartTime), 'seconds') % 60

            setPastTime({
                days,
                hours,
                minutes,
                seconds
            })
        }, [time])

        useEffect(() => {
            switch (status) {
                case 'connected': {
                    lastClaimGQL.fn({
                        variables: {
                            service: 'stay'
                        }
                    })
                }
            }
        }, [status])

        return (
            <section className="section pb-0">
                <div className="stay-here-to-earn">
                    <div className="top-container">
                        <div className="claim">
                            
                            <div>
                                <div className="title">
                                    <h1>STAY HERE to EARN</h1>
                                </div>
                                <p>Earn rewards based on the time you spend here</p>
                            </div>

                            <Button
                                className="btn btn-primary"
                                onClick={() => {
                                    claimGQL
                                        .fn({
                                            variables: {
                                                service: 'stay'
                                            }
                                        })
                                        .then(() => {
                                            setDisabled(true)
                                            lastClaimGQL.refetch()
                                            setPastTime({
                                                minutes: 0,
                                                hours: 0,
                                                seconds: 0,
                                                days: 0
                                            })
                                            xp.refetch()
                                        })
                                }}
                                disabled={disabled}
                            >
                                Claim
                            </Button>
                        </div>

                        <div className="blue-box-container">
                            <div className="col">
                                <div className="blue-box divider">
                                    <p>{addOneZero(pastTime.days)}</p>
                                </div>
                                <p className="time">Days</p>
                            </div>
                            <div className="divider">:</div>
                            <div className="col">
                                <div className="blue-box divider">
                                    <p>{addOneZero(pastTime.hours)}</p>
                                </div>
                                <p className="time">Hours</p>
                            </div>
                            <div className="divider">:</div>
                            <div className="col">
                                <div className="blue-box divider">
                                    <p>{addOneZero(pastTime.minutes)}</p>
                                </div>
                                <p className="time">Minutes</p>
                            </div>
                            <div className="divider">:</div>
                            <div className="col">
                                <div className="blue-box divider">
                                    <p>{addOneZero(pastTime.seconds)}</p>
                                </div>
                                <p className="time">Seconds</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <EarnProvider>
            <Component></Component>
        </EarnProvider>
    )
}
