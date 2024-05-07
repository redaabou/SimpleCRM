const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

exports.createFacture = async (req, res ) => {
    try {
        const existingClient = await prisma.Client.findUnique({
            where: {
                ID_Client: req.body.ID_Client
            }
        })

        if (!existingClient) {
            return res.status(404).json({error: "Client not found"})
        }

        const dateFacture = new Date(req.body.date_facture);

        req.body.date_facture = dateFacture;

        const facture = await prisma.facture.create({
            data : req.body
        })
        res.status(201).json({success: "Facture added successfully", facture})
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }finally{
        await prisma.$disconnect()
    }
}

exports.getAllFactures = async (req, res) => {
    try {
        const factures = await prisma.facture.findMany()
        res.status(200).json(factures)
    } catch (error) {
        res.status(400).json({error: error.message})
    }finally{
        await prisma.$disconnect()
    }
}

exports.getFactureById = async (req, res) => {
    try {
        const facture = await prisma.Facture.findUnique({
            where: {
                ID_Facture: parseInt(req.params.id)
            }
        })
        res.status(200).json(facture)
    } catch (error) {
        res.status(400).json({error: error.message})
    }finally{
        await prisma.$disconnect()
    }
}

exports.updateFacture = async (req, res) => {
    try {
        const existingFacture = await prisma.Facture.findUnique({
            where: {
                ID_Facture: parseInt(req.params.id)
            }
        })

        if (!existingFacture) {
            return res.status(404).json({error: "Facture not found"})
        }

        const facture = await prisma.Facture.update({
            where: {
                ID_Facture: parseInt(req.params.id)
            },
            data: req.body
        })
        res.status(200).json({success: "Facture updated successfully", facture})
    } catch (error) {
        res.status(400).json({error: error.message})
    }finally{
        await prisma.$disconnect()
    }
}

exports.deleteFacture = async (req, res) => {
    try {
        const facture = await prisma.Facture.findUnique({
            where: {
                ID_Facture: parseInt(req.params.id)
            }
        });

        if (!facture) {
            return res.status(404).json({error: "Facture not found"});
        }

        await prisma.Facture.delete({
            where: {
                ID_Facture: parseInt(req.params.id)
            }
        });

        res.status(200).json({success: "Facture deleted successfully", facture});
    } catch (error) {
        res.status(400).json({error: error.message})
    }finally{
        await prisma.$disconnect()
    }
}