import CalculateOrder from "./CalculateOrder";
import { ExpressAdapter } from "./HttpServer";
import { ProductRepositoryDatabase, ProductRepositoryMemory } from "./ProductRepository";

const productRepository = new ProductRepositoryDatabase();
const calculateOrder = new CalculateOrder(productRepository);
const httpServer = new ExpressAdapter();
	
httpServer.register("post", "/calculate_order", async function (params: any, body: any) {
	const input = body;
	const output = await calculateOrder.execute(input);
	return output;
});
httpServer.listen(3000);
