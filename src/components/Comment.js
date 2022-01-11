import React from "react";

const Comment = ({author, text}) => {

    return ( 
        <>
            <h4>{author}</h4>
            <p>{text}</p>
        </>
    )
}

export default Comment