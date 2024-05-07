import { ColorName, ColorsRule, Spaceship } from "../components/types";

interface FilterSpaceShips {
  spaceships: Spaceship[];
  colorMode: ColorsRule;
  selectedColors: ColorName[];
  minSpeed: number;
  maxSpeed: number;
  pulseLaser: "NEUTRAL" | "REQUIRED" | "NOT_REQUIRED";
}

export function getFilteredSpaceShips({
  spaceships,
  colorMode,
  selectedColors,
  minSpeed,
  maxSpeed,
  pulseLaser,
}: FilterSpaceShips): Spaceship[] {
  return spaceships.filter((spaceship) => {
    let colorPass = true;
    if (selectedColors.length > 0) {
      if (colorMode === "ALL") {
        console.log(selectedColors);
        colorPass = selectedColors.every((color) =>
          spaceship.colors.includes(color)
        );
      } else if (colorMode === "SOME") {
        colorPass = selectedColors.some((color) =>
          spaceship.colors.includes(color)
        );
      } else if (colorMode === "NONE") {
        colorPass = !selectedColors.some((color) =>
          spaceship.colors.includes(color)
        );
      }
    }

    let speedPass =
      spaceship.max_speed >= minSpeed && spaceship.max_speed <= maxSpeed;

    let pulseLaserPass = true;
    if (pulseLaser !== "NEUTRAL") {
      pulseLaserPass =
        pulseLaser === "REQUIRED"
          ? spaceship.pulse_laser
          : !spaceship.pulse_laser;
    }

    return colorPass && speedPass && pulseLaserPass;
  });
}
