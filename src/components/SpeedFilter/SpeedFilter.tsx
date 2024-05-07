import React, { useState } from "react";
import { Input } from "../";

interface SpeedFilterProps {
  min: number;
  max: number;
  minVal: number;
  maxVal: number;
  onMinChange: (val: number) => void;
  onMaxChange: (val: number) => void;
}

export const SpeedFilter: React.FC<SpeedFilterProps> = ({
  min,
  max,
  minVal,
  maxVal,
  onMinChange,
  onMaxChange,
}) => {
  const [minSpeed, setMinSpeed] = useState<string>(min.toString());
  const [maxSpeed, setMaxSpeed] = useState<string>(max.toString());

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMinSpeed(value.replace(/[^\d]/, ""));
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMaxSpeed(value.replace(/[^\d]/, ""));
  };

  const handleMinBlur = () => {
    const newMin = Math.min(Number(maxSpeed), Math.max(min, Number(minSpeed)));
    setMinSpeed(newMin.toString());
    onMinChange(newMin);
  };

  const handleMaxBlur = () => {
    const newMax = Math.max(Number(minSpeed), Math.min(max, Number(maxSpeed)));
    setMaxSpeed(newMax.toString());
    onMaxChange(newMax);
  };

  return (
    <div>
      <h5 className="text-xl font-medium text-gray-900 mb-4 dark:text-white">
        Please select min/max speed
      </h5>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <Input
          id="min_speed"
          label="Min speed:"
          placeholder={`Min: ${min}`}
          value={minSpeed}
          onChange={handleMinChange}
          onBlur={handleMinBlur}
        />
        <Input
          id="max_speed"
          label="Max speed:"
          placeholder={`Max: ${max}`}
          value={maxSpeed}
          onChange={handleMaxChange}
          onBlur={handleMaxBlur}
        />
      </div>
    </div>
  );
};
