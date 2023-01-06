import React from "react";

function Links(props) {
    console.log(props.github)
    return (
        <>
            <h3>Links</h3>
            <a href={props.github}>{props.github}</a>
            <a href={props.linkedin}>{props.linkedin}</a>
        </>
    )
}

export default Links

