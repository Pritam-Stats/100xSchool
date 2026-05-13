import { prisma } from "./lib/prisma";
console.log("Hello via Bun!");


async function createUser() {
    
    //create a new user
    const user = await prisma.user.create({
        data: {
            username : "pritam",
            password: "abd",
            age: 18,
            tasks: ["one", "two", "three"],
            gender: "MALE"
        }
    })
    console.log("Created User", user);

};

async function findUser() {
    //all user
    const allUser = await prisma.user.findMany({
        where: {
            age: {gte: 18 },
            gender: "MALE" 
        }
    })
    console.log("Male users of 18 and abover", allUser);
}


// createUser()
//     .then(async () => {
//         console.log("Done");
//         await prisma.$disconnect();
//     })
//     .catch(async (e) => {
//         console.error(e);
//         await prisma.$disconnect();
//         process.exit(1);
//       });


async function create(){
    await createUser();
    await prisma.$disconnect();
}
async function find(){
    await findUser();
    await prisma.$disconnect();
}
find();
// create();

