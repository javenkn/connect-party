import React from "react";
import { render } from "@testing-library/react";
import Routes from "./Routes";

test("renders learn react link", () => {
  const { getByText } = render(<Routes />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
