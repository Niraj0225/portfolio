

const SkillBadge=(skills:[])=>{
    return skills.map((skill:any, index:number)=><div key={index} className="flex gap-2 border border-textColor rounded-2xl items-center py-2 px-3 mb-1 sm:max-md:gap-1
    sm:max-md:py-0 sm:max-md:px-1.5">
         <img className="w-[48px] sm:max-md:w-[36px] max-sm:w-[28px] !p-1"  src={`Icons/${skill}.png`} />
         <div className="text-textColor text-xl max-sm:-p-5 font-medium max-sm:text-base max-sm:font-semibold">{skill}</div>
    </div>)}

const SkillCard =(props:any)=>{
    return <div data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-sine" className="w-[47%] shadow-[0_0_10px_0_#64FFDA50] rounded-3xl sm:max-md:w-full max-sm:w-full max-sm:!p-2 mb-3 border border-primaryColor p-5">
        <div className="text-3xl mb-4 text-white text-center font-bold max-sm:text-3xl">{props.title}</div>
        <div className="flex gap-3 justify-center sm:max-md:gap-2 flex-wrap" >
            {SkillBadge(props.skills)}
        </div>
    </div>
}
export default SkillCard;