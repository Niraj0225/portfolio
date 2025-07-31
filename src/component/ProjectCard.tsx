import { Badge, Button, Card, Group, Image, Indicator, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks";
import FullProjectModal from "./FullProjectModal";

const ProjectCard = (props:any) => {
      const [opened, { open, close }] = useDisclosure(false);
     
  return (
  <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[48%] xl:w-[450px] mr-1 flex justify-center" data-aos="" data-aos-duration="800">
     <Card onClick={open} className="!bg-bgColor hover:!scale-[1.02] cursor-pointer transition-transform duration-300 ease-in-out mb-5 hover:!shadow-[0_0_10px_1px_#64FFDA] !border-primaryColor border-2" w="450px" shadow="lg" padding="lg" radius="lg" withBorder>
      <Card.Section className="p-3">
        <Image className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA]"
          src={props.image}
          height={160}
          alt={props.image}
        />
      </Card.Section>

      <Group justify="space-between" mt="xs" mb="xs">
        <Text className="text-2xl gap-2 sm:text-2xl !font-bold !text-white flex items-center">{props.title}{props.live === true && <Badge variant="outline" color="red" 
        rightSection={<Indicator color="red" position="middle-end" size={7} processing></Indicator>}>Live</Badge>}</Text>
       
      </Group>

<Group mt="xs" mb="xs" className="flex-wrap gap-2">
{props.technologies.map((tech:string, index:number)=>index<3 && <Badge key={index} size="lg" variant="light" color="#64FFDA">{tech}</Badge>)}
</Group>
      <Text className="!text-justify text-sm sm:text-base" lineClamp={5} size="sm" c="dimmed">
       {props.desc}
      </Text>

      <Button onClick={open} className="!bg-primaryColor !text-bgColor mr-4" fullWidth mt="md" radius="md">
        Show More
      </Button>
    </Card>
    <FullProjectModal opened={opened} close={close} title={props.title} desc={props.desc}
        image={props.image} live={props.live}  github={props.github} technologies={props.technologies}/>
    </div>
  )
}

export default ProjectCard
