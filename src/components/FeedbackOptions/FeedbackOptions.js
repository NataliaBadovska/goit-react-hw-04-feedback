import React from "react";
import css from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onLeaveFeedback }) => {
   
    const incrementReviews = (evt) => {
        onLeaveFeedback(evt.target.name);
    }

     return (
            <>
            <button type="button" name="good" className={css.button}  onClick={incrementReviews}>Good</button>
            <button type="button" name="neutral"  className={css.button} onClick={incrementReviews} >Neutral</button>
            <button type="button" name="bad" className={css.button} onClick={incrementReviews}>Bad</button> 
            </>
    )
}

export default FeedbackOptions;