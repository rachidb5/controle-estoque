import { ProductModel } from "@/models/product-model";

export interface ProductRepository {
  findAllPublic(): Promise<ProductModel[]>;
  findBySlugPublic(slug: string): Promise<ProductModel>;
  findAll(): Promise<ProductModel[]>;
  findById(id: string): Promise<ProductModel>;

  // Mutation
  create(Product: ProductModel): Promise<ProductModel>;
  delete(id: string): Promise<ProductModel>;
  update(
    id: string,
    newProductData: Omit<
      ProductModel,
      "id" | "modelo" | "capacidade" | "cor" | "preco" | "quantidade_estoque"
    >
  ): Promise<ProductModel>;
}
