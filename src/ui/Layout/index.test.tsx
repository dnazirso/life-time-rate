import { render } from "@testing-library/react";

import Layout from "./";

describe(`${Layout.name}`, () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Layout>TEST</Layout>);
    expect(asFragment()).toMatchSnapshot();
  });
});
