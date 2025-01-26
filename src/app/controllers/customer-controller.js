import { addCustomerService, deleteCustomerService, getCustomerByIdService, getCustomerService, updateCustomerService } from "../services/customer-service";



class CustomerController {
    async addCustomer(req, res) {
        console.log("Body.", req.body);

        const { status, json } = await addCustomerService(req);
        return res.status(status).json(json);
    }
    async getCustomer(req, res) {
        const { status, json } = await getCustomerService();
        return res.status(status).json(json);
    }
    async updateCustomer(req, res) {
        const { status, json } = await updateCustomerService(req);
        return res.status(status).json(json);
    }
    async getCustomerById(req, res) {
        console.log("request", req);
        const { status, json } = await getCustomerByIdService(req);
        return res.status(status).json(json);
    }
    async deleteCustomer(req, res) {
        const { status, json } = await deleteCustomerService(req);
        return res.status(status).json(json);
    }
}

export const { addCustomer, getCustomer, updateCustomer, getCustomerById, deleteCustomer } = new CustomerController();