export default function getCustomerModel({ Schema, model, models }) {
    const customerSchema = new Schema({
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
        address: {
            type: String,
        },
    });  

    const Customer = models.customer || model('customer', customerSchema);

    return Customer;
}