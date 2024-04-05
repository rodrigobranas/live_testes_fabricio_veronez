import axios from "axios";

test("Deve calcular o pedido pela api", async function () {
	const input = {
		items: [
			{ productId: 1, quantity: 1 },
			{ productId: 2, quantity: 2 },
			{ productId: 3, quantity:  3 }
		]
	}
	const response = await axios.post("http://localhost:3000/calculate_order", input);
	const output = response.data;
	expect(response.status).toBe(200);
	expect(output.total).toBe(1400);
});