import { NavLink } from "react-router-dom";
import { assets } from "../Assets/assets";

function Sidebar() {
    return (
        <>
        <div id = "sidebar-div">
            <div id = "sidebar-logo-div">
                <NavLink to = "/">
                <img src = {assets.logo} width={120} alt = ''/>
                </NavLink>
            </div>
            <NavLink to = "/admin/addProduct">
            <div id = "addBlog-div">
                <img src={assets.add_icon} width = {25} alt=""/>
                <h4>Add Blogs</h4>
            </div>
            </NavLink>
            <NavLink to = "/admin/blogLists">
            <div id = "blogLists-div">
                <img src={assets.blog_icon} width = {25} alt=""/>
                <h4>Blog Lists</h4>
            </div>
            </NavLink>
            <NavLink to = "/admin/subscriptions">
            <div id = "subscription-div">
                <img src={assets.email_icon} width = {25} alt=""/>
                <h4>Subscriptions</h4>
            </div>
            </NavLink>
        </div>
        </>
    )
}

export default Sidebar;