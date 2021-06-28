import { products } from '../domain';

module.exports = {
    Query: {
        getProducts: async (parent) => {
            return products;
        },
        getProductBySku: async (parent, { sku }) => {
            const productBySku = products.filter((product) => product.sku === sku);
            return productBySku;
        },
        getProductsByFilter: async (parent, { sku, filter }) => {
            const productByFilter = products.filter(
                (product) => product.name.includes(filter)
            ).filter(
                (product) => product.sku === sku
            );
            return productByFilter;
        }
    },
    Product: {
        part(reference) {
            const { sku } = reference;
            return { __typename: "Product", id: sku};
        }
    }
};