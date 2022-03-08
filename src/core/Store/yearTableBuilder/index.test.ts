import yearTableBuilder from "./index.";

describe("yearTableBuilder", () => {
  it("builds an array of length 90  when given 710546400000 (07/03/1992)", () => {
    // Arrange
    // Act
    const arr = yearTableBuilder(710546400000);

    // Assert
    expect(arr).toHaveLength(90);
  });
});
