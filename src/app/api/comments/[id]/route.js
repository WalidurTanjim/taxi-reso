import dbCollectons from "@/app/lib/collectioins";
import connect from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

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
     
     const query = { _id: new ObjectId(id) };
     await connect(dbCollectons.COMMENTS).deleteOne(query);
     return Response.json({
          status: 204,
          message: "This comment is delete successfully"
     })
}
