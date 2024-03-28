import LoginToEarn from './login-to-earn'
import StayHereToEarn from './stay-here-to-earn'
import NameService from './name-services'
import SpinToEarn from './spin-to-earn'
import TaskRewards from './task-reward'

export default function Earn() {
    return (
        <div className="container earn-page">
            <LoginToEarn />
            <hr />
            <StayHereToEarn />
            <hr />
            <NameService />
            <hr />
            <TaskRewards />
            <hr />
            <SpinToEarn />
        </div>
    )
}
