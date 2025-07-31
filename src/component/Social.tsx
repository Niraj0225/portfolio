import { socialLinks } from "../User"

const Social = () => {
 
const socialIcons=socialLinks.map((socialLink)=>{
  return <a href={`${socialLink.link}`} target="_blank" className="font-mono text-lg hover:text-primaryColor transition-all duration-500 hover:scale-125 hover:shadow-lg hover:opacity-90">
        <div data-aos="fade-up-left" data-aos-duration="800">
          <socialLink.icon className="-rotate-90" size={30}/>
          </div>
      </a>
})

  return (
  <div className="flex max-md:hidden text-textColor items-center gap-10 fixed bottom-40 -left-40 rotate-90">
      {socialIcons}
      <hr className="border-[2px] w-40 rounded-full text-textColor bg-textColor border-textColor" />
    </div>
  )
}

export default Social
