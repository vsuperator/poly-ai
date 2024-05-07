import React from "react";
import { SpaceshipInfo } from "../";
import { Spaceship } from "../types";

interface SpaceShipsListProps {
  spaceships: Spaceship[];
}

export const SpaceShipsList: React.FC<SpaceShipsListProps> = ({
  spaceships,
}) => {
  return (
    <ul className="max-h-[calc(100vh-4rem)]">
      {spaceships.map((spaceship, idx) => (
        <SpaceshipInfo key={idx} spaceship={spaceship} />
      ))}
      {spaceships.length === 0 && (
        <li className="border border-gray-200 rounded p-4 shadow-md flex flex-wrap mb-4 dark:bg-slate-800 dark:text-white flex-1">
          There are no spaceships for such search criteria
        </li>
      )}
    </ul>
  );
};
