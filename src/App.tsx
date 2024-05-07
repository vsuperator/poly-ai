import {
  useQueryParams,
  StringParam,
  withDefault,
  NumberParam,
  DelimitedArrayParam,
} from "use-query-params";
import {
  ColorName,
  ColorsRuleValues,
  ColorsRule,
  ColorsArray,
  FilterSpaceShips,
} from "./components/types";
import { getFilteredSpaceShips } from "./utils";
import data from "../data.json";
import {
  Card,
  SpeedFilter,
  ColorFilters,
  SpaceShipsList,
  SpaceShipOptions,
} from "./components";
import "./App.css";

const MIN_SPEED = 50;
const MAX_SPEED = 200;

const ColorsFilterParam = withDefault(DelimitedArrayParam, []);
const ColorModeParam = withDefault(StringParam, "SOME");
const MinSpeedParam = withDefault(NumberParam, MIN_SPEED);
const MaxSpeedParam = withDefault(NumberParam, MAX_SPEED);
const PulseLaserParam = withDefault(StringParam, "NEUTRAL");

function App() {
  const [query, setQuery] = useQueryParams({
    colorMode: ColorModeParam,
    selectedColors: ColorsFilterParam,
    minSpeed: MinSpeedParam,
    maxSpeed: MaxSpeedParam,
    pulseLaser: PulseLaserParam,
  });

  const { selectedColors, colorMode, minSpeed, maxSpeed, pulseLaser } = query;

  // need to memo
  const filteredSpaceShips = getFilteredSpaceShips({
    spaceships: data,
    colorMode,
    selectedColors,
    minSpeed,
    maxSpeed,
    pulseLaser,
  } as FilterSpaceShips);

  const handleToggleColor = (color: ColorName) => {
    if ((selectedColors as ColorName[]).includes(color)) {
      setQuery({ selectedColors: selectedColors.filter((c) => c !== color) });
    } else {
      setQuery({ selectedColors: [...selectedColors, color] });
    }
  };

  return (
    <div className="overflow-hidden w-screen container mx-auto bg-gray-50 min-h-screen flex flex-col h-screen block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-3xl dark:text-white">
        Spaceship finder:
      </h1>
      <div className="flex flex-row flex-wrap max-h-[calc(100%-50px)] overflow-hidden">
        <aside className="w-full sm:w-2/5 md:w-2/5 px-2">
          <div className="sticky w-full">
            <Card>
              <ColorFilters
                colors={ColorsArray}
                checkedRule={colorMode as ColorsRule}
                rules={ColorsRuleValues}
                checkedColors={selectedColors as ColorName[]}
                onToggleColor={handleToggleColor}
                onRuleSelect={(rule: ColorsRule) =>
                  setQuery({ colorMode: rule })
                }
              />
              <SpeedFilter
                min={MIN_SPEED}
                max={MAX_SPEED}
                minVal={minSpeed}
                maxVal={maxSpeed}
                onMinChange={(min: number) => setQuery({ minSpeed: min })}
                onMaxChange={(max: number) => setQuery({ maxSpeed: max })}
              />
              <SpaceShipOptions
                value={pulseLaser}
                onChange={(value: string) => setQuery({ pulseLaser: value })}
              />
            </Card>
          </div>
        </aside>
        <main
          role="main"
          className="w-full sm:w-3/5 md:w-3/5 pt-1 px-2 h-full overflow-x-hidden"
        >
          <SpaceShipsList spaceships={filteredSpaceShips} />
        </main>
      </div>
    </div>
  );
}

export default App;
