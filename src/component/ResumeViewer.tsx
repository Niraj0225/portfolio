import { ActionIcon, Modal, ScrollArea, Tooltip } from "@mantine/core"
import { IconArrowBigDownFilled } from "@tabler/icons-react"
import { Document, Page } from "react-pdf"
import { info } from "../User"

const ResumeViewer = (props:any) => {
  return (
    <Modal.Root scrollAreaComponent={ScrollArea.Autosize} size="70%" className="font-mono" opened={props.opened} onClose={props.close}>
        <Modal.Overlay />
        <Modal.Content className="!rounded-3xl">
            <Modal.Header className="!bg-bgColor !border-primaryColor !border-2 !border-b-0  !rounded-tl-3xl !rounded-tr-3xl">
         
                <Modal.Title data-autofocus className="!text-4xl text-white !font-bold flex gap-3 items-center">
                    Resume
                    <Tooltip label="Download" className="!text-bgColor" color="#64FFDA" position="right" offset={5}>
                        
                  
                     <ActionIcon className="!text-primaryColor" component="a" href="/Resume.pdf" download={info.name} variant="outline" color="#64FFDA" aria-label="Settings">
                       <IconArrowBigDownFilled />
                     </ActionIcon>
                     </Tooltip>
                </Modal.Title>
                
                <Modal.CloseButton size="md" iconSize="30px" className="!bg-bgColor !text-red-500"/>
            </Modal.Header>

            <Modal.Body className="!bg-bgColor !pt-2 !border-primaryColor !border-2 !border-t-0  !rounded-bl-3xl !rounded-br-3xl">
               <Document file="/Nirajmali-javadev-cv.pdf">
                 <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
               </Document>
               
            </Modal.Body>
        </Modal.Content>
      </Modal.Root>
  )
}

export default ResumeViewer
