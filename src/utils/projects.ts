export type Project = {
  title: string;
  active: string;
  icon: string;
  img: string;
};

export type Feature = {
  title: string;
  description: string;
  emoji: string;
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

export const projectOneFeatures: Feature[] = [
  {
    title: 'Real-Estate Cash-Flow Analysis',
    description:
      'Leverage the power of data analytics with our real-estate cash-flow analysis feature. This innovative tool uses intricate algorithms to process comprehensive real-estate data, enabling investors to make informed decisions about potential location-based residential properties.',
    emoji: '🏘️',
    img: 'https://res.cloudinary.com/dxmqknhgj/image/upload/v1689698522/asssetMockup_n2tztl.png',
  },
  {
    title: 'Location-based Residential Real-Estate Investment Finder',
    description:
      "Experience the convergence of geolocation and real-estate data like never before. By integrating Google Maps and Google Places API with Zillow Real-Estate data, our React application enables robust, location-focused search capabilities for real estate investments. It's where geospatial technology meets real-estate investment strategy.",
    emoji: '📍',
    img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    title: 'React Router-Enhanced Navigation',
    description:
      "Revolutionize your user experience with our single-page application architecture, underpinned by React Router. It ensures seamless transitions between sections, reducing latency and enhancing overall performance. It's not just about speed; it's about optimizing the application's efficiency.",
    emoji: '🗺️',
    img: 'https://reactrouter.com/ogimage.png',
  },
  {
    title: 'Session-Based Tokens for Favouriting and Saving',
    description:
      "Embrace the advantage of session-based tokens in preserving your investment research. This technology empowers you to favorite and save potential investments, ensuring your research doesn't get lost in the digital shuffle. It's your personalized gateway to potential investment opportunities.",
    emoji: '💻',
    img: 'https://www.rd.com/wp-content/uploads/2022/05/What-Are-Cookies-FT-GettyImages3.jpg?fit=700,1024',
  },
];

export const projectTwoFeatures: Feature[] = [
  {
    title: 'Next.js App Router Framework',
    description:
      'I leveraged the Next.js framework to optimize the client-server components in our application, improving page loading and hydration to deliver faster initial load times and minimizing client-side requests.',
    img: 'https://nextjs.org/static/blog/next-13/twitter-card.png ',
    emoji: '',
  },
  {
    title: 'Dynamic and Static Routing',
    description:
      "By implementing file-based dynamic and static routing, I've been able to orchestrate an intuitive user flow with an appealing graphical interface that enhances user experience.",
    img: 'https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fterminology-component-tree.png&w=3840&q=75&dpl=dpl_8FDM8f7fmPGpgaL8mp9d9Pb6h4z3',
    emoji: '',
  },
  {
    title: 'Docker Deployment',
    description:
      "I've containerized and deployed the web application, along with Prometheus and Grafana servers using Docker, enhancing scalability and portability while streamlining the deployment process.",
    img: 'https://1000logos.net/wp-content/uploads/2021/11/Docker-Logo.png',
    emoji: '',
  },
  {
    title: 'Kafka-Prometheus Connection',
    description:
      'I established a dynamic connection between Kafka servers and Prometheus to scrape real-time metrics from the cloud. This enhancement to our monitoring capabilities provides valuable insights and boosts our response to changes.',
    img: 'https://nordicapis.com/wp-content/uploads/How-to-Monitor-REST-APIs-Using-Prometheus-and-Grafana.png',
    emoji: '',
  },
  {
    title: 'Grafana Dashboard',
    description:
      "Through Grafana, I've developed informative dashboards to visualize Kafka broker and topic metrics. This has improved our data analysis, debugging efficiency, and interactive monitoring of Kafka clusters.",
    img: 'https://grafana.com/static/assets/img/blog/kafka_integration_overview.png',
    emoji: '',
  },
  {
    title: 'ORM and MongoDB Integration',
    description:
      "By integrating an Object-Relational Mapping (ORM) framework with MongoDB, I've streamlined schema migrations and simplified development operations, resulting in reduced manual coding efforts and improved database management efficiency.",
    img: 'https://miro.medium.com/v2/resize:fit:1400/1*BszPucqCzUvF9WJPu0gUqQ.png',
    emoji: '',
  },
  {
    title: 'tRPC API Routes',
    description:
      "I've developed API routes using tRPC to ensure seamless end-to-end type safety. This approach has helped us eliminate unnecessary runtime type errors.",
    img: 'https://media.sitepen.com/blog-images/2022/12/Intro-to-tRPC-1024x538.jpg',
    emoji: '',
  },
  {
    title: 'AWS-SDK for MSK Clusters',
    description:
      "I've utilized the AWS-SDK to programmatically deploy and manage remote MSK clusters. This has made the management and monitoring of Kafka clusters more efficient and intuitive for developers.",
    img: 'https://blog.adobe.com/en/publish/2021/08/31/media_1649ebc3fbbce0df508081913819d491fc3f7c7a9.png?width=750&format=png&optimize=medium',
    emoji: '',
  },
];
