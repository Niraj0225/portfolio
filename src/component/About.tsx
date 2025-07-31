import { info } from "../User";
import Typewriter from "typewriter-effect";
import { Button, useMatches } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ResumeViewer from "./ResumeViewer";
import { IconDownload } from "@tabler/icons-react";
import Particles from "./Magicui/Particles";
import { NeonGradientCard } from "./Magicui/neon-gradient-card";

const About = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const btn=useMatches({
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
  })
 
  return (
    <>
    
    <div data-aos="zoom-out-up" data-aos-duration="800" className="relative overflow-hidden flex flex-col-reverse lg:flex-row justify-center lg:justify-around 
     xl:mt-24 max-sm:mt-20 items-center font-mono px-4 sm:px-6 md:px-10 md:!overflow-visible lg:px-16 xl:px-24 py-10 lg:py-0 gap-10 lg:gap-0 min-h-screen lg:min-h-[82vh]" id="About">

     <Particles
        className="absolute inset-0 z-0"
        quantity={1000}
        ease={80}
        color="#64FFDA"
        vy={.1}
        vx={.1}
        refresh
      />
      
      <div className="w-full lg:w-3/5 flex flex-col z-10 text-center lg:text-left px-2 sm:px-4">
        <div className="text-primaryColor text-lg sm:text-xl md:text-2xl lg:text-3xl">Hi, I am</div>
        <div className="text-white text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.25rem] font-extrabold leading-tight">{info.name}</div>
        <div className="text-white text-[16px] sm:text-1xl md:text-3xl lg:text-3xl flex justify-center lg:justify-start mt-1"> I'm a&nbsp; <span className="text-primaryColor font-bold">
           <Typewriter options={{
            strings:info.stack,
            autoStart:true,
            loop:true
          }}/></span>
        </div>
        
          <div className="text-[12px] w-full sm:w-full sm:my-6 sm:text-sm md:text-lg md:px-8 text-textColor lg:p-0 lg:my-6 lg:w-[90%] font-medium text-justify">
          {info.bio}
        
        </div>
        <div className="flex sm:flex-row justify-center p-2 lg:justify-start gap-4">
        <Button onClick={open} className="!text-bgColor sm:!w-auto" size={btn} variant="filled" color="#64FFDA">Check Resume</Button>
        <Button component="a" href="/Resume.pdf" download="Niraj Mali Resume" className="!text-primaryColor sm:!w-auto" size={btn} variant="outline" color="#64FFDA"
        rightSection={<IconDownload size={20}/>}>Download</Button>
      </div>
      </div>
      <div className="z-20 flex justify-center items-center w-full lg:w-fit px-2" id="photo">
           <NeonGradientCard className="w-[250px] sm:w-[280px] md:w-[330px] lg:w-[400px] xl:w-[425px] aspect-square items-center justify-center text-center">
          <img className="w-full h-full object-cover rounded-full" src="/profile1.jpeg" alt="profile"/>
          </NeonGradientCard>
      </div>
    </div>

    <ResumeViewer opened={opened} close={close}/>
    </>
  );
};

export default About;
