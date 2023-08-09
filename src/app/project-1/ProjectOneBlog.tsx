import React from 'react';
import Image from 'next/image';
type Props = {};

const ProjectOneBlog = (props: Props) => {
  const paragraph1 =
    'Throughout my tenure on a real estate sales team, I consistently observed how real estate investments had a profound impact on improving individuals financial situations. As part of my role, I conducted thorough analyses of potential investment properties, a process that often consumed 30 to 45 minutes per property. After performing countless analyses, I became motivated to find ways to streamline and automate this process. It was during this quest that I stumbled upon Python and the world of programming. With a long-standing desire to learn programming, this was the perfect opportunity for me to delve into it.';

  const paragraph2 =
    'Through self-teaching, I acquired the fundamentals of scripting and web scraping, enabling me to aggregate real estate data and compare it against clients financials to identify lucrative investment prospects. Automating this analysis not only drastically reduced the time required, but it also empowered me to pinpoint the optimal investment opportunities for our clients. Given the significance of speed in a low interest rate environment, this newfound efficiency was crucial for staying ahead of competitors. Witnessing the tangible value it delivered to our clients and the enthusiastic response it received, I felt inspired to transform it into a web application.';
  return (
    <article className='prose prose-stone lg:prose-xl prose-h3:text-slate-900 prose-h5:text-slate-900 text-slate-500 items-center'>
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

      <section className='flex flex-col gap-4 text-justify'>
        <figure className='carousel w-full h-2/3 rounded-lg my-4'>
          <div id='item1' className='carousel-item w-full h-full'>
            <Image
              height={1080}
              width={1920}
              alt='real-estate-app'
              src='https://res.cloudinary.com/dxmqknhgj/image/upload/v1691548977/Screenshot_2023-07-16_at_4.35.22_PM_zsfhkc.png'
            />
          </div>
          <div id='item2' className='carousel-item w-full'>
            <Image
              height={1080}
              width={1920}
              alt='real-estate-app2'
              src='https://res.cloudinary.com/dxmqknhgj/image/upload/v1691548990/Screenshot_2023-07-17_at_4.34.06_PM_osncyj.png'
            />
          </div>
        </figure>

        <nav className='flex justify-center w-full py-2 gap-2'>
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
        </nav>

        <section>
          <p className=''>{paragraph1}</p>
          <p className=''>{paragraph2}</p>
        </section>

        <aside className='rounded-lg shadow-lg bg-neutral-100 px-4 py-6 border-2 '>
          <h5>What it does</h5>
          <p>
            The application leverages the Google Maps and Places API, as well as
            the Zillow API, to map available properties for sale onto an
            interactive map. Additionally, it calculates the potential cash flow
            based on the down payment and projected rent for each property.
          </p>
        </aside>

        <section>
          <h3>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='#D8315B'
              className='w-6 h-6 inline mr-1'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288'
              />
            </svg>
            Challenges and How I Overcame Them
          </h3>

          <p className=''>
            During the development process, transitioning from a simple script
            to a comprehensive web application, I faced multiple obstacles and
            had to make pivotal decisions. Initially, the script only provided
            cash flow analysis based on the down payment and was exclusive to
            California, due to my access to licensed real estate data. However,
            as the era of low interest rates concluded and clients began
            expressing less enthusiasm for the results, I realized the necessity
            for evolution.
          </p>

          <p className=''>
            To counteract this obstacle, I embarked on in-depth research into
            macro trends in the real estate arena. This investigation
            enlightened me on the importance of accommodating a wider market
            segment. Consequently, I devised a strategy that incorporated
            scraping property descriptions and Zestimates from Zillow.
          </p>

          <p className=''>
            Utilizing web scraping methodologies, I gathered vital property data
            from Zillow, which included core details and Zestimates—a
            Zillow-inferred valuation of a property. This step enabled me to
            broaden the analytic range beyond California, furnishing a more
            holistic and pertinent evaluation of potential real estate ventures.
          </p>

          <p className=''>
            By assimilating data from Zillow into my software, I was in a
            position to present a more encompassing and precise review of
            investment possibilities, appealing to a diverse clientele across
            varied regions. This strategic shift was pivotal in retaining client
            interest and involvement as the market landscape evolved.
          </p>
        </section>
      </section>
    </article>
  );
};

export default ProjectOneBlog;
