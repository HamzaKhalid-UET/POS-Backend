import { json } from "express";
import { Customer } from "../models";

class CustomerService {

    async addCustomerService(req, res, body) {
        console.log("Body2", req.body);
        const { name, email, phone, address } = req.body

        const customer = await Customer.create({ name, email, phone, address })
        if (!customer) {
            return {
                status: 400,
                json: "Customer not created"
            }
        }
        return {
            status: 200,
            json: "Customer created successfully"
        }
    }
    async getCustomerService(req, res) {
        const customer = await Customer.find()
        if (!customer) {
            return {
                status: 400,
                json: "Customer not found"
            }
        }
        return {
            status: 200,
            json: customer
        }
    }
    async updateCustomerService(req, res) {
        const { id } = req.params
        const { name, email, phone, address } = req.body
        const customer = await Customer.findOneAndUpdate({ _id: id }, { name, email, phone, address }, { new: true })
        if (!customer) {
            return {
                status: 400,
                json: "Customer not found"
            }
        }
        return {
            status: 200,
            json: "Customer updated successfully"
        }
    }   
    async deleteCustomerService(req, res) {
        const { id } = req.params
        const customer = await Customer.findOneAndDelete({ _id: id })
        if (!customer) {
            return {
                status: 400,
                json: "Customer not found"
            }
        }
        return {
            status: 200,
            json: "Customer deleted successfully"
        }
    }
    async getCustomerByIdService(req, res) {
        const { id } = req.params
        console.log("id...",id);
        const customer = await Customer.findOne({ _id: id })
        if (!customer) {
            return {
                status: 400,
                json: "Customer not found"
            }
        }
        return {
            status: 200,
            json: customer
        }
    }
}

export const { addCustomerService , getCustomerService,updateCustomerService,deleteCustomerService,getCustomerByIdService} = new CustomerService();  