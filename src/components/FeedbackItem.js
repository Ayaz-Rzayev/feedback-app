import React, {useState} from "react"
import styles from "./FeedbackItem.module.css"

const FeedbackItem = () => {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('')
  return(
    <div className={styles.card}>
      <div className={styles['card__num']}>{rating}</div>
      <p className={styles['card__text']}>
        {text}
      </p>
    </div>
  )
}

export default FeedbackItem