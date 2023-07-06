

export type Project = {
    title: string;
    active: string;
    icon: string;
    background: string
  };
  
export const projects: Project[] = [
    {
        active: 'project-1',
        title: "Real-Estate Cash-Flow analysis",
        icon: "/../public/map.png",
        background: "/../public/SW overlay 22.jpg "
    },
    {
        active: 'project-2',
        title: "Kafka Nimbus",
        icon: "/../public/kafka.png",
        background: "/../public/SW overlay 22.jpg "
    },
    {
        active: 'project-3',
        title: "AI Voice Conversation App",
        icon: "/../public/mic.png",
        background: "/../public/SW overlay 22.jpg"
    },
    {
        active: 'project-4',
        title: "Pokemon Collection",
        icon: "/../public/collections.png",
        background: "/../public/SW overlay 22.jpg"
    },
]

