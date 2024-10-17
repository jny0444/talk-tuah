"use client";

import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

interface CardProps {
  image: string;
  title: string;
}

export function Card({ image, title }: CardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-200 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] max-w-72 max-h-80 md:max-w-96 rounded-xl p-6 border lg:max-w-72 min-[1160px]:max-w-80 min-[1240px]:max-w-[22rem] xl:max-w-96 xl:max-h-96">
        <CardItem
          translateZ="30"
          src={image}
          rotateZ={0}
          className="w-full mt-3"
        >
          <img
            src={image}
            className="h-48 xl:h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-6 cursor-pointer">
          <CardItem
            translateX={-10}
            as="button"
            className="px-4 py-2 rounded-xl text-2xl font-lexend dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem
            translateZ={10}
            translateX={10}
            rotateZ={45}
            as="button"
            className="px-4 py-2 rounded-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 19" className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-gray-700 p-2 rotate-45">
              <path className="fill-black group-hover:fill-white" d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"></path>
            </svg>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}