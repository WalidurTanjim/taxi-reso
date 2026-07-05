import connect from "@/app/lib/dbConnect";

export async function GET(request, { params }) {
     const { id } = await params;
     
     if(!id || id.length != 24) {
          return Response.json({
               status: 400,
               message: "Failed to retrive",
               data: null
          })
     }

     const result = await connect('comments').findOne();
     return Response.json({
          status: 200,
          message: "Comments retrived successfully",
          data: result
     })
}

