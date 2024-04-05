import Product from "./Product";
import pgp from "pg-promise";

export default interface ProductRepository {
	getById (productId: number): Promise<Product>;
}

export class ProductRepositoryMemory implements ProductRepository {
	products = [
		{
			productId: 1,
			description: "A",
			price: 100
		},
		{
			productId: 2,
			description: "B",
			price: 200
		},
		{
			productId: 3,
			description: "C",
			price: 300
		}
	];

	async getById(productId: number): Promise<Product> {
		const product = this.products.find((product: any) => product.productId === productId);
		if (!product) throw new Error("Product not found");
		return product;
	}

}

export class ProductRepositoryDatabase implements ProductRepository {

	async getById(productId: number): Promise<Product> {
		const connection = pgp()("postgres://postgres:123456@localhost:5432/app");
		const [productData] = await connection.query("select * from live_fabricio.product where product_id = $1", [productId]);
		await connection.$pool.end();
		if (!productData) throw new Error("Product not found");
		return new Product(productData.product_id, productData.description, parseFloat(productData.price));
	}

}
