/* eslint-disable @typescript-eslint/no-unused-vars */
import { postReviews } from '../../Services/reviewService'
import { useSelector } from 'react-redux'
import { RootState } from '../../Store/store'
import { useState } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import './Reviews.css'

const Reviews = ({ productid }: { productid: number }): JSX.Element => {

  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [reviewtitle, setreviewtitle] = useState("");
  
  const [hover, setHover] = useState(0);

  const dispatch = useAppDispatch();
  const reviews = useSelector((state: RootState) => state.review.data);

  const handleSubmit = () => {
    const data = {
      productid,
      email,
      name,
      rating,
      reviewtitle,
      content
    }

    dispatch(postReviews(data));

     if (
            name.trim().length === 0 ||
            email.trim().length === 0 ||
            content.trim().length === 0 || 
            reviewtitle.trim().length === 0 ||
            rating === 0
        ) {
            // Alert the user to fill in the required fields
            alert("Please fill in the required fields");
            // Return early and do not send the data
            return;
        }
  }

  return (
    <div className='rating'>
      <label htmlFor="">Name</label>
      <input type="text"
        name="name"
        id=""
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter your name' />
      <label htmlFor="">Email</label>
      <input type="text"
        name="email"
        id=""
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='john.smith@gmail.com' />
      <label htmlFor="">Rating</label>
      
      <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
      <label htmlFor="">Review title</label>
      <input type="text"
        name='reviewtitle'
        value={reviewtitle}
        onChange={(e) => setreviewtitle(e.target.value)}
        placeholder='Give your review a title' />
      <label htmlFor="">Body of Review</label>
      <textarea name="" id=""
        onChange={(e) => setContent(e.target.value)}
        placeholder='Write your comments here' cols={30} rows={10}>
      </textarea>
      <button onClick={handleSubmit}>Submit Review</button>
    </div>
  )
}

export default Reviews