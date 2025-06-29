import { describe, expect, test } from "vitest";
import { generateStyle } from "./generateStyle";
import holidays from "./holidays.json";

const YEAR = 2025;
const generatedStyle = generateStyle(YEAR);

// 指定された年の祝日ではない特定の曜日を見つける関数
const findFirstNonHolidayWeekday = (
  year: number,
  dayOfWeek: number // 0=日曜日, 6=土曜日
): string | undefined => {
  // 祝日データを取得
  const holidayDates = new Set(Object.keys(holidays));

  // 指定された年の1月1日を基準にする
  const date = new Date(year, 0, 1);

  // 日付をYYYY-MM-DD形式で返す関数（タイムゾーンの影響を受けない）
  const formatDate = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  // その年の指定された曜日で祝日でない日を見つけるまでループ
  while (date.getFullYear() === year) {
    // 指定された曜日（0=日曜日, 6=土曜日）を見つけたら
    if (date.getDay() === dayOfWeek) {
      // YYYY-MM-DD形式の日付文字列
      const dateString = formatDate(date);

      // 祝日でなければこの日を返す
      if (!holidayDates.has(dateString)) {
        return dateString;
      }
    }

    // 翌日に進める
    date.setDate(date.getDate() + 1);
  }
};

describe("generateStyle", () => {
  test(YEAR.toString(), async () => {
    expect(generatedStyle).toMatchSnapshot();
  });

  test("ダークモードのスタイルが含まれていること", async () => {
    expect(generatedStyle).toContain(
      '#memex-root[data-current-theme-color-scheme="dark"]'
    );
  });

  test("ライトモードとダークモードで正しい色が設定されていること", async () => {
    // 土曜日の色を確認（ライト: blue, ダーク: royalblue）
    expect(generatedStyle).toMatch(
      /#memex-project-view-root time\[datetime="[^"]+"\] \{\s+font-weight: bold;\s+color: blue;\s+\}/
    );
    expect(generatedStyle).toMatch(
      /#memex-root\[data-current-theme-color-scheme="dark"\] #memex-project-view-root time\[datetime="[^"]+"\] \{\s+font-weight: bold;\s+color: royalblue;\s+\}/
    );

    // 日曜日の色を確認（ライト: red, ダーク: indianred）
    expect(generatedStyle).toMatch(
      /#memex-project-view-root time\[datetime="[^"]+"\] \{\s+font-weight: bold;\s+color: red;\s+\}/
    );
    expect(generatedStyle).toMatch(
      /#memex-root\[data-current-theme-color-scheme="dark"\] #memex-project-view-root time\[datetime="[^"]+"\] \{\s+font-weight: bold;\s+color: indianred;\s+\}/
    );

    // 祝日の色を確認（ライト: green, ダーク: seagreen）
    expect(generatedStyle).toMatch(
      /#memex-project-view-root time\[datetime="[^"]+"\] \{\s+font-weight: bold;\s+color: green;\s+\}/
    );
    expect(generatedStyle).toMatch(
      /#memex-root\[data-current-theme-color-scheme="dark"\] #memex-project-view-root time\[datetime="[^"]+"\] \{\s+font-weight: bold;\s+color: seagreen;\s+\}/
    );
  });

  test("祝日が正しい色で設定されていること", async () => {
    // 1月1日は祝日（green/seagreen）
    expect(generatedStyle).toMatch(
      new RegExp(
        `#memex-project-view-root time\\[datetime="${YEAR}-01-01"\\] \\{\\s+font-weight: bold;\\s+color: green;\\s+\\}`
      )
    );
    expect(generatedStyle).toMatch(
      new RegExp(
        `#memex-root\\[data-current-theme-color-scheme="dark"\\] #memex-project-view-root time\\[datetime="${YEAR}-01-01"\\] \\{\\s+font-weight: bold;\\s+color: seagreen;\\s+\\}`
      )
    );
  });

  test("土曜日が正しい色で設定されていること", async () => {
    // 祝日ではない土曜日を取得
    const nonHolidaySaturday = findFirstNonHolidayWeekday(YEAR, 6);

    // 祝日ではない土曜日の色を確認（blue/royalblue）
    expect(generatedStyle).toMatch(
      new RegExp(
        `#memex-project-view-root time\\[datetime="${nonHolidaySaturday}"\\] \\{\\s+font-weight: bold;\\s+color: blue;\\s+\\}`
      )
    );
    expect(generatedStyle).toMatch(
      new RegExp(
        `#memex-root\\[data-current-theme-color-scheme="dark"\\] #memex-project-view-root time\\[datetime="${nonHolidaySaturday}"\\] \\{\\s+font-weight: bold;\\s+color: royalblue;\\s+\\}`
      )
    );
  });

  test("日曜日が正しい色で設定されていること", async () => {
    // 祝日ではない日曜日を取得
    const nonHolidaySunday = findFirstNonHolidayWeekday(YEAR, 0);

    // 祝日ではない日曜日の色を確認（red/indianred）
    expect(generatedStyle).toMatch(
      new RegExp(
        `#memex-project-view-root time\\[datetime="${nonHolidaySunday}"\\] \\{\\s+font-weight: bold;\\s+color: red;\\s+\\}`
      )
    );
    expect(generatedStyle).toMatch(
      new RegExp(
        `#memex-root\\[data-current-theme-color-scheme="dark"\\] #memex-project-view-root time\\[datetime="${nonHolidaySunday}"\\] \\{\\s+font-weight: bold;\\s+color: indianred;\\s+\\}`
      )
    );
  });
});
