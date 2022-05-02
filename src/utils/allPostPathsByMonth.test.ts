import mock from "mock-fs";
import { allPostPathsByMonth } from "./allPostPathsByMonth";

mock({
  "src/posts": {
    "2020": {
      "12": {
        "christmas.mdx": "",
      },
    },
    "2021": {
      "03": {
        "hello.mdx": "",
        "world.mdx": "",
      },
      "04": {
        "close.mdx": "",
        "under.mdx": "",
      },
    },
  },
});

test("年月によりポストパスがグループ化される", () => {
  expect(allPostPathsByMonth()).toEqual({
    "202012": [
      {
        year: "2020",
        month: "12",
        slug: "christmas",
      },
    ],
    "202103": [
      {
        year: "2021",
        month: "03",
        slug: "hello",
      },
      {
        year: "2021",
        month: "03",
        slug: "world",
      },
    ],
    "202104": [
      {
        year: "2021",
        month: "04",
        slug: "close",
      },
      {
        year: "2021",
        month: "04",
        slug: "under",
      },
    ],
  });
});

afterAll(() => {
  mock.restore();
});
