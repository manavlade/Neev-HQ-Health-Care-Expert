"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "../ui/animated-list";

let notifications = [
    {
        name: "Transcribe Conversations",
        description: "Record and summarise doctor-patient interactions with speaker diarisation.",
        icon: "💸",
        color: "#00C9A7",
    },
    {
        name: "Empower Patients",
        description: "Share Patient Visit Summaries (PVS) for continuity in care.",
        icon: "👤",
        color: "#FFB800",
    },
    {
        name: "Integrate Seamlessly",
        description: "Send summaries directly to EMR (Electronic Medical Record).",
        icon: "💬",
        color: "#FF3D71",
    },
];

// Duplicate notifications to create a longer list
notifications = Array.from({ length: 1 }, () => notifications).flat();

const Notification = ({ name, description, icon, color }) => {
    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full max-w-[600px] cursor-pointer overflow-hidden rounded-2xl p-6", // Updated width
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            )}
        >
            <div className="flex flex-row items-center gap-4"> {/* Increased gap */}
                <div
                    className="flex size-10 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <span className="text-2xl">{icon}</span> {/* Increased icon size */}
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-xl font-medium dark:text-white"> {/* Increased text size */}
                        <span className="text-lg sm:text-xl">{name}</span> {/* Increased name text size */}
                        <span className="mx-1">·</span>
                    </figcaption>
                    <p className="text-md font-normal dark:text-white/60"> {/* Increased description text size */}
                        {description}
                    </p>
                </div>
            </div>
        </figure>
    );
};

export function AnimatedListDemo({ className }) {
    return (
        <div
            className={cn(
                "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg", // Increased height
                className
            )}
        >
            <AnimatedList>
                {notifications.map((item, idx) => (
                    <Notification {...item} key={idx} />
                ))}
            </AnimatedList>
        </div>
    );
}
