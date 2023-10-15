import Create from "@/model/create"
import connDb from "@/utils/connDb"
import { NextResponse } from "next/server"

export const GET = async (req, res) => {
    await connDb()

    try{
        const data = await Create.find()
        return new NextResponse(JSON.stringify(data), { status: 200 })

    }catch(error){
        return new NextResponse(error, { status:500 })
    }

}

export const POST = async (req, res) => {
    await connDb()

    try{
        const { creator, date, image, company, packages, duration, location, km, by, bond, interview, rejected } = await req.json()

        const newJob = await Create.create({
            creator,
            image,
            date,
            company,
            packages,
            duration,
            location,
            km,
            by,
            bond,
            interview,
            rejected
        })

        // console.log(newJob);

        await newJob.save()

        return new NextResponse('new post has been created', { status: 200 })

    }catch(error){
        return new NextResponse(error, {status:500})
    }
}