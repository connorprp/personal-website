import OpenAI from "openai";
const client = new OpenAI();

console.log(response.output_text);
document.getElementById("generate").addEventListener("click", async () => {
    const response = await client.responses.create({
    model: "gpt-4o",
    input: "Write a one-sentence bedtime story about a unicorn."
});
    // Display the response in the output element
    document.getElementById("output").innerText = response;
});