import React from "react";
import Comment from './Comment'

const CommentList = ({comments}) => {

    const commentNodes = comments.map(comment =>{
        return <Comment author = {comment.author} key = {comment.id} text = {comment.text}></Comment>
    })

    return (
        <>
        <h3>Comments</h3>
        {commentNodes}
        </>

    )
}

export default CommentList
