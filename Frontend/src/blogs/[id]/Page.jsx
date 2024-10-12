import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { blog_data } from "../../Assets/assets";
import { assets } from "../../Assets/assets";
import Footer from "../../Components/Footer";
import axios from "axios";

function Page() {
    const {id} = useParams()
    const [data,setData] = useState("");

    function fetchBlogData() {
        axios.get(`http://localhost:8080/blog/${id}`)
        .then((response)=> setData(response.data))
        .catch((error)=> console.log(error));
    }

    useEffect(()=> {
        fetchBlogData();
    },[id])

    return (data
        ?
        <>
        <div id = "page-main-div">
        <div id = "nav-div">
        <div id = "page-logo-div">
            <NavLink to = "/">
            <img src = {assets.logo} width={180} alt = ''/>
            </NavLink>
        </div>
        <div id = "page-get-started">
            <button>Get Started<img src = {assets.arrow}/></button>
        </div>
        </div>
        <div id= "data-title">
            <h1>{data.title}</h1>
            <img src = {`http://localhost:8080/uploads/${data.authorImg}`} height = {60} width={60} alt = '' id = "profile-photo"/>
            <p>{data.author}</p>
        </div>
        <div id = "page-blog-image">
        <img src = {`http://localhost:8080/uploads/${data.image}`} height={320} width={750} alt=""/>
        <h3>Introduction :</h3>
        <p>{data.description}</p>
        <h3>Step 1: Self-Reflection and Goal Setting</h3>
        <p>Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
        <p>Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
        <h3>Step 2: Self-Reflection and Goal Setting</h3>
        <p>Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
        <p>Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
        <h3>Step 3: Self-Reflection and Goal Setting</h3>
        <p>Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
        <p>Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
        <h3>Conclusion:</h3>
        <p>Managing your lifestyle is a journey that requires commitment and self-awareness. By following this step-by-step guide, you cantake control of your life and make meaningful changes that lead to a more balanced and fulfilling lifestyle. Remember that it's ok to seek support and guidace from professionals or mentors along the way. Your well being and happiness worth the effort.</p>
        </div>
        <div id = "page-sm">
            <h3>Share this article on social media</h3>
            <div id = "page-sm-icons">
                <img src = {assets.facebook_icon} width={40} alt=""/>
                <img src = {assets.twitter_icon} width={40} alt=""/>
                <img src = {assets.googleplus_icon} width={40} alt=""/>
            </div>
        </div>
        <Footer/>
        </div>
        </>
    :<></>)
}

export default Page;