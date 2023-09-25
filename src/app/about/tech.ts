export interface Tech {
  name: string;
  src: string;
  fallback: string;
  description: string;
}

export const technologies: Tech[] = [
  {
    name: "Javascript",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsDxI08KhrPx6HHfIQdxILFjI--bni9ZBPCtG_hsqg4w&s",
    fallback: "JS",
    description: "A versatile scripting language used for web development.",
  },
  {
    name: "TypeScript",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQydgBPB5L19c3G7nU-RTJAMXEcWCYfyvU-jskDjTyWVA&s",
    fallback: "TS",
    description:
      "A statically typed superset of JavaScript for building robust applications.",
  },
  {
    name: "Node",
    src: "https://apprand.com/wp-naughtycontent/uploads/2015/08/icon-tag-node-js-16b5599d3c86c2b8617a80711a8abc8bc30947ca399ae4151ce1f8ca33e257cc.png",
    fallback: "N",
    description:
      "A runtime environment for executing JavaScript code on the server side.",
  },
  {
    name: "React",
    src: "https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png",
    fallback: "R",
    description: "A popular JavaScript library for building user interfaces.",
  },
  {
    name: "GSAP",
    src: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
    fallback: "G",
    description:
      "GreenSock Animation Platform, a powerful animation library for the web.",
  },
  {
    name: "Next",
    src: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg",
    fallback: "N",
    description:
      "A framework for building React applications with server-side rendering.",
  },
  {
    name: "Docker",
    src: "https://www.svgrepo.com/show/331370/docker.svg",
    fallback: "D",
    description:
      "A platform for developing, shipping, and running applications in containers.",
  },
  {
    name: "Prometheus",
    src: "https://cdn.iconscout.com/icon/free/png-256/free-prometheus-282488.png?f=webp",
    fallback: "P",
    description: "An open-source monitoring and alerting toolkit.",
  },
  {
    name: "Grafana",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Grafana_icon.svg/351px-Grafana_icon.svg.png",
    fallback: "GR",
    description: "An open-source analytics and monitoring platform.",
  },
  {
    name: "Webpack",
    src: "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-small.png",
    fallback: "W",
    description:
      "A popular JavaScript module bundler used for building web applications.",
  },
  {
    name: "Redux",
    src: "https://miro.medium.com/v2/resize:fit:500/1*tOI6UC5EaS2fPItCesI-AQ.png",
    fallback: "R",
    description: "A state management library for JavaScript applications.",
  },
  {
    name: "Jest",
    src: "https://viget.imgix.net/jest.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&q=90&s=a6c20876868af5a7f83241353efc2495",
    fallback: "J",
    description: "A JavaScript testing framework developed by Facebook.",
  },
  {
    name: "HTML",
    src: "https://www.iconarchive.com/download/i73026/cornmanthe3rd/plex/Other-html-5.ico",
    fallback: "HTML",
    description:
      "A markup language used for creating the structure of web pages.",
  },
  {
    name: "CSS",
    src: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png",
    fallback: "CSS",
    description: "A stylesheet language used for styling web pages.",
  },
  {
    name: "Tailwind",
    src: "data:image/png;base64,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",
    fallback: "TW",
    description:
      "A utility-first CSS framework for efficient and customizable web development.",
  },
  {
    name: "tRPC",
    src: "https://trpc.io/img/logo.svg",
    fallback: "tR",
    description:
      "A TypeScript RPC framework for building APIs in TypeScript, designed for simplicity and type safety.",
  },
  {
    name: "Three.js",
    src: "https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png",
    fallback: "3",
    description:
      "A JavaScript library used for 3D graphics in web applications, making it easier to create interactive 3D experiences.",
  },
  {
    name: "Git",
    src: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    fallback: "GT",
    description:
      " Git is a distributed version control system used for tracking changes in source code during software development.",
  },
  {
    name: "GitHub",
    src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    fallback: "GH",
    description:
      "A web-based platform for version control and collaboration, widely used for hosting and managing software projects.",
  },
  {
    name: "GitActions",
    src: "https://avatars.githubusercontent.com/u/44036562?s=280&v=4",
    fallback: "GA",
    description:
      "A feature of GitHub that allows you to automate tasks and workflows related to your software development process.",
  },
  {
    name: "AWS-SDK",
    src: "https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/SDKs_copy_nodeJS-512.png",
    fallback: "AWS",
    description:
      "The AWS SDK is a set of libraries and tools for building applications that use Amazon Web Services (AWS) cloud services.",
  },
  {
    name: "SQL",
    src: "https://cdn0.iconfinder.com/data/icons/document-file-types/512/sql-512.png",
    fallback: "SQL",
    description:
      "SQL (Structured Query Language) A domain-specific language used for managing and querying relational databases.",
  },
  {
    name: "PostgreSQL",
    src: "https://static-00.iconduck.com/assets.00/postgresql-icon-248x256-vp8m9bqw.png",
    fallback: "PSQL",
    description:
      "An open-source relational database management system known for its reliability and extensibility.",
  },
  {
    name: "MongoDb",
    src: "https://static-00.iconduck.com/assets.00/mongodb-icon-2048x2048-cezvpn3f.png",
    fallback: "MG",
    description:
      "A popular NoSQL database system that stores data in a flexible, document-like format.",
  },
  {
    name: "KafkaJS",
    src: "data:image/png;base64,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",
    fallback: "KJS",
    description:
      "A JavaScript client for Apache Kafka, a distributed streaming platform used for building real-time data pipelines.",
  },
  {
    name: "TurboRepo",
    src: "https://user-images.githubusercontent.com/4060187/196936104-5797972c-ab10-4834-bd61-0d1e5f442c9c.png",
    fallback: "T",
    description:
      "An incremental bundler and build system optimized for JavaScript and TypeScript",
  },
];
