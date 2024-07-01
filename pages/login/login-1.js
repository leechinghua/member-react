import React from 'react'
import Header from '@/components/layout/default-layout/header'
// import styles from './login.module.css'
// import Navbar from '@/components/layout/default-layout/navbar'

export default function Login1() {
  return (
    <>
      <Header />
      <style jsx>
        {`
          .loginPanel {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .box {
            display: flex;
            width: 800px;
            max-width: 800px;
            max-height: 890px;
            padding: 50px 100px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
          }
          .section1 {
            display: flex;
            width: 800px;
            max-width: 800px;
            max-height: 890px;
            padding: 50px 100px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
            form {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 20px;
              align-self: stretch;
              input {
                display: flex;
                padding: 5px;
                align-items: center;
                gap: 10px;
                align-self: stretch;
                outline: none;
                &:hover,
                :focus {
                  border: 1px solid var(--secondary-3, #fdaf17);
                }
              }
              button {
                border-radius: 5px;
                background: var(--white, #fff);
                color: var(--secondary-3, #fdaf17);
                display: flex;
                padding: 5px;
                justify-content: center;
                align-items: center;
                align-self: stretch;
                border: 1px solid var(--secondary-3, #fdaf17);
                &:hover {
                  background: var(--secondary-3, #fdaf17);
                  color: var(--white, #fff);
                }
              }
            }
          }
          .section2 {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            align-self: stretch;
            .line {
              width: 202px;
              height: 1px;
              background: var(--grey-600, #757575);
            }
          }

          .section3 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 15px;
            align-self: stretch;
            .socialMedia {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 114px;
              .icon {
                display: flex;
                padding: 5px;
                justify-content: center;
                align-items: center;
                gap: 10px;
                :hover {
                  opacity: 0.7;
                }
                svg {
                  width: 60px;
                  height: 60px;
                }
              }
            }
            a {
              color: var(--grey-600, #757575);
              &:hover {
                color: var(--secondary-3, #fdaf17);
              }
            }
          }
        `}
      </style>
      <div className="container loginPanel">
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
