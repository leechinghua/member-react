import React from 'react'
import styles from '@/components/login/login.module.css'

export default function Login() {
  return (
    <>
      <div className={styles['loginPanel']}>
        <div className="box">
          <div className="section1">
            <h2>歡迎使用</h2>
            <form>
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
              <button>登入</button>
            </form>
          </div>
          <div className="section2">
            <div className="line" />
            <div>或</div>
            <div className="line" />
          </div>
          <div className="section3">
            <div className="socialMedia">
              <span className="icon">
                <svg>
                  <use href="#faceBook" />
                </svg>
              </span>
              <span className="icon">
                <svg>
                  <use href="#google" />
                </svg>
              </span>
            </div>
            <div>
              還沒有帳號嗎?<a className="link">註冊</a>
            </div>
            <div>
              <a className="link">忘記密碼</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
