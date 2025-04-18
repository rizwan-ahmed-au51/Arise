import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin/Admin'
import Register from './Admin/Register'
import AdminDashboard from './Admin/AdminDashboard'
import BatchDates from './Admin/BatchDates'
import BatchCard from './Admin/BatchCard'
import Courses from './Pages/Courses/Courses'
import Faq from './Pages/Faq/Faq'
import AriseApp from './Pages/App/AriseApp'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Gallery from './Pages/Gallery/Gallery'
import hyd from './Pages/Branches/hyd'
import delhi from './Pages/Branches/delhi'
import jaipur from './Pages/Branches/jaipur'
import chennai from './Pages/Branches/Chennai'
import kerala from './Pages/Branches/kerala'
import NoPage from './Pages/NoPage'
import DashHome from './Admin/DashHome'
import Home from './Components/Home/Home'
import CelebGallery from './Pages/Gallery/CelebGallery/CelebGallery'
import Toppers from './Admin/Toppers'
import TopperList from './Admin/TopperList'
import ToppersList from './Pages/Gallery/ToppersList'
import EditTopper from './Admin/EditTopper'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Admin />} />
                <Route path='/register' element={<Register />} />
                <Route path='/admindashboard' element={<AdminDashboard />} >
                    <Route path='' element={<DashHome />} />
                    <Route path='batchcard' element={<BatchCard />} />
                    <Route path='batchdates' element={<BatchDates />} />
                    <Route path='addtopper' element={<Toppers />} />
                    <Route path='topperlist' element={<TopperList />} />
                    <Route path="edit-topper/:id" element={<EditTopper />} />

                </Route >


                <Route path='/' element={<Home />} />
                <Route path='/courses' element={<Courses />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/ariseApp' element={<AriseApp />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path="/celeb-gallery" element={<CelebGallery />} />
                <Route path='/topperlist' element={<ToppersList />} />
                <Route path='/branches/hyderabad' Component={hyd} />
                <Route path='/branches/delhi' Component={delhi} />
                <Route path='/branches/jaipur' Component={jaipur} />
                <Route path='/branches/chennai' Component={chennai} />
                <Route path='/branches/kerala' Component={kerala} />
                <Route path='*' element={<NoPage />} />

            </Routes>
        </>
    )
}

export default Routing