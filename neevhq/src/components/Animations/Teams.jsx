import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

const reviews = [
    {
        name: "Abhinav Singh",
        username: "AI/ML Engineer, IIT Madras Alumnus",
        img: "https://avatar.vercel.sh/jack",
        link: "https://x.com/cybcob?mx=2"
    },
    {
        name: "Dr. Saurabh Bajpai",
        username: "Doctor, Leading Researcher",
        img: "https://avatar.vercel.sh/jill",
        link: "https://x.com/cybcob?mx=2"
    },
    {
        name: "Mayank Aggarval",
        username: "CA SSRC Alumnus",
        img: "https://avatar.vercel.sh/john",
        link: "https://x.com/cybcob?mx=2",

    },
    {
        name: "Prabesh Goyal",
        username: "Data Engineer",
        img: "https://avatar.vercel.sh/jane",
        link: "https://x.com/cybcob?mx=2",
    },
    {
        name: "Ricky Bahrey",
        username: "Product Designer",
        img: "https://avatar.vercel.sh/jenny",
        link: "https://x.com/cybcob?mx=2",
    },

];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body, }) => {
    return (
        <figure
            className={cn(
                "relative cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-2xl font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xl font-medium dark:text-white/40">{username}</p>
                   
                </div>
            </div>
        </figure>
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden ">
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
