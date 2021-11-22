import React from 'react'
import Profile from '../Profile/Profile'
import Skill from '../Skill/Skill'
import Project from '../Project/Project'
import Footer from '../Footer/Footer'

export default function Home() {
    return (
        <div className='container-fluid bg-dark'>
            <div className='row'>
                <div className='profile-container'>
                    <Profile />
                    <Skill />
                    <Project />
                </div>
                <Footer />
            </div>
        </div>
    );
}