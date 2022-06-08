import React from "react";
import "./src/css/home.css"

function About(){
    return (
        <div>
            <section class="about">
                <div class="main">
                    <div class="about-text">
                        <h2>About Us</h2>
                        <h5>Scan <span>& Save</span></h5>
                        <p>Blah Blah Blah</p>
                        <button type="button">Let's Talk</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

function GetStarted(){
    return (
        <div class="content">
            <h4>We are</h4>
            <h1>Cash<span>UwU</span></h1>
            <h3>Snap Once. Save More.
            </h3>
            <div class="newslatter">
                <form>
                    <input type="email" name="email" id="mail" placeholder="Enter Your Email"/>
                    <input type="submit" name="submit" value="Lets Start"/>
                </form>
            </div>
        </div>
    )
}

function HomeHero(){
    return(
        <section id = "header">
            <h2 class="logo">Cash<span>UwU</span></h2>
            <div>
                <ul id ="navbar">
                    <li><a class="active" href="home.html">Home</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="list.html">List</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <a href="login.html" class="btn">Login</a>

                </ul>
            </div>
        </section>


    )
}

function HomeFooter(){
    return (
        <footer>
            <p>For more HTML, CSS, and coding tutorial - please click on the link below to subscribe to my channel:</p> -->
            <div class="social">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-dribbble"></i></a>
            </div>
        </footer>
    )
}
export default function Home(){
    return (

        <body>
            <HomeHero />
            <GetStarted />
            <HomeFooter />
            <About />
 
        </body>
    
    )
}