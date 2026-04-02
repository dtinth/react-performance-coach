import { describe, it, expect } from "vite-plus/test";
import usePerformanceCoach from "./index.js";

describe("usePerformanceCoach", () => {
  it("exports a hook function", () => {
    expect(typeof usePerformanceCoach).toBe("function");
  });
});
