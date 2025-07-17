import { useState, useEffect } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

function Card({ image, heading, content }) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (expanded) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [expanded]);

  return (
    <>
      {expanded && (
        <div className="fixed inset-0 bg-black backdrop-blur-sm z-10 card-overlay"></div>
      )}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        className={
          expanded
            ? "fixed inset-0 flex items-center justify-center z-20"
            : "flex items-center rounded-xl "
        }
      >
        <div
          className={
            expanded
              ? "flex flex-col items-center rounded-2xl p-5 bg-expandCard transition-all duration-500 ease-in-out w-2/3 h-screen mt-20 relative"
              : "flex flex-col items-center rounded-2xl p-5 bg-expandCard transition-all duration-500 ease-in-out  relative"
          }
        >
          {expanded && (
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl z-10 cursor-pointer border bg-black border-buttonHover hover:bg-buttonHover rounded-full p-1"
              onClick={() => setExpanded(false)}
              aria-label="Close"
            >
              <AiOutlineClose className="text-buttonHover hover:text-white" />
            </button>
          )}
          {!expanded && (
            <img
              alt=""
              data-nosnippet="true"
              data-loaded="true"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              className="Image_root__UkRqc "
              src={image}
            />
          )}
          <div className="flex justify-center items-center gap-5">
            {!expanded && (
              <>
                <h2 className="text-white text-xl  font-medium">{heading}</h2>
                <button
                  className="cursor-pointer"
                  onClick={() => setExpanded((prev) => !prev)}
                >
                  <CiCirclePlus className="bg-expandCard text-white/50 text-5xl" />
                </button>
              </>
            )}
          </div>
          {expanded && (
            <div className="mt-8 text-white text-start px-4 overflow-y-auto h-screen rounded-2xl flex flex-col items-center scrollbar scrollbar-thumb-[rgb(51,51,56)] scrollbar-track-[rgb(51,51,56)]">
              <img
                alt=""
                data-nosnippet="true"
                data-loaded="true"
                loading="lazy"
                decoding="async"
                data-nimg="1"
                className=" w-3/4 h-full "
                src={image}
              />
              <div className="w-2/3">
                <h1 className="text-6xl font-bold mb-8">{heading}</h1>
              </div>

              {content.map((paragraph, idx) => (
                <div className="w-2/3">
                    <div className="">
                      <p key={idx} className="mb-6 text-md text-white/80">
                        {paragraph}
                      </p>
                  </div>
                  
                </div>
              ))}
              <div className="text-white text-2xl pb-20">
                
              </div>
            </div>
            
          )}
          
        </div>
       
      </motion.div>
    </>
  );
}

const cardsData = [
  {
    image:
      "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/93514696-592a-4764-aa98-b6101349a100/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
    heading: "Purpose built for product development",
    content: [
      "We believe that there is a lost art of building software. A craftsmanship that yields products of an exceptional, almost magical, quality.",
      "It's difficult to describe this quality with words and impossible to measure it in numbers, but you can feel it when it's there. You know it when you experience it.",
      "Achieving this product quality is a function of both the talent of its creators and the tools at their disposal. Linear was built in pursuit of giving the best product teams a tool that matches their skill and ambition.",
      "A tool with unparalleled speed, precision-engineered robustness, and pixel-perfect UI. A tool that abstracts away any impurity that stands in the way between the creator and their craft. A tool that finally lets product teams focus on what matters most:",
      "Bringing back product experiences of the highest level of quality.",
    ],
  },
  {
    image:
      "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/5a4ff140-41a2-42dd-0723-e14cccc3e300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
    heading: "Designed to move fast",
    content: [
      "We believe that there is a lost art of building software. A craftsmanship that yields products of an exceptional, almost magical, quality.",
      "It's difficult to describe this quality with words and impossible to measure it in numbers, but you can feel it when it's there. You know it when you experience it.",
      "Achieving this product quality is a function of both the talent of its creators and the tools at their disposal. Linear was built in pursuit of giving the best product teams a tool that matches their skill and ambition.",
      "A tool with unparalleled speed, precision-engineered robustness, and pixel-perfect UI. A tool that abstracts away any impurity that stands in the way between the creator and their craft. A tool that finally lets product teams focus on what matters most:",
      "Bringing back product experiences of the highest level of quality.",
    ],
  },
  {
    image:
      "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/0068f657-fe3f-47e9-6819-0ba9e6533900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none",
    heading: "Crafted to perfection",
    content: [
      "We believe that there is a lost art of building software. A craftsmanship that yields products of an exceptional, almost magical, quality.",
      "It's difficult to describe this quality with words and impossible to measure it in numbers, but you can feel it when it's there. You know it when you experience it.",
      "Achieving this product quality is a function of both the talent of its creators and the tools at their disposal. Linear was built in pursuit of giving the best product teams a tool that matches their skill and ambition.",
      "A tool with unparalleled speed, precision-engineered robustness, and pixel-perfect UI. A tool that abstracts away any impurity that stands in the way between the creator and their craft. A tool that finally lets product teams focus on what matters most:",
      "Bringing back product experiences of the highest level of quality.",
    ],
  },
];

function Cards() {
  return (
    <div className="flex w-3/4 justify-center gap-2 ">
      {cardsData.map((card, idx) => (
        <Card
          key={idx}
          image={card.image}
          heading={card.heading}
          content={card.content}
        />
      ))}
    </div>
  );
}

export { Card };
export default Cards;
