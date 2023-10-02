import { Comment } from '../../Interfaces/commentInterface';
import { format } from 'date-fns';
import './Comments.css';
import { useState } from 'react';


function Comments({ comments }: { comments: Comment[] }): JSX.Element {
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(newComment);

        // Set the new comment value to an empty string
        setNewComment('');
    };

    if (comments.length === 0) {
        return <div>
            <h1>Comments</h1>
            <p>No Comments</p>
        </div>
    }

    return (
        <div>
            <h1>Comments</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {comments.map((item: Comment) => (
                <div key={item.commentid}>
                    <p>{item.content}</p>
                    <p>{item.commentid}</p>
                    <p>{format(new Date(item.created_at), 'eeee h:mm a')}</p>
                </div>
            ))}
        </div>
    );
}


export default Comments;