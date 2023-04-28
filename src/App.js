import React, {useState} from "react";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {roadMapItems} from "./roadMapItems/RoadMapItems"
import YouTube from "react-youtube";
import dogs from "./assets/img/dogs.png"
import gif from "./assets/video/game.gif"
import switchImg from "./assets/img/switch.png"
import Rectangle from "./assets/img/Rectangle.png"
import dog from "./assets/img/section3-dog.png"
import questionsLine from "./assets/img/questions-line.png"
import questionsImg from "./assets/img/card-q-img.png"
import appStore from "./assets/img/app-store.png"
import googlePlay from "./assets/img/logos_google-play.png"
import phone from "./assets/img/phone.png"
import diagram from "./assets/img/diagrm.png"
import coinMarket from "./assets/img/partners/coinMarket.png"
import gecko from "./assets/img/partners/gecko.png"
import trust from "./assets/img/partners/trust.png"
import open_sea from "./assets/img/partners/open-sea.png"
import dogHead from "./assets/img/dog-head.png"
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
import email from "./assets/img/footer/email.png"
import logoText from "./assets/img/logo-text.png"
import menuImg from "./assets/img/menu-panel.png"
import closeIcon from "./assets/img/close-icon.png"
import nft1 from "./assets/img/nft/nft-1.png"
import nft2 from "./assets/img/nft/nft-2.png"
import nft3 from "./assets/img/nft/nft-3.png"
import nft4 from "./assets/img/nft/nft-4.png"
import nft5 from "./assets/img/nft/nft-5.png"
import nftRepeat from "./assets/img/nft/nft-reapit.png"
import crestImg from "./assets/img/crest.png"
import video_title from "./assets/img/video-title.png"
import secondNft1 from "./assets/img/nft/nft-2/nft-1.png"
import secondNft2 from "./assets/img/nft/nft-2/nft-2.png"
import secondNft3 from "./assets/img/nft/nft-2/nft-3.png"
import secondNft4 from "./assets/img/nft/nft-2/nft-4.png"
import secondNft5 from "./assets/img/nft/nft-2/nft-5.png"
import gameNft from "./assets/img/screen-nft.png"
import screenGame1 from "./assets/img/screen-game-1.png"
import screenGame2 from "./assets/img/screen-game-2.png"
import mechanicsImg from "./assets/img/mechanics-img.png"
import phantom from "./assets/img/partners/phantom.png"
import magic from "./assets/img/partners/magic.png"
import nft from "./assets/img/partners/NFT.png"


function App() {

    const [adaptiveMenu, setAdaptiveMenu] = useState(false)

    return (
        <div className="App">
            <div className="App-wrapper">
                <header className="App-header">
                    <div className="container">
                        <div className="head">
                            <div className="menu">
                                <img onClick={() => setAdaptiveMenu(true)} src={menuImg} alt="menu"/>
                            </div>
                            <div className="logotype">
                                <img className="dog-head" src={dogHead} alt="logo"/>
                                <img src={logoText} alt="logo"/>
                            </div>
                            <div className="nav">
                                <a href="http://silkydog.io/">GAME</a>
                                <a href="https://drive.google.com/file/d/1kZb-JWCOUtjXYXcVUJcSx1w7AjRHLdwS/view?usp=drivesdk">whitepaper</a>
                                <a href="https://dessertswap.finance/audits/Silky-Inu-BSC-Audit-20556617.pdf">kyc & audit</a>
                            </div>
                        </div>
                        <div className="title">
                            <div className="title-items">
                                <div className="title-text">
                                    <div className="text">
                                        <div className="title-head">
                                            <h1>WELCOME TO SILKY INU</h1>
                                        </div>
                                        <span>SILKY is a unique collection of 5555 NFT unique Silky Dogs with which <br/>you can play with, earning points.</span>
                                    </div>
                                </div>
                                <img className="dogs" src={dogs} alt="dogs"/>
                                <div className="title-options">
                                    <a href="#">
                                        <button>Claim NFT</button>
                                    </a>
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
                    <div className="section-1">
                        <div className="container">
                            <div className="s-1-title">
                                <h1 className="title">CLAIM NFT </h1>
                                <h1 className="total">in total - 5 555 NFT</h1>
                            </div>
                            <div className="info-blocks">
                                <span className="big-block"><b>1000 NFT</b> - white list collaboration &marketing</span>
                                <span className="small-block"><b>500 NFT</b> - Free mint</span>
                                <span className="small-block"><b>3500 NFT</b> - mint</span>
                                <span className="big-block"><b>555 NFT</b> - collections donation from sales to dog shelters</span>
                            </div>
                            <div className="nft-pictures">
                                <div className="first-row">
                                    <img src={nft1} alt="nft"/>
                                    <img src={nft2} alt="nft"/>
                                    <img src={nft3} alt="nft"/>
                                    <img src={nft4} alt="nft"/>
                                </div>
                                <div className="second-row">
                                    <img src={nftRepeat} alt="nft"/>
                                    <img src={nft5} alt="nft"/>
                                    <img className="gg-pictures" src={nftRepeat} alt="nft"/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-content">
                                <button>Opensea</button>
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
                                                SILKY is a collection of 5555 NFTs that has a rich,
                                                diverse and unique pool of rearitional foundations.
                                                Each SILKY interacts with the SILKY game, where each user
                                                plays and is rewarded in SLK SILKY tokens - the DFI MEME NFT
                                                GAME Game Revolution, an NFT revolution designed to enable free
                                                trading and make it as safe as possible.
                                                <br/><br/>
                                                SILKY is the epitome of community financial freedom.
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className="split-pictures" src={dog} alt="dog"/>
                    </div>
                    <div className="section-4">
                        <div className="container">
                            <div className="s-4-items">
                                <h1>How to buy nft</h1>
                                <div className="s-4-cards">
                                    <div className="first-cards">
                                        <div className="card-1">
                                            <span className="card-title">1. Installation</span>
                                            <span className="card-info">Download<br/>TRUST WALLET</span>
                                        </div>
                                        <div className="card-2">
                                        <span className="card-title">2. Buy <span
                                            className="text-black d-inline">BNB</span></span>
                                            <span
                                                className="card-info"><span>Run TRUST WALLET</span><span
                                                className="d-block">then click buy</span></span>
                                        </div>
                                    </div>
                                    <img className='crest' src={crestImg} alt="crest"/>
                                    <div className="second-cards">
                                        <div className="card-3">
                                        <span className="card-title">3. Claim <span
                                            className="text-black d-inline">NFT</span></span>
                                            <span className="card-info">
                                                <span className="d-block">Go to SILKY INU website </span>
                                                <span className="d-block">and click Claim NFT, to</span>
                                                <span className="d-block">do so you need to have</span>
                                                <span className="d-block">BNB in your wallet</span>
                                            </span>
                                        </div>
                                        <div className="card-4">
                                            <span className="card-title">4. Hold</span>
                                            <span className="card-info">
                                            <span className="d-block">You accumulate NFTs, play</span>
                                            <span className="d-block">games, earn points and</span>
                                            <span className="d-block">enter prize drawings.</span>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="video">
                                    <div className="container">
                                        <span className="video-title">VIdeo instruction</span>
                                        <div className="video-block">
                                            <YouTube
                                                title={video_title}
                                                opts={{
                                                    height: '600px',
                                                    width: '90%',
                                                    border: "white 10px",
                                                }}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="install-block">
                                    <div className="install">
                                        <div className="install-items">
                                            <span className="install-title-adaptive"><span>Start</span><span>installation now</span></span>
                                            <span className="install-title">Start installation now</span>
                                            <span className="install-text">Download TRUST WALLET</span>
                                            <span className="links">
                                                <a href="https://apps.apple.com/us/app/trust-crypto-bitcoin-wallet/id1288339409">
                                                    <img src={appStore} alt="app-store"/>
                                                    <span>App Store</span>
                                                </a>
                                                <a href="https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp&hl=ru&gl=US">
                                                    <img src={googlePlay} alt="app-store"/>
                                                </a>
                                            </span>
                                        </div>
                                        <img className="phone" src={phone} alt="iphone"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="game-section">
                        <div className="container">
                            <h1>What is NFT?</h1>
                            <div className="game-section-items">
                                <span className="d-title">What Is an NFT?</span>
                                <span>
                                    An NFT is a digital asset that can come in the form of art,
                                    music, in-game items, videos, and more. They are bought and sold online,
                                    frequently with cryptocurrency, and they are generally encoded with the same underlying software as many cryptos.
                                    Although they’ve been around since 2014, NFTs are gaining notoriety now because
                                    they are becoming an increasingly popular way to buy and sell digital artwork.
                                    The market for NFTs was worth a staggering $41 billion in 2021 alone,
                                    an amount that is approaching the total value of the entire global fine art market.
                                </span>
                                <div className="game-nft">
                                    <img src={secondNft1} alt="nft"/>
                                    <img src={secondNft2} alt="nft"/>
                                    <img src={secondNft3} alt="nft"/>
                                    <img src={secondNft4} alt="nft"/>
                                    <img src={secondNft5} alt="nft"/>
                                </div>
                                <div className="game-nft-adaptive">
                                    <div className="nft-column">
                                        <img src={secondNft1} alt="nft"/>
                                        <img src={secondNft2} alt="nft"/>
                                    </div>
                                    <div className="nft-column">
                                        <img src={secondNft3} alt="nft"/>
                                        <img src={secondNft4} alt="nft"/>
                                    </div>
                                    <div className="last-nft-column">
                                        <img src={secondNft5} alt="nft"/>
                                    </div>
                                </div>
                                <span className="d-title">How Is an NFT Different from Cryptocurrency?</span>
                                <span>
                                    NFT stands for non-fungible token. It’s generally built using the same kind of programming as cryptocurrency,
                                    like Bitcoin or Ethereum, but that’s where the similarity ends.<br/><br/>
                                    Physical money and cryptocurrencies are “fungible,” meaning they can be traded or exchanged for one another.
                                    They’re also equal in value—one dollar is always worth another dollar; one Bitcoin is always equal to another Bitcoin.
                                    Crypto’s fungibility makes it a trusted means of conducting transactions on the blockchain.<br/><br/>
                                    NFTs are different. Each has a digital signature that makes it impossible for NFTs to be exchanged for
                                    or equal to one another (hence, non-fungible). One NBA Top Shot clip, for example, is not equal to EVERYDAYS simply because they’re both NFTs.
                                    (One NBA Top Shot clip isn’t even necessarily equal to another NBA Top Shot clip, for that matter.)<br/><br/>
                                    Best Crypto Exchanges 2022<br/>We've combed through the leading exchange offerings,
                                    and reams of data, to determine the best crypto exchanges.
                                </span><br/><br/>
                                <span className="d-title">How Does an NFT Work?</span>
                                <span>NFTs exist on a blockchain, which is a distributed public ledger that records transactions.
                                    You’re probably most familiar with blockchain as the underlying process that makes
                                    cryptocurrencies possible.<br/><br/>
                                    Specifically, NFTs are typically held on the Ethereum blockchain, although other blockchains support them as well.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="nft-game">
                        <div className="container">
                            <h1>Silku Inu NFT game</h1>
                            <div className="nft-game-section-items">
                                <span
                                    className="d-title">Where you can play completely free without additonal fees.</span>
                                <span>
                                    The game is available in web and also for Android and iPhone.
                                    In game you will need to pass various difficult levels to collect more tokens by SILKY character and become the best among other players.
                                    Top 555 players will receive rewards in the form of SILKY tokens on their wallets.
                                    You need to buy nft for 1 BNB, to recieve game access. The SILK tokens that will be collected, you can sell on a exchange.
                                </span>
                                <div className="screen-game-pictures">
                                    <div className="absolute-img"><img src={gameNft} alt="nft"/></div>
                                    <div className="relative-img">
                                        <img src={screenGame1} alt="screen"/>
                                        <img src={screenGame2} alt="screen"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mechanics-section">
                        <div className="container">
                            <h1>Play to Earn mechanics</h1>
                            <div className="mechanics-items">
                                <div className="sections">
                                    <div className="s-1">
                                        <span className="s-title">TOKEN SLK</span>
                                        <span>Owners of SILKY NFT can earn game tokens called SLK.</span>
                                    </div>
                                    <div className="s-2">
                                        <span className="s-title">COMPETITION MODE</span>
                                        <span>Top 555 players will receive various prizes in a form of NFT or SLK tokens.</span>
                                    </div>
                                    <div className="s-3">
                                        <span className="s-title">IN-GAME REWARDS All NFT</span>
                                        <span>All NFT and tokens that you will get, can be sold. To support the market, we will allocate 30% of the game's profit.</span>
                                    </div>
                                </div>
                                <img className="mechanics-img" src={mechanicsImg} alt="mechanicsImg"/>
                            </div>
                        </div>
                    </div>
                    <div className="faq-section">
                        <div className="container">
                            <h1>F.A.Q</h1>
                            <div className="faq-items">
                                <div>
                                    <span>How many NFTs can i mint from one wallet?</span>
                                    <li>You can buy an unlimited number of NFTs for one wallet.</li>
                                </div>
                                <div>
                                    <span>Where can I look for my NFTs? </span>
                                    <li>You can see your NFTs on the opensia trading platform.</li>
                                </div>
                                <div>
                                    <span>What does NFT give me? </span>
                                    <li>NFT gives you opportunity to participate in a tournament, moreover more tokens
                                        you collect,
                                        more profit you will get by sell SLK token on a exchange.
                                        Additionally, owners of NFT SILKY INU will receive privileges in competitions
                                        and prizes of the project.
                                    </li>
                                </div>
                                <div>
                                    <span>Do game will have its own token?</span>
                                    <li>At the moment, we are planning to integrate our token into the game.
                                        All mechanics will be implemented via NFT and SLK okens to interact with the
                                        game.
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-5">
                        <div className="container">
                            <h1>tokenomics silky inu</h1>
                            <div className="diagram"><img src={diagram} alt="diagram"/></div>
                            <div className="adaptive-numbers">
                                <span className="presale">79.5%</span>
                                <span className="team">5%</span>
                                <span className="locked">10%</span>
                                <span className="num-2">5.5%</span>
                            </div>
                            <div className="diagram-numbers">
                                <div className="presale">
                                    <span className="numbers-title">Mint</span>
                                    <span>79.5%</span>
                                </div>
                                <div className="team">
                                    <span>5%</span>
                                    <span className="numbers-title">NFT free mint</span>
                                </div>
                                <div className="locked">
                                    <span>10%</span>
                                    <span className="numbers-title">White list collaboration &marketing</span>
                                </div>
                                <div className="num-2">
                                    <span>5.5%</span>
                                    <span className="numbers-title">Collections donation from sales to dog shelters</span>
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
                                        <a href="#"><img src={coinMarket} alt="coinMarket"/></a>
                                        <a href="#"><img src={gecko} alt="gecko"/></a>
                                        <a href="#"><img src={open_sea} alt="open sea"/></a>
                                    </div>
                                    <div className="bot-partners">
                                        <a href="https://trustwallet.com/"><img src={trust} alt="trust"/></a>
                                        <a href="#"><img src={phantom} alt="phantom"/></a>
                                        <a href="#"><img src={nft} alt="nft"/></a>
                                        <a href="#"><img src={magic} alt="magic"/></a>
                                    </div>
                                </div>
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
                                    <a href="#"><img src={email} alt="link"/></a>
                                </div>
                                <div className="links-adaptive">
                                    <div className="first-links">
                                        <a href="https://twitter.com/silkyinu"><img src={twitter} alt="link"/></a>
                                        <a href="https://t.me/silkyinu"><img src={telegram} alt="link"/></a>
                                    </div>
                                    <div className="second-links">
                                        <a href="https://discord.gg/Xpe5pUH7"><img src={discord} alt="link"/></a>
                                        <a href="#"><img src={email} alt="link"/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-text">
                            <span>
                                DENIAL OF RESPONSIBILITY:<br/><br/>
                            </span>
                                <span className="years">© 2023 SILKY INU</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            {adaptiveMenu ?
                <div className="adaptive-nav">
                    <img src={closeIcon} alt="close" onClick={() => setAdaptiveMenu(false)}/>
                    <div className="adaptive-links">
                        <a href="#">GAME</a>
                        <a href="#">whitepaper</a>
                        <a href="#">kyc & audit</a>
                    </div>
                </div>
                : null}
        </div>
    );
}

export default App;
