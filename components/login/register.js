import { useState } from 'react'
import styles from '@/components/login/login.module.css'


export default function Register() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    agree: false, // checkbox 同意會員註冊條款
  })
  // 錯誤訊息狀態
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    agree: '', // 呈現錯誤訊息用字串
  })

  // checkbox 呈現密碼用
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // 輸入帳號 密碼
  const handleFieldChange = (e) => {
    console.log(e.target.name, e.target.value, e.target.type)
    if (e.target.name === 'agree') {
      setUser({ ...user, [e.target.name]: e.target.checked })
    } else {
      setUser({ ...user, [e.target.name]: e.target.value })
    }
  }
  // 送出帳號密碼
  const handleSubmit = async (e) => {
    e.preventDefault()

    // 表單檢查 --- START
    // 建立一個新的錯誤物件
    const newErrors = { 
      email: '',
      password: '',
      confirmPassword: '',
    }
    if (!user.email) {
      newErrors.email = 'email為必填'
    }
    if (user.password !== user.confirmPassword) {
      newErrors.password = '密碼與確認密碼需要一致'
      newErrors.confirmPassword = '密碼與確認密碼需要一致'
    }
    if (!user.password) {
      newErrors.password = '密碼為必填'
    }
    if (!user.confirmPassword) {
      newErrors.confirmPassword = '確認密碼為必填'
    }
    if (!user.agree) {
      newErrors.agree = '請先同意會員註冊條款'
    }
    // 呈現錯誤訊息
    setErrors(newErrors)

    // 物件屬性值中有非空白字串時，代表有錯誤發生
    const hasErrors = Object.values(newErrors).some((v) => v)

    // 有錯誤，不送到伺服器，跳出submit函式
    if (hasErrors) {
      return
    }
    // 表單檢查 --- END

    // 最後檢查完全沒問題才送到伺服器(ajax/fetch)
    alert('送到伺服器去')

  }
  
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
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="請輸入您的密碼"
                value={user.password}
                onChange={handleFieldChange}
              />
              <input
                type="checkbox"
                checked={showPassword}
                onChange={(e) => {
                  setShowPassword(e.target.checked)
                }}
              />{' '}
              顯示密碼
              <div>需含有8字元以上英文字母數字和符號</div>
              <input
                type="password"
                name="passwordCheck"
                id="passwordCheck"
                placeholder="請輸入您的密碼"
                value={user.confirmPassword}
                onChange={handleFieldChange}
              />
              <input type="checkbox"
                name="agree"
                checked={user.agree}
                onChange={handleFieldChange}/>
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
