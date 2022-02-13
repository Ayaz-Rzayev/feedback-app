import React from "react"
import styles from "./Header.module.css"
import PropTypes from "prop-types"

const Header = (props) => {
  return (
    <header>
      <div className={styles.container}>
        <h2>{props.text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Header text'
}

Header.propTypes = {
  text: PropTypes.string.isRequired
}

export default Header