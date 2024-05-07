import React from "react";
import { DropDown } from "../";

interface Props {
  value: string;
  onChange: (id: string) => void;
}

const options = [
  { value: "NEUTRAL", label: "Neutral" },
  { value: "REQUIRED", label: "Must have pulse laser" },
  { value: "NOT_REQUIRED", label: "I don't need it" },
];

export const SpaceShipOptions: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div>
      <h5 className="text-xl font-medium text-gray-900 mb-4 dark:text-white">
        Please select options:
      </h5>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <DropDown options={options} value={value} onChange={onChange} />
      </div>
    </div>
  );
};
