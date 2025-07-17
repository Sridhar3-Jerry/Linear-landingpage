import { SiLinear } from "react-icons/si";

function Header(){
    const menus=[
        {id:1,title:"Product"},
        {id:2,title:"Resources"},
        {id:3,title:"Pricing"},
        {id:4,title:"Customers"},
        {id:5,title:"Blog"},
        {id:6,title:"Contact"}
                
    ]
    return(
        <nav className="bg-black border-b border-gray-800 h-16 flex justify-center fixed w-full z-100">
            <div className="flex w-2/3 justify-between ">
                <div className="flex h-full  gap-2 items-center cursor-pointer">
                    <SiLinear className="text-white text-xl"/>
                    <h2 className="text-white text-xl font-small">Linear</h2>
                </div>
                <div className="flex gap-2.5 text-gray-500 font-small text-sm items-center ">
                    {menus.map((menu)=>{
                        return(<button key={menu.id} className="cursor-pointer hover:bg-[#212222] hover:rounded-md p-2 hover:text-[#f4f5f5]">{menu.title}</button>)
                        
                    })}
                </div>
                <div className="flex gap-2 text-[#8a8f98] font-medium text-sm items-center">
                    <button className="cursor-pointer hover:bg-[#212222] hover:rounded-md p-2  hover:text-[#f4f5f5]">Log in</button>
                    <button className="bg-white rounded-lg text-black px-3 py-1.5 cursor-pointer">Sign up</button>
                </div>
            </div>
        </nav>
    )
}
export default Header