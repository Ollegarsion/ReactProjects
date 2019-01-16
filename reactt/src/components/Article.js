import React from 'react'

function  Article() {
    const  body =<section>Title</section>

    return(
        <div className="hello" style={{color: 'red'}}>
            <h2>Informstion</h2>
            {body}
            <h3>Creation date: {(new Date()).toDateString()}</h3>
        </div>
    )
}

export  default Article