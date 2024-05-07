const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

exports.createEntreprise = async (req, res ) => {
    try {
        req.body.date_creation = new Date(req.body.date_creation);
        const entreprise = await prisma.entreprise.create({
            data : req.body
        })
        res.status(201).json({success: "Entreprise added successfully", entreprise})
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }finally{
        await prisma.$disconnect()
    }
}

exports.getAllEntreprises = async (req, res) => {
    try {
        const entreprises = await prisma.entreprise.findMany()
        res.status(200).json(entreprises)
    } catch (error) {
        res.status(400).json({error: error.message})
    }finally{
        await prisma.$disconnect()
    }
}

exports.getEntrepriseById = async (req, res) => {
    try {
        const entreprise = await prisma.entreprise.findUnique({
            where: {
                ID_Entreprise: parseInt(req.params.id)
            }
        })
        res.status(200).json(entreprise)
    } catch (error) {
        res.status(400).json({error: error.message})
    }finally{
        await prisma.$disconnect()
    }
}

exports.updateEntreprise = async (req, res) => {
    try {
        const existingEntreprise = await prisma.entreprise.findUnique({
            where: {
                ID_Entreprise: parseInt(req.params.id)
            }
        })

        if (!existingEntreprise) {
            return res.status(404).json({error: "Entreprise not found"})
        }

        const entreprise = await prisma.entreprise.update({
            where: {
                ID_Entreprise: parseInt(req.params.id)
            },
            data: req.body
        })
        res.status(200).json({success: "Entreprise updated successfully", entreprise})
    } catch (error) {
        res.status(400).json({error: error.message})
    }finally{
        await prisma.$disconnect()
    }
}

exports.deleteEntreprise = async (req, res) => {
    try {
        const entreprise = await prisma.entreprise.findUnique({
            where: {
                ID_Entreprise: parseInt(req.params.id)
            }
        })

        if (!entreprise) {
            return res.status(404).json({error: "Entreprise not found"})
        }

        await prisma.entreprise.delete({
            where: {
                ID_Entreprise: parseInt(req.params.id)
            }
        })

        res.status(200).json({success: "Entreprise deleted successfully", entreprise})
    } catch (error) {
        res.status(400).json({error: error.message})
    }finally{
        await prisma.$disconnect()
    }
}