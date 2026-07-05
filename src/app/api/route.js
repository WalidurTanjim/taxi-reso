export async function GET() {
     return Response.json({
          status: 200,
          message: "Data retrived successfully",
          data: 'Hi pookie'
     })
}
