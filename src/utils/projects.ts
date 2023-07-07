export type Project = {
  title: string;
  active: string;
  icon: string;
  bgGradient: string;
  url: string;
};

export const projects: Project[] = [
  {
    active: 'project-1',
    title: 'Real-Estate Cash-Flow analysis',
    icon: '/../public/map.png',
    bgGradient: 'real-estate-gradient',
    url: '',
  },
  {
    active: 'project-2',
    title: 'Kafka Nimbus',
    icon: '/../public/kafka.png',
    bgGradient: 'kafka-gradient',
    url: '/kafka-nimbus',
  },
  {
    active: 'project-3',
    title: 'AI Voice Conversation App',
    icon: '/../public/mic.png',
    bgGradient: 'ai-voice-gradient',
    url: '',
  },
  {
    active: 'project-4',
    title: 'Pokemon Collection',
    icon: '/../public/collections.png',
    bgGradient: 'pokemon-graident',
    url: '',
  },
];
