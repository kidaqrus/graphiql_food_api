import React from "react";

import * as footerStyles from "./footer.module.scss"


const Footer = () => {
    return(
        <footer className={footerStyles.siteFooter}>
        <div className={footerStyles.container}>
            
           <p> site developed by the kid &copy{" "}; {new Date().getFullYear().toString} </p>
        </div>
        </footer>
    )
}

export default Footer