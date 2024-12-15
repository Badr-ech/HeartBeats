import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getStaffController = async (req, res) => {
    try{
        const response = await prisma.staff.findMany();
        const staffNumber = response.length;
        res.status(200).json({  response: response,
            staffNumber: staffNumber});

    }catch(error){
        res.status(400).json({error: error.message})
    }
}

