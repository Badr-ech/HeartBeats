import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const seedToDatabase = async ()=> {
    await prisma.staff.deleteMany({});
    await prisma.medicins.deleteMany({});
    await prisma.users.deleteMany({});

    const staffMembers = [
        { name: "Ahmed Aaloui", type: "doctor", status: "available" },
        { name: "Nabila BenAli", type: "nurse", status: "out_of_office" },
        { name: "Mariame Elghenmy", type: "doctor", status: "out_of_office" },
        { name: "Zakaria Moharim", type: "nurse", status: "available" },
        { name: "Youssef ElHaddad", type: "doctor", status: "available" },
        { name: "Fatima Zahra", type: "nurse", status: "out_of_office" },
        { name: "Mohamed Taoufik", type: "doctor", status: "out_of_office" },
        { name: "Khadija Amrani", type: "nurse", status: "available" },
        { name: "Amina Chouaib", type: "doctor", status: "out_of_office" },
        { name: "Rachid Bensalem", type: "nurse", status: "out_of_office" },
        { name: "Sara Idrissi", type: "doctor", status: "available" },
        { name: "Karim Ait Said", type: "nurse", status: "out_of_office" },
        { name: "Hanae Rami", type: "doctor", status: "out_of_office" },
        { name: "Omar Bouzid", type: "nurse", status: "available" },
        { name: "Laila Jebbar", type: "doctor", status: "available" },
        { name: "Soufiane Tazi", type: "nurse", status: "out_of_office" },
        { name: "Yassir Amine", type: "doctor", status: "out_of_office" },
        { name: "Nour El Houda", type: "nurse", status: "available" },
        { name: "Samir Lahmar", type: "doctor", status: "out_of_office" },
        { name: "Meryem Fathi", type: "nurse", status: "out_of_office" },
        { name: "Khalid Tamer", type: "doctor", status: "available" },
        { name: "Zineb Oukili", type: "nurse", status: "out_of_office" },
        { name: "Imane Rahali", type: "doctor", status: "out_of_office" },
        { name: "Mustapha Laamrani", type: "nurse", status: "available" },
        { name: "Aya Lahlou", type: "doctor", status: "out_of_office" },
        { name: "Rania Sebti", type: "nurse", status: "out_of_office" },
        { name: "Fouad Elhassan", type: "doctor", status: "available" },
        { name: "Siham Bennani", type: "nurse", status: "out_of_office" },
        { name: "Jamal Haddad", type: "doctor", status: "out_of_office" },
        { name: "Nassima Akari", type: "nurse", status: "available" },
        { name: "Younes Elmejdoubi", type: "doctor", status: "out_of_office" },
        { name: "Leila Toumi", type: "nurse", status: "out_of_office" },
        { name: "Amine Haroun", type: "doctor", status: "available" },
        { name: "Fatima Meskini", type: "nurse", status: "out_of_office" },
        { name: "Reda Lamrani", type: "doctor", status: "out_of_office" },
        { name: "Saida Khelli", type: "nurse", status: "available" },
        { name: "Hassan Errachidi", type: "doctor", status: "out_of_office" },
        { name: "Aicha Mansouri", type: "nurse", status: "out_of_office" },
        { name: "Yassine Elkhoury", type: "doctor", status: "available" },
        { name: "Manal Laaroussi", type: "nurse", status: "out_of_office" },
        { name: "Adil Sebbar", type: "doctor", status: "out_of_office" },
        { name: "Latifa Amrani", type: "nurse", status: "available" },
        { name: "Rachid Elalami", type: "doctor", status: "out_of_office" },
        { name: "Salma Ouhoud", type: "nurse", status: "out_of_office" },
        { name: "Fouzia Elkarimi", type: "doctor", status: "available" },
        { name: "Nabil Zaidi", type: "nurse", status: "out_of_office" },
        { name: "Mourad Hadji", type: "doctor", status: "out_of_office" },
        { name: "Naima Belkhadir", type: "nurse", status: "available" },
        { name: "Zakaria Khattabi", type: "doctor", status: "out_of_office" },
        { name: "Hajar Bouhadi", type: "nurse", status: "out_of_office" }
    ];
    

    const medicins = [
        { name: "Paracetamol", price: 10, quantity: 100, usedNumberPerDay: 2 },
        { name: "Ibuprofen", price: 15, quantity: 150, usedNumberPerDay: 3 },
        { name: "Aspirin", price: 8, quantity: 200, usedNumberPerDay: 1 },
        { name: "Cetirizine", price: 20, quantity: 120, usedNumberPerDay: 1 },
        { name: "Amoxicillin", price: 12, quantity: 90, usedNumberPerDay: 3 },
        { name: "Ciprofloxacin", price: 18, quantity: 110, usedNumberPerDay: 2 },
        { name: "Metronidazole", price: 14, quantity: 80, usedNumberPerDay: 3 },
        { name: "Doxycycline", price: 16, quantity: 95, usedNumberPerDay: 2 },
        { name: "Azithromycin", price: 22, quantity: 75, usedNumberPerDay: 1 },
        { name: "Clarithromycin", price: 19, quantity: 65, usedNumberPerDay: 2 },
        { name: "Levofloxacin", price: 25, quantity: 70, usedNumberPerDay: 1 },
        { name: "Ranitidine", price: 10, quantity: 150, usedNumberPerDay: 2 },
        { name: "Omeprazole", price: 12, quantity: 140, usedNumberPerDay: 1 },
        { name: "Pantoprazole", price: 15, quantity: 130, usedNumberPerDay: 1 },
        { name: "Esomeprazole", price: 20, quantity: 120, usedNumberPerDay: 1 },
        { name: "Lansoprazole", price: 18, quantity: 100, usedNumberPerDay: 1 },
        { name: "Atorvastatin", price: 30, quantity: 80, usedNumberPerDay: 1 },
        { name: "Rosuvastatin", price: 28, quantity: 90, usedNumberPerDay: 1 },
        { name: "Simvastatin", price: 22, quantity: 110, usedNumberPerDay: 1 },
        { name: "Pravastatin", price: 25, quantity: 100, usedNumberPerDay: 1 },
        { name: "Hydrochlorothiazide", price: 8, quantity: 200, usedNumberPerDay: 1 },
        { name: "Spironolactone", price: 12, quantity: 150, usedNumberPerDay: 2 },
        { name: "Furosemide", price: 10, quantity: 180, usedNumberPerDay: 2 },
        { name: "Bumetanide", price: 14, quantity: 160, usedNumberPerDay: 2 },
        { name: "Amiodarone", price: 40, quantity: 70, usedNumberPerDay: 1 },
        { name: "Digoxin", price: 35, quantity: 80, usedNumberPerDay: 1 },
        { name: "Verapamil", price: 20, quantity: 100, usedNumberPerDay: 2 },
        { name: "Diltiazem", price: 22, quantity: 110, usedNumberPerDay: 2 },
        { name: "Losartan", price: 18, quantity: 120, usedNumberPerDay: 1 },
        { name: "Valsartan", price: 25, quantity: 100, usedNumberPerDay: 1 },
        { name: "Amlodipine", price: 12, quantity: 150, usedNumberPerDay: 1 },
        { name: "Lisinopril", price: 15, quantity: 140, usedNumberPerDay: 1 },
        { name: "Enalapril", price: 18, quantity: 130, usedNumberPerDay: 1 },
        { name: "Ramipril", price: 20, quantity: 120, usedNumberPerDay: 1 },
        { name: "Candesartan", price: 22, quantity: 110, usedNumberPerDay: 1 },
        { name: "Olmesartan", price: 24, quantity: 100, usedNumberPerDay: 1 },
        { name: "Methyldopa", price: 30, quantity: 80, usedNumberPerDay: 1 },
        { name: "Clonidine", price: 25, quantity: 90, usedNumberPerDay: 1 },
        { name: "Hydralazine", price: 20, quantity: 95, usedNumberPerDay: 2 },
        { name: "Nitroglycerin", price: 35, quantity: 85, usedNumberPerDay: 1 },
        { name: "Isosorbide", price: 28, quantity: 75, usedNumberPerDay: 1 },
        { name: "Warfarin", price: 18, quantity: 150, usedNumberPerDay: 1 },
        { name: "Heparin", price: 22, quantity: 140, usedNumberPerDay: 1 },
        { name: "Apixaban", price: 30, quantity: 100, usedNumberPerDay: 1 },
        { name: "Rivaroxaban", price: 35, quantity: 90, usedNumberPerDay: 1 },
        { name: "Dabigatran", price: 40, quantity: 80, usedNumberPerDay: 1 },
        { name: "Insulin", price: 50, quantity: 60, usedNumberPerDay: 2 },
        { name: "Metformin", price: 12, quantity: 180, usedNumberPerDay: 2 },
        { name: "Glipizide", price: 15, quantity: 160, usedNumberPerDay: 1 }
    ];
    const users = [
        { username: "Soukaina", password: "Sou551" },
        { username: "Elmehdi", password: "M3hd1" },
        { username: "Slimani", password: "Sl1m@ni" },
        { username: "Chakiri", password: "Ch@k1ri" },
        { username: "Badr", password: "B@dr24" },
        { username: "Admin", password: "@dm1n" },
    ];
    
    

    console.log(`Seeding staff data...`);
    await prisma.staff.createMany({
        data: staffMembers,
    });

    console.log(`Seeding medicins data...`);
    await prisma.medicins.createMany({
        data: medicins,
    });
    console.log("Seeding users data...");
await prisma.users.createMany({
  data: users,
});

    console.log("Database seeding completed!");
}
