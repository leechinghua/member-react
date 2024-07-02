import React from 'react'
import styles from '@/components/login/login.module.css'

export default function Login() {
  return (
    <>
      <div className={styles.loginPanel}>
        <div className={styles.box}>
          <div className={styles.section1}>
            <h2>歡迎使用</h2>
            <form className={styles.loginForm}>
              <input
                type="text"
                defaultValue="請輸入您的信箱"
                name="account"
                id="email"
                onfocus="clearInput(this)"
                onblur="restoreInput(this)"
              />
              <input
                type="text"
                defaultValue="請輸入您的密碼"
                name="password"
                id="password"
                onfocus="clearInput(this)"
                onblur="restoreInput(this)"
              />
              <button className={styles.loginButton}>登入</button>
            </form>
          </div>
          <div className={styles.section2}>
            <div className={styles.line} />
            <div>或</div>
            <div className={styles.line} />
          </div>
          <div className={styles.section3}>
            <div className={styles.socialMedia}>
              <span className={styles.icon}>
                <svg>
                  <use href="#faceBook" />
                </svg>
              </span>
              <span className={styles.icon}>
                <svg>
                  <use href="#google" />
                </svg>
              </span>
            </div>
            <div>
              還沒有帳號嗎?<a className={styles.link}>註冊</a>
            </div>
            <div>
              <a className={styles.link}>忘記密碼</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
