import { gql } from "apollo-server";

const typeDefs = gql`
    extend type Part @key(fields: "id") {
        id: String @external
    }
    
    type Product {
        name: String
        sku: String
        part: Part
    }
    
    type Query {
        getProducts: [Product]
        getProductBySku(sku: String): Product
        getProductsByFilter(sku: String, filter: String): [Product]
    }
`;


module.exports = typeDefs;