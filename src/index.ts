import { PrismaClient } from "@prisma/client";
import { create } from "domain";
import { title } from "process";

const client = new PrismaClient();

async function createUser(){
    await client.user.create({
        data : {
            username : "pawanNew",
            password : "asdfg;lkj",
            age : 60,
            city : "delhi",
            todos : {
                create : [
                    {
                        title : "todays work",
                        content : "learn nextjs",
                        done : true
                    }
                ]
            }
        }
    });
};

createUser();