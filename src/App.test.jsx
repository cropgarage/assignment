import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("タイトルが表示される", () => {
  render(<App />);
  expect(screen.getByText("学習内容")).toBeInTheDocument();
});
