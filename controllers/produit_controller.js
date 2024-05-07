const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()

exports.cearteProduit = async (req, res) => {
    try {
        const produit = await prisma.produit.create({
            data: req.body
        })
        res.status(201).json({ success: "Product added successfully", produit })
    } catch (error) {
        res.status(400).json({ error: error.message }) 
    } finally {
        await prisma.$disconnect()
    }
 
}

exports.getAllProduits = async (req, res) => {
    try {
        const produits = await prisma.produit.findMany()
        res.status(200).json(produits)
    } catch (error) {
        res.status(400).json({error: error.message}) 
    }finally{
        await prisma.$disconnect()
    }
}

exports.getProduitById = async (req, res) => {
    try {
        const produit = await prisma.produit.findUnique({
            where: {
                ID_Produit: parseInt(req.params.id)
            }
        })
        res.status(200).json(produit)
    } catch (error) {
        res.status(400).json({error: error.message}) 
    }finally{
        await prisma.$disconnect()
    }
}

exports.updateProduit = async (req, res) => {
    try {
        const existingProduit = await prisma.produit.findUnique({
            where: {
                ID_Produit: parseInt(req.params.id)
            }
        })

        if (!existingProduit) {
            return res.status(404).json({ error: "Product not found" })
        }

        const produit = await prisma.produit.update({
            where: {
                ID_Produit: parseInt(req.params.id)
            },
            data: req.body
        })
        res.status(200).json(produit)
    } catch (error) {
        res.status(400).json({ error: error.message }) 
    } finally {
        await prisma.$disconnect()
    }
}

exports.deleteProduit = async (req, res) => {
    try {
        const produit = await prisma.produit.findUnique({
            where: {
                ID_Produit: parseInt(req.params.id)
            }
        });

        if (!produit) {
            return res.status(404).json({ error: "Produit not found" });
        }

        await prisma.produit.delete({
            where: {
                ID_Produit: parseInt(req.params.id)
            }
        });

        res.status(200).json({ success: "Produit deleted successfully", produit });
    } catch (error) {
        res.status(400).json({error: error.message});
    } finally {
        await prisma.$disconnect();
    }
}