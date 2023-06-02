const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  // Updated variable names providing clarity about the purpose of it. This improves the understanding of the code's logic
  let partitionKey;

  if (event) {
    if (event.partitionKey) {
      partitionKey = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      partitionKey = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }

  // Updated conditional logic by simplifying and consolidating to reduce complexity.
  if (!partitionKey) {
    partitionKey = TRIVIAL_PARTITION_KEY;
  }

  if (typeof partitionKey !== "string") {
    partitionKey = JSON.stringify(partitionKey);
  }

  if (partitionKey.length > MAX_PARTITION_KEY_LENGTH) {
    partitionKey = crypto.createHash("sha3-512").update(partitionKey).digest("hex");
  }

  return partitionKey;
};
