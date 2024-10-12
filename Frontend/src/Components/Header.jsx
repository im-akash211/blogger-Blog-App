import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {assets} from "../Assets/assets";
import { useState } from "react";
import axios from "axios";
import { set } from 'mongoose';
function Header() {
    const [email,setEmail] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:8080/api/email", {
            email : email
        })
        .then((response)=> {
            toast.success("Subscription added successfully");
        })
        .catch((error)=> toast.error("error"));
        setTimeout(()=> {
            window.location.reload();
        },5000)
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    return (
        <>
        <ToastContainer theme='dark'/>
        <div id="main-div">
            <div id="nav-div">
                <div id="logo-div">
                    <img src={assets.logo} width={180} alt='' />
                </div>
                <div id="get-started">
                    <button>Get Started<img src={assets.arrow} /></button>
                </div>
            </div>
            <div id="latest-blogs">
                <h1>Latest Blogs</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis blanditiis eum dolorem inventore consequatur ullam reprehenderit necessitatibus vitae aliquid velit! Id qui enim quas cupiditate?</p>
                <div id="header-subscribe">
                    <input type="email" placeholder="Enter Your Email" id="subscribe-input" onChange={handleEmail} />
                    <button id="subscribe-btn" onClick={handleSubmit}>Subscribe</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;