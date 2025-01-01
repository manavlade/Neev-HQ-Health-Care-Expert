import { AnimatedBeamMultipleOutputDemo } from "./Animations/AnimatedBeam";

const Home = () => {
    return (
        <>
            <div className=" " >
                <div className="m-10 p-6 ">
                    <div className="text-center">
                        <p className="font-semibold text-5xl lg:text-5xl text-gray-800 leading-tight">
                            Connecting Patients and <br />
                            Providers Through
                            <span className="pl-2 gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                                Precision
                            </span>
                        </p>
                    </div>
                    <div className="flex items-center justify-center ">
                        <div className="text-center mt-5  lg:w-1/2">
                            <p className="text-sm lg:text-3xl text-gray-600">
                                Making healthcare simple, smart, and more human-centric by reducing admin work, saving time, 
                                and enabling doctors to focus on what truly matters
                                <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text" >
                                    - Patients.
                                </span>
                            </p>
                        </div>
                    </div>

                </div>
                <AnimatedBeamMultipleOutputDemo />

            </div>
        </>
    )
}

export default Home;