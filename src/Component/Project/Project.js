import React, { useRef } from "react";
import "font-awesome/css/font-awesome.min.css";
import projectCode from "../../assets/images/project-nigatedev.jpg";
import projectPortfolio from "../../assets/images/project-portfolio.png";
import projectSocialContributionApp from "../../assets/images/social_contribution_app.jpg";
import projectPHPCode from "../../assets/images/php_code.jpg";
import projectReactNative1 from "../../assets/images/screenshot.jpg";
import { SingleSlideAnim } from '../Util/Util'
import "./Project.css";

export default function Project() {
  const nigaPHPRef = useRef(null)
  const portfolioRef = useRef(null)
  const formBuilderRef = useRef(null)
  const dinacardRef = useRef(null)
  
  SingleSlideAnim(nigaPHPRef, '.projetRefId')
  SingleSlideAnim(portfolioRef, '.projetRefId')
  SingleSlideAnim(formBuilderRef, '.projetRefId')
  SingleSlideAnim(dinacardRef, '.projetRefId')
  return (
    <div className="home-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 id="projects" className="mt-4 primary-text primary-font text-start fw-bold">
              NOTABLE PROJECTS
            </h1>
            <p className="after-title"></p>
          </div>
          <div ref={nigaPHPRef} className="col-md-6 mb-4">
            <h2 className="md-title h4 text-secondary">NigaPHP FRAMEWORK</h2>
            <div className="projetRefId card border-0 shadow single-slide-in-scale">
              <img
                alt="Php code"
                className="card-img-top"
                src={projectPHPCode}
              />
              <div className="card-body text-secondary">
                <i className="fw-bold fa fa-code"></i>{" "}
                <span className="fw-lighter">
                  PHP, JavaScript, Sass, Shell, Twig
                </span>
                <p>
                  <a
                    href="http://github.com/nigatedev/nigatedev"
                    class="btn mt-2 bg-light text-dark  text-primary btn-primary-outline btn-sm"
                  >
                    <i className="fa fa-github"></i> Code
                  </a>{" "}
                  <a
                    className="text-center"
                    href="https://packagist.org/packages/nigatedev/nigatedev"
                    title="version"
                  >
                    <img
                      alt="Nigatedev Framework"
                      src="https://img.shields.io/packagist/v/nigatedev/nigatedev.svg?style=flat-square"
                    />
                  </a>{" "}
                  <a
                    href="https://github.com/nigatedev/nigatedev/blob/master/LICENSE"
                    title="license"
                  >
                    <img
                      alt="NigaPHP Framework License"
                      src="https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square"
                    />
                  </a>{" "}
                  <a href="https://github.com/nigatedev/nigatedev/issues">
                    <img
                      alt="Report NigaPHP Framework Issues"
                      src="https://img.shields.io/github/issues/nigatedev/nigatedev?color=0088ff"
                    />
                  </a>
                </p>
                <p className="md-title">
                NigaPHP is a lightweight PHP web application framework designed to simplify and speed up the development process for PHP developers. It was initially created by Abass Dev and has since been maintained and contributed to by a community of developers. With its user-friendly interface and powerful features, NigaPHP has become a popular choice for building scalable and secure web applications. 
                </p>
              </div>
            </div>
          </div>
          <div ref={portfolioRef} className="col-md-6 mb-4">
            <h2 className="md-title h4 text-secondary">
              MY PORTFOLIO (Website)
            </h2>
            <div  className="projetRefId card border-0 shadow single-slide-in-scale">
              <img
                alt="Abass Dev portfolio code source (Gitbub)"
                className="card-img-top"
                src={projectPortfolio}
              />
              <div className="card-body text-secondary">
                <p>
                  <i className="fw-bold fa fa-code"></i>
                  <span className="fw-lighter"> React, NodeJs, Express</span>
                </p>
                <p>
                  <a
                    href="https://github.com/abass-dev/portfolio"
                    class="btn mt-2 text-primary btn-primary-outline btn-sm bg-light text-dark "
                  >
                    <i className="fa fa-github"></i> Code
                  </a>{" "}
                  <a
                    href="https://github.com/abass-dev/portfolio/blob/master/LICENSE"
                    title="license"
                  >
                    <img
                      alt=""
                      src="https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square"
                    />
                  </a>{" "}
                  <a href="https://github.com/abass-dev/portfolio/issues">
                    <img
                      alt="Issues"
                      src="https://img.shields.io/github/issues/abass-dev/portfolio?color=0088ff"
                    />
                  </a>
                </p>
                <p className="md-title">
                  This portfolio was build using ReactJs.
                </p>
                 <p>
                  By using ReactJs, the developer can create reusable UI components that can be used across the entire application, making it easier to maintain and update. ReactJs also provides a virtual DOM (Document Object Model) that allows for faster updates to the user interface compared to traditional web development techniques.
                 </p>
                 <a href='https://react.dev/'>Learn more about ReactJs...</a>
              </div>
            </div>
          </div>

          <div ref={formBuilderRef} className="col-md-6 mb-4">
            <h2 className="md-title h4 text-secondary">FORM BUILDER</h2>
            <div className="projetRefId single-slide-in-scale card border-0 shadow">
              <img
                alt="BOSP FormBuilder"
                className="card-img-top"
                src={projectCode}
              />
              <div className="card-body text-secondary">
                <p>
                  <i className="fw-bold fa fa-code"></i>
                  <span className="fw-lighter"> PHP, HTML, Bootstrap</span>
                </p>
                <p>
                  <a
                    href="https://github.com/abass-dev/BenOSP-FormBuilder"
                    class="btn mt-2 text-primary btn-primary-outline btn-sm bg-light text-dark "
                  >
                    <i className="fa fa-github"></i> Code
                  </a>{" "}
                  <a
                    className="text-center"
                    href="https://packagist.org/packages/benosp/formbuilder"
                    title="version"
                  >
                    <img
                      alt=""
                      src="https://img.shields.io/packagist/v/benosp/formbuilder.svg?style=flat-square"
                    />
                  </a>{" "}
                  <a
                    href="https://github.com/abass-dev/BenOSP-FormBuilder/blob/master/LICENSE"
                    title="license"
                  >
                    <img
                      alt="BOSP Formbuilder License"
                      src="https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square"
                    />
                  </a>{" "}
                  <a href="https://github.com/abass-dev/BenOSP-FormBuilder/issues">
                    <img
                      alt="Issues"
                      src="https://img.shields.io/github/issues/abass-dev/BenOSP-FormBuilder?color=0088ff"
                    />
                  </a>
                </p>
                <p className="md-title">
                  Form builder is an open-source project written in PHP and
                  styled with bootstrap css by Abass Dev to be
                  easily used for build html forms.
                </p>
                <p>
                  Live demo on
                  <a href="https://nigatedev.herokuapp.com/todo">
                    ( Todo list )
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div ref={dinacardRef} className="col-md-6 mb-4">
            <h2 className="md-title h4 text-secondary">
              DYNACARD
            </h2>
            <div className="projetRefId single-slide-in-scale card border-0 shadow">
              <img alt="" className="card-img-top" src={projectCode} />
              <div className="card-body text-secondary">
                <p>
                  <i className="fw-bold fa fa-code"></i>
                  <span className="fw-lighter"> JavaScript</span>
                </p>
                <p>
                  <a
                    href="https://github.com/abass-dev/dynacard"
                    class="btn mt-2 text-primary btn-primary-outline btn-sm bg-light text-dark "
                  >
                    <i className="fa fa-github"></i> Code
                  </a>{" "}
                  <a
                    href="https://github.com/abass-dev/dynacard/blob/master/LICENSE"
                    title="license"
                  >
                    <img
                      alt=""
                      src="https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square"
                    />
                  </a>{" "}
                  <a href="https://github.com/abass-dev/dynacard/issues">
                    <img
                      alt="Issues"
                      src="https://img.shields.io/github/issues/abass-dev/dynacard?color=0088ff"
                    />
                  </a>
                </p>
                <p className="md-title">
                  Dynacard is an open-source ReactNative library that can help
                  you easily create beautiful cards for your React Native
                  application.
                </p>
                <p>
                  Live demo
                  <a href="https://abassdev.com/abassdev.apk">
                    {" "}
                    abassdev.apk ( Install the app here )
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <h2 className="md-title h4 text-secondary">SOCIAL CONTRIBUTION APP</h2>
            <div className="card border-0 shadow">
              <img
                alt="Social contribution app"
                className="card-img-top"
                src={projectSocialContributionApp}
              />
              <div className="card-body text-secondary">
                <p>
                  <i className="fw-bold fa fa-code"></i>
                  <span className="fw-lighter"> React Native</span>
                </p>
                <p>
                </p>
                <p className="md-title">
                  Source: private repository
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-1">
            <h2 className="md-title h4 text-secondary">
              Android Application
            </h2>
            <div className="card border-0 shadow">
              <img alt="" className="card-img-top" src={projectReactNative1} />
              <div className="card-body text-secondary">
                <p>
                  <i className="fw-bold fa fa-code"></i>
                  <span className="fw-lighter"> ReactNative</span>
                </p>
                <p>
                  <a
                    href="https://github.com/abass-dev/portfolio-with-react-native"
                    class="btn mt-2 text-primary btn-primary-outline btn-sm bg-light text-dark "
                  >
                    <i className="fa fa-github"></i> Code
                  </a>{" "}
                  <a
                    href="https://github.com/abass-dev/portfolio-with-react-native/blob/master/LICENSE"
                    title="license"
                  >
                    <img
                      alt=""
                      src="https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square"
                    />
                  </a>{" "}
                </p>
                <p className="md-title">
                  Convert my portfolio to an Android App using React Native {' '}
                  <a href="https://abassdev.com/abassdev.apk">
                    {" "}
                    Download the Apk
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
