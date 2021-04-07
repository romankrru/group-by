import groupBy from "../index";

describe("groupBy", () => {
  it("should work correctly", () => {
    expect(groupBy([1.2, 1.1, 2.3, 0.4], Math.floor)).toEqual({
      "0": [0.4],
      "1": [1.2, 1.1],
      "2": [2.3],
    });

    expect(groupBy(["one", "two", "three"], (el) => el.length)).toEqual({
      "3": ["one", "two"],
      "5": ["three"],
    });

    enum Gender {
      Male,
      Female,
    }

    expect(
      groupBy(
        [
          { g: Gender.Male, n: "A" },
          { g: Gender.Female, n: "B" },
          { g: Gender.Female, n: "C" },
        ],

        (el) => el.g
      )
    ).toEqual({
      [Gender.Male]: [{ g: Gender.Male, n: "A" }],

      [Gender.Female]: [
        { g: Gender.Female, n: "B" },
        { g: Gender.Female, n: "C" },
      ],
    });

    expect(groupBy([1, 2, 3], () => "toString")).toEqual({
      toString: [1, 2, 3],
    });
  });
});
