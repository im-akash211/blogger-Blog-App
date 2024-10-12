import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import Layout from "../Layout";
import axios from "axios";

function Subscriptions() {
    const [email,setEmail] = useState([]);

    useEffect(()=> {
    axios.get("http://localhost:8080/api/email/get")
    .then((response)=> setEmail(response.data))
    .catch((error)=> toast.error("Failed to fetch subscriptions"));
    },[])

    function handleDelete(id) {
        axios.delete(`http://localhost:8080/api/email/delete/${id}`)
        .then((response)=> toast.success("Subscription deleted successfully!"))
        .catch((error)=> toast.error("Failed to delete subscription"));
        setTimeout(()=> {
            window.location.reload();
        },5000)
    }

    return (
        <>
        <ToastContainer theme='dark'/>
        <Layout/>
        <div id = "subs-div">
            <p>All Subscription</p>
            <div id = "subs-inside-div">
                <table id= "subs-head">
                    <thead>
                        <tr>
                            <th id="email-subs-th">EMAIL SUBSCRIPTION</th>
                            <th id="subs-head-th2">DATE</th>
                            <th className="subs-head-th">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                            {email.map((item,index)=> (
                               <tr key={index}>
                               <td id = "email-td"><b>{item.email}</b></td>
                               <td>{new Date(item.date).toDateString()}</td>
                               <td><button onClick={()=> handleDelete(item._id)}>x</button></td>
                               </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default Subscriptions;