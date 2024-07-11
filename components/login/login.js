import { useState } from 'react'
import styles from '@/components/login/login.module.css'
import Image from 'next/image'
import { MdOutlineRemoveRedEye } from 'react-icons/md'

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
                placeholder="請輸入您的信箱"
                onChange={(e) => {
                  setInputEmail(e.target.value)
                }}
                // onfocus={setInputEmail('')}
                // onblur="restoreInput(this)"
              />
              <input
                type={showPassword ? 'text' : 'password'}
                value={inputPassword}
                name="password"
                id="password"
                placeholder="請輸入您的密碼"
                onChange={(e) => {
                  setInputPassword(e.target.value)
                }}
              />
              <label htmlFor="showPassword">
                <MdOutlineRemoveRedEye />
              </label>
              <input
                className={styles.checkbox}
                type="checkbox"
                // checkbox與radio button是以checked來決定呈現狀態
                checked={showPassword}
                name="showPassword"
                id="showPassword"
                onChange={(e) => {
                  // 第一種寫法，使用事件的checked值
                  //setShowPassword(e.target.checked)
                  // 第二種寫法，布林值切換(toggle)
                  setShowPassword(!showPassword)
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
              還沒有帳號嗎?
              <a
                className={styles.link}
                href="http://localhost:3001/welcome/register"
              >
                註冊
              </a>
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
