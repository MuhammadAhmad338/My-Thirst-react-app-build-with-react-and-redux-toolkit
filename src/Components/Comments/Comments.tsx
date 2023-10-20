/* eslint-disable react-hooks/exhaustive-deps */
import { Comment } from '../../Interfaces/interfaces';
import { useAppDispatch } from '../../hooks/hooks';
import { postComment, getCommentsByProducts } from '../../Services/commentService';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../Store/store';
import { format } from 'date-fns';
import './Comments.css';

const Comments = ({ productId }: { productId: number }): JSX.Element => {

    const appDispatch = useAppDispatch();
    const comments = useSelector((state: RootState) => state.comment.data);
    const [formData, setformData] = useState("");
    const [isOpen, setisOpen] = useState(false);

    useEffect(() => {
        getProducts();
    }, [comments.length]);

    const getProducts = () => {
        appDispatch(getCommentsByProducts(productId));
    }

    const addComment = (e: ChangeEvent<HTMLInputElement>) => {
        setformData(e.target.value);
    }

    const manageIsOpen = () => {
        if (isOpen) {
            setisOpen(false);
        } else {
            setisOpen(true);
        }
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
            <div className='nocomments'>
                <div className='nocomments-content'>
                    <div className='user-comments' onClick={manageIsOpen}>Comments ({comments.length}) {isOpen ? "  -" : "  +"} </div>
                    {
                        isOpen &&
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
                    }
                </div>
            </div>
        );
    }

    return (
        <div className="comments">
            <div className='commnets-content'>
                <div className='user-comments' onClick={manageIsOpen}>Comments ({comments.length}) {isOpen ? "  -" : "  +"} </div>
                {
                    isOpen && <>
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
                            <div className='comment' key={item.commentid}>
                                <p>{item.content}</p>
                                <p>{format(new Date(item.created_at), 'eeee h:mm a')}</p>
                            </div>
                        ))}</>
                }
            </div>

        </div>
    );
}


export default Comments;