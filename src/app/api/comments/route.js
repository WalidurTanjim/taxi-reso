import dbCollectons from "@/app/lib/collectioins";
import connect from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET() {
     const result = await connect(dbCollectons.COMMENTS).find().toArray();
     return Response.json({
          status: 200,
          message: 'Comments retrived successfully',
          data: result
     })
}


export async function POST(request) {
     const data = await request.json();
     
     if(!data) {
          return Response.json({
               status: 400,
               message: "Please provide a message",
               data: null
          })
     }

     const result = await connect(dbCollectons.COMMENTS).insertOne(data);
     if(!result.insertedId) {
          return Response.json({
               status: 500,
               message: "Comment not submitted",
               data: null
          })
     }

     revalidatePath('/comments')
     return Response.json({
          status: 200,
          message: "Comment submitted successfully",
          data: result
     })
}