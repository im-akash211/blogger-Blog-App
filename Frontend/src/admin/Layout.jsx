import Sidebar from "../adminComponent/Sidebar";
import { assets } from "../Assets/assets";

function Layout() {
    return (
        <>
        <div id = "main-div-sidebar">
        <Sidebar/>
        <div id = "admin-header">
            <h4>Admin Panel</h4>
            <img src= {assets.profile_icon} width={40} alt=""/>
        </div>
        </div>
        </>
    )
}

export default Layout;