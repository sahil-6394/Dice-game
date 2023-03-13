# Dice-game
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
</head>
<body>

    <header>
        <nav class="navbar" id="nav">
            <ul class="ul-list">
                <li class="list first-list">
                    <a href="#nav"><img src="https://angular.io/assets/images/logos/angular/logo-nav@2x.png" alt="angular-logo"></a>
                    <a href="" class="link-hover">DOCS</a>
                    <a href="" class="link-hover">COMMUNITY</a>
                    <a href="" class="link-hover">BLOG</a>
                </li>
                <li class="list second-list">
                    <div class="search">
                        <input type="search" placeholder="Search">
                        <span>/</span>
                    </div>
                    <div class="logo">
                        <a href="twiter">
                            <svg focusable="false" viewBox="0 0 50 59" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50,9.3c-1.8,0.8-3.8,1.4-5.9,1.6c2.1-1.3,3.7-3.3,4.5-5.7c-2,1.2-4.2,2-6.5,2.5c-1.9-2-4.5-3.2-7.5-3.2
                                         c-5.7,0-10.3,4.6-10.3,10.3c0,0.8,0.1,1.6,0.3,2.3C16.1,16.7,8.5,12.6,3.5,6.4c-0.9,1.5-1.4,3.3-1.4,5.2c0,3.6,1.8,6.7,4.6,8.5
                                         C5,20,3.4,19.6,2,18.8c0,0,0,0.1,0,0.1c0,5,3.5,9.1,8.2,10.1c-0.9,0.2-1.8,0.4-2.7,0.4c-0.7,0-1.3-0.1-1.9-0.2
                                         c1.3,4.1,5.1,7,9.6,7.1c-3.5,2.8-7.9,4.4-12.7,4.4c-0.8,0-1.6,0-2.4-0.1c4.5,2.9,9.9,4.6,15.7,4.6c18.9,0,29.2-15.6,29.2-29.2
                                         c0-0.4,0-0.9,0-1.3C46.9,13.2,48.6,11.4,50,9.3z"></path>
                              </svg>
                        </a>
                        <a href="github">
                            <svg focusable="false" viewBox="0 0 51.8 50.4" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.9,0.2C11.8,0.2,0.3,11.7,0.3,25.8c0,11.3,7.3,20.9,17.5,24.3c1.3,0.2,1.7-0.6,1.7-1.2c0-0.6,0-2.6,0-4.8
                                         c-7.1,1.5-8.6-3-8.6-3c-1.2-3-2.8-3.7-2.8-3.7c-2.3-1.6,0.2-1.6,0.2-1.6c2.6,0.2,3.9,2.6,3.9,2.6c2.3,3.9,6,2.8,7.5,2.1
                                         c0.2-1.7,0.9-2.8,1.6-3.4c-5.7-0.6-11.7-2.8-11.7-12.7c0-2.8,1-5.1,2.6-6.9c-0.3-0.7-1.1-3.3,0.3-6.8c0,0,2.1-0.7,7,2.6
                                         c2-0.6,4.2-0.9,6.4-0.9c2.2,0,4.4,0.3,6.4,0.9c4.9-3.3,7-2.6,7-2.6c1.4,3.5,0.5,6.1,0.3,6.8c1.6,1.8,2.6,4.1,2.6,6.9
                                         c0,9.8-6,12-11.7,12.6c0.9,0.8,1.7,2.4,1.7,4.7c0,3.4,0,6.2,0,7c0,0.7,0.5,1.5,1.8,1.2c10.2-3.4,17.5-13,17.5-24.3
                                         C51.5,11.7,40.1,0.2,25.9,0.2z"></path>
                              </svg>
                        </a>
                        <a href="youtube">
                            <svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77
                                         C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42
                                         c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"></path>
                              </svg>
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
    
        <section id="heading">
            <div class="back"></div>
            <div class="heading-content">
                <div class="heading-img">
                    <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular-img">
                </div>
                <div class="heading-text">
                    <h1>Deliver web apps with confidence</h1>
                    <div class="heading-link">
                        <a href="https://angular.io/quick-start">TRY ANGULAR</a>
                    </div>
                </div>
            </div>
        </section>
    
    </header>

    <section id="content">
        <div class="main-content">
            <h1>The web development framework for building the future</h1>
            <div class="card-container">
                <div class="card">
                    <h3>WORKS AT ANY SCALE</h3>
                    <img src="https://angular.io/generated/images/marketing/home/any-size.svg" alt="work-sacle">
                    <p>Angular lets you start small and supports you as your team and apps grow.</p>
                    <a href="https://angular.io/scaling">Read how Angular helps you grow</a>
                </div>
                <div class="card">
                    <h3>LOVED BY MILLIONS</h3>
                    <img src="https://angular.io/generated/images/marketing/home/loved-by-millions.svg" alt="love-millions">
                    <p>Join the millions of developers building with Angular in a thriving and friendly community.</p>
                    <a href="https://angular.io/resources?category=community">Meet the Angular community</a>
                </div>
                <div class="card">
                    <h3>BUILD FOR EVERYONE</h3>
                    <img src="https://angular.io/generated/images/marketing/home/build-for-everyone.svg" alt="build-for-everyone">
                    <p>Rely on Angular's internationalization tools, security, and accessibility to build for everyone around the world.</p>
                    <a href="https://angular.io/everyone">Learn more about Angular's tools</a>
                </div>    
            </div>
        </div>
        <div class="content-link">
            <a href="https://angular.io/quick-start">LEARN MORE</a>
        </div>
    </section>

    <footer>
        
    </footer>
</body>
</html>
* {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
}
body {
     font-family: Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;
     width: 100%;
     outline: 2px solid pink;
    overflow-x: hidden;
}

/* navbar styling */
nav {
    background: #1976D2;
}
.ul-list {
    margin-top: 0px;
    list-style: none;
    display: flex;
    justify-content: space-between;
}
.list {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
}
.list a{
    text-decoration: none;
    color: white;
    z-index: 1;
}
.first-list img {
    height: 40px;
    width: 140px;
}
.first-list a {
    padding: 3% 5%;
}
.link-hover:hover{
    background-color: rgba(255,255,255,.1);
    border-radius: 5px;
}
.second-list .search{
    display: flex;
    background-color: white;
    padding: 2%; 
    border-radius: 30px;
    z-index: 1;
}
.search input {
    width: 80%;
    padding-left: 5%;
    border: none;
    outline: none;
}
.search span {
    border: 1px solid black;
    padding: 0.8% 5%;
    border-radius: 4px;
}
.second-list svg {
    margin-left: 10px;
    margin-right: 10px;
    height: 25px;
    width: 25px;
    fill: white;
    border: none;
    outline: none;
}
.second-list a {
    /* padding:0 10%; */
    z-index: 1;
}
.logo {
    display: flex;
    align-items: center;
    justify-content: cneter;

}

/* heading styling */
#heading {
    /* display: flex; */
}
.heading-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 23%;
    padding-top: 2%;
}
.back {
    align-items: center;
    background: linear-gradient(145deg,#0d47a1,#42a5f5);
    position: absolute;
    width: 100%;
    min-height: 480px;
    height: 80vh;
    max-height: 560px;
    padding: 48px 48px 32px;
    overflow: hidden;
    transform: skewY(8deg);
    transform-origin: 100%;
    top: 0;
}
.heading-img {
    width: 50%;
    min-width: 250px;
    height: 300px;
    z-index: 1;
}
.heading-text {
    width: 50%;
    z-index: 1;
    color: white;
    margin-top: 5%;
}
.heading-text h1 {
    font-weight: 600;
    line-height: 60px;
    font-size: 2.5em;
    padding: 5%;
}
.heading-link {
    margin: 5%;
}
.heading-link a {
    text-decoration: none;
    background-color: white;
    border-radius: 50px;
    color: #1976d2;
    font-weight: 600;
    font-size: 1.2em;
    padding:2% 9%;
}
.heading-text a:hover{
    text-decoration: underline;
    opacity: 0.9;
}

/* main content styeling */
#content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.main-content {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 180px;
}
.main-content h1 {
    font-size: 2em;
    opacity: 0.85;
    text-align: center;
    margin-left: 2.5%;
}
.main-content h3 {
    font-size: 1.1em;
    font-weight: 600;
    color: #1976d2;
}
.card-container {
    display: flex;
    justify-content: center;
}
.card { 
    width: 320px;
    height: 416.60px;
    text-align: left;
    padding: 3%;
    margin-top: 2%;
}
.card img {
    width: 100%;
}
.card h3 {
    font-size: 1.2em;
    font-weight: 500;
}
.card p {
    margin: 6% 0;
    line-height: 30px;
}
.card a {
    color: #1976d2;
    text-decoration: none;
}
.card a:hover {
    text-decoration: underline;
}
.content-link a {
    text-decoration: none;
    color: #1976d2;
    font-weight: 600;
    font-size: 1.2em;
    /* padding:2% 9%; */
}
.content-link a:hover{
    text-decoration: underline;
    opacity: 0.9;
}

/* footer styling */
footer:after {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    background: url(/assets/images/logos/angular/angular_whiteTransparent_withMargin.png) top 0 left 0 repeat,url(/assets/images/logos/angular/angular_whiteTransparent_withMargin.png) top 80px left 160px repeat;
    opacity: .05;
    background-size: 320px auto;
}
