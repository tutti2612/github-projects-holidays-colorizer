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
  const thisYear = new Date().getFullYear();

  const colorMap = {
    sat: "blue",
    sun: "red",
  };

  const array = Object.entries({
    ...getSaturdaysAndSundays(thisYear - 1),
    ...getSaturdaysAndSundays(thisYear),
    ...getSaturdaysAndSundays(thisYear + 1),
    ...(await fetchHolidays()),
  }).map(([key, value]) => {
    return `#memex-project-view-root time[datetime="${key}"] { font-weight: bold; color: ${
      colorMap[value] || "green"
    }; }`;
  });

  console.log(array.join("\n"));
}

main();
