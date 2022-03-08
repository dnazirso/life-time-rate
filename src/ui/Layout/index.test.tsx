import { render } from "@testing-library/react";
import { wrapper } from "../../wrapperTest";

import Layout from "./";

describe(`${Layout.name}`, () => {
  it("renders correctly", () => {
    // Arrange
    const { asFragment } = render(<Layout>TEST</Layout>, { wrapper });

    // Act
    const result = asFragment();

    // Assert
    expect(result).toMatchSnapshot();
  });
});
