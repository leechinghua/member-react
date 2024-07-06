import React, { useState } from 'react'
import styles from '@/components/login/login.module.css'
import { z } from 'zod'


export default function Register() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordCheck: '',
  })

  // 輸入帳號 密碼
  const handleFieldChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  // 送出帳號密碼
  const handleSubmit = async (e) => {
    e.preventDefault()
  }
  // const checkForm = () => {
  //   const schema = z.object({
  //     name: z.string().min(2, { message: '姓名最少兩個字' }),
  //     email: z.string().email({ message: '請輸入正確的 Email 格式' }),
  //     mobile: z
  //       .string()
  //       .regex(/^09\d{2}-?\d{3}-?\d{3}$/, { message: '請輸入正確的手機號碼' }),
  //   })
  //   const result = schema.safeParse(user)
  //   console.log(JSON.stringify(result, null, 4))

  //   let newErrors = { ...initErrors }
  //   if (!result.success) {
  //     for (let i of result.error.issues) {
  //       newErrors[i.path[0]] = i.message
  //     }
  //     setMyErrors(newErrors)
  //   }

  //   return result.success
  // }
  return (
    <>
      <div className={styles.loginPanel}>
        <div className={styles.box}>
          <div className={styles.section1}>
            <h2>註冊帳號</h2>
            <div className="workChain">
              <div className="workChainText">
                <span>輸入資料 </span>
                <span>資料驗證 </span>
                <span>註冊完成 </span>
              </div>
              <div className="workChainLine">
                <div className="dot" />
                <div className="line15" />
                <div className="dot" />
                <div className="line15" />
                <div className="dot" />
              </div>
            </div>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="請輸入您的信箱"
                name="email"
                id="email"
                value={user.email}
                onChange={handleFieldChange}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="請輸入您的密碼"
                value={user.password}
                onChange={handleFieldChange}
              />
              <div>需含有8字元以上英文字母數字和符號</div>
              <input
                type="password"
                name="passwordCheck"
                id="passwordCheck"
                placeholder="請輸入您的密碼"
                value={user.passwordcheck}
                onChange={handleFieldChange}
              />
              <input type="checkbox" name="checkbox" />
              <label htmlFor="checkbox">
                我同意Yeah Fun的<a>會員條款</a>跟<a>隱私政策</a>
              </label>
              <button type="submit" className={styles.loginButton}>
                註冊
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .workChain {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 11px;
            align-self: stretch;
            .workChainText {
              display: flex;
              justify-content: space-between;
              align-items: center;
              align-self: stretch;
            }
            .workChainLine {
              display: flex;
              padding: 0px 31px;
              justify-content: center;
              align-items: center;
              align-self: stretch;
              .dot {
                width: 13.043px;
                height: 13.043px;
                background-color: var(--grey-800, #575757);
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
              }
              .line15 {
                width: 250.957px;
                height: 1px;
                background: #000;
              }
            }
          }
        `}
      </style>
    </>
  )
}
