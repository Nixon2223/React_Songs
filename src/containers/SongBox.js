import React, {useState} from "react";
import CommentsForm from "../components/CommentForm";
import CommentList from "../components/CommentList";
import SongsList from '../components/SongList'

const SongBox = () => {

    const [comments, setComments] = useState([])
    const[songs, setSongs] = useState([
        {
            id: 1,
            name: "Ed Sheeran - Bad Habits",
            url: "https://www.youtube.com/watch?v=orJSJGHjBLI",
        },
        {
            id: 2,
            name: "The Weeknd - Save Your Tears",
            url: "https://www.youtube.com/watch?v=XXYlFuWEuKI",
        },
        {
            id: 3,
            name: "Olivia Rodrigo - good 4 u",
            url: "https://www.youtube.com/watch?v=gNi_6U5Pm_o",
        },
        {
            id: 4,
            name: "Lil Nas X - MONTERO (Call Me By Your Name)",
            url: "https://www.youtube.com/watch?v=6swmTBVI83k",
        },
        {
            id: 5,
            name: "Olivia Rodrigo - drivers license",
            url: "https://www.youtube.com/watch?v=ZmDBbnmKpqQ",
        },
    ]);

    const addComment = (submittedComment) => {
        submittedComment.id = Date.now()
        const updatedComments = [...comments, submittedComment]
        setComments(updatedComments)
    }


return (
    <>
    <SongsList songs = {songs}/>
    <CommentsForm onCommentSubmit = {(comment) => addComment(comment)}/>
    <CommentList comments = {comments}/>
    </>



)

}

export default SongBox
