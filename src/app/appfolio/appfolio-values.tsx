import Link from "next/link";
import { ArrowRightIcon, NotionLogoIcon } from "@radix-ui/react-icons";

type Values = {
  value: string;
  experiences: string | JSX.Element;
  quote?: string;
  links?: JSX.Element[];
};

export const values: Values[] = [
  {
    value: "Simpler is better",
    experiences: (
      <div>
        <b>
          {
            "In my experience delievering investment analysis to investors I've internalized this value."
          }
        </b>
        <p>
          Building investment analysis tools taught me a valuable lesson about
          <b>
            {" "}
            prioritizing User Experience (UX) over Employee Experience (EX).
          </b>{" "}
          In my previous role I was responsible for creating automation scripts
          to simplify investment analysis for clients. Initially, I believed
          that providing extensive data in a comprehensive Excel sheet would
          empower clients with abundant information for informed decisions.
        </p>
        <p>
          However, I soon realized that{" "}
          <b>investors preferred simplicity and relevance.</b> They wanted
          essential metrics like estimated monthly rent, rehab costs, and
          monthly cash flow. This realization prompted me to rethink my
          approach. I invested more effort in curating key data tailored to each
          {"client's"} needs.
        </p>

        <p>
          <b>
            Shifting focus to delivering customized products proved pivotal in
            maintaining client interest
          </b>{" "}
          in the investment analysis products I created. Despite the initial
          increase in labor cost, it empowered clients to make confident
          residential property purchases. This experience reinforced my belief
          that prioritizing UX over EX leads to happier clients and a more
          fulfilling work environment.
        </p>
      </div>
    ),
  },
  {
    value: "Innovative products are the key to success",
    experiences: (
      <div>
        <b>The Imperative of Innovation in Real Estate Investment</b>
        <p>
          In the real estate investment industry, technological progress has
          been stagnant, with little change since the advent of Excel. The
          prevalent use of spreadsheets for critical investment decisions is a
          testament to the {"industry's"} resistance to change.
        </p>
        <p>
          However, there is a pressing need to find better ways of doing things.
          As someone who values innovation, I recognize its vital role in a
          world marked by intense competition. Embracing innovation is the key
          to breaking away from the conventional norms and achieving success in
          this highly competitive sector.
        </p>
      </div>
    ),
    quote:
      "Value Innovation is the simultaneous pursuit of differentiation and low cost, creating a leap in value for both buyers and the company.",
  },
  {
    value: "Great people make a great company",
    experiences: (
      <div>
        <p>
          Personally, I hold a firm belief that exceptional individuals are the
          core of any outstanding company. My values are deeply rooted in the
          principles of giving and being a team player.
        </p>
        <p>
          I bly adhere to the notion that a {"company's"} top priorities revolve
          around <b>People, Process, and Product</b>.
        </p>
        <p>
          {"It's"} the synergy of <b>great people</b> driving{" "}
          <b>effective processes</b> that results in the creation of{" "}
          <b>exceptional products</b>.
        </p>
      </div>
    ),
  },
  {
    value: "Listening to customers is in our DNA",
    experiences: (
      <div>
        <p>
          Listening to our customers is deeply embedded in my professional DNA.
          I wholeheartedly embrace the principles of {'"customer development"'}{" "}
          and
          {'"market validation"'} as my guiding stars in shaping our product and
          business strategy. {"I've"} witnessed firsthand that customer-centric
          decisions {"don't"} just cultivate loyalty and growth; {"they're"} the
          bedrock of long-term profitability. Continually seeking and acting on
          your feedback is my compass, ensuring our offerings not only meet but
          exceed your expectations, and {"that's"} a commitment {"I'm"} proud to
          stand by.
        </p>
      </div>
    ),
  },
  {
    value: "Small, focused teams keep us agile",
    experiences: (
      <div>
        <p>
          Working with a small, productive team of software engineers emphasizes{" "}
          <b>
            personal responsibility, fosters meaningful connections, and
            promotes agility.
          </b>{" "}
          My experience with a team of 5 developers building Kafka Nimbus
          highlighted these benefits, enhancing productivity and adaptability
          when priorites quickly change.
          {"It's"} a dynamic environment where each team {"member's"}{" "}
          contribution is critical to success.
        </p>
      </div>
    ),
  },
  {
    value: "We do the right thing; it's good for business",
    experiences: (
      <div>
        <p>
          A framework I often use to guide my ethical decisions is the
          tried-and-true <i>{'"Principles of Ethical Conduct."'}</i> This
          established framework encompasses core values like{" "}
          <b>honesty, integrity, accountability, and respect for others</b>.{" "}
        </p>
        <p>
          When I encounter ethical dilemmas, it offers me a structured approach
          to evaluate and select the most morally sound course of action,
          ensuring that my decisions align with these fundamental principles.
          This not only helps me make ethically responsible choices but also
          <i>
            promotes trust and accountability in all of my decision-making
            processes.
          </i>
        </p>
      </div>
    ),
  },
];
