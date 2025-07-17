import { SiLinear } from "react-icons/si";

function Footer(){
    const details = [
        {
          title: "Features",
          links: [
            "Plan",
            "Build",
            "Insights",
            "Customer Requests",
            "Linear Asks",
            "Security",
            "Mobile"
          ]
        },
        {
          title: "Product",
          links: [
            "Pricing",
            "Method",
            "Integrations",
            "Changelog",
            "Documentation",
            "Download",
            "Switch"
          ]
        },
        {
          title: "Company",
          links: [
            "About",
            "Customers",
            "Careers",
            "Blog",
            "README",
            "Quality",
            "Brand"
          ]
        },
        {
          title: "Resources",
          links: [
            "Developers",
            "Status",
            "Startups",
            "Report vulnerability",
            "DPA",
            "Privacy",
            "Terms"
          ]
        },
        {
          title: "Connect",
          links: [
            "Contact us",
            "Community",
            "X (Twitter)",
            "GitHub",
            "YouTube"
          ]
        }
      ];
    return(
        <div className="flex bg-black justify-center border-t border-gray-800 w-full">
            <div className="bg-black flex justify-around w-5/6 py-20 px-16">
                <div>
                <SiLinear className="text-white text-xl" />
                </div>
                {details.map((detail,index)=>{
                    return(
                        <div key={index} className="">
                            <h4 className="text-white text-sm">{detail.title}</h4>
                            <div className="mt-6 flex flex-col gap-2">
                            {detail.links.map((link)=>{
                                return(
                                    
                                        <p className=" text-sm text-gray-500 font-light cursor-pointer hover:text-white">{link}</p> 
                                )
                            })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Footer;