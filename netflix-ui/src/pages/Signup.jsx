import React from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";

export default function Signup() {
    return (
        <Container>
            <BackgroundImage />
            <Header />
            <div className="content">
                <div className="body flex column a-center j-center">
                    <div className="text flex column">
                        <h1>Unlimited TV Shows, Movies and more!</h1>
                        <h4>Watch anywhere. Cancel anytime</h4>
                        <h6>Ready to watch? Enter your email to create or restart your membership</h6>
                    </div>
                </div>
                <div>
                    <div className="form">
                        <input type="email" placeholder="Email Address" name="email" />
                        <input type="password" placeholder="Password" name="password" />
                        <button>Get Started</button>

                    </div>
                    <button>Log in</button>
                </div>

            </div>

        </Container >
    );
}

const Container = styled.div`
position: relative; 
.content{
    position: absolute;
height: 100vh;
width: 100vw;
top:0;
left:0;
background-color: rgba(0,0,0,0.5);
display: grid;

}

`;