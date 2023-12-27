function getSaturdaysAndSundays(year) {
  let dates = {};
  let currentDate = new Date(`${year}-01-01`);

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
  const year = 2023;
  const weekendsLastYear = getSaturdaysAndSundays(year - 1);
  const weekendsThisYear = getSaturdaysAndSundays(year);
  const weekendsNextYear = getSaturdaysAndSundays(year + 1);
  const holidays = await fetchHolidays();

  const array = Object.entries({
    ...weekendsLastYear,
    ...weekendsThisYear,
    ...weekendsNextYear,
    ...holidays,
  }).map(([key, value]) => {
    let color;
    if (value === "sat") {
      color = "blue";
    } else if (value === "sun") {
      color = "red";
    } else {
      color = "green";
    }

    return `#memex-project-view-root time[datetime="${key}"] { font-weight: bold; color: ${color}; }`;
  });

  console.log(array.join("\n"));
}

main();
