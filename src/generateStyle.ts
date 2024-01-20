import holidays from "./holidays.json";

function getSaturdaysAndSundays(year: number) {
  const dates = {};
  const currentDate = new Date(`${year}-01-01`);

  while (currentDate.getFullYear() === year) {
    if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
      dates[currentDate.toISOString().split("T")[0]] =
        currentDate.getDay() === 0 ? "sun" : "sat";
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}

export function generateStyle(year: number) {
  const array = Object.entries({
    ...getSaturdaysAndSundays(year - 1),
    ...getSaturdaysAndSundays(year),
    ...getSaturdaysAndSundays(year + 1),
    ...holidays,
  }).map(([key, value]) => {
    const color = value === "sat" ? "blue" : value === "sun" ? "red" : "green";
    return `#memex-project-view-root time[datetime="${key}"] { font-weight: bold; color: ${color}; }`;
  });

  array.push(
    '#memex-project-view-root div[data-testid="roadmap-items"] div.Box-sc-g0xbh4-0.kCiBCp { border-right: 1px dotted rgb(208, 215, 222); width: 241px;}'
  );

  return array.join("\n");
}
