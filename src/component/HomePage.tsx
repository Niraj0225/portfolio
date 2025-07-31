import { useEffect, useState } from 'react'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import { Loader } from './Loader'
import Mail from './Mail'
import Project from './Project'
import Skills from './Skills'
import Social from './Social'
import {Toaster} from 'react-hot-toast'


const HomePage = () => {
  const[loading, setLoading]=useState(true)
  useEffect(() => {
      setTimeout(()=>{
        setLoading(false);
      },3000)
  }, [])
  
  return (
    <div className={`min-h-[100vh] ${loading ? "flex":""} items-center overflow-hidden justify-center`}>
     {loading !==true? <>
     <Toaster/>
      <Header/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
      <Footer/>
      <Mail/>
      <Social/>
      </>:
      <Loader/>}
    </div>

 
  )
}

export default HomePage
