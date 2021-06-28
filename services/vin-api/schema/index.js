import { gql } from "apollo-server";

const typeDefs = gql`
    
    type Part @key(fields: "id") {
        id: String
        name: String
        vin: String
    }
    type Query {
        getPartByVin(vin: String): Part
    }
`;

module.exports = typeDefs;