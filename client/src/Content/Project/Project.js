import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import projectNigatedev from '../../assets/images/project-nigatedev.jpg'
import projectTodaydevs from '../../assets/images/projet-todaydevs.jpg'

export default function Project() {
    return (
    <div className='container'>
    <div className='row'>
        <div className='col-md-12 mb-2 mt-4'>
            <h1 className='text-start fw-bold text-white'>PROJECT</h1>
        </div>
                
        <div className='col-md-6 mb-4'>
            <div className='card border-secondary'>
                <img className='card-img-top' src={projectNigatedev} />
                <div class="text-white card-img-overlay">
                    <p className='h2 card-title'>
                        NIGATEDEV FRAMEWORK
                    </p>
                 <a href="http://github.com/nigatedev/nigatedev" class="btn mt-2 bg-dark text-primary btn-primary-outline btn-sm"><i className='fa fa-github'></i> Code</a>
                {" "}
                 <a className='text-center' href="https://packagist.org/packages/nigatedev/nigatedev" title="version"><img src="https://img.shields.io/packagist/v/nigatedev/nigatedev.svg?style=flat-square" /></a>
                {" "}
                <a href="https://github.com/nigatedev/nigatedev/blob/master/LICENSE" title="license"><img src="https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square" /></a>

                {" "}
                <a href="https://github.com/nigatedev/nigatedev/issues"><img alt="Issues" src="https://img.shields.io/github/issues/nigatedev/nigatedev?color=0088ff" /></a>
                </div>
                <div className='card-body bg-dark text-white'>
                    <i className='fw-bold fa fa-code'></i>
                    {" "}
                    <span className='fw-lighter'>
                     PHP, JavaScript, Sass, Shell, Twig
                    </span>
                    {" "}
                    <p className='lead'>
                    Nigatedev est un framework PHP qui permet de gagner du temps.
                    </p>
                </div>
            </div>
            </div>
            
            
        <div className='col-md-6 mb-4'>
            <div className='card border-secondary'>
                <img className='card-img-top' src={projectTodaydevs} />
                <div class="text-white card-img-overlay">
                    <p className='h2 text-light card-title'>
                        TODAYDEVS SITE INTERNET
                    </p>
                 <a href="#" class="btn mt-2 bg-dark text-primary btn-primary-outline btn-sm"><i className='fa fa-globe'></i> Site</a>
                </div>
                <div className='card-body'>
                    <i className='fw-bold fa fa-code'></i>
                    <span className='fw-lighter'>
                    {" "}
                    WordPress
                     </span>
                    <p className='lead'>
                    Todaydevs est un site/blog qui vous tiendra informé des nouvelles technologies.
                    </p>
                </div>
            </div>
            </div>
            
            
        </div>
        
        
    </div>
)
}