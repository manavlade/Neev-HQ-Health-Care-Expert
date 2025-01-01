
import precision from "../assets/ai2.webp"
import { PrecisionDemo } from "./Animations/AnimatedListDemoPrecision";
import WordRotate from "./ui/word-rotate";

const Precesion = () => {
    return (
        <>
            <div className=" flex text-center justify-center" >
                <p className=" flex font-semibold lg:text-5xl text-center" >
                    Precision AI for 
                    <span className="pl-2 gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                        Modern Healthcare
                    </span>
                </p>
            </div>
            <div className=" flex text-center justify-center" >
                <p className=" text-gray-500 text-3xl p-10" >
                    Custom-built intelligence to 
                    <WordRotate
                        className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text dark:text-white"
                        words={["Simplify", "Secure", "And", "Redefine Patient Care."]}
                    />
                </p>

            </div>
            <div className="flex justify-between items-center lg:ml-16 lg:mr-16">
                <div className=" items-center justify-center pr-4"> {/* Adjust width as needed */}
                    <PrecisionDemo/>
                </div>
                <div className=" w-1/2 flex justify-center"> {/* Center the image within its container */}
                    <img
                        className="w-full h-auto rounded-lg" // Use full width and auto height for responsiveness
                        src={precision}
                        alt="Effortless"
                    />
                </div>
            </div>
        </>
    )
}

export default Precesion;