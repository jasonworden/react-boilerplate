import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const CONTENT = "This is the JasonReactBoilerplate.";

test("button toggles text", () => {
  render(<App />);

  // Text begins hidden.
  expect(screen.queryByText(CONTENT)).not.toBeInTheDocument();

  const buttonElement = screen.getByText("Toggle text");
  userEvent.click(buttonElement);

  // Text is now displayed.
  expect(screen.getByText(CONTENT)).toBeInTheDocument();

  userEvent.click(buttonElement);

  // Text is hidden again.
  expect(screen.queryByText(CONTENT)).not.toBeInTheDocument();
});
