import React from 'react'
import { PageAuth } from '../hooks/usePage'

export default function LoginModel() {

    const {isLoginOpen, handleLoginOpen} = PageAuth()


  return (
    <div className="popup-form popup-login" style={{display: isLoginOpen? 'flex' : 'none'}}>
        <div className="wrap">  
          {/* login-form */}
          <div className="ct_login" style={{display: 'block'}}>
            <h2 className="title">Đăng nhập</h2>
            <input type="text" placeholder="Email / Số điện thoại" />
            <input type="password" placeholder="Mật khẩu" />
            <div className="remember">
              <label className="btn-remember">
                <div>
                  <input type="checkbox" />
                </div>
                <p>Nhớ mật khẩu</p>
              </label>
              <a href="#" className="forget">Quên mật khẩu?</a>
            </div>
            <div className="btn rect main btn-login">đăng nhập</div>
            <div className="text-register" style={{}}>
              <strong>hoặc đăng ký bằng</strong>
            </div>
            <div>
              <div className="btn btn-icon rect white btn-google">
                <img src="img/google.svg" alt="" />
                Google
              </div>
            </div>
            <div className="close" onClick={() => console.log(123)}>
              <img src="img/close-icon.png" alt="" />
            </div>
          </div>
          {/* email form */}
          <div className="ct_email">
            <h2 className="title">Đặt lại mật khẩu</h2>
            <input type="text" placeholder="Email" />
            <div className="btn rect main btn-next">Tiếp theo</div>
            <div className="back" />
            <div className="close" onClick={() => handleLoginOpen(false)}>
              <img src="img/close-icon.png" alt="" />
            </div>
          </div>
        </div>
      </div>
  )
}
