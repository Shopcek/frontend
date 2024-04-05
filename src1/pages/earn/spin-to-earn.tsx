// import { Button } from 'react-bootstrap'
// // @ts-ignore
// import WheelComponent from 'react-wheel-of-prizes'

// import { EarnProvider, useEarn } from '../../context/earn'
// import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// export default function SpinToEarn() {
//     function Component() {
//         const segments = ['10 XP', '20 XP', '30 XP', '40 XP', '50 XP', '60 XP']
//         const segColors = ['#13c5f0', '#f556b7', '#13c5f0', '#f556b7', '#13c5f0', '#f556b7']

//         const { claimGQL, lastClaimGQL } = useEarn()
//         const [prize, setPrize] = useState<string | undefined>(undefined)
//         const [wheel, setWheel] = useState<any>()

//         const [claimAvailable, setClaimAvailable] = useState<boolean>(false)

//         useEffect(() => {
//             setWheel(
//                 <WheelComponent
//                     segments={segments}
//                     segColors={segColors}
//                     winningSegment={prize}
//                     primaryColor="white"
//                     contrastColor="#faca30"
//                     isOnlyOnce={false}
//                     size={200}
//                     upDuration={500}
//                     downDuration={600}
//                     fontFamily="Helvetica"
//                     onFinished={() => {
//                     }}
//                 />
//             )
//         }, [])

//         useEffect(() => {
//             if (wheel) {
//                 const wheelRef = document.getElementById('canvas')

//                 wheelRef!.addEventListener('click', function (event) {
//                     alert("You can spin but can't claim!")
//                 })
//             }
//         }, [wheel])

//         return (
//             <section className="section pb-0">
//                 <div className="spin-to-earn">
//                     <div className="top-container">
//                         <div className="title">
//                             <h1>Spin To Earn</h1>
//                         </div>
//                         <div className="claim">
//                             <Button
//                                 disabled={!claimAvailable}
//                                 className="btn btn btn-secondary"
//                                 onClick={() => {
//                                     if (prize) {
//                                         setClaimAvailable(false)
//                                     }
//                                 }}
//                             >
//                                 Claim
//                             </Button>
//                             <p>Spin the wheel and win the prize.</p>
//                         </div>

//                         <div className="box">
//                             <div className="rules">
//                                 <p>You can turn it once in 24 hours</p>
//                             </div>

//                             <div className="wheel">{wheel}</div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         )
//     }

//     return (
//         <EarnProvider>
//             <Component />
//         </EarnProvider>
//     )
// }
