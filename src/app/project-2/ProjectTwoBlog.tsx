/* eslint-disable @next/next/no-img-element */
import React from 'react';

type Props = {};

const ProjectTwoBlog = (props: Props) => {
  return (
    <div className='prose prose-stone lg:prose-xl prose-strong:text-slate-900  prose-h3:text-slate-900 prose-h5:text-slate-900 text-slate-500 items-center'>
      <header>
        <h3>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='#38BDF8'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='#38BDF8'
            className='w-6 h-6 inline mr-1'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z'
            />
          </svg>
          Project Details
        </h3>
      </header>
      <div>
        <article>
          <video width='100%' height='100%' autoPlay playsInline loop>
            <source src='https://res.cloudinary.com/dpqdqryvo/video/upload/v1685814776/test-demo-kafka_szbixp.mov' />
          </video>
          <div>
            <div>
              <h3>What it does:</h3>
              <p>
                Operating Kafka involves more than just infrastructure costs. It
                also requires skilled engineers to handle cluster configuration,
                management, and scaling. Furthermore, the development of custom
                software is essential to enable end-to-end data streaming
                capabilities as Kafka usage scales and becomes critical to
                business operations. Kafka Nimbus is an open source project that
                aimed to streamline the process of deploying, monitoring, and
                scaling Kafka Clusters to the cloud by simplifying each step
                into an easy and intuitive graphical interface.
              </p>
            </div>
            <p>
              We currently support deployments to AWS and are working on adding
              support for Digital Ocean and Google Cloud.
            </p>
            <h3>My Contributions</h3>
            <p>
              Working as a full-stack engineer, my contributions ranged from
              orchestrating the user flow and data visualization in React and
              the Next.js App Router framework to containerizing and deploying
              our application alongside our data visualization package.
            </p>
            <h3>Designing the user flow in Figma</h3>
            <div>
              <div className='carousel h-[40vh]'>
                <div className='carousel-item'>
                  <img
                    src='https://res.cloudinary.com/dxmqknhgj/image/upload/v1688759427/Cluster_Monitoring_glhpdt.png'
                    alt='figma'
                  />
                </div>
                <div className='carousel-item'>
                  <img
                    src='https://res.cloudinary.com/dxmqknhgj/image/upload/v1688759119/user-flow_sbjpd4.png'
                    alt='figma'
                  />
                </div>
              </div>
            </div>
            <p>
              For the project Kafka Nimbus, I utilized Figma to build out the
              user flow, ensuring a streamlined and intuitive graphical
              interface for deploying, monitoring, and scaling Kafka Clusters to
              the cloud. I began by creating wireframes and mockups to visualize
              the various screens and interactions within the application.
              Mapping out the user flow in Figma allowed me and the team to
              visually connect each step, from the initial deployment process to
              the ongoing monitoring and scaling functionalities. I collaborated
              with the team of developers, leveraging Figma&apos;s collaborative
              features to gather feedback and iterate on the design. This
              iterative process ensured that the user flow met the
              project&apos;s objectives of simplicity and intuitiveness.
              Additionally, I added annotations, comments, and documentation
              directly within Figma to enhance collaboration and serve as a
              centralized hub for design discussions. Ultimately, the user flow
              in Figma facilitated effective communication, optimized the user
              experience, and provided clear specifications for the development
              team, resulting in a successful deployment of Kafka Nimbus.
            </p>
            <h3>Developing in the Next.js App Router Framework</h3>
            <img
              src='https://res.cloudinary.com/dxmqknhgj/image/upload/v1688762558/ServerandClient_zoj4dq.png'
              alt='next13-app-router'
              className='my-2'
            />
            <p>
              By leveraging the latest support for React Server Components in
              the Next.js App Router Framework, I successfully enhanced the
              efficiency of our application. I implemented both server and
              client components, which significantly improved page loading and
              hydration, leading to faster initial load times and a reduction in
              client-side requests.
            </p>
            <p>
              Furthermore, in addition to building reusable React components, I
              utilized the tRPC (TypeScript Remote Procedure Call) framework to
              develop our API. This decision provided us with end-to-end type
              safety, effectively eliminating runtime type errors. It also
              ensured seamless data transfer between our front-end and back-end
              teams, enabling them to work in perfect synchronization.
            </p>
            <h3>Visualization with Prometheus and Grafana</h3>
            <p>
              In order to provide users with real-time monitoring capabilities
              for their deployed Kafka Clusters, I implemented the Prometheus
              and Grafana combination to stream metrics onto their dashboards.
              When a user deployed a Kafka Cluster onto the cloud, the cluster
              was equipped with a JMX exporter that exposed a designated port
              for Prometheus to scrape metrics from.
            </p>
            <p>
              To enable dynamic connection between Kafka clusters and our web
              application, the backend continuously checked if the designated
              port was exposed. Once the port was detected as accessible, the
              backend updated a targets.json file, adding the newly created
              Kafka Cluster to the list of targets to be scraped by Prometheus.
              This seamless integration allowed us to fetch and display the
              metrics in visually appealing graphs on the user dashboard using
              Grafana.
            </p>
            <h3>Deploying the multi-container application</h3>
            <img
              alt='Application Signal Flow'
              className='my-12'
              src='https://res.cloudinary.com/dxmqknhgj/image/upload/v1688766367/PrometheusGrafana_thnxy1.png'
            />
            <p>
              Deploying a web application involves various components, from
              seamless CI/CD integration to efficient monitoring solutions. I
              leveraged Vercel, Digital Ocean, and AWS to optimize the
              deployment and monitoring processes for our web application.
              Let&apos;s dive into the steps I took and the reasoning behind
              each decision.
            </p>
            <ol>
              <li>
                <strong>Choosing Vercel for Web Application Deployment:</strong>
                When it came to deploying our web application, I turned to
                Vercel for its integrated CI/CD capabilities with Git actions.
                Vercel&apos;s seamless integration allowed the team and me to
                automate the deployment process, ensuring that every code change
                was built, tested, and deployed with ease. With Vercel, we could
                focus on iterating and improving our application without
                worrying about the deployment pipeline.
              </li>
              <li>
                <strong>
                  Containerizing and Deploying Prometheus and Grafana on Digital
                  Ocean:
                </strong>{' '}
                To monitor our deployed Kafka Clusters, I containerized and
                deployed Prometheus and Grafana on a Digital Ocean droplet.
                Containerization provided several benefits, including easy
                scaling and isolation. By containerizing Prometheus and Grafana,
                I could manage their resources efficiently and ensure reliable
                monitoring capabilities for our users&apos; Kafka
                infrastructure. Digital Ocean&apos;s robust infrastructure
                offered a stable and secure environment for our monitoring
                stack.
              </li>
              <li>
                <strong>
                  Dynamically Deploying Kafka Clusters to AWS with the Amazon
                  SDK:
                </strong>{' '}
                To facilitate the dynamic deployment of Kafka Clusters, I
                utilized the Amazon SDK. This powerful toolkit allowed me to
                programmatically provision Kafka clusters on AWS, enabling
                scalability and flexibility. By leveraging the Amazon SDK, I
                automated the deployment process and ensured consistency when
                users deployed their clusters. This approach reduced manual
                effort and enabled our team to quickly adapt to changing
                demands.
              </li>
            </ol>
            <h3>Managing SCRUM environment</h3>
            <div className='carousel w-full rounded-lg my-4'>
              <div id='item1' className='carousel-item w-full'>
                <img
                  alt='item1'
                  src='https://res.cloudinary.com/dxmqknhgj/image/upload/v1688763604/Screenshot_2023-07-07_at_3.00.11_PM_a8fbrx.png'
                  className='w-full'
                />
              </div>
              <div id='item2' className='carousel-item w-full'>
                <img
                  alt='item2'
                  src='https://res.cloudinary.com/dxmqknhgj/image/upload/v1688763605/Screenshot_2023-07-07_at_4.58.21_PM_hzrbc0.png'
                  className='w-full'
                />
              </div>
              <div id='item3' className='carousel-item w-full'>
                <img
                  alt='item3'
                  src='https://res.cloudinary.com/dxmqknhgj/image/upload/v1688763605/Screenshot_2023-07-07_at_4.59.32_PM_jgz0od.png'
                  className='w-full'
                />
              </div>
              <div id='item4' className='carousel-item w-full'>
                <img
                  alt='item4'
                  src='https://res.cloudinary.com/dxmqknhgj/image/upload/v1688763605/Screenshot_2023-07-07_at_4.59.04_PM_mwsevp.png'
                  className='w-full'
                />
              </div>
            </div>
            <div className='flex justify-center w-full py-2 gap-2'>
              <a
                href='#item1'
                className='btn btn-xs hover:bg-slate-300 hover:text-slate-900'
              >
                1
              </a>
              <a
                href='#item2'
                className='btn btn-xs hover:bg-slate-300 hover:text-slate-900'
              >
                2
              </a>
              <a
                href='#item3'
                className='btn btn-xs hover:bg-slate-300 hover:text-slate-900'
              >
                3
              </a>
              <a
                href='#item4'
                className='btn btn-xs hover:bg-slate-300 hover:text-slate-900'
              >
                4
              </a>
            </div>
            <p>
              To establish a structured and efficient workflow, I built out a
              dedicated Notion template tailored to our open-source product
              development needs. Notion&apos;s versatile and customizable
              features allowed me to design a template that catered to our Scrum
              environment as well as gave me the option to adapt to the needs of
              the development team. This template served as a foundation for
              managing tasks, documentation, resources, and meetings.
            </p>
            <h3>Kanban Boards for Development Tickets</h3>
            <p>
              To enhance collaboration and organization among our developers, I
              leveraged Notion&apos;s Kanban board feature within the template.
              This visual board facilitated the management of development
              tickets, enabling the team to track the progress of each task from
              start to completion. The Kanban board acted as a central hub,
              providing real-time visibility into ongoing development efforts
              and fostering effective communication among team members.
            </p>
            <h3>Documenting Work Progress and Resources</h3>
            <p>
              One of the key benefits of using Notion for our Scrum environment
              was the ability to document and share valuable information. Within
              the template, I created sections to log and share our work
              progress, including status updates, completed tasks, and any
              challenges encountered. Additionally, we utilized the template to
              store and post resources that aided the development process. This
              documentation aspect ensured that knowledge was accessible to the
              entire team, promoting transparency and collaboration.
            </p>
            <h3>Scheduling Meetings and Keeping Meeting Notes</h3>
            <p>
              Notion proved to be an invaluable tool for scheduling meetings and
              keeping track of meeting notes. We utilized the template to
              schedule regular Scrum meetings and recorded detailed meeting
              notes directly within Notion. This centralized approach allowed us
              to maintain a comprehensive record of discussions, decisions, and
              action items, ensuring that everyone was aligned and accountable.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProjectTwoBlog;
