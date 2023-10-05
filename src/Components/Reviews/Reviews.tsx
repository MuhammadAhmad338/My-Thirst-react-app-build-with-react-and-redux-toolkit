
import { useSelector } from 'react-redux'
import { RootState } from '../../Store/store'
import './Reviews.css'

const Rating = () => {

  const rating = useSelector((state: RootState) => state.review.data);
  console.log(rating);
   
  return (
    <div className='rating'>
      <label htmlFor="">Name</label>
      <input type="text"
        name=""
        id=""
        placeholder='Enter your name' />
      <label htmlFor="">Email</label>
      <input type="text"
        name=""
        id=""
        placeholder='john.smith@gmail.com' />
      <label htmlFor="">Rating</label>
      <label htmlFor="">Review title</label>
      <input type="text" placeholder='Give your review a title' />
      <label htmlFor="">Body of Review</label>
      <textarea name="" id="" placeholder='Write your comments here' cols={30} rows={10}>
      </textarea>
    </div>
  )
}

export default Rating