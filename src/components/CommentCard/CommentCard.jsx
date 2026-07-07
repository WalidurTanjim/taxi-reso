import CommentDeleteButton from "../Buttons/CommentDeleteButton/CommentDeleteButton";

// src/components/CommentCard.jsx
export default function CommentCard({ comment }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="border border-gray-200 rounded-lg p-5 hover:border-gray-300 transition-colors">
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-medium text-sm">
            {comment.comment.charAt(0).toUpperCase()}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-gray-800 text-base leading-relaxed break-words">
            {comment.comment}
          </p>
          
          <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
            {/* <span>{formatDate(comment.date)}</span> */}
            <span>{comment.date}</span>
          </div>
          
          {/* Action Buttons */}
          <div className="mt-3 flex items-center gap-1">
            <button
              className="p-2 rounded-lg text-gray-500 hover:text-green-600 hover:bg-green-50 transition-colors"
              aria-label="Like"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </button>
            
            <button
              className="p-2 rounded-lg text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors"
              aria-label="Dislike"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.737 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
              </svg>
            </button>
            
            <div className="w-px h-6 bg-gray-200 mx-1"></div>
            
            <CommentDeleteButton id={comment._id} />
          </div>
        </div>
      </div>
    </div>
  );
}