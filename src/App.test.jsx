jest.mock("../supabaseClient", () => ({
  __esModule: true,
  default: {
    from: () => ({
      select: () => Promise.resolve({ data: [], error: null }),
      delete: () => ({
        eq: () => Promise.resolve({ data: [], error: null }),
      }),
    }),
  },
}));

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
// jest.mock("../supabaseClient");

test("タイトルが表示される", () => {
  render(<App />);
  expect(screen.getByText("学習内容")).toBeInTheDocument();
});
