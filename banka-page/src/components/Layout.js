import React from "react";


const Layout=({children,varligim,profil}) => {
   return(
       <>
        <container>{profil}</container>
       <container>{varligim}</container>
       <container>{children}</container>
       
       </>
   )
}
export default Layout;