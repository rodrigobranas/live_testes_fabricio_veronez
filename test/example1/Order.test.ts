import axios from "axios";
import CalculateOrder from "../../src/example1/CalculateOrder";
import { ProductRepositoryMemory } from "../../src/example1/ProductRepository";
import Order from "../../src/example1/Order";
import Product from "../../src/example1/Product";

test("Deve calcular o pedido", async function () {
	const order = new Order();
	order.addProduct(new Product(1, "A", 100), 1);
	order.addProduct(new Product(2, "B", 200), 2);
	order.addProduct(new Product(3, "C", 300), 3);
	expect(order.getTotal()).toBe(1400);
});
