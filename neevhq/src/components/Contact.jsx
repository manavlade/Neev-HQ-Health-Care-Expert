"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Contacts() {
    return (
        <div className="relative flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-300">
            <motion.div
                className="text-center lg:mt-10 lg:mb-10 max-w-2xl mx-auto space-y-6 p-6 "
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
            >
                <h1 className="text-4xl font-extrabold text-gray-900">
                    Join the Future of Healthcare
                </h1>
                <p className="text-lg text-gray-600">
                    Be among the first to experience the next generation of healthcare
                    technology.
                </p>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex items-center justify-center gap-4"
                >
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full max-w-sm px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                    />
                    <Button
                        type="submit"
                        className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
                    >
                        Join Waitlist
                    </Button>
                </form>
            </motion.div>
        </div>
    );
}
