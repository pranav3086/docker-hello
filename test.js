const test = require("node:test");
const assert = require("node:assert");
const app = require("./server");

test("GET / returns Hello from Docker", async () => {
  const server = app.listen(0); // 0 = any free port
  const { port } = server.address();

  const res = await fetch(`http://localhost:${port}/`);
  const text = await res.text();
  server.close();

  assert.strictEqual(res.status, 200);
  assert.strictEqual(text, "Hello from Docker");
});