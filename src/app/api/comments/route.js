import dbCollectons from "@/app/lib/collectioins";
import connect from "@/app/lib/dbConnect";

export async function GET() {
     const result = await connect(dbCollectons.COMMENTS).find().toArray();
     return Response.json({
          status: 200,
          message: 'Comments retrived successfully',
          data: result
     })
}
