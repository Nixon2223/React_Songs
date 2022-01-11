import React from 'react'

const Song = ({url, name}) => {

    return (
        <li><a href = {url} target = "_blank">{name}</a></li>
    )
}

export default Song