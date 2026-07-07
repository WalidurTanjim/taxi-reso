"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const CommentDeleteButton = ({ id }) => {
     const router = useRouter()

     // handleDeleteComment
     const handleDeleteComment = async() => {
          try{
               const res = await fetch(`http://localhost:3000/api/comments/${id}`, {
                    method: "DELETE",
                    headers: {
                         "Content-Type": 'application/json'
                    },
                    body: JSON.stringify({ id })
               });
               const data = await res.json();
               console.log(data)
               
               if(data.status === 204) {
                    alert(`Comment deleted successfully: ${id}`);
                    router.refresh()
               }
          }catch(err) {
               console.error(err);
               return null
          }
     }

     return (
          <button
               onClick={handleDeleteComment}
              className="p-2 rounded-lg text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors"
              aria-label="Delete"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
     )
}

export default CommentDeleteButton
