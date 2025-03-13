import React from 'react';
import'./styles.css';
 interface CommentCardProps {
     author: string;
     comment: string;
     date: string;
 }

 const CommentCard: React.FC<CommentCardProps> = ({ author, comment, date }) => {
  return (
     <div className="comment-card">
       <h3>{author}</h3>
       <p>{comment}</p>
       <small>{date}</small>
    </div>
   );
 };

export default CommentCard;