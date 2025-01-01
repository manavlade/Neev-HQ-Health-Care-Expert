import { MarqueeDemo } from "./Animations/Teams";
import Contacts from "./Contact";

const Team = () => {
    return (
        <>
            <div>
                <div className=" justify-center text-center mt-2 lg:mt-5 font-semibold text-5xl" >
                    <p>Meet Our 
                        <span className=" lg:pl-2 pl-1 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text" >
                            Team
                        </span>
                    </p>
                </div>
                
                <MarqueeDemo />
                <Contacts/>
            </div>
        </>
    )
}

export default Team;