import { assets } from "../Assets/assets";
function Footer() {
    return (
        <>
        <div id = "footer-div">
            <img src= {assets.logo_light} height ={40} width={120} alt=" " id= "main-logo-light"/>
            <p id = "footer-p">All right reserved. Copyright @blogger</p>
            <div id = "sm-div">
                <img src = {assets.facebook_icon} width={40} alt=" "/>
                <img src = {assets.twitter_icon} width={40} alt=" "/>
                <img src = {assets.googleplus_icon} width={40} alt=" "/>
            </div>
        </div>
        </>
    )
}

export default Footer;