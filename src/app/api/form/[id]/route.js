import Create from "@/model/create"
import connDb from "@/utils/connDb"
import { NextResponse } from "next/server"

export const GET = async (req, { params }) => {
    await connDb()

    const {id} = params
    // console.log(params);

    try{
        const data = await Create.findById(id)
        // console.log(data);
        return new NextResponse(JSON.stringify(data), { status: 200 })

    }catch(error){
        return new NextResponse(error, { status:500 })
    }

}


export const PATCH = async (request, { params }) => {
await connDb()

const { id } = params


try {
    const { userId, image, date, creator, company, packages, duration, location, km, by, bond, interview, rejected } = await request.json()

    const existingCreate = await Create.findById(id)

    if (!existingCreate) {
        return new Response("form is not found", { status: 404 });

    }


    existingCreate.image = image 
    existingCreate.date = date 
    existingCreate.creator = creator 
    existingCreate.company = company 
    existingCreate.packages = packages 
    existingCreate.duration = duration 
    existingCreate.location = location 
    existingCreate.km = km 
    existingCreate.by = by 
    existingCreate.bond = bond
    existingCreate.interview = interview
    existingCreate.rejected = rejected

    // console.log(userId);

    // console.log(newForm);

    await existingCreate.save()

    return new NextResponse('new form has been created', { status: 200 })
} catch (error) {
    return new NextResponse(error, { status: 500 })
}
}

export const DELETE = async (request, { params }) => {
await connDb()

const { id } = params

try {
    await Create.findByIdAndDelete(id)
    console.log('delete');

    return new NextResponse('form has been Deleted.', { status: 200 })

} catch (error) {
    return new NextResponse(error, { status: 500 })
}
}