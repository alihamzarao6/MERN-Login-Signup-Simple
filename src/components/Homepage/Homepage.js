import React from 'react'
import styles from './Homepage.module.css'

const Homepage = ({ setLoginUser }) => {
  return (
    <div className={styles.homepage}>
      <h1>Hellow! Welcome to Homepage</h1>
      <div className={styles.button} onClick={() => setLoginUser({})}>
        Logout
      </div>
    </div>
  );
};

export default Homepage;