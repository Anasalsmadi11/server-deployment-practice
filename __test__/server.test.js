'use strict'

const server=require("../src/server")
const supertest= require("supertest")
const request= supertest(server.app)

describe("Api server", ()=>{
    it("getting data from home route", async()=>{
        const response= await request.get("/")
        expect(response.status).toEqual(200)
        expect(response.text).toEqual("welcome to home page")
    })
    it("testing data route" ,async()=>{
        const response=await request.get("/data")
        expect(response.status).toEqual(200)
        expect(typeof response.body).toEqual("object")
    })
    it("testing not found routes" ,async()=>{
        const response=await request.get("/jsaofia")
        expect(response.status).toEqual(404)
 
    })
})