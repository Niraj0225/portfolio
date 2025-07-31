import { info, socialLinks } from "../User"

const Footer = () => {

  const socialIcons=socialLinks.map((socialLink)=>{
  return <a href={`${socialLink.link}`} target="_blank" className="font-mono text-lg hover:text-primaryColor transition-all duration-500 hover:scale-125 hover:shadow-lg hover:opacity-90">
        <div>
          <socialLink.icon size={25}/>
          </div>
      </a>
})

  return (
    <div className="font-mono mt-20 mb-10 flex flex-col items-center gap-3">
        <div className="md:text-3xl sm:text-2xl max-sm:text-[22px] text-primaryColor font-semibold">{info.name}</div>
        <div className="md:hidden flex gap-6 max-sm:gap-3 text-textColor">
          {socialIcons}
        </div>
        <div className="text-textColor text-xl max-sm:text-xs">Copyright &copy; {new Date().getFullYear()} {info.name} | All Rights Reserved</div>
    </div>
  )
}

export default Footer
