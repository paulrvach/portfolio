export type Project = {
  title: string;
  active: string;
  icon: string;
  img: string;
};

export const projects: Project[] = [
  {
    active: 'project-1',
    title: 'Real-Estate Cash-Flow analysis',
    icon: 'https://res.cloudinary.com/dxmqknhgj/image/upload/v1689299889/map_u947dr.png',
    img: 'https://res.cloudinary.com/dxmqknhgj/image/upload/v1689627776/Asset_aqe1sx.png',
  },
  {
    active: 'project-2',
    title: 'Kafka Nimbus',
    icon: 'https://res.cloudinary.com/dxmqknhgj/image/upload/v1689299889/kafka_x8ok4n.png',
    img: 'https://res.cloudinary.com/dxmqknhgj/image/upload/v1689628209/kakamain_p2yzmu.png',
  },
  {
    active: 'project-3',
    title: 'AI Voice Conversation App',
    icon: 'https://res.cloudinary.com/dxmqknhgj/image/upload/v1689299890/mic_c13g9q.png',
    img: 'https://res.cloudinary.com/dxmqknhgj/image/upload/v1689643516/Jarvis_tz3jkx.png',
  },
  {
    active: 'project-4',
    title: 'Pokemon Collection',
    icon: 'https://res.cloudinary.com/dxmqknhgj/image/upload/v1689299889/collections_igbicn.png',
    img: '',
  },
];
