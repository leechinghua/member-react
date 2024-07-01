import React from 'react'
import Header from '@/components/layout/default-layout/header'
import Login from '@/components/login/login'
// import Navbar from '@/components/layout/default-layout/navbar'

export default function Login1() {
  return (
    <>
      <Header />
      <Login />
      {/* <style jsx>
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
      </style> */}
    </>
  )
}
