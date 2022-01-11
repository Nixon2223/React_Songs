import React, {useState} from "react";
import CommentList from "./CommentList";

const CommentForm = ({onCommentSubmit}) =>
{
    const [author, setAuthor] = useState("")
    const [text, setText] = useState("")

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value)
    }

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const authorToSubmit = author.trim()
        const textToSubmit = text.trim()
        if (!authorToSubmit || !textToSubmit){
            return
        }

    onCommentSubmit(
        {
            author: authorToSubmit,
            text: textToSubmit
        }
    )

    setAuthor("")
    setText("")
    }
    return (

        <form  className = "comment=form" onSubmit={handleFormSubmit}>
            <input
            type = "text"
            placeholder = "your name"
            value = {author}
            onChange = {handleAuthorChange}
        />
            <input
            type = "text"
            placeholder="Comment"
            value = {text}
            onChange = {handleTextChange}
        />
        <input
            type = "submit"
            value = "post"
        />
        </form>

    )

}

export default CommentForm