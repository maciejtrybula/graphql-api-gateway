import { parts } from '../domain';

module.exports = {
    Query: {
        getPartByVin: (parent, { vin }) => {
            const partByVin = parts.find((part) => part.vin === vin);
            return partByVin;
        }
    },
    Part: {
        __resolveReference(reference) {
            const { id } = reference;
            return parts.find((part) => part.id === id);
        }
    }
};