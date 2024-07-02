import { useState } from 'react'
import styles from '@/components/login/login.module.css'
import Image from 'next/image'

export default function Login() {
  const [inputEmail, setInputEmail] = useState('')
  // 密碼輸入框
  const [inputPassword, setInputPassword] = useState('')
  // 顯示密碼的核取方塊使用，切換是否要呈現密碼
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <div className={styles.loginPanel}>
        <div className={styles.box}>
          <div className={styles.section1}>
            <h2>歡迎使用</h2>
            <form className={styles.loginForm}>
              <input
                type="text"
                value={inputEmail}
                name="email"
                id="email"
                onChange={(e) => {
                  setInputEmail(e.target.value)
                }}
              />
              <input
                type="text"
                value={inputPassword}
                name="password"
                id="password"
                onChange={(e) => {
                  setInputPassword(e.target.value)
                }}
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
                <Image
                  src="/facebook.svg"
                  alt="Facebook Icon"
                  width={60}
                  height={60}
                />
              </span>
              <span className={styles.icon}>
                <Image
                  src="/google.svg"
                  alt="Facebook Icon"
                  width={60}
                  height={60}
                />
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
