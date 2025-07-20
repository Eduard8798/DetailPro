import {connectToDatabase} from "../../../../../lib/mongodb";

import {verifyToken} from "../../../../../lib/auth";
import Request from "../../../../../models/Request";
import User from "../../../../../models/User";

export async function GET(req) {
    try {
        await connectToDatabase();


        const { id, role } = verifyToken();

        let requests;
        if (role === 'admin') {
            requests = await Request.find().populate('user', 'phone name');
        } else {
            requests = await Request.find({ user: id });
        }

        return Response.json(requests, { status: 200 });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 401 });
    }
}

export async function POST(req) {
    try {
        await connectToDatabase();
        const body = await req.json();

        let userId = null;
        let userPhone = null;
        let userName = null;
        try {
            const { id } = verifyToken(req);
            userId = id;

            const user = await User.findById(id);
            userName = user.name ;
            userPhone = user.phone ;

        } catch (_) {

        }

        const newRequest = await Request.create({
            name: userName,
            phone: userPhone,
            message: body.message,
            user: userId,
        });

        return Response.json({ success: true, data: newRequest }, { status: 201 });
    } catch (error) {
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}



