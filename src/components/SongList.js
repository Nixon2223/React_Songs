import React from "react";
import Song from './Song'

const SongList = ({songs}) => {

    const songNodes = songs.map(song => {
        return(
            <Song url = {song.url} key = {song.id} name ={song.name}></Song>
        )
    })

return (
    <>
       <h3>Songs of the year</h3> 
       <ul>
       {songNodes}  
       </ul>
    </>
)
}

export default SongList