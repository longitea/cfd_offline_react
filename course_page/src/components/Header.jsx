import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { HOME_PATH, PROFILE_PATH } from '../constants/path'
import { useAuth } from '../hooks/useAuth'
import { PageAuth } from '../hooks/usePage'

export default function Header() {

    const { user, onLogin, onLogout } = useAuth()
    
    // khi click -> login popup bật lên
    const {handleLoginOpen} = PageAuth()

    const toggleSidebar = () => {
        document.body.classList.toggle('menu-is-show')
    }
    return (
        <header id="header">
            <div className="wrap">
                <div className="menu-hambeger" onClick={toggleSidebar}>
                    <div className="button">
                        <span />
                        <span />
                        <span />
                    </div>
                    <span className="text">menu</span>
                </div>
                <Link to={HOME_PATH} className="logo">
                    <img src="/img/logo.svg" alt="" />
                    <h1>CFD</h1>
                </Link>
                <div className="right">
                    {
                        user ? (
                            <div className="have-login">
                                <div className="account">
                                    <a href="#" className="info">
                                        <div className="name">{user.name}</div>
                                        <div className="avatar">
                                            <img src={user.avatar} alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="hamberger">
                                </div>
                                <div className="sub">
                                    <a href="#">Khóa học của tôi</a>
                                    <Link to={PROFILE_PATH}>Thông tin tài khoản</Link>
                                    <a href="javascript:void()" onClick={onLogout}>Đăng xuất</a>
                                </div>
                            </div>
                        ) : (
                            <div className="not-login bg-none" onClick={onLogin}>
                                <a href="javascript:void()"  className="btn-register" onClick={() => handleLoginOpen(true)}>Đăng nhập</a>
                                <a href="login.html" className="btn main btn-open-login">Đăng ký</a>
                            </div>
                        )
                    }

                    {/* <div class="not-login bg-none">
                    <a href="#" class="btn-register">Đăng nhập</a>
                    <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                </div> */}
                </div>
            </div>
        </header>
    )
}
