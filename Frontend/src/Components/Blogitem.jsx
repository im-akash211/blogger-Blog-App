import { useEffect, useState } from "react";
import { blog_data } from "../Assets/assets";
import { assets } from "../Assets/assets";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Blogitem() {
    const [menu,setMenu] = useState("All");
    const [blog,setBlog] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:8080/show")
        .then((response)=> setBlog(response.data))
        .catch((error)=> console.log(error));
    },[])

    return (
        <>
        <div id = "blogitem-div">
        <div>
            <div id = "menu-div">
                <button onClick={()=>setMenu('All')}>All</button>
                <button onClick={()=>setMenu('Technology')}>Technology</button>
                <button onClick={()=>setMenu('Startup')}>Startup</button>
                <button onClick={()=>setMenu('Lifestyle')}>Lifestyle</button>
            </div>
        </div>
        <div id = "blogitem-parent">
        <div id = "card-par-div">
            {blog.filter((item)=>menu==='All'?true:item.category===menu).map((item,index)=> (
                <div key={index} id="card-div">
                    <NavLink to = {`/blogs/${item._id}`}>
                <img src={`http://localhost:8080/uploads/${item.image}`} height={200} width={300} alt='' id="card-img" />
                    </NavLink>
                <p id="category">{item.category}</p>
                <h3>{item.title}</h3>
                <p id="desc">{item.description}</p>
                <NavLink to = {`/blogs/${item._id}`}>
                <button>Read More <img src={assets.arrow} width={12} /></button>
                </NavLink>
            </div>
            ))}
            </div>
        </div>
        </div>
        </>
    )
}

export default Blogitem;