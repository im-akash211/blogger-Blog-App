import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import { assets } from "../../Assets/assets";

function BlogLists() {
    const [blogs,setBlogs] = useState([]);

    function fetchBlogData() {
        axios.get("http://localhost:8080/show")
        .then((response)=> {setBlogs(response.data)
            console.log(response.data)
        })
        .catch((error)=> console.log(error));
    }

    useEffect(()=> {
        fetchBlogData()
    },[])

    function handleDelete(id) {
        axios.delete(`http://localhost:8080/show/delete/${id}`)
        .then((response)=> toast.success("Blog deleted successfully!"))
        .catch((error)=> toast.error("error! Blog not deleted!"));
        setTimeout(()=> {
            window.location.reload();
        },5000)
    }

    return (
        <>
        <ToastContainer theme='dark'/>
        <Layout/>
        <div id = "admin-bl-div">
            <p>All blogs</p>
            <div id = "admin-bl-inside-div">
                <table id = "admin-bl-inside-table">
                    <thead>
                        <tr>
                            <th>AUTHOR NAME</th>
                            <th>BLOG TITLE</th>
                            <th>DATE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                    {blogs.map((item)=> (
                        <tr key={item._id}>
                                <td id = "author-th">
                                    <img src = {`http://localhost:8080/uploads/${item.authorImg}`} width={40}/><p><b>{item.author}</b></p>
                                </td>
                                <td>
                                    {item.title}
                                </td>
                                <td>
                                    {new Date(item.createdAt).toDateString()}
                                </td>
                            <td>
                                <button onClick={()=> handleDelete(item._id)}>
                                x
                                </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default BlogLists;