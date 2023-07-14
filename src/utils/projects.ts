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
    icon: 'https://res.cloudinary.com/dxmqknhgj/image/upload/v1689299889/map_u947dr.png',
    bgGradient: 'real-estate-gradient',
    url: '',
  },
  {
    active: 'project-2',
    title: 'Kafka Nimbus',
    icon: 'https://res.cloudinary.com/dxmqknhgj/image/upload/v1689299889/kafka_x8ok4n.png',
    bgGradient: 'kafka-gradient',
    url: '/kafka-nimbus',
  },
  {
    active: 'project-3',
    title: 'AI Voice Conversation App',
    icon: 'https://res.cloudinary.com/dxmqknhgj/image/upload/v1689299890/mic_c13g9q.png',
    bgGradient: 'ai-voice-gradient',
    url: '',
  },
  {
    active: 'project-4',
    title: 'Pokemon Collection',
    icon: 'https://res.cloudinary.com/dxmqknhgj/image/upload/v1689299889/collections_igbicn.png',
    bgGradient: 'pokemon-graident',
    url: '',
  },
];
