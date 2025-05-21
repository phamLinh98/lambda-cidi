export async function handler(event) {
  console.log("Hello from Lambda! It's a great day! \n");
  // Tik tak toe
  console.log("Tik tak toe board mockup");
  console.log(" X | O | X ");
  console.log("-----------");
  console.log(" O | X | O ");
  console.log("-----------");
  console.log(" X | O | X ");
  console.log("-----------");
  console.log(JSON.stringify(event, null, 2));
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda!" }),
  };
}
