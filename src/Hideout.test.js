import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Hideout from "./Hideout";

afterEach(() => {
  cleanup();
});

test("renders without crashing", () => {
  render(<Hideout hiddenMessage="hidden message" btnMessage="click me" />);
});

test("Hidden message is initially hidden", () => {
  const hiddenMessage = "hidden message";
  const { queryByText } = render(
    <Hideout hiddenMessage={hiddenMessage} btnMessage="click me" />
  );
  const regex = new RegExp(`${hiddenMessage}`, "i");
  expect(queryByText(regex)).toBeNull();
});

test("Clicking button allows displays message", () => {
  const hiddenMessage = "hidden message";
  const btnMessage = "click me";
  const { getByText } = render(
    <Hideout hiddenMessage={hiddenMessage} btnMessage={btnMessage} />
  );
  const btn = getByText(btnMessage);
  fireEvent.click(btn);
  const regex = new RegExp(`${hiddenMessage}`, "i");
  expect(getByText(regex)).toBeInTheDocument();
});

test("displayed message is uppercased with a dot", () => {
  const hiddenMessage = "hidden message";
  const btnMessage = "click me";
  const { getByText, queryByText } = render(
    <Hideout hiddenMessage={hiddenMessage} btnMessage={btnMessage} />
  );
  fireEvent.click(getByText(btnMessage));
  expect(queryByText(hiddenMessage)).toBeNull();
  expect(getByText(`${hiddenMessage.toUpperCase()}!`)).toBeInTheDocument();
});
