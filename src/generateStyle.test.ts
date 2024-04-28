import { describe, expect, test } from "vitest";
import { generateStyle } from "./generateStyle";

describe("generateStyle", () => {
  test("2024", async () => {
    expect(generateStyle(2024)).toMatchSnapshot();
  });
});
