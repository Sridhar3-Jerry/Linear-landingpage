import { FaGreaterThan } from "react-icons/fa6";
import Card from "./card";

function Cards(){
    return (
    <div className="flex flex-col bg-black justify-center items-center ">
        <div className="flex pl-16">
            <div className="bg-black w-1/2 text-white flex p-10 justify-center">
                <div className="pl-18">
                    <h1 className="text-6xl">Made for modern</h1>
                    <h1 className="text-6xl">product teams.</h1>
                </div>
            </div>
            <div className="flex w-1/2 items-center pr-58 pl-12">
                    <p className="text-gray-400 ">
                    Linear is shaped by the practices and principles that distinguish world-class product teams from the rest: relentless focus, fast execution, and a commitment to the quality of craft.
                    <span className="text-white font-semibold ml-2 inline-flex items-center hover:underline cursor-pointer">
                        Make the switch <FaGreaterThan className="ml-1 text-xs" />
                    </span>
                    </p>
            </div>
        </div>
        
        <div className="flex justify-center pt-8">
            <Card></Card>
        </div>
      </div>
      
    );
  }

  export default Cards