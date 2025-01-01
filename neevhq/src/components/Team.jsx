import { MarqueeDemo } from "./Animations/Teams";
import Contacts from "./Contact";

const Team = () => {
    return (
        <>
            <div>
                <div className=" justify-center text-center mt-2 lg:mt-5 font-semibold text-5xl" >
                    <p>Meet Our Team</p>
                </div>
                
                <MarqueeDemo />
                <Contacts/>
            </div>
        </>
    )
}

export default Team;