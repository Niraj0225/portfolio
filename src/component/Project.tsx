import { ProjectInfo } from "../User";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-10 xl:px-20 pt-10 mx-auto md:max-w-[1800px] font-mono my-10" id="Project">
      <h1 className="text-4xl mb-5 text-center font-bold text-white">
        <span className="text-primaryColor">02.&nbsp;</span>Projects
      </h1>
      <div className="flex flex-wrap 2xl:flex-wrap md:max-lg:!flex md:max-lg:!justify-center md:max-lg:items-center max-sm:flex-wrap xl:flex-wrap sm:flex-wrap lg:flex-wrap md:flex-wrap lg:ml-12 justify-between gap-4">
        {
            ProjectInfo.map((project:any, index:number)=><ProjectCard key={index} title={project.title} desc={project.desc}
            image={project.image} live={project.live}  github={project.github} technologies={project.technologies}/>)
        }
      </div>
    </div>
  );
};

export default Project;
