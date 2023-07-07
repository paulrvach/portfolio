import React from 'react';
import { Lato } from 'next/font/google';

const lato = Lato({ subsets: ['latin'], weight: '700' });

type Props = {};

const page = (props: Props) => {
  return (
    <div className='w-screen h-screen '>
      <div className='mx-6 my-2 p-4  '>
        <article className='page sans'>
          <header>
            <h1 className='text-4xl mb-8'>Kafka Nimbus</h1>
            <p className='page-description'></p>
            <video
              width='100%'
              height='100%'
              autoPlay
              playsInline
              loop
              className='shadow-2xl hover:shadow-2xl red mb-6'
            >
              <source src='https://res.cloudinary.com/dpqdqryvo/video/upload/v1685814776/test-demo-kafka_szbixp.mov' />
            </video>
          </header>
          <div className='page-body'>
            <h2 className='text-xl font-bold mb-4'>What it does</h2>
            <p className='mb-4'>
              Operating Kafka involves more than just infrastructure costs. It
              also requires skilled engineers to handle cluster configuration,
              management, and scaling. Furthermore, the development of custom
              software is essential to enable end-to-end data streaming
              capabilities as Kafka usage scales and becomes critical to
              business operations. Kafka Nimbus is an open source project that
              aimed to streamline the process of deploying, monitoring, and
              scaling Kafka Clusters to the cloud by simplifying each step into
              an easy and intuitive graphical interface.
            </p>
            <p className='mb-4'>
              We currently support deployments to AWS and are working on adding
              support for Digital Ocean and Google Cloud.
            </p>
            <h2 className='text-xl font-bold mb-4'>My Contributions</h2>
            <p className='mb-4'>
              Working as a full-stack engineer, my contributions ranged from
              orchestrating the user flow and data visualization in React and
              the Next.js App Router framework to containerizing and deploying
              our application alongside our data visualization package.
            </p>
            <p className='mb-4'></p>
            <h3 className='text-lg font-bold mb-2'>
              Building the user flow in Figma
            </h3>
            <figure className='mb-4'>
              <a href='Kafka%20Nimbus%20a3217963fa684e35bb02ecedd4aa18dc/Cluster_Monitoring.png'>
                <img
                  className='w-full'
                  src='Kafka%20Nimbus%20a3217963fa684e35bb02ecedd4aa18dc/Cluster_Monitoring.png'
                  alt='Cluster Monitoring'
                />
              </a>
            </figure>
            <p className='mb-4'>
              For the project Kafka Nimbus, I utilized Figma to build out the
              user flow, ensuring a streamlined and intuitive graphical
              interface for deploying, monitoring, and scaling Kafka Clusters to
              the cloud. I began by creating wireframes and mockups to visualize
              the various screens and interactions within the application.
              Mapping out the user flow in Figma allowed me and the team to
              visually connect each step, from the initial deployment process to
              the ongoing monitoring and scaling functionalities. I collaborated
              with the team of developers, leveraging Figma's collaborative
              features to gather feedback and iterate on the design. This
              iterative process ensured that the user flow met the project's
              objectives of simplicity and intuitiveness. Additionally, I added
              annotations, comments, and documentation directly within Figma to
              enhance collaboration and serve as a centralized hub for design
              discussions. Ultimately, the user flow in Figma facilitated
              effective communication, optimized the user experience, and
              provided clear specifications for the development team, resulting
              in a successful deployment of Kafka Nimbus.
            </p>
            <p className='mb-4'></p>
            <h3 className='text-lg font-bold mb-2'>
              Developing in the Next.js App Router Framework
            </h3>
            <p className='mb-4'></p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default page;
