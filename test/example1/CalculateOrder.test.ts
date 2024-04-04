import axios from "axios";
import CalculateOrder from "../../src/example1/CalculateOrder";
import { ProductRepositoryMemory } from "../../src/example1/ProductRepository";

test("Deve calcular o pedido", async function () {
	const input = {
		items: [
			{ productId: 1, quantity: 1 },
			{ productId: 2, quantity: 2 },
			{ productId: 3, quantity: 3 },
		]
	};
	const productRepository = new ProductRepositoryMemory();
	const calculateOrder = new CalculateOrder(productRepository);
	const output = await calculateOrder.execute(input);
	expect(output.total).toBe(1400);
});
