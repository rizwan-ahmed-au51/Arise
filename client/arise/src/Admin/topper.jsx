import React, { useState } from 'react'

const topper = () => {
    const [img, setImg] = useState("");
    const [marks, setMarks] = useState("");
    const [stdname, setStdname] = useState("");
    const addtopper = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:4000/topper`)
        .then
    }
    return (
        <div>topper</div>
    )
}

export default topper