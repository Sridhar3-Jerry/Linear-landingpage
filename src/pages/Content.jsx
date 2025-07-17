function Content(){
    return(
        <div className="flex flex-col items-center py-20 bg-black pt-20">
            <div className="flex justify-around w-5/6 px-20 mt-36">
                <div className="flex text-4xl">
                    <h1 className="text-white">Plan the present. Build the future.</h1>
                </div>
                <div className="flex gap-2">
                    <button className="bg-card px-3 rounded-lg cursor-pointer text-white/90 border border-gray-800 hover:bg-buttonHover">Talk to sales</button>
                    <button className="bg-white px-3 rounded-lg cursor-pointer">Get started</button>
                </div>
            </div>
        </div>
    )
}
export default Content