import PostCard from "@/components/PostCard";

async function loadpost() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
}

const FetchPage = async () => {
    const posts = await loadpost();
    return (
        <div>
            {posts.map((post) => {
                return (
                    <PostCard key={post.id} post={post} />
                )
            })}


        </div>
    )
}

export default FetchPage