const React = require('react');
const Def = require('../default');
const NewComment = require('./comment')

function show (data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className='inactive'>
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c)=> {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
    }
    if (data.place.comments.length) {
        comments = data.place.comments.map (c => {
            return (
                <div className='border'>
                    <div className='border'>
                    <h3 className='rant'>{c.rant ? 'Miss! 💀 ' : 'Lit! 🔥 '}</h3>
                    </div>
                    <h5>{c.content}</h5>
                    <h5>
                        <stong>- {c.author}</stong>
                    </h5>
                    <h5>Rating: {c.stars}</h5>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <h4>Serving {data.place.cuisines}</h4>
                <img src={data.place.pic} alt={data.place.name}/>
                <h4>{data.place.showEstablished()}</h4>
                <div className='container'>
                    <div className='center'>
                        <a href={data.place.site}>
                        <button className='btn-primary'>Website</button>
                        </a>
                    </div>
                </div>
                <div className='container'>
                    <div className='center'>
                    <a href={`/places/${data.place.id}/edit`} className='btn btn-warning'>
                            Edit
                        </a>
                        <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
                            <button type='submit' className='btn btn-danger'>
                                Delete
                            </button>
                        </form>
                    </div>
                    </div>
                <h2>Rating</h2>
                {rating}
                <br />
                <h2>Comments</h2>
                {comments}
                <hr />
                <NewComment>{data.comments}</NewComment>
            </main>
        </Def>
    )
}

module.exports = show 