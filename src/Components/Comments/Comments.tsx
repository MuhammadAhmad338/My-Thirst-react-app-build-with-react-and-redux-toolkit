/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Comment } from '../../Interfaces/commentInterface';
import { format } from 'date-fns';
import { useAppDispatch } from '../../hooks/hooks';
import { postComment, getCommentsByProducts } from '../../Services/commentService';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../Store/store';
import './Comments.css';


const Comments = ({ productId }: { productId: number }): JSX.Element => {

    const appDispatch = useAppDispatch();
    const comments = useSelector((state: RootState) => state.comment.data);

    const [formData, setformData] = useState("");

    useEffect(() => {
        getProducts();
    }, [comments.length]);

    const getProducts = () => {
        appDispatch(getCommentsByProducts(productId));
    }

    const addComment = (e: ChangeEvent<HTMLInputElement>) => {
        setformData(e.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const data = {
            product_id: productId,
            content: formData
        }
        appDispatch(postComment(data));
        setformData('');
    }



    if (comments.length === 0) {
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="content"
                        value={formData}
                        placeholder="Add a comment..."
                        className="signup-input"
                        onChange={addComment}
                    />
                    <button type="submit">Submit</button>
                </form>
                <div className='no-comments'>

                    <h1>Comments</h1>
                    <p>No Comments</p>
                </div>
            </>
        );
    }

    return (
        <div>
            <h1>Comments</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="content"
                    value={formData}
                    placeholder="Add a comment..."
                    className="signup-input"
                    onChange={addComment}
                />
                <button type="submit">Submit</button>
            </form>
            {Array.isArray(comments) && comments.map((item: Comment) => (
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