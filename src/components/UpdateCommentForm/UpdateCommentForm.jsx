// "use client"
// import { useParams, useRouter } from 'next/navigation';
// import React, { useEffect, useState } from 'react'

// const UpdateCommentForm = () => {
//      const { id } = useParams();
     
//      const [currentComment, setCurrentComment] = useState('');
//      const [comment, setComment] = useState('');
//      const [isSubmitting, setIsSubmitting] = useState(false);
//      console.log(comment)

//      useEffect( () => {
//           const fetchData = async() => {
//                try{
//                     const res = await fetch(`http://localhost:3000/api/comments/${id}`);
//                     const data = await res.json()
//                     console.log(data.data)
//                     setCurrentComment(data.data)
//                }catch(err) {
//                     console.error(err)
//                     return null
//                }
//           }
//           fetchData()
//      }, [])
     

//      const router = useRouter()

//      const handleUpdateComment = async(e) => {
//           e.preventDefault();
          
//           if(!comment) {
//                return 'Something went wrong!'
//           }

//           setIsSubmitting(true)

//           try{
//                const res = await fetch(`http://localhost:3000/api/comments`, {
//                     method: 'POST',
//                     headers: {
//                          'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({ comment: comment.trim(), date: new Date() })
//                })

//                const data = await res.json();
//                // console.log("Post comment client:", data);
//                if(data.status === 200){
//                     setIsSubmitting(false);
//                     alert(data.message)
//                     router.push('/comments')
//                }
//           }catch(err) {
//                console.error(err);
//                return 'Try again.'
//           }
//      }
//      return (
//           <form onSubmit={handleUpdateComment} className='w-full'>
//                <div>
//                     <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-3">Update your Comment</label>

//                     <textarea id="comment" name="comment" rows="5" placeholder="Update your thoughts here..."
//                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 outline-none focus:border-transparent resize-y transition duration-200" value={comment} onChange={e => setComment(e.target.value)} disabled={isSubmitting} />
//                     <p className="mt-2 text-sm text-gray-500">{comment.length} characters</p>
//                </div>

//                <button
//             type="submit"
//             disabled={isSubmitting}
//             className={`w-full mt-5 py-3 px-4 rounded-lg font-medium text-white transition duration-200 ${
//               isSubmitting
//                 ? 'bg-gray-400 cursor-not-allowed'
//                 : 'bg-blue-600 hover:bg-blue-700 active:transform active:scale-[0.98]'
//             }`}
//           >
//             {isSubmitting ? (
//               <span className="flex items-center justify-center">
//                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Submitting...
//               </span>
//             ) : (
//                'Submit Comment'
//             )}
//           </button>
//           </form>
//      )
// }

// export default UpdateCommentForm






"use client"
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const UpdateCommentForm = () => {
     const { id } = useParams();
     
     const [comment, setComment] = useState('');
     const [isSubmitting, setIsSubmitting] = useState(false);
     // console.log(comment)

     useEffect( () => {
          const fetchData = async() => {
               try{
                    const res = await fetch(`http://localhost:3000/api/comments/${id}`);
                    const data = await res.json()
                    // console.log(data.data)
                    // Set the comment text in the textarea
                    setComment(data.data.comment) // <-- CHANGE: access the comment property
               }catch(err) {
                    console.error(err)
                    return null
               }
          }
          fetchData()
     }, [id]) // <-- CHANGE: added id as dependency
     

     const router = useRouter()

     const handleUpdateComment = async(e) => {
          e.preventDefault();
          
          if(!comment) {
               return 'Something went wrong!'
          }

          setIsSubmitting(true)

          try{
               const res = await fetch(`http://localhost:3000/api/comments/${id}`, { // <-- CHANGE: added /${id}
                    method: 'PUT', // <-- CHANGE: changed to PUT
                    headers: {
                         'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ comment: comment.trim(), date: new Date() })
               })

               const data = await res.json();
               // console.log("PUT comment client:", data);
               if(data.status === 200){
                    setIsSubmitting(false);
                    alert(data.message)
                    router.push('/comments')
               }
          }catch(err) {
               console.error(err);
               setIsSubmitting(false); // <-- CHANGE: reset submitting state
               return 'Try again.'
          }
     }
     return (
          <form onSubmit={handleUpdateComment} className='w-full'>
               <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-3">Update your Comment</label>

                    <textarea id="comment" name="comment" rows="5" placeholder="Update your thoughts here..."
                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 outline-none focus:border-transparent resize-y transition duration-200" value={comment} onChange={e => setComment(e.target.value)} disabled={isSubmitting} />
                    <p className="mt-2 text-sm text-gray-500">{comment.length} characters</p>
               </div>

               <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full mt-5 py-3 px-4 rounded-lg font-medium text-white transition duration-200 ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 active:transform active:scale-[0.98]'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
               'Update Comment' // <-- CHANGE: changed button text
            )}
          </button>
          </form>
     )
}

export default UpdateCommentForm