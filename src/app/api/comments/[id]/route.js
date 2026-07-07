import dbCollectons from "@/app/lib/collectioins";
import connect from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export async function GET(request, { params }) {
     const { id } = await params;
     
     if(!id || id.length != 24) {
          return Response.json({
               status: 400,
               message: "Failed to retrive",
               data: null
          })
     }

     const query = { _id: new ObjectId(id) };

     const result = await connect(dbCollectons.COMMENTS).findOne(query);
     return Response.json({
          status: 200,
          message: "Comments retrived successfully",
          data: result
     })
}

export async function DELETE(request, { params }) {
     const { id } = await params;

     if(!id || id.length !== 24) {
          return Response.json({
               status: 400,
               message: "Failed to retrive",
               data: null
          })
     }
     
     try{
          const query = { _id: new ObjectId(id) };
          await connect(dbCollectons.COMMENTS).deleteOne(query);
          revalidatePath('/comments')
          return Response.json({
               status: 204,
               message: "This comment is delete successfully"
          })
     }catch(err) {
          console.error(err)
          return Response.json({
               status: 500,
               message: "Failed to delete comment",
               data: null
          })
     }
}



export async function PUT(request, { params }) {
     const { id } = await params;
     const body = await request.json();
     console.log("update comment server:", body)

     if(!id || id.length !== 24) {
          return Response.json({
               status: 400,
               message: "Failed to retrive",
               data: null
          })
     }

     try{
          const query = { _id: new ObjectId(id) };
          const result = await connect(dbCollectons.COMMENTS).updateOne(query, {
               $set: body
          });
          // console.log("put result:", result)

          if(result.modifiedCount === 1){
               revalidatePath('/comments')
               return Response.json({
                    status: 200,
                    message: 'Updated successfully',
                    data: result
               })
          }
     }catch(err) {
          console.error(err);
          return Response.json({
               status: 500,
               message: "Failed to update comment",
               data: null
          })
     }
}