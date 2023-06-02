const { deterministicPartitionKey } = require("./dpk");
const crypto = require('crypto');

describe("deterministicPartitionKey", () => {
  it("should return the partition key if it exists in the event", () => {
    const event = {
      partitionKey: "existing-key",
    };
    const result = deterministicPartitionKey(event);
    expect(result).toBe("existing-key");
  });

  it("should generate a partition key if it doesn't exist in the event", () => {
    const event = {
      someData: "example",
    };
    const hash = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(event))
      .digest("hex");
    const result = deterministicPartitionKey(event);
    expect(result).toBe(hash);
  });

  it("should stringify and use the partition key if it's not a string", () => {
    const event = {
      partitionKey: { key: "value" },
    };
    const expectedKey = JSON.stringify(event.partitionKey);
    const result = deterministicPartitionKey(event);
    expect(result).toBe(expectedKey);
  });

  it("should use the trivial partition key if the final key exceeds the maximum length", () => {
    const event = {
      partitionKey: "some-long-key".repeat(64), // Generating a long key that exceeds MAX_PARTITION_KEY_LENGTH
    };
    const hash = crypto
      .createHash("sha3-512")
      .update(event.partitionKey)
      .digest("hex");
    const result = deterministicPartitionKey(event);
    expect(result).toBe(hash);
  });

  it("should return the trivial partition key if the event is null", () => {
    const result = deterministicPartitionKey(null);
    expect(result).toBe("0"); // Trivial partition key
  });
});
