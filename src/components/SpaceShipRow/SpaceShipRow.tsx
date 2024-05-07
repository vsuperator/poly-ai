import React from "react";
import { Spaceship } from "../types";

interface SpaceshipInfoProps {
  spaceship: Spaceship;
}

export const SpaceshipInfo: React.FC<SpaceshipInfoProps> = ({ spaceship }) => {
  const { name, colors, max_speed, pulse_laser } = spaceship;

  return (
    <li className="border border-gray-200 rounded p-4 shadow-md flex flex-wrap mb-4 dark:bg-slate-800">
      <h2 className="w-full text-lg font-semibold dark:text-white">{name}</h2>
      <p className="w-full text-gray-600 dark:text-slate-400">
        Colors: {colors.join(", ")}
      </p>
      <p className="w-full text-gray-600 dark:text-slate-400">
        Max Speed: {max_speed} km/h
      </p>
      <p className="w-full text-gray-600 dark:text-slate-400">
        Pulse Laser: {pulse_laser ? "Yes" : "No"}
      </p>
    </li>
  );
};
