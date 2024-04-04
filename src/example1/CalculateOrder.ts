import Order from "./Order";
import ProductRepository from "./ProductRepository";

export default class CalculateOrder {

	constructor (readonly productRepository: ProductRepository) {
	}

	async execute (input: Input): Promise<Output> {
		const order = new Order();
		for (const item of input.items) {
			const product = await this.productRepository.getById(item.productId);
			order.addProduct(product, item.quantity);
		}
		const total = order.getTotal();
		return {
			total
		};
	}
}

type Input = {
	items: { productId: number, quantity: number }[]
}

type Output = {
	total: number
}
