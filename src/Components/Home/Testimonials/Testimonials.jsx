import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Emily from "@/assets/emily.jpg";
import Alex from "@/assets/alex.jpeg";
import David from "@/assets/David.jpeg";
import Sophia from "@/assets/sofie.jpeg";
import sarah from "@/assets/sarah.jpeg";
import michael from "@/assets/mike.jpeg";


const reviews = [
        {
          name: "Sarah",
          username: "@sarah_bride",
          body: "The buffet was amazing! Our wedding guests couldn't stop talking about the food.",
          img: sarah,
        },
        {
          name: "Michael",
          username: "@mike_corp",
          body: "Perfect cocktail menu for our corporate event. Professional service and delicious bites! Will definitely use Engocha again.",
          img: michael,
        },
        {
          name: "Emily",
          username: "@em_family",
          body: "The to-go packages were a lifesaver for our family gathering.",
          img: Emily,
        },
        {
          name: "David",
          username: "@dave_techconf",
          body: "Refreshments for our tech conference were top-notch. ",
          img: David,
        },
        {
          name: "Sophia",
          username: "@sophia_foodie",
          body: "I'm blown away by the authentic flavors! The mix of Ethiopian and European cuisine was a delightful surprise.",
          img: Sophia,
        },
        {
          name: "Alex",
          username: "@alex_eventplanner",
          body: "As an event planner, I've worked with many caterers. My go-to for any event now!",
          img: Alex,
        },
      ];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

import PropTypes from 'prop-types';
const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

ReviewCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

