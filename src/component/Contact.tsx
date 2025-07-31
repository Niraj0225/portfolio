import { useState } from "react"
import FloatingInput from "./FloatingInput"
import { Button, useMatches } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { validateForm } from "./Validation";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase";
import toast from "react-hot-toast";

const Contact = () => {
    const form={
        name:"",
        email:"",
        phone:"",
        message:""
    }

     const [formData, setFormData] = useState<{ [key: string]: string }>(form);
    const [formError, setFormError] = useState<{ [key: string]: string }>(form);

    const handleChange = (id: string, value: string) => {
        setFormData({ ...formData, [id]: value });
        setFormError({ ...formError, [id]: validateForm(id, value)})
    }

    const handleSubmit=async()=>{
        let valid=true;
        let newFormError:{[key:string]:string}={};
        for(let key in formData){
            const error=validateForm(key, formData[key]);
            if(error.length>0){
                newFormError[key]=error;
                valid=false;
            }
        }
        setFormError(newFormError);
        if(valid){
            try {
      console.log("Submitting form:", formData);
      await addDoc(collection(db, "portfolio"), formData);
      toast.success("Submitted Successfully!", { duration: 2000 });
      setFormData(form);
    } catch (err) {
      console.error("Firestore submit error:", err);
      toast.error("Failed to submit!", { duration: 2000 });
    }
  } else {
    toast.error("Some error occurred!", { duration: 2000 });
    console.log("Error:", formData);
  }
    }
   
 const btn=useMatches({
    sm: 'sm',
    md: 'md',
    lg: 'md',
    xl: 'md',
  })
  return (
   <div className="md:!px-24 sm:px-16 my-10 max-sm:!w-full max-sm:px-5 max-sm:!mx-0 font-mono" id="Contact">
        <h1 className="text-4xl max-sm:text-3xl mb-10 font-bold text-center text-white">
            <span className="text-primaryColor">04.&nbsp;</span>Contact
        </h1>
        <div data-aos="flip-left" data-aos-duration="800" className="lg:!w-[50%] md:max-lg:w-full sm:max-md:w-full max-sm:w-full shadow-[0_0_10px_0_#64FFDA50] m-auto flex flex-col gap-6 border border-primaryColor rounded-3xl p-5">
            <div className="text-3xl text-white max-sm:text-2xl font-semibold">Let's Connect</div>
            <FloatingInput id="name" name="Name" value={formData.name} handleChange={handleChange} error={formError.name}/>
             <FloatingInput id="email" name="Email" value={formData.email} handleChange={handleChange} error={formError.email}/>
              <FloatingInput id="phone" name="Phone Number" value={formData.phone} handleChange={handleChange} error={formError.phone}/>
              <FloatingInput id="message" name="Message" value={formData.message} handleChange={handleChange} error={formError.message}/>
              <Button fullWidth onClick={handleSubmit} rightSection={<IconArrowRight size={20}/> } 
              className="!text-bgColor !font-bold" color="#64FFDA" variant="filled" size={btn} radius="lg">Send</Button>
        </div>
    </div>
  )
}

export default Contact
