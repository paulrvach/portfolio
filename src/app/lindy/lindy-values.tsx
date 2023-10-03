import Link from "next/link";
import { ArrowRightIcon, NotionLogoIcon } from "@radix-ui/react-icons";

type Values = {
  value: string;
  experiences: string;
  quote?: string;
  links?: JSX.Element[];
};

export const values: Values[] = [
  {
    value: "An elite institution",
    experiences:
      "I am committed to pursuing excellence in all my endeavors. I am drawn to environments that uphold the highest standards and values, as I believe in setting and achieving ambitious goals. I seek to join a team that not only demands excellence but also collaborates to accomplish meaningful and impactful work.",
  },
  {
    value: "We care about each other",
    quote:
      '"What creates and sustains truly great relationships is the unwaivering belief that nothing is more important than the relationship." - Ray Dalio',
    experiences:
      "I firmly believe in the wisdom expressed by Ray Dalio in his quote. This belief shapes my priorities, which center around both meaningful work and fostering deep and meaningful relationships. I value environments where care, respect, and mutual support are fundamental to the success of the team, as these principles are the foundation for building lasting and productive connections with others.",
  },
  {
    value: "Candor with care",
    experiences:
      "I deeply value candor with care, especially in the context of giving and receiving feedback. Creating a safe and open space for feedback is vital for fostering both personal and professional growth, whether it's in the realm of engineering or interpersonal skills. When receiving feedback, I actively encourage it by consistently ending conversations with, 'Is there anything else you'd like to tell me?' This approach signals my openness to input and underscores its importance in our interactions.\nWhen it comes to giving feedback, I've learned that clarity is an essential aspect of kindness. I believe that positive feedback should be as specific as possible to eliminate any potential for miscommunication or misunderstanding. By combining candid communication with empathy and precision, I aim to build strong, mutually beneficial relationships and support the growth of those around me.",
  },
  {
    value: "Doing the best work of our lives",
    experiences:
      "I hold the belief that how you approach one task is a reflection of how you tackle everything else. As a software engineer, I recognize the immense privilege of being in a position to create technology that can have a profound impact. This perspective fuels my drive to consistently strive for excellence and produce work that is not just good, but exceptional and meaningful. I am committed to the idea of doing the best work of our lives, leveraging the opportunities in front of me to make a positive difference through technology. ",
  },
  {
    value: "Thinking on paper",
    experiences:
      "My father, a seasoned chef, has meticulously preserved every recipe he's ever created. This lifelong commitment to cataloging his culinary knowledge has not only enriched his own expertise but also serves as a valuable resource for his students. Witnessing the impact of this behavior firsthand, I've adopted a firm belief in the importance of documenting my own experiences and insights. To streamline this process and make information more accessible to others, I utilize AI tools, particularly within the Notion platform, to help format and present my thoughts in a clear and digestible manner. This approach not only enhances communication but also ensures that valuable insights and ideas are readily available for sharing and collaboration.",
    links: [
      <Link
        href="https://www.notion.so/paulrvach/paperplane-ui-fa6f25e3a4914b209bb551901068386e?pvs=4"
        key="example-notes"
        className="hover:text-blue-500"
      >
        <NotionLogoIcon className="w-5 h-5 inline leading-none" /> Example of
        Notes <ArrowRightIcon className="w-5 h-5 inline" />
      </Link>,
      <Link
        href="https://paperplane-ui.vercel.app/Components/page-transitions"
        key="documentation-notes"
        className="hover:text-blue-500"
      >
        <NotionLogoIcon className="w-5 h-5 inline leading-none" /> Example of
        Documentation <ArrowRightIcon className="w-5 h-5 inline" />
      </Link>,
    ],
  },
  {
    value:
      "UX > EX — User Experience is more important than Employee Experience",
    experiences:
      "My real estate sales experience provided a profound lesson in the prioritization of User Experience (UX) over Employee Experience (EX).\nDuring my tenure, I was tasked with developing automation scripts to streamline investment analysis for our clients. Initially, I thought that providing clients with extensive data on each investment property in the form of a comprehensive Excel sheet would be the most empowering approach. My intention was to arm them with an abundance of data points to make informed decisions.\nHowever, a pivotal realization dawned upon me as I engaged with investors. They were not interested in drowning in a sea of data. Instead, they sought simplicity and relevance. They wanted key metrics like estimated monthly rent, estimated rehab costs, and estimated monthly cash flow. This revelation led me to reevaluate our approach.\nI decided to invest more effort upfront, meticulously sifting through the metrics generated by the script. My goal was to handpick a selection of properties that truly mattered to each client, providing them with concise, meaningful information tailored to their needs.\nThis shift not only significantly improved the User Experience (UX) for our clients but also enhanced the Employee Experience (EX). By streamlining the data and focusing on delivering value, I made the process more efficient and rewarding for myself and my colleagues. This experience reinforced my belief that, in striving for excellence, User Experience should always take precedence over Employee Experience. It was a tangible example of how aligning with this value can lead to more satisfied clients and a more fulfilling work environment for employees.",
  },
  {
    value: "We care",
    experiences:
      "As reflected in my diverse background and the challenges I've encountered, I've gained invaluable insights into my core motivations. I've come to recognize that my innate inclination leans towards building and creating. I thrive on the prospect of embracing a vision and collaborating with others to transform it into reality.\nThe principle of 'We care' resonates deeply with me, emphasizing the importance of genuine dedication to one's work. I am genuinely excited about the opportunity to join your team and bring my passion, commitment, and drive to the table. Just as I've learned to care deeply about my work through adversity, I am eager to channel that dedication into contributing meaningfully to the success of the organization, in line with the values and ethos it upholds.",
  },
  {
    value: "We leave our politics at the door",
    experiences:
      "It is essential for maintaining a focused and productive work environment, resonating with research in organizational psychology, such as studies on workplace distractions and their negative impact on productivity (e.g., 'The Cost of Interrupted Work: More Speed and Stress' by Gloria Mark). Politics can indeed consume a significant amount of time and emotional energy, often without yielding productive outcomes in a professional setting. Additionally, this principle upholds the values of fairness and inclusivity in a diverse workplace, ensuring that everyone feels respected and included regardless of their political beliefs. By promoting a politics-free zone within the workplace, the company can avoid potential conflicts and distractions, fostering a cohesive, efficient, and harmonious work environment that prioritizes shared objectives and tasks.",
  },
  {
    value: "Moving fast",
    experiences:
      "I am impressed by the company's guiding principles as outlined in the document. In today's fast-paced business environment, speed and agility are paramount. As demonstrated by Frank Lloyd Wright's quote in the document, 'One can use an eraser on the drafting board, or a sledgehammer on the construction site.' This resonates with my belief that while moving quickly is essential, it should never come at the cost of thorough planning and research, a sentiment echoed in 'Peak Performance' by Brad Stulberg and Steve Magness. Furthermore, the emphasis on growth through pushing boundaries aligns with the concept of 'growth at the point of failure,' a perspective discussed in 'The Upside of Stress' by Kelly McGonigal. I wholeheartedly embrace the 'Doers over Don'ters / Owner Mindset' principle, which reminds me of the timeless essay 'A Message to Garcia' by Elbert Hubbard. It underscores the importance of taking initiative, making informed decisions, and owning one's responsibilities. I believe that these principles reflect a culture of efficiency, accountability, and innovation, and I am enthusiastic about contributing to an organization that shares these values.",
  },
  {
    value: "Doers over don'ters / Owner mindset",
    quote:
      "“Extreme ownership. Leaders must own everything in their world. There is no one else to blame.” – Jocko Willink.",
    experiences:
      "I firmly embrace the concept of extreme ownership, inspired by the quote. To me, taking ownership means wholeheartedly accepting the daily responsibilities that accompany addressing challenges and proactively seeking solutions. Whether these challenges involve completing assigned tasks or resolving conflicts, I prioritize action and accountability over inaction. This mindset drives me to be a proactive leader in my space, ensuring that I take responsibility for the outcomes and never shift blame to others.",
  },
];
