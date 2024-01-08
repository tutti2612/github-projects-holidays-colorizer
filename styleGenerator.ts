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

async function fetchHolidays() {
  const response = await fetch(
    "https://holidays-jp.github.io/api/v1/date.json"
  );
  return await response.json();
}

export async function generateStyle(year: number) {
  const array = Object.entries({
    ...getSaturdaysAndSundays(year - 1),
    ...getSaturdaysAndSundays(year),
    ...getSaturdaysAndSundays(year + 1),
    ...(await fetchHolidays()),
  }).map(([key, value]) => {
    const color = value === "sat" ? "blue" : value === "sun" ? "red" : "green";
    return `#memex-project-view-root time[datetime="${key}"] { font-weight: bold; color: ${color}; }`;
  });

  return array.join("\n");
}

async function main() {
  const thisYear = new Date().getFullYear();
  console.log(await generateStyle(thisYear));
}

main();
