const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

exports.createClient = async (req, res ) => {
    try {
        const client = await prisma.Client.create({
            data : req.body
        })
        res.status(201).json({success: "Client added successfully", client})
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }finally{
        await prisma.$disconnect()
    }
}

exports.getAllClients = async (req, res) => {
    try {
        const clients = await prisma.Client.findMany({include: {factures:true}})
        res.status(200).json(clients)
    } catch (error) {
        res.status(400).json({error: error.message})
    }finally{
        await prisma.$disconnect()
    }
}

exports.getClientById = async (req, res) => {
    try {
        const client = await prisma.Client.findUnique({
            where: {
                ID_Client: parseInt(req.params.id)
            }
        })
        res.status(200).json(client)
    } catch (error) {
        res.status(400).json({error: error.message})
    }finally{
        await prisma.$disconnect()
    }
}

exports.updateClient = async (req, res) => {
    try {
        const existingClient = await prisma.Client.findUnique({
            where: {
                ID_Client: parseInt(req.params.id)
            }
        })

        if (!existingClient) {
            return res.status(404).json({error: "Client not found"})
        }

        const client = await prisma.Client.update({
            where: {
                ID_Client: parseInt(req.params.id)
            },
            data: req.body
        })

        res.status(200).json({success: "Client updated successfully", client})
    } catch (error) {
        res.status(400).json({error: error.message})
    }finally{
        await prisma.$disconnect()
    }
}

exports.deleteClient = async (req, res) => {
    try {
        const client = await prisma.Client.findUnique({
            where: {
                ID_Client: parseInt(req.params.id)
            }
        })

        if (!client) {
            return res.status(404).json({error: "Client not found"})
        }

        await prisma.Client.delete({
            where: {
                ID_Client: parseInt(req.params.id)
            }
        })

        res.status(200).json({success: "Client deleted successfully", client})
    } catch (error) {
        res.status(400).json({error: error.message})
    }finally{
        await prisma.$disconnect()
    }
}