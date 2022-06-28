import {
  Route, Routes
} from 'react-router-dom'
import { CONTACT_PATH, COURSE_DETAIL_PATH, COURSE_PATH, HOME_PATH, PROFILE_COIN_PATH, PROFILE_COURSE_PATH, PROFILE_PATH, PROFILE_PAYMENT_PATH, PROFILE_PROJECT_PATH, REGISTER_PATH } from './constants/path'
import { AuthProvider } from './hooks/useAuth'
import { PageProvider } from './hooks/usePage'
import MainLayout from './layouts/MainLayout'
import ProfileLayout from './layouts/ProfileLayout'
import Home from './pages'
import Page404 from './pages/404'
import Contact from './pages/contact'
import Course from './pages/course'
import CourseDetail from './pages/course/[slug][id]'
import Demo from './pages/demo'
import Profile from './pages/profile'
import ProfileCoin from './pages/profile/coin'
import ProfileCourse from './pages/profile/course'
import ProfilePayment from './pages/profile/payment'
import ProfileProject from './pages/profile/project'
import Register from './pages/register'

function App() {
  return (
    <AuthProvider>
      <PageProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path={HOME_PATH} element={<Home />} />
            <Route path={CONTACT_PATH} element={<Contact />} />
            <Route path={REGISTER_PATH} element={<Register />} />
            <Route path="/demo" element={<Demo />} />
            <Route path={COURSE_PATH}>
              <Route path={COURSE_DETAIL_PATH} element={<CourseDetail />} />
              <Route index element={<Course />} />
            </Route>
            <Route path={PROFILE_PATH} element={<ProfileLayout />}>
              <Route index element={<Profile />} />
              <Route path={PROFILE_COURSE_PATH} element={<ProfileCourse />} />
              <Route path={PROFILE_PROJECT_PATH} element={<ProfileProject />} />
              <Route path={PROFILE_PAYMENT_PATH} element={<ProfilePayment />} />
              <Route path={PROFILE_COIN_PATH} element={<ProfileCoin />} />
            </Route>
            <Route path='*' element={<Page404 />} />
          </Route>
        </Routes>
      </PageProvider>
    </AuthProvider>

  )
}


export default App


// React-router-dom

// Single page
// Nested router
// Router param
// page 404


// NavLink, Link
// useNavigate, Navigate, generatePath
// Outlet
// useParams
// history