import React, {useContext} from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "./context/FeedbackContext";
import Spiner from "./UI/Spinner";

const FeedbackList = () => {
  const {feedbacks, isLoading} = useContext(FeedbackContext)
  if(!isLoading && feedbacks.length === 0){
    return (
      <div>No feedbacks yet</div>
    )
  }
  return (isLoading ? <Spiner/> : (feedbacks.map((item) => {
    return (
      <FeedbackItem
        key={item.id}
        id={item.id}
        rating={item.rating}
        text={item.text}
      />
    );
  })))
};

export default FeedbackList;
