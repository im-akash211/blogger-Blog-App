import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { assets } from "../../Assets/assets";
import Layout from "../Layout";
import axios from 'axios';

function AddProduct() {
    const [file,setFile] = useState("");
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [category,setCategory] = useState("");
    const [authorImg,setAuthorImg] = useState("/profile_icon.png");

    const formdata = new FormData();
    formdata.append('file',file);
    formdata.append('title',title);
    formdata.append('description',description);
    formdata.append('category',category);
    formdata.append('authorImg',authorImg);

    function handleSubmit(e) {
        e.preventDefault();
    axios.post("http://localhost:8080", formdata, {
        header : {
            'Content-Type' : 'multipart/form-data'
        }
    })
    .then((response)=> {
        toast.success("Blog added successfully!");
    })
    .catch((error)=> {
        toast.error("error");
    })
    setTimeout(()=> {
        window.location.reload();
    },5000)
}
    return (
        <>
        <ToastContainer theme='dark'/>
        <Layout/>
        <form id ="form">
            <p>Upload Thumbnail</p>
            <label>
                <img src = {!file?assets.upload_area:URL.createObjectURL(file)} width={120} alt=""/>
                <input type = "file" id = "image" accept="image" hidden required  onChange={(e)=> setFile(e.target.files[0])}/>
            </label>
            <p>Blog Title</p>
            <input type = "text" placeholder="Type here" required onChange={(e)=>setTitle(e.target.value)}/>
            <p>Blog Description</p>
            <textarea type = "text" placeholder="write content here" rows={8} required onChange={(e)=> setDescription(e.target.value)}/>
            <p>Blog category</p>
            <select name = "Category" required onChange={(e)=> setCategory(e.target.value)}>
                <option value="">Select a category</option>
                <option value = "Startup">Startup</option>
                <option value = "Technology">Technology</option>
                <option value = "Lifestyle">Lifestyle</option>
            </select>
            <br></br>
            <button onClick={handleSubmit}>ADD</button>
        </form>
        </>
    )
}

export default AddProduct;