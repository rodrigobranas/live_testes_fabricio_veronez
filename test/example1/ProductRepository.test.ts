import { ProductRepositoryDatabase, ProductRepositoryMemory } from "../../src/example1/ProductRepository";

test("Deve obter um produto do repository em memória", async function () {
	const productRepository = new ProductRepositoryMemory();
	const product = await productRepository.getById(1);
	expect(product.productId).toBe(1);
	expect(product.description).toBe("A");
	expect(product.price).toBe(100);
});

test("Deve obter um produto do repository no banco de dados", async function () {
	const productRepository = new ProductRepositoryDatabase();
	const product = await productRepository.getById(1);
	expect(product.productId).toBe(1);
	expect(product.description).toBe("A");
	expect(product.price).toBe(100);
});
