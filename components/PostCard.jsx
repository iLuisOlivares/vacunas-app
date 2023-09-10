"use client"

import Link from "next/link"



const PostCard = ({ post }) => {
    return (
        <div key={post.id}>
            <h2>{post.id} - {post.title}</h2>
            <p>{post.body}</p>
            <Link href={`/fetch/${post.id}`} onClick={() => alert("funciona el server side component para el fetch y el client side componen para agregar funcionalidades a un boton")}>Click</Link>
        </div>
    )
}

export default PostCard