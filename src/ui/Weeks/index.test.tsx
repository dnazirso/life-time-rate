import { render } from "@testing-library/react";

import Weeks from "./";

describe(`${Weeks.name}`, () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Weeks />);
    expect(asFragment()).toMatchSnapshot();
  });
});
