

async function loadpost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

const IndividualPostPage = async ({ params }) => {
    const post = await loadpost(params.postId)

    return (
        <div>
            <h1>{post.title}</h1>
            <h2>{post.id}</h2>
            <p>{post.body}</p>

        </div>
    )
}

export default IndividualPostPage