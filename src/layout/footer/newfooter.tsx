import React, { useEffect, useState } from 'react'

import icon from '../../assets/images/icon.svg'
import text from '../../assets/images/text.svg'

import x from '../../assets/images/socials/x.svg'
import tg from '../../assets/images/socials/tg.svg'
import medium from '../../assets/images/socials/medium.svg'
import { useNavigate } from 'react-router'

import gray from '../../assets/images/about/gray.svg'

import { HashLink } from 'react-router-hash-link'
import { Container } from 'react-bootstrap'

function Logo() {
    const navigate = useNavigate()

    return (
        <div
            onClick={() => {
                navigate('/')
            }}
            className="logo"
        >
            <img className="icon" src={icon} />
            <img className="text" src={text} />
        </div>
    )
}

function Nav() {
    const navigate = useNavigate()
    return (
        <div className="footer-nav">
            <div className="my-row">
                <div className="left">
                    <div className="title">CATEGORIES</div>
                    <div className="title">MISC</div>
                </div>
                <div className="right">
                    <div className="title">SUBSCRIBE TO OUR NEWSLETTER</div>
                </div>
            </div>

            <hr />

            <div className="my-row">
                <div className="left">
                    <div className="pages">
                        <HashLink smooth to="/#partnership" className="page">
                            T-SHIRTS
                        </HashLink>
                        <HashLink smooth to="/#faq" className="page">
                            SWEATSHIRTS
                        </HashLink>
                        <HashLink smooth to="/#faq" className='page'>
                            HOODIES
                        </HashLink>
                        <HashLink smooth to="/#faq" className="page">
                            HATS
                        </HashLink>
                        <HashLink smooth to="/#faq" className="page">
                            ECO-FRIENDLY
                        </HashLink>
                    </div>
                    <div className="pages">
                        <a
                            target="_blank"
                            href="https://drive.google.com/drive/folders/1cVDyVIY6XN5DtJ9WrjnrYfWU50jXrvYD?usp=sharing"
                            className="page"
                        >
                            MEDIA KIT
                            <img src={gray} className="out" />
                        </a>
                        <a target="_blank" href="https://shopcek.gitbook.io/shopcek-or-shpc-1/institutional/career" className="page">
                            CAREER
                            <img src={gray} className="out" />
                        </a>
                        <a target="_blank" href="https://shopcek.gitbook.io/shopcek-or-shpc-1/legal/terms-and-conditions" className="page">
                            TERMS OF SERVICES
                            <img src={gray} className="out" />
                        </a>
                        <a target="_blank" href="https://shopcek.gitbook.io/shopcek-or-shpc-1/legal/privacy-policy" className="page">
                            PRIVACY POLICY
                            <img src={gray} className="out" />
                        </a>
                    </div>
                </div>

                <div className="right">
                    <div className="subscribe">
                        <input type="text" placeholder="EMAIL" />
                        <button>
                            <div className="text">SUBSCRIBE</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Socials() {
    return (
        <div className="socials">
            <a target="_blank" href="https://t.me/shopcek">
                <img src={tg} className="social" />
            </a>
            <a target="_blank" href="https://x.com/shopcek">
                <img src={x} className="social" />
            </a>
            <a target="_blank" href="https://medium.com/shopcek">
                <img src={medium} className="social" />
            </a>
        </div>
    )
}

export function Footer() {

    const [page, setPage] = useState<any>()
    useEffect(()=>{
        const paths = window.location.pathname.split('/')

        setPage(paths[1])
    }, [window.location.pathname])


    return (
        <React.Fragment>
            <footer className={page}>
                <Container>
                    <div className="top">
                        <Logo />
                        <Nav />
                    </div>
                    <Socials />

                    <hr className="mid" />
                    <div className="bottom">
                        <div className="text">Copyright 2024 SHOPCEK-All Rights Reserved</div>
                        <div className="text">Developed for the transition of the next billion to crypto</div>
                    </div>
                </Container>
            </footer>
        </React.Fragment>
    )
}
