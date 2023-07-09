import React from 'react';
import { Lato } from 'next/font/google';

const lato = Lato({ subsets: ['latin'], weight: '700' });

type Props = {};

const KafkaNimbus = (props: Props) => {
  return (
    <div className="w-screen h-full overflow-scroll z-30">
  <div className="mx-6 my-4 p-4">
    <article>
      <header>
        <h1 className="text-4xl mb-4">Kafka Nimbus</h1>
        <p className="page-description"></p>
        <video
          width="100%"
          height="100%"
          autoPlay
          playsInline
          loop
          className="mb-6 rounded-lg"
        >
          <source src="https://res.cloudinary.com/dpqdqryvo/video/upload/v1685814776/test-demo-kafka_szbixp.mov" />
        </video>
      </header>
      <div className="">
        <h2 className="text-4xl font-bold mb-4">What it does</h2>
        <p>
          Operating Kafka involves more than just infrastructure costs. It also requires skilled engineers to handle cluster configuration, management, and scaling. Furthermore, the development of custom software is essential to enable end-to-end data streaming capabilities as Kafka usage scales and becomes critical to business operations. Kafka Nimbus is an open source project that aimed to streamline the process of deploying, monitoring, and scaling Kafka Clusters to the cloud by simplifying each step into an easy and intuitive graphical interface.
        </p>

        <p className="mt-4">
          We currently support deployments to AWS and are working on adding support for Digital Ocean and Google Cloud.
        </p>

        <h2 className="text-4xl font-bold mt-8 mb-2">My Contributions</h2>

        <p>
          Working as a full-stack engineer, my contributions ranged from orchestrating the user flow and data visualization in React and the Next.js App Router framework to containerizing and deploying our application alongside our data visualization package.
        </p>

        <h3 className="text-2xl font-bold mt-6">
          Designing the user flow in Figma
        </h3>
        <div className="bg-slate-50 p-4 my-4 rounded-md bg-opacity-25">
          <div className="carousel h-[40vh]">
            <div className="carousel-item">
              <img
                src="https://res.cloudinary.com/dxmqknhgj/image/upload/v1688759427/Cluster_Monitoring_glhpdt.png"
                alt="figma"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://res.cloudinary.com/dxmqknhgj/image/upload/v1688759119/user-flow_sbjpd4.png"
                alt="figma"
              />
            </div>
          </div>
        </div>

        <p>
          For the project Kafka Nimbus, I utilized Figma to build out the user flow, ensuring a streamlined and intuitive graphical interface for deploying, monitoring, and scaling Kafka Clusters to the cloud. I began by creating wireframes and mockups to visualize the various screens and interactions within the application. Mapping out the user flow in Figma allowed me and the team to visually connect each step, from the initial deployment process to the ongoing monitoring and scaling functionalities. I collaborated with the team of developers, leveraging Figma's collaborative features to gather feedback and iterate on the design. This iterative process ensured that the user flow met the project's objectives of simplicity and intuitiveness. Additionally, I added annotations, comments, and documentation directly within Figma to enhance collaboration and serve as a centralized hub for design discussions. Ultimately, the user flow in Figma facilitated effective communication, optimized the user experience, and provided clear specifications for the development team, resulting in a successful deployment of Kafka Nimbus.
        </p>

        <h3 className="text-2xl font-bold mt-6">
          Developing in the Next.js App Router Framework
        </h3>
        <img
          src="https://res.cloudinary.com/dxmqknhgj/image/upload/v1688762558/ServerandClient_zoj4dq.png"
          alt="next13-app-router"
          className='my-2'
        />
        <p>
          By leveraging the latest support for React Server Components in the Next.js App Router Framework, I successfully enhanced the efficiency of our application. I implemented both server and client components, which significantly improved page loading and hydration, leading to faster initial load times and a reduction in client-side requests.
        </p>

        <p className="mt-4">
          Furthermore, in addition to building reusable React components, I utilized the tRPC (TypeScript Remote Procedure Call) framework to develop our API. This decision provided us with end-to-end type safety, effectively eliminating runtime type errors. It also ensured seamless data transfer between our front-end and back-end teams, enabling them to work in perfect synchronization.
        </p>

        <h3 className="text-2xl font-bold mt-6">
          Visualization with Prometheus and Grafana
        </h3>

        <p>
          In order to provide users with real-time monitoring capabilities for their deployed Kafka Clusters, I implemented the Prometheus and Grafana combination to stream metrics onto their dashboards. When a user deployed a Kafka Cluster onto the cloud, the cluster was equipped with a JMX exporter that exposed a designated port for Prometheus to scrape metrics from.
        </p>

        <p className="mt-4">
          To enable dynamic connection between Kafka clusters and our web application, the backend continuously checked if the designated port was exposed. Once the port was detected as accessible, the backend updated a targets.json file, adding the newly created Kafka Cluster to the list of targets to be scraped by Prometheus. This seamless integration allowed us to fetch and display the metrics in visually appealing graphs on the user dashboard using Grafana.
        </p>

        <h3 className="text-2xl font-bold mt-6">
          Deploying the multi-container application
        </h3>
        <img className="my-12" src="https://res.cloudinary.com/dxmqknhgj/image/upload/v1688766367/PrometheusGrafana_thnxy1.png" />
        <p>
          Deploying a web application involves various components, from seamless CI/CD integration to efficient monitoring solutions. I leveraged Vercel, Digital Ocean, and AWS to optimize the deployment and monitoring processes for our web application. Let's dive into the steps I took and the reasoning behind each decision.
        </p>

        <ol className="list-decimal pl-6 mt-4">
          <li>
            <strong>Choosing Vercel for Web Application Deployment:</strong> When it came to deploying our web application, I turned to Vercel for its integrated CI/CD capabilities with Git actions. Vercel's seamless integration allowed the team and me to automate the deployment process, ensuring that every code change was built, tested, and deployed with ease. With Vercel, we could focus on iterating and improving our application without worrying about the deployment pipeline.
          </li>
          <li>
            <strong>Containerizing and Deploying Prometheus and Grafana on Digital Ocean:</strong> To monitor our deployed Kafka Clusters, I containerized and deployed Prometheus and Grafana on a Digital Ocean droplet. Containerization provided several benefits, including easy scaling and isolation. By containerizing Prometheus and Grafana, I could manage their resources efficiently and ensure reliable monitoring capabilities for our users' Kafka infrastructure. Digital Ocean's robust infrastructure offered a stable and secure environment for our monitoring stack.
          </li>
          <li>
            <strong>Dynamically Deploying Kafka Clusters to AWS with the Amazon SDK:</strong> To facilitate the dynamic deployment of Kafka Clusters, I utilized the Amazon SDK. This powerful toolkit allowed me to programmatically provision Kafka clusters on AWS, enabling scalability and flexibility. By leveraging the Amazon SDK, I automated the deployment process and ensured consistency when users deployed their clusters. This approach reduced manual effort and enabled our team to quickly adapt to changing demands.
          </li>
        </ol>

        <h2 className="text-4xl font-bold mt-8">
          Managing SCRUM environment
        </h2>
        <div className="carousel w-full rounded-lg my-4">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://res.cloudinary.com/dxmqknhgj/image/upload/v1688763604/Screenshot_2023-07-07_at_3.00.11_PM_a8fbrx.png"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://res.cloudinary.com/dxmqknhgj/image/upload/v1688763605/Screenshot_2023-07-07_at_4.58.21_PM_hzrbc0.png"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://res.cloudinary.com/dxmqknhgj/image/upload/v1688763605/Screenshot_2023-07-07_at_4.59.32_PM_jgz0od.png"
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://res.cloudinary.com/dxmqknhgj/image/upload/v1688763605/Screenshot_2023-07-07_at_4.59.04_PM_mwsevp.png"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a
            href="#item1"
            className="btn btn-xs hover:bg-slate-300 hover:text-slate-900"
          >
            1
          </a>
          <a
            href="#item2"
            className="btn btn-xs hover:bg-slate-300 hover:text-slate-900"
          >
            2
          </a>
          <a
            href="#item3"
            className="btn btn-xs hover:bg-slate-300 hover:text-slate-900"
          >
            3
          </a>
          <a
            href="#item4"
            className="btn btn-xs hover:bg-slate-300 hover:text-slate-900"
          >
            4
          </a>
        </div>
        <p>
          To establish a structured and efficient workflow, I built out a dedicated Notion template tailored to our open-source product development needs. Notion's versatile and customizable features allowed me to design a template that catered to our Scrum environment as well as gave me the option to adapt to the needs of the development team. This template served as a foundation for managing tasks, documentation, resources, and meetings.
        </p>

        <h3 className="text-2xl font-bold mt-6">
          Kanban Boards for Development Tickets
        </h3>

        <p>
          To enhance collaboration and organization among our developers, I leveraged Notion's Kanban board feature within the template. This visual board facilitated the management of development tickets, enabling the team to track the progress of each task from start to completion. The Kanban board acted as a central hub, providing real-time visibility into ongoing development efforts and fostering effective communication among team members.
        </p>

        <h3 className="text-2xl font-bold mt-6">
          Documenting Work Progress and Resources
        </h3>

        <p>
          One of the key benefits of using Notion for our Scrum environment was the ability to document and share valuable information. Within the template, I created sections to log and share our work progress, including status updates, completed tasks, and any challenges encountered. Additionally, we utilized the template to store and post resources that aided the development process. This documentation aspect ensured that knowledge was accessible to the entire team, promoting transparency and collaboration.
        </p>

        <h3 className="text-2xl font-bold mt-6">
          Scheduling Meetings and Keeping Meeting Notes
        </h3>

        <p>
          Notion proved to be an invaluable tool for scheduling meetings and keeping track of meeting notes. We utilized the template to schedule regular Scrum meetings and recorded detailed meeting notes directly within Notion. This centralized approach allowed us to maintain a comprehensive record of discussions, decisions, and action items, ensuring that everyone was aligned and accountable.
        </p>
      </div>
    </article>
  </div>
</div>

    );
};

export default KafkaNimbus;
