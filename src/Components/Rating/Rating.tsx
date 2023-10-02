import { setRating } from '../../Services/ratingService'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Store/store'

const Rating = () => {

  const rating = useSelector((state:RootState) => state.rating.ratingState);
  const dispatch = useDispatch();
  const handleRatingChange = (newRating: string) => {
    const ratingInNumber = +newRating;
    dispatch(setRating(ratingInNumber));
  }

  return (
    <div>
      <span>Rating: {rating}</span>
      <input
        type="range"
        value={rating}
        min={0}
        max={5}
        onChange={(e) => handleRatingChange(e.target.value)}
      />
    </div>
  )
}

export default Rating