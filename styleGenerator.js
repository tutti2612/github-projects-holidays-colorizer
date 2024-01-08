function getSaturdaysAndSundays(year) {
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

async function main() {
  const thisYear = new Date().getFullYear();

  const array = Object.entries({
    ...getSaturdaysAndSundays(thisYear - 1),
    ...getSaturdaysAndSundays(thisYear),
    ...getSaturdaysAndSundays(thisYear + 1),
    ...(await fetchHolidays()),
  }).map(([key, value]) => {
    const color = value === "sat" ? "blue" : value === "sun" ? "red" : "green";
    return `#memex-project-view-root time[datetime="${key}"] { font-weight: bold; color: ${color}; }`;
  });

  console.log(array.join("\n"));
}

main();
