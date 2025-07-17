import { FaGreaterThan } from "react-icons/fa6";

function Main(){
    return(
        <div className="bg-black">
            <div className=" flex flex-col items-start pl-60 py-10">
            <div className=" py-10 flex flex-col justify-center gap-2 text-start" >
                <h1 className="text-white text-6xl font-medium">Linear is a purpose-built tool for </h1>
                <h1 className="text-white text-6xl font-medium">planning and building products</h1>
            </div>
            <div className="flex flex-col">
                <h3 className="text-xl text-textColor ">Meet the system for modern software development.</h3>
                <h3 className="text-xl text-textColor">Streamline issues, projects, and product roadmaps.</h3>
                <div className="flex gap-4 py-5">
                    <button className="bg-white/90 text-black px-5 h-10 rounded-xl">Start building</button>
                    <div className="hover:bg-btn flex justify-center items-center gap-1 cursor-pointer p-3 rounded-xl h-10 ">
                        <button className="bg-gradient-to-r from-white via-white/60 to-textColor bg-clip-text text-transparent hover:bg-btn cursor-pointer">Introducing Linear for Agents 
                        </button>
                        <span className="text-white pt-1 "><FaGreaterThan className="h-3"/></span>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}
export default Main;