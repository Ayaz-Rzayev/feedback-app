import React from "react"
import styles from "./Header.module.css"
import PropTypes from "prop-types"

const Header = (props) => {
  return (
    <header className={[styles.header, styles.container].join(' ')}>
        <h2>{props.text}</h2>
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