import { Image, Button, Container } from 'react-bootstrap'

import smallReward from '../../assets/images/earn/small-reward.png'
import mediumReward from '../../assets/images/earn/medium-reward.png'
import largeReward from '../../assets/images/earn/large-reward.png'
// import { useEarn } from 'oldcontext/earn'
import { check10s } from 'lib/helpers'
import { useState, useEffect } from 'react'

import { useUser } from 'context/user'
import { EarnProvider, useEarn } from './context'

import moment from 'moment'

let smallImg = <Image src={smallReward} className="small-image" />
let mediumImg = <Image src={mediumReward} className="medium-image" />
let largeImg = <Image src={largeReward} className="large-image" />

let boxData: { img: any; exp: number }[] = [
    { img: smallImg, exp: 30 },
    { img: smallImg, exp: 30 },
    { img: mediumImg, exp: 50 },
    { img: smallImg, exp: 30 },
    { img: smallImg, exp: 30 },
    { img: mediumImg, exp: 60 },
    { img: largeImg, exp: 80 }
]

export function Box({ exp, img, day, streak }: { exp: number; img: any; day: number; streak?: boolean }) {
    return (
        <div className={`purple-box ${streak ? 'more-purple' : ''}`}>
            <p>Day {day}</p>
            <div>{img}</div>
            <p>+{exp} XP</p>
        </div>
    )
}

export default function LoginToEarn() {
    function Component() {
        const { streakGQL, loginRewardsGQL, claimGQL, lastClaimGQL, time } = useEarn()
        const { status } = useUser()
        const [days, setDays] = useState<any>()

        useEffect(() => {
            switch (status) {
                case 'connected': {
                    streakGQL.fn({
                        variables: {
                            service: 'login'
                        }
                    })

                    lastClaimGQL.fn({
                        variables: {
                            service: 'login'
                        }
                    })
                }
            }
        }, [status])

        useEffect(() => {
            switch (loginRewardsGQL.status) {
                case 'success': {
                    setDays(
                        loginRewardsGQL.data.rewards.map((reward: any, idx: number) => {
                            return <Box day={idx + 1} img={boxData[idx].img} exp={reward.reward}></Box>
                        })
                    )
                }
            }
        }, [loginRewardsGQL.status])



        const [disabled, setDisabled] = useState(true)

        useEffect(() => {
            switch (streakGQL.status) {
                case 'success': {
                    setDays(
                        loginRewardsGQL.data.rewards.map((reward: any, idx: number) => {
                            return <Box day={idx + 1} img={boxData[idx].img} exp={reward.reward} streak={idx === streakGQL.data}></Box>
                        })
                    )
                    break
                }

                case 'loading': {
                    setDisabled(true)
                }
            }
        }, [streakGQL.status, claimGQL.status, lastClaimGQL.status, time])

        useEffect(() => {
            setDisabled(!(lastClaimGQL.status === 'success' && moment().diff(moment(lastClaimGQL.data.createdAt), 'seconds') >= 10))
        }, [lastClaimGQL.status, time])

        useEffect(() => {
            switch (claimGQL.status) {
                case 'loading': {
                    setDisabled(true)
                    break
                }
                case 'success': {
                    streakGQL.refetch({
                        variables: {
                            service: 'login'
                        }
                    })
                    break
                }
            }
        }, [claimGQL.status])

        return (
            <Container>
                <section className="section pb-0">
                    <div className="login-to-earn">
                        <div className="top-container">
                            <h1>Login To Earn</h1>
                            <div className="claim">
                                <p>Login 7 days in a row, and your rewards will grow</p>
                                <Button
                                    className="btn btn btn-secondary"
                                    onClick={() => {
                                        claimGQL.fn({
                                            variables: {
                                                service: 'login'
                                            }
                                        })
                                    }}
                                    disabled={disabled}
                                >
                                    Claim
                                </Button>
                            </div>
                        </div>
                        <div className="purple-box-container">{days}</div>
                    </div>
                </section>
            </Container>
        )
    }

    return (
        <EarnProvider>
            <Component />
        </EarnProvider>
    )
}
