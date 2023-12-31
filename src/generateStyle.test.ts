import { describe, expect, test } from "vitest";
import { generateStyle } from "./generateStyle";

describe("generateStyle", () => {
  test("2023", async () => {
    expect(generateStyle(2023)).toBe(expected);
  });
});

const expected = `#memex-project-view-root time[datetime="2022-01-01"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2022-01-02"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-01-08"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-01-09"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-01-15"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-01-16"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-01-22"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-01-23"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-01-29"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-01-30"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-02-05"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-02-06"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-02-12"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-02-13"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-02-19"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-02-20"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-02-26"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-02-27"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-03-05"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-03-06"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-03-12"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-03-13"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-03-19"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-03-20"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-03-26"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-03-27"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-04-02"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-04-03"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-04-09"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-04-10"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-04-16"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-04-17"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-04-23"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-04-24"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-04-30"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-05-01"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-05-07"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-05-08"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-05-14"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-05-15"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-05-21"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-05-22"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-05-28"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-05-29"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-06-04"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-06-05"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-06-11"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-06-12"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-06-18"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-06-19"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-06-25"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-06-26"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-07-02"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-07-03"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-07-09"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-07-10"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-07-16"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-07-17"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-07-23"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-07-24"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-07-30"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-07-31"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-08-06"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-08-07"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-08-13"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-08-14"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-08-20"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-08-21"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-08-27"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-08-28"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-09-03"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-09-04"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-09-10"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-09-11"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-09-17"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-09-18"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-09-24"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-09-25"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-10-01"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-10-02"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-10-08"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-10-09"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-10-15"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-10-16"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-10-22"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-10-23"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-10-29"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-10-30"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-11-05"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-11-06"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-11-12"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-11-13"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-11-19"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-11-20"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-11-26"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-11-27"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-12-03"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-12-04"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-12-10"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-12-11"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-12-17"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-12-18"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-12-24"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2022-12-25"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-12-31"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-01-01"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2023-01-07"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-01-08"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-01-14"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-01-15"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-01-21"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-01-22"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-01-28"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-01-29"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-02-04"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-02-05"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-02-11"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2023-02-12"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-02-18"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-02-19"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-02-25"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-02-26"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-03-04"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-03-05"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-03-11"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-03-12"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-03-18"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-03-19"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-03-25"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-03-26"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-04-01"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-04-02"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-04-08"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-04-09"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-04-15"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-04-16"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-04-22"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-04-23"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-04-29"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2023-04-30"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-05-06"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-05-07"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-05-13"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-05-14"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-05-20"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-05-21"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-05-27"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-05-28"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-06-03"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-06-04"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-06-10"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-06-11"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-06-17"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-06-18"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-06-24"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-06-25"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-07-01"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-07-02"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-07-08"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-07-09"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-07-15"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-07-16"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-07-22"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-07-23"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-07-29"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-07-30"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-08-05"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-08-06"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-08-12"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-08-13"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-08-19"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-08-20"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-08-26"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-08-27"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-09-02"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-09-03"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-09-09"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-09-10"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-09-16"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-09-17"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-09-23"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2023-09-24"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-09-30"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-10-01"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-10-07"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-10-08"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-10-14"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-10-15"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-10-21"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-10-22"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-10-28"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-10-29"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-11-04"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-11-05"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-11-11"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-11-12"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-11-18"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-11-19"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-11-25"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-11-26"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-12-02"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-12-03"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-12-09"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-12-10"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-12-16"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-12-17"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-12-23"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-12-24"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2023-12-30"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2023-12-31"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-01-06"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-01-07"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-01-13"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-01-14"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-01-20"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-01-21"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-01-27"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-01-28"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-02-03"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-02-04"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-02-10"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-02-11"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2024-02-17"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-02-18"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-02-24"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-02-25"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-03-02"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-03-03"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-03-09"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-03-10"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-03-16"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-03-17"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-03-23"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-03-24"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-03-30"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-03-31"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-04-06"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-04-07"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-04-13"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-04-14"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-04-20"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-04-21"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-04-27"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-04-28"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-05-04"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2024-05-05"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2024-05-11"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-05-12"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-05-18"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-05-19"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-05-25"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-05-26"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-06-01"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-06-02"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-06-08"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-06-09"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-06-15"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-06-16"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-06-22"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-06-23"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-06-29"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-06-30"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-07-06"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-07-07"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-07-13"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-07-14"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-07-20"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-07-21"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-07-27"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-07-28"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-08-03"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-08-04"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-08-10"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-08-11"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2024-08-17"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-08-18"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-08-24"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-08-25"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-08-31"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-09-01"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-09-07"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-09-08"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-09-14"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-09-15"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-09-21"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-09-22"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2024-09-28"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-09-29"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-10-05"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-10-06"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-10-12"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-10-13"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-10-19"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-10-20"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-10-26"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-10-27"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-11-02"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-11-03"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2024-11-09"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-11-10"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-11-16"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-11-17"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-11-23"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2024-11-24"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-11-30"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-12-01"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-12-07"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-12-08"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-12-14"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-12-15"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-12-21"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-12-22"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2024-12-28"] { font-weight: bold; color: blue; }
#memex-project-view-root time[datetime="2024-12-29"] { font-weight: bold; color: red; }
#memex-project-view-root time[datetime="2022-01-10"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2022-02-11"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2022-02-23"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2022-03-21"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2022-04-29"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2022-05-03"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2022-05-04"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2022-05-05"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2022-07-18"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2022-08-11"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2022-09-19"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2022-09-23"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2022-10-10"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2022-11-03"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2022-11-23"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2023-01-02"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2023-01-09"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2023-02-23"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2023-03-21"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2023-05-03"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2023-05-04"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2023-05-05"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2023-07-17"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2023-08-11"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2023-09-18"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2023-10-09"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2023-11-03"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2023-11-23"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2024-01-01"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2024-01-08"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2024-02-12"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2024-02-23"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2024-03-20"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2024-04-29"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2024-05-03"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2024-05-06"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2024-07-15"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2024-08-12"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2024-09-16"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2024-09-23"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2024-10-14"] { font-weight: bold; color: green; }
#memex-project-view-root time[datetime="2024-11-04"] { font-weight: bold; color: green; }`;
