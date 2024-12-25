 
//  import Icon from '/icons/git.svg'
 import REACT from '/icons/react.svg'
 import REDUX from '/icons/redux.svg'
 import JS from '/icons/js.svg'
 import GIT from '/icons/html_5.svg'
 import HTML5 from '/icons/html_5.svg'
 import CSS3ICON from '/icons/css_3.svg'
 import FIGMA from '/icons/figma.svg'
 import MONGODB from '/icons/mongoDb.svg'
 import BOOTSTRAP from '/icons/bootstrap-solid 1.svg'
 import NODE from '/icons/Group.svg'
 import Typescript from '/icons/Typescript.svg'
 import '../styles/Skills.css'


 import { useLocation } from 'react-router-dom'
 import { useEffect, useState } from 'react'

const Skills = () => { 
    const location = useLocation()
    const [urlChange, setUrlChange] = useState(false)

    const skills = [
        { title: 'HTML5', 
            use:'HTML5 is the latest version of HTML (Hypertext Markup Language), the core technology for structuring and presenting content on the web. It introduces numerous enhancements and new features that make it more powerful, flexible, and easier to use, particularly for modern web development.  ', 
            icon: HTML5},
        { title: 'CSS3', 
            use:'CSS3 (Cascading Style Sheets, Level 3) is the latest version of CSS, which is used to style and visually design HTML content on web pages. It enhances web design capabilities by adding new features, effects, and capabilities, making websites more interactive, visually appealing, and responsive.  ',
            icon: CSS3ICON},
        { title: 'JavaScript', 
            use:'JavaScript is a versatile, high-level programming language primarily used to create dynamic and interactive web pages. It is an essential part of web development alongside HTML (for content structure) and CSS (for styling). JavaScript enables users to interact with websites in real-time by enabling dynamic updates, animations, form validation, and much more.',
            icon: JS },
        { title: 'React', 
            use:'React.js (or simply React) is an open-source JavaScript library used for building user interfaces (UIs), particularly for single-page applications (SPAs). It allows developers to build reusable UI components that can efficiently update and render when data changes. React was developed by Facebook and is widely used to create fast, interactive, and dynamic web applications.', 
            icon: REACT},
        { title: 'Redux', 
            use:'Redux is a predictable state container for JavaScript applications. It helps manage the application state in a central store and ensures that the state is immutable and consistent across the entire app.', 
            icon: REDUX},
        { title: 'GIT', 
            use:'Git is a distributed version control system (VCS) that tracks changes in files and coordinates work on those files among multiple people. It is designed to handle everything from small to large projects with speed and efficiency. Git allows multiple developers to collaborate on a project without stepping on each other’s toes by merging changes and tracking history.', 
            icon: GIT}, 
      
    ]

    const learning =[
        { title: 'FIGMA', 
            use:'Figma is a cloud-based design tool that allows teams to design, prototype, and collaborate on user interfaces (UI) and user experiences (UX) in real-time. It is widely used for UI/UX design, web design, mobile app design, and product design. Figma stands out for its collaborative nature, allowing multiple people to work on a design simultaneously, much like Google Docs.', 
            icon: FIGMA},
        { title: 'Bootstrap CSS', 
            use:'Bootstrap is an open-source front-end framework that provides developers with pre-designed components, layouts, and styles to quickly create responsive and mobile-first websites and web applications.',
            icon: BOOTSTRAP },
        { title: 'Node.js/Express', 
            use:'Node.js and Express are two key technologies used in modern web development, especially for building server-side applications. Node.js allows JavaScript to be run on the server-side, while Express is a lightweight web application framework built on top of Node.js. Together, they provide a powerful platform for creating fast and scalable server-side applications.', 
            icon:NODE},
        { title: 'MongoDB', 
            use:'MongoDB is a popular, open-source NoSQL database that is widely used for storing and managing large volumes of unstructured or semi-structured data. Unlike traditional relational databases (SQL), MongoDB stores data in JSON-like documents, making it highly flexible and scalable.', 
            icon:MONGODB}, 
        { title: 'Typescript', 
            use:'TypeScript is a superset of JavaScript that adds static typing to the language. Developed and maintained by Microsoft, TypeScript is designed to address the challenges of large-scale JavaScript applications by providing features like type-checking, interfaces, classes, and more advanced tools that help developers build more reliable and maintainable code.', 
            icon:Typescript},
    ]
    
    useEffect(() => {
        setUrlChange(location.pathname.includes('skills'))
    },[location])


  return (
    <div className={'skillsContainer' + (urlChange ? ' skillsUrl' : '')}>
    <h3 className='sectionHeading'> SKILLS</h3>
    <div className='skillWrapper'>
        <h3 className='skillHeading  '>Using Now: </h3>
    <div className={'skills' + (urlChange ? ' skillsUrl' : '')}>
        {
            skills.map((item, index) => (
                <div key={index} className={"skillCard" }>
                    {
                        item.icon ?    <img src={item.icon} alt="item Icon" className='skillIcon' /> : null
                    }
                 
                    <h3 className="skillTitle">{item.title} </h3>
                    { urlChange &&
                        <p className="skillUse">{item.use} </p> }
                </div>
            ))
        }
    </div>
    </div>
    <div className="skillWrapper">
        <h3 className="skillHeading">Learning:</h3>
    
        <div className={"skills" + (urlChange ? ' skillsUrl' : '')}>
        {
                learning.map((item, index) => (
                    <div key={index} className={"skillCard"}>
                        {
                            item.icon ?    <img src={item.icon} alt="item Icon" className='skillIcon' /> : null
                        }
                    
                        <h3 className="skillTitle">{item.title} </h3> 
                        { urlChange &&
                        <p className="skillUse">{item.use} </p> }
                    </div>
                ))
            }
        </div>
    </div>
    </div>
  )
}

export default Skills