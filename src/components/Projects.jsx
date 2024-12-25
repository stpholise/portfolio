import '../styles/Projects.css'
import LinkExternal from '/icons/link-external.svg'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

import AdviceGenerator from '../assets/images/advice-generator.jpeg'
import ArticleReview from '../assets/images/article-preview-desktop-design.jpg'
import BaseAppreal from '../assets/images/base-appereal-desktop-design.jpg'
import Blogr from '../assets/images/blogr.jpeg'
import Bookmark from '../assets/images/bookmark.jpeg'
import Calculator from '../assets/images/calculator.jpg'
import ComingSoon from '../assets/images/coming-soon.jpg'
import Faq from '../assets/images/faq.jpg'
import Flyo from '../assets/images/flyo.jpeg'
import Insure from '../assets/images/insure.jpeg'
import InteractiveCard from '../assets/images/interactive-card.jpg'
import InteractivePrice from '../assets/images/interactive-price.jpg'
import InteractiveRating from '../assets/images/interactive-rating.jpg'
import IntroComponent from '../assets/images/intro-component.jpg'
import IntroSection from '../assets/images/intro-section.jpg'
import LoopStudio from '../assets/images/loop studio.jpg'
import NewsHomepage from '../assets/images/news-homepage.jpeg'
import NotificationPage from '../assets/images/notification-page.jpg'
import PricingComponent from '../assets/images/pricing-component.jpg'
import ProjectTracking from '../assets/images/project-tracking.jpg'
import ShoeSales from '../assets/images/Screenshot_18-3-2024_61021_stpholise.github.io.jpeg'
import SocialDashboard from '../assets/images/social-dashboard.jpg'
import Sunnyside from '../assets/images/sunnyside.jpg'
import TipCalculator from '../assets/images/tip-calculator.jpg'
import AccountAnalysis from '../assets/images/Screenshot_25-12-2024_105229_figma2-psi.vercel.app.jpeg'
import TalentPool from '../assets/images/job-seeker-app.jpeg'



const Projects = () => {
    const [projectsList, setProjectsList] = useState( 6)
    const location = useLocation()
   
    const projects = [
        {   title: 'TalentPool', 
            description: 'A simple advice generator that fetches advice from an API.',
            stack: ['HTML', 'CSS', 'React', 'Redux', 'API', 'Formik', 'Yup', ], 
            image: TalentPool, 
            link: 'https://job-seeker-dashboard.vercel.app/' },
        {   title: 'Account Analysis', 
            description: 'A simple advice generator that fetches advice from an API.',
            stack: ['HTML', 'CSS', 'React', ], 
            image: AccountAnalysis, 
            link: 'https://figma2-psi.vercel.app/' },
        {   title: 'Advice Generator', 
            description: 'A simple advice generator that fetches advice from an API.',
            stack: ['HTML', 'CSS', 'JavaScript', 'API'], 
            image: AdviceGenerator, 
            link: 'https://stpholise.github.io/advice-generator/' },
        {   title: 'Article Preview', 
            description: 'A simple article preview component.', 
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: ArticleReview, 
            link: 'https://stpholise.github.io/article-preview-component-maste/'
        },
        {   title: 'Base Appreal', 
            description: 'A simple article preview component.', 
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: BaseAppreal, 
            link: 'https://stpholise.github.io/base-apparel/' 
        },
        {   title: 'Blogr', 
            description: 'A simple article preview component.', 
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: Blogr, 
            link: 'https://stpholise.github.io/blogr-landing-page-main/' 
        },
        {   title: 'Bookmark', 
            description: 'A simple article preview component.', 
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: Bookmark, 
            link: 'https://stpholise.github.io/bookmarklanding-page/' 
        },
        {   title: 'Calculator', 
            description: 'A simple article preview component.', 
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: Calculator, 
            link: 'https://stpholise.github.io/calculator-app-main/' 
        },
        {   title: 'ComingSoon', 
            description: 'A simple article preview component.',
            stack: ['HTML', 'CSS', 'JavaScript'], 
            image: ComingSoon, 
            link: ' https://stpholise.github.io/ping-coming-soon-page-master/' 
        },
        {   title: 'Faq', 
            description: 'A simple article preview component.', 
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: Faq, 
            link: 'https://stpholise.github.io/faq-accordion-card-main/' 
        },
        {   title: 'Flyo', 
            description: 'A simple article preview component.', 
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: Flyo, 
            link: 'https://stpholise.github.io/fylo-dark-theme-landing-page/' 
        },
        {   title: 'Insure', 
            description: 'A simple article preview component.', 
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: Insure, 
            link: 'https://stpholise.github.io/insure-landing-page/' 
        }, 
        {   title: 'Interactive Card', 
            description: 'A simple article preview component.', 
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: InteractiveCard, 
            link: 'InteractiveCard' 
        },
        {   title: 'Interactive Price', 
            description: 'A simple article preview component.', 
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: InteractivePrice, 
            link: 'https://stpholise.github.io/interactive-pricing-component/' 
        },
        {   title: 'Interactive Rating', 
            description: 'A simple article preview component.', 
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: InteractiveRating, 
            link: 'https://stpholise.github.io/interactive-rating-component/' 
        }, 
        {   title: 'Intro Component', 
            description: 'A simple article preview component.', 
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: IntroComponent, 
            link: 'https://stpholise.github.io/intro-component-with-signup/' 
        }, 
        {   title: 'Intro Section', 
            description: 'A simple article preview component.', 
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: IntroSection, 
            link: 'https://stpholise.github.io/intro-section-with-dropdown-navigation/' 
        }, 
        {   title: 'Loop Studio', 
            description: 'A simple article preview component.', 
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: LoopStudio, 
            link: 'https://stpholise.github.io/Loopstudios-landing-page/' 
        },
        {   title: 'News Homepage', 
            description: 'A simple article preview component.', 
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: NewsHomepage, 
            link: 'https://stpholise.github.io/news-homepage/' 
        },
        {   title: 'Notification Page', 
            description: 'A simple article preview component.', 
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: NotificationPage, 
            link: 'https://stpholise.github.io/notifications-page-main-main/' 
        },
        {   title: 'Pricing Component', 
            description: 'A simple article preview component.', 
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: PricingComponent, 
            link: 'https://stpholise.github.io/pricing-component-with-toggle-master/' 
        },
        {   title: 'Project Tracking', 
            description: 'A simple article preview component.', 
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: ProjectTracking, 
            link: 'https://stpholise.github.io/project-tracking-intro-component/' 
        },
        {   title: 'Shoe Sales', 
            description: 'A simple article preview component.', 
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: ShoeSales, 
            link: 'https://stpholise.github.io/myecommerce-landing-page/' 
        },
        {   title: 'Social Dashboard', 
            description: 'A simple article preview component.', 
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: SocialDashboard, 
            link: 'https://stpholise.github.io/social-media-dashboard-with-theme-switcher-master/' 
        },
        {   title: 'Sunnyside', 
            description: 'A simple article preview component.', 
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: Sunnyside, 
            link: 'https://stpholise.github.io/sunnyside-agency-landing-page-main/' 
        },
        {   title: 'TipCalculator', 
            description: 'A simple article preview component.', 
            stack: ['HTML', 'CSS', 'JavaScript'],
            image: TipCalculator, 
            link: 'https://stpholise.github.io/tip-calculator-app-main/' 
        },

    ]
    useEffect(() => {
        AOS.init()
         if(location.pathname === '/projects') {
            setProjectsList(projects.length)
         }else {
            setProjectsList(6)
         }
    },[projectsList, location.pathname, projects.length])

    return (
        <div className={'projectsSection'  + (location.pathname === '/projects' ? ' projectsFull' : '')}>
            <h3 className="sectionHeading"> PROJECTS </h3>
            <div className={"projects"}>
                {
                    projects.slice(0, projectsList).map((projects, index) => (
                        <a href={projects.link} target="_blank" key={index} rel="noreferrer" className="projectLink">
                            <div  className="projectCard" 
                            { ...index % 2 === 0 ? { 'data-aos': 'fade-right' } : { 'data-aos': 'fade-left' } }
                                data-aos-duration="1000"
                            >
                                <img src={projects.image} alt="Project Image" className="projectImage" />
                                <div className="projectText">
                                    <h3 className="projectTitle">{projects.title}</h3>
                                    <img src={LinkExternal} alt="" className='smallIcon'/>

                                    {/* <p className="projectDescription">{projects.description}</p>  */}
                                </div>  
                                {
                                    (projectsList > 6 && projects.stack && projects.stack.length > 0) &&  
                                    <p className="projectStack">
                                        {projects.stack.join(', ')}
                                    </p>
                                }

                              
                            </div>
                        </a>
                    ))
                }
                
                
            </div>
            { projectsList <= 6 &&
            <Link className='viewAll' to='/projects'>View All</Link>}
        </div>
    )
}

export default Projects