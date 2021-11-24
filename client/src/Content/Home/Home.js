import React from 'react'
import Profile from '../Profile/Profile'
import Skill from '../Skill/Skill'
import Test from '../Test/Test'
import Project from '../Project/Project'
import Footer from '../Footer/Footer'
import './Home.css'

export default function Home() {
    return (
        <div className='container-fluid bg-dark'>
            <div className='row'>
                <div className='profile-container'>
                    <Profile />
                    <Skill />
                    <Project />
                    <Footer />
                </div>
            </div>
        </div>
    );
}