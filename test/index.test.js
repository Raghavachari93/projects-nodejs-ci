const request = require("supertest");
const server = require("../index");

afterAll(() => {
  server.close();
});

test("GET / should return Hello, DevOps World!", async () => {
  const response = await request(server).get("/");
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe("Hello, DevOps World!\n");
});

