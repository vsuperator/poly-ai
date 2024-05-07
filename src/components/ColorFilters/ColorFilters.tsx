import React from "react";
import { ColorName, ColorsRule, ColorsRuleValue, ColorEntry } from "../types";
import { Checkbox, CheckableColor } from "../";

interface ColorFiltersProps {
  colors: ColorEntry[];
  rules: ColorsRuleValue[];
  checkedColors: ColorName[];
  checkedRule: ColorsRule | null;
  onToggleColor: (color: ColorName) => void;
  onRuleSelect: (rule: ColorsRule) => void;
}

export const ColorFilters: React.FC<ColorFiltersProps> = ({
  colors,
  rules,
  checkedRule,
  checkedColors,
  onToggleColor,
  onRuleSelect,
}) => {
  return (
    <div className="mb-6">
      <h5 className="text-xl font-medium text-gray-900 mb-4 dark:text-white">
        Please select one or more colors
      </h5>
      <ul className="grid gap-2 mb-2 md:grid-cols-5">
        {colors.map(([name, hex], idx) => (
          <li key={idx}>
            <CheckableColor
              hex={hex}
              colorName={name as ColorName}
              checked={checkedColors.includes(name)}
              onChange={onToggleColor}
            />
          </li>
        ))}
      </ul>
      <ul>
        {rules.map(({ id, label }, idx) => (
          <li key={idx}>
            <Checkbox
              id={id}
              type="radio"
              label={label}
              checked={checkedRule === id}
              onChange={() => onRuleSelect(id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
