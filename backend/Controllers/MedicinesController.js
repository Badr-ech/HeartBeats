import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const getMedicines = async (req, res) => {
    // select * from medecines
    try {
        const response = await prisma.medicins.findMany();
       
        res.status(200).json({ data: response, count: response.length });
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
} 