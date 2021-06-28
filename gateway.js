import { ApolloServer, gql } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";

const { PORT = 4000 } = process.env;
const {gatewayHostname = 'http://localhost' } = process.env;

(async () => {
    const gateway = new ApolloGateway({
        serviceList: [
            { name: 'vin-api', url:  gatewayHostname + ':5003' },
            { name: 'ct-api', url: gatewayHostname + ':5004'},
        ],
    });

    const server = new ApolloServer({
        gateway,
        subscriptions: false,
    });

    server.listen({port: PORT}).then(({ url }) => {
        console.log(`🚀 Gateway ready at ${url}`);
    });
})();