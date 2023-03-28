import React from 'react'
import './footer.css'

const Footer = (props) => {
    const { isLoggedIn } = props;

    return (
      <footer>
        {isLoggedIn ? (
          <p>Welcome back! You are currently logged in.</p>
        ) : (
          <p>Sign in to access exclusive content and features.</p>
        )}
        <p>&copy; 2023 My Site. All rights reserved.</p>
      </footer>
    );
}

export default Footer