import React from "react";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {roadMapItems} from "./roadMapItems/RoadMapItems"
import YouTube from "react-youtube";
import TelegramImg from "./assets/img/logos_telegram.png"
import play from "./assets/img/Play-video-img.png"
import dogs from "./assets/img/dogs.png"
import gif from "./assets/img/gif-img.png"
import switchImg from "./assets/img/switch.png"
import Rectangle from "./assets/img/Rectangle.png"
import dog from "./assets/img/section3-dog.png"
import questionsLine from "./assets/img/questions-line.png"
import questionsImg from "./assets/img/card-q-img.png"
import smallDog from "./assets/img/small-dog.png"
import bigDog from "./assets/img/big-dog.png"
import splitLine from "./assets/img/split-line.png"
import appStore from "./assets/img/app-store.png"
import googlePlay from "./assets/img/logos_google-play.png"
import phone from "./assets/img/phone.png"
import diagram from "./assets/img/diagrm.png"
import diagramDog from "./assets/img/diagram-dog.png"
import pooCoin from "./assets/img/partners/pooCoin.png"
import coinMarket from "./assets/img/partners/coinMarket.png"
import bnb from "./assets/img/partners/bnb.png"
import dext from "./assets/img/partners/dext.png"
import gecko from "./assets/img/partners/gecko.png"
import trust from "./assets/img/partners/trust.png"
import pancake from "./assets/img/partners/pancake.png"
import dogHead from "./assets/img/dog-head.png"
import airEvent from "./assets/img/air-event.png"
import pdf from "./assets/img/pdf.png"
import team_img1 from "./assets/img/project-team/Group 35.png"
import team_img2 from "./assets/img/project-team/Group 36.png"
import team_img3 from "./assets/img/project-team/Group 37.png"
import team_img4 from "./assets/img/project-team/Group 38.png"
import team_img5 from "./assets/img/project-team/Group 39.png"
import team_img6 from "./assets/img/project-team/Group 40.png"
import team_img7 from "./assets/img/project-team/Group 41.png"
import team_img8 from "./assets/img/project-team/Group 42.jpg"
import twitter from "./assets/img/footer/twitter.png"
import telegram from "./assets/img/footer/telegram.png"
import discord from "./assets/img/footer/ds.png"
import reddit from "./assets/img/footer/reddit.png"
import tikTok from "./assets/img/footer/tik-tok.png"
import facebook from "./assets/img/footer/facebook.png"
import email from "./assets/img/footer/email.png"
import logoText from "./assets/img/logo-text.png"
import widthSplitLine from "./assets/img/width-line.png"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <div className="head">
                        <div className="logotype">
                            <img className="dog-head" src={dogHead} alt="logo"/>
                            <img src={logoText} alt="logo"/>
                        </div>
                        <div className="nav">
                            <span>contract</span>
                            <span>pancakeswap</span>
                            <span>dextools</span>
                            <span>unicrypt</span>
                            <span>whitepaper</span>
                            <span>kyc & audit</span>
                        </div>
                    </div>
                    <div className="title">
                        <div className="title-items">
                            <div className="title-text">
                                <div className="text">
                                    <div className="title-head">
                                        <div className="play">
                                            <img src={play} alt="play"/>
                                            <div className="play-text">watching video about Silky Inu</div>
                                        </div>
                                        <h1>WELCOME TO SILKY INU</h1>
                                    </div>
                                    <span>A DECENTRALIZED MEME TOKEN</span>
                                </div>
                            </div>
                            <img className="dogs" src={dogs} alt="dogs"/>
                            <div className="title-options">
                                <button>Claim NFT</button>
                                <div className="telegram">
                                    <img src={TelegramImg} alt="telegram"/>
                                    <span>telegram</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="content">
                <div className="description">
                    <div className="description-rectangle">
                        <img src={Rectangle} alt="Rectangle"/>
                    </div>
                    <div className="description-pictures">
                        <div className="description-items">
                            <img className="gif" src={gif} alt="gif"/>
                            <img className="switch" src={switchImg} alt="switch"/>
                            <img className="dogs" src={dogs} alt="dogs"/>
                        </div>
                    </div>
                </div>
                <div className="section-2">
                    <div className="section-2-items">
                        <div className="container">
                            <div className="items">
                                <div className="s2-title">
                                    <span>history of silky inu?</span>
                                </div>
                                <div className="info">
                                    <span
                                        className="info1"><span>Silky is a cherful companion, obedient,balanced,</span><span>good in contact, a dog</span><span>adapted to life</span></span>
                                    <div className="info2">
                                        <span className="info2-title">whats is silky inu?</span>
                                        <span className="info2-description">
                                            <span>Silky is an decentralized deflationary token </span>
                                            <span>aiming to revolutionize Defi to allow free </span>
                                            <span>trading and the safest. SILKY isthe</span>
                                            <span>embodiment of community financical</span>
                                            <span>freedom. The SILKY community intends to</span>
                                            <span>appear on the moon.</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="split-pictures" src={dog} alt="dog"/>
                </div>
                <div className="section-3">
                    <div className="container">
                        <div className="sections-3-items">
                            <h1>roadmap of silky: </h1>
                            <div className="line">
                                <div className="q-numbers">
                                    <span>Q1</span>
                                    <span>Q2</span>
                                    <span>Q3</span>
                                    <span>Q4</span>
                                </div>
                                <img src={questionsLine} alt="line"/>
                            </div>
                            <div className="questions row">
                                {roadMapItems.map(item =>
                                    <div className="card col-3">
                                        <span className="card-title">{item.title}</span>
                                        <div className="question">
                                            {item.questions.map(q =>
                                                <div>
                                                    <img src={questionsImg} alt="q"/>
                                                    <span>{q}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="s3-split-pictures">
                        <img className="small-dog" src={smallDog} alt="dog"/>
                        <img className="big-dog" src={bigDog} alt="dog"/>
                    </div>
                </div>
                <div className="section-4">
                    <div className="container">
                        <div className="s-4-items">
                            <h1>How to buy silky inu (slk)</h1>
                            <div className="s-4-cards">
                                <div className="card-1">
                                    <span className="card-title">1.Installation</span>
                                    <span className="card-info">Download TRUST WALLET</span>
                                    <img className="width-split-line" src={widthSplitLine} alt="split"/>
                                </div>
                                <img className="splitLine" src={splitLine} alt="split"/>
                                <div className="card-2">
                                    <span className="card-title">2. Buy BNB</span>
                                    <span className="card-info"><span>Run TRUST WALLET</span><span>then click buy</span></span>
                                    <img className="width-split-line" src={widthSplitLine} alt="split"/>
                                </div>
                                <img className="splitLine" src={splitLine} alt="split"/>
                                <div className="card-3">
                                    <span className="card-title">3. Swap</span>
                                    <span
                                        className="card-info"><span>Go to PancakeSwap</span><span>to swap BNB to SLK</span></span>
                                    <img className="width-split-line" src={widthSplitLine} alt="split"/>
                                </div>
                                <img className="splitLine" src={splitLine} alt="split"/>
                                <div className="card-4">
                                    <span className="card-title">4. Hold</span>
                                    <span className="card-info"><span>Now you watch,</span><span>SLK tokens grow.</span></span>
                                </div>
                            </div>
                            <div className="install-block">
                                <div className="install">
                                    <div className="install-items">
                                        <span className="install-title-adaptive"><span>Start</span><span>installation now</span></span>
                                        <span className="install-title">Start installation now</span>
                                        <span className="install-text">Download TRUST WALLET</span>
                                        <div className="links">
                                            <button><img src={appStore} alt="app-store"/><span>App Store</span></button>
                                            <button><img src={googlePlay} alt="app-store"/></button>
                                        </div>
                                    </div>
                                    <img className="phone" src={phone} alt="iphone"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-5">
                    <div className="container">
                        <h1>tokenomics silky inu</h1>
                        <div className="diagram"><img src={diagram} alt="diagram"/></div>
                        <div className="adaptive-numbers">
                            <span className="presale">45%</span>
                            <span className="marketing">20%</span>
                            <span className="team">15%</span>
                            <span className="locked">10%</span>
                            <span className="num-1">3%</span>
                            <span className="num-2">7%</span>
                        </div>
                        <div className="diagram-numbers">
                            <div className="presale">
                                <span className="numbers-title">Preasale & Listing</span>
                                <span>45%</span>
                            </div>
                            <div className="marketing">
                                <span className="numbers-title">Marketing</span>
                                <span>20%</span>
                            </div>
                            <div className="team">
                                <span className="numbers-title">Team</span>
                                <span>15%</span>
                            </div>
                            <div className="locked">
                                <span className="numbers-title">Locked</span>
                                <span>10%</span>
                            </div>
                            <div className="num-1">
                                <span>3%</span>
                            </div>
                            <div className="num-2">
                                <span>7%</span>
                            </div>
                        </div>
                        <div className="diagram-info">
                            <div className="info-description">
                                <div className="description">
                                    <span className="description-title">Fees & Redistribution</span>
                                    <span className="info-title">7% BURN & 3% aIRDROP</span>
                                    <span className="info-text">4% of the tokens will be automatically
                                        burned and 4% of the <br/>tokenswill be distributed to
                                        the holders at each purchase.
                                    </span>
                                </div>
                                <img src={diagramDog} alt="dog"/>
                            </div>
                            <div className="diagram-table">
                                <div className="items">
                                    <span className="th">Total Supply</span>
                                    <span className="text-uppercase">1 000 000 000 000 000 SLK</span>
                                    <img src={widthSplitLine} alt="line"/>
                                </div>
                                <img className="splitLine" src={splitLine} alt="split"/>
                                <div className="items">
                                    <span className="th">Token Symbol</span>
                                    <span className="text-uppercase">SLK</span>
                                    <img src={widthSplitLine} alt="line"/>
                                </div>
                                <img className="splitLine" src={splitLine} alt="split"/>
                                <div className="items">
                                    <span className="th">Token Type</span>
                                    <span className="text-uppercase">BEp-20 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-6">
                    <div className="container">
                        <div className="partners">
                            <h1>exchanges & partners of silky inu</h1>
                            <div className="partners-items">
                                <div className="top-partners">
                                    <span><img src={coinMarket} alt="coinMarket"/></span>
                                    <span><img src={gecko} alt="gecko"/></span>
                                    <span><img src={pancake} alt="pancake"/></span>
                                </div>
                                <div className="bot-partners">
                                    <span><img src={trust} alt="trust"/></span>
                                    <span><img src={bnb} alt="bnb"/></span>
                                    <span><img src={pooCoin} alt="pooCoin"/></span>
                                    <span><img src={dext} alt="dext"/></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-7">
                    <div className="container">
                        <div className="s7-items">
                            <div className="title">
                                <div className="logo">
                                    <span className="title-text">AIR EVENT</span>
                                    <span>LIVE NOW</span>
                                </div>
                                <span className="date">1 september - 1 november</span>
                            </div>
                            <div className="pictures">
                                <div className="dog-head">
                                    <img src={dogHead} alt="dogHead"/>
                                    <span><span>add liquidity to pancakeswap</span><span>SLK-BNB and participate in<span>AIRDROP</span></span></span>
                                </div>
                                <div><img className="air-event d-block" src={airEvent} alt="airEvent"/></div>
                            </div>
                            <div className="btn">
                                <button>Claim NFT</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-8">
                    <div className="container">
                        <h1>kyc & audit</h1>
                        <div className="s8-items">
                            <span className="items-title"><span>Download</span><span>the PDF file</span></span>
                            <span
                                className="items-text"><span>With the full Silky-Inu-</span><span>BSC-Audit</span></span>
                            <button><img src={pdf} alt="pdf"/>Download</button>
                        </div>
                    </div>
                </div>
                <div className="section-9">
                    <div className="container">
                        <h1>project team</h1>
                        <div className="cards row">
                            <div className="col-6 ">
                                <div className="row first-cards">
                                    <img src={team_img1} alt="team"/>
                                    <img src={team_img2} alt="team"/>
                                </div>
                                <div className="row first-cards">
                                    <img src={team_img5} alt="team"/>
                                    <img src={team_img6} alt="team"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row second-cards">
                                    <img src={team_img3} alt="team"/>
                                    <img src={team_img4} alt="team"/>
                                </div>
                                <div className="row second-cards">
                                    <img src={team_img7} alt="team"/>
                                    <img src={team_img8} alt="team"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-10">
                    <div className="container">
                        <h1>Watching video </h1>
                        <div className="video-block">
                            <YouTube videoId="FM7MFYoylVs"
                                     opts={{
                                         height: '621px',
                                         width: '100%',
                                     }}/>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <div className="footer-default">
                    <div className="container">
                        <div className="footer-head">
                            <div className="logo">
                                <img src={dogHead} alt="dogHead"/>
                                <div className="logo-text">
                                    <h1>SILKY INU</h1>
                                    <span>A DECENTRALIZED MEME TOKEN</span>
                                </div>
                            </div>
                            <div className="links">
                                <a href="https://twitter.com/silkyinu"><img src={twitter} alt="link"/></a>
                                <a href="https://t.me/silkyinu"><img src={telegram} alt="link"/></a>
                                <a href="https://discord.gg/Xpe5pUH7"><img src={discord} alt="link"/></a>
                                <a href="https://reddit.com/r/silkyinu"><img src={reddit} alt="link"/></a>
                                <a href="https://tiktok.com/@silkyinu"><img src={tikTok} alt="link"/></a>
                                <a href="https://www.facebook.com/people/Silky-Inu/100084480724789/"><img src={facebook} alt="link"/></a>
                                <a><img src={email} alt="link"/></a>
                            </div>
                            <div className="links-adaptive">
                                <div className="first-links">
                                    <div><img src={twitter} alt="link"/></div>
                                    <div><img src={telegram} alt="link"/></div>
                                    <div><img src={discord} alt="link"/></div>
                                    <div><img src={reddit} alt="link"/></div>
                                </div>
                                <div className="second-links">
                                    <div><img src={tikTok} alt="link"/></div>
                                    <div><img src={facebook} alt="link"/></div>
                                    <div><img src={email} alt="link"/></div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-text">
                            <span>
                                DENIAL OF RESPONSIBILITY:<br/><br/>
                            </span>
                            <span>The SILKY INU project, neither its members, nor its social channels, nor persons and this
                            document are not responsible for providing trading advice and does not contain any advice on
                            investment of any kind. In situations where decentralization is the main driving force token, like
                            \other centralized methods, is recommended consult a professional or legal advisor before purchasing or
                            \interaction with the SLK token. By purchasing SLK, you agree that the developers neither the
                            project will bear any legal liability for any damages. The team will remain unscathed for any losses
                            that may have happened. The SLK token is also not a security and is not claim as such. If you live in an
                            area where you cannot legally own cryptocurrencies or does not allow any type of trading on markets where
                            SLK is listed, you must comply with these laws. All cryptocurrencies are risks, and you understand that
                            these risks may be applied to you when interacting with this token or any others.
                            </span>
                            <span className="years">© 2023 SILKY INU</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
