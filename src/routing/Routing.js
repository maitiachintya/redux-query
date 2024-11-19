import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Header from '../layout/Header'
import Home from '../component/Home'
import PageNotFound from '../component/PageNotFound'
import FetchUser from '../component/FetchUser'
import SingleUser from '../component/SingleUser'

const Routing = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path='' element={<Home />}></Route>
                    <Route path='todoview-page' element={<FetchUser />}></Route>
                    <Route path='todoview-page/single/:userId' element={<SingleUser />}></Route>
                    <Route path='*' element={<PageNotFound />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Routing