import { connectToDatabase } from '../../../../lib/mongodb';
import Request from '../../../../models/Request';


export async function POST(req) {
    try {
        await connectToDatabase();
        const body = await req.json();

        const newRequest = await Request.create({
            name: body.name,
            phone: body.phone,
            message: body.message,
        });

        return Response.json({ success: true, data: newRequest }, { status: 201 });
    } catch (error) {
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}


