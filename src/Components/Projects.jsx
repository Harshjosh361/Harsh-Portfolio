'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import shopImage from '../assets/shop.png';
import goImage from '../assets/go.png';
import passwordImage from '../assets/password.png'
import weatherImage from '../assets/weather.png'
import loginImage from '../assets/login.png'



const projects = [
  {
    title: "Shop-Ease",
    description: "Interactive MERN E-commerce app with admin/user roles and secure payments.",
    techStack: ["MERN", "Tailwind CSS","Braintree"],
    githubLink: "https://github.com/Harshjosh361/ShopEase",
    liveLink: "https://shoop-ease.vercel.app/",
    backgroundImage: shopImage
  },
  {
    title: "Password-OP",
    description: "Secure password manager with React stores and retrieves passwords locally",
    techStack: ["ReactJs", "Tailwind CSS"],
    githubLink: "https://github.com/Harshjosh361/Password-OP",
    liveLink: "https://password-op.vercel.app/",
    backgroundImage: passwordImage
  },
  {
    title: "WheatherWhiz",
    description: "Weather Whiz is a responsive weather app built using HTML, CSS, and JavaScript, displaying real-time weather data for locations.",
    techStack: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/Harshjosh361/WeatherWhiz",
    liveLink: "https://weather-whiz-psi.vercel.app/",
    backgroundImage: weatherImage                
  },
  {
    title: "Login-UI",
    description: "Beautiful login page build with HTML and CSS only",
    techStack: ["HTML", "CSS"],
    githubLink: "https://github.com/Harshjosh361/Login-ui",
    liveLink: "https://login-ui-theta.vercel.app/", 
    backgroundImage: loginImage
  },
    {
      title: "GoBalancer",
      description: "A Go-based load-balancer using round-robin for distributing traffic.",
      techStack: ["Golang"],
      githubLink: "https://github.com/Harshjosh361/GoBalancer",
      backgroundImage: goImage
    }
  
]

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const cardRefs = useRef([])

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, projects.length)
  }, [projects])

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index]
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 50
    const rotateY = (centerX - x) / 50

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.02, 1.02, 1.02)
    `
  }

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index]
    if (!card) return

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1, 1, 1)
    `
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6  text-gray-100 mb-32 " id='projects'>
         <h1 className="text-5xl text-center font-bold mb-5">
        My <span className="text-gray-400">Projects</span>
      </h1>
      <div className="relative">
        <div className="overflow-hidden mt-24 w-full">
          <div 
            className="flex transition-transform duration-300 ease-in-out" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <Card 
                key={index} 
                ref={el => cardRefs.current[index] = el}
                className="w-full flex-shrink-0 mx-2 transition-all duration-300 bg-gray-800 border-gray-700 overflow-hidden h-96"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="absolute inset-0 z-0  ">
                  <img
                    src={project.backgroundImage}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-20"
                  />
                </div>
                <div className="relative z-10">
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl text-gray-100">{project.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base text-gray-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="bg-blue-900/50 text-blue-200 text-xs sm:text-sm px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
                    <Button variant="outline" size="sm" className="w-full md:w-32 bg-gray-700/80 text-gray-200 hover:bg-gray-600/80" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    {project.liveLink  &&
                    <Button variant="outline" size="sm" className="w-full md:w-32 lg:mr-10 bg-gray-700/80 text-gray-200 hover:bg-gray-600/80" asChild>
                       <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 " />
                        Live Demo
                      </a>
                    </Button>
}
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <Button 
            variant="outline" 
            size="icon"
            className="bg-gray-700 text-gray-200 hover:bg-gray-600"
            onClick={prevProject}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous project</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="bg-gray-700 text-gray-200 hover:bg-gray-600"
            onClick={nextProject}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next project</span>
          </Button>
        </div>  
      </div>
    </div>
  )
} 