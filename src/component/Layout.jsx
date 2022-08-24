import React from "react";
// import Link from "next/link";

const Layout = (props) => {
  return (
    <>
    <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
    <link href="/dist/output.css" rel="stylesheet"></link>
    </head>
    <div>
    {props.children}
    </div>      
    </>
  )
}

export default Layout;
