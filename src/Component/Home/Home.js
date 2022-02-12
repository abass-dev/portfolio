import React from 'react'
import Profile from '../Profile/Profile'
import Skill from '../Skill/Skill'
import { bootstrap } from 'bootstrap'
import Project from '../Project/Project'
import Work from '../Work/Work'
import Footer from '../Footer/Footer'
import './Home.css'

export default function Home() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='profile-container'>
                    <Profile />
                    <Project />
                    <Skill />
                    <Work />
                    <Footer />
                </div>
            </div>
        </div>
    );
}