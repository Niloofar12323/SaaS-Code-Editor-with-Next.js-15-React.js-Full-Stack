import { httpRouter } from "convex/server";
import {httpAction} from "./_generated/server"
import { request } from "http";

const http = httpRouter();


http.route({
    path:"/clerk-webhook",
    method: "POST",

handle: httpAction(async(ctx,request)=>{
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
    if (!webhookSecret){
        throw new Error("Missing CLERK_WEBHOOK_SECRET enviroment variable");
    }
})

})

