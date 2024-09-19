const blockSite = require("./background.js");

test("blocks a specific site", () => {
  expect(blockSite("https://example.com")).toBe(true);
});
