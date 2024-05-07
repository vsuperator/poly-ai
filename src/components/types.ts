export enum Colors {
  blue = "#0000FF",
  red = "#FF0000",
  yellow = "#FFFF00",
  green = "#008000",
  silver = "#C0C0C0",
  black = "#000000",
  purple = "#800080",
  gray = "#808080",
  orange = "#FFA500",
}

export type ColorName = keyof typeof Colors;
export type ColorEntry = [ColorName, string];

export const ColorsArray = Object.entries(Colors) as ColorEntry[];

export type ColorsRule = "ALL" | "SOME" | "NONE";

export type ColorsRuleValue = {
  id: ColorsRule;
  label: string;
};

export const ColorsRuleValues: ColorsRuleValue[] = [
  { id: "ALL", label: "All of the selected" },
  { id: "SOME", label: "Some of the selected" },
  { id: "NONE", label: "None of the selected" },
];

export type ColorsSet = Set<ColorName>;

export interface Spaceship {
  name: string;
  colors: string[];
  max_speed: number;
  pulse_laser: boolean;
}

export interface FilterSpaceShips {
  spaceships: Spaceship[];
  colorMode: ColorsRule;
  selectedColors: ColorName[];
  minSpeed: number;
  maxSpeed: number;
  pulseLaser: "NEUTRAL" | "REQUIRED" | "NOT_REQUIRED";
}
