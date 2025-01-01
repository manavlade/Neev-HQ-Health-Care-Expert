import { XIcon } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-between items-center px-6 py-4 shadow-lg bg-white "
        >
            {/* Logo Section */}
            <div className="flex items-center gap-3">
                {/* <motion.img
                    src="logo.png"
                    alt="Logo"
                    className="w-10 h-10"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                /> */}
                <motion.p
                    className="text-xl font-bold text-gray-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Neev
                </motion.p>
            </div>

            {/* Navigation Links */}
            <motion.div
                className="flex items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="cursor-pointer"
                >
                    <XIcon className="text-gray-700 w-10 h-10" />
                </motion.div>
                <motion.a
                    href="https://wellfound.com/company/neevhq"
                    className="text-gray-700 text-xl font-medium hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                >
                    Careers
                </motion.a>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
