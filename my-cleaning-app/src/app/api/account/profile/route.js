import {connectToDatabase} from "../../../../../lib/mongodb";

import {verifyToken} from "../../../../../lib/auth";
import Request from "../../../../../models/Request";
import User from "../../../../../models/User";

// export async function GET(req) {
//     try {
//         await connectToDatabase();
//
//
//         const { id, role } = await verifyToken();
//
//         let requests;
//         if (role === 'admin') {
//             requests = await Request.find().lean();
//
//         } else {
//             requests = await Request.find({ user: id });
//         }
//
//         return Response.json(requests, { status: 200 });
//     } catch (error) {
//         return Response.json({ error: error.message }, { status: 401 });
//     }
// }
    export async function GET(req) {
    try {
        await connectToDatabase();


        const { id, role } = await verifyToken();

        const {searchParams} = new URL(req.url);
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 5;

        const skip = (page - 1 ) * limit;

        let total;

        let requests;
        if (role === 'admin') {
            total = await Request.countDocuments();
            requests = await Request.find()
                .skip(skip)
                .limit(limit)
                .lean();
        } else {
            total = await Request.countDocuments({ user: id });
            requests = await Request.find({ user: id })
                .skip(skip)
                .limit(limit)
                .lean();
        }
        return Response.json({
            requests,
            total,              // всего заявок
            page,               // текущая страница
            limit,              // количество на страницу
            totalPages: Math.ceil(total / limit),
                 // сами заявки
        }, { status: 200 });

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
            const { id } = await verifyToken();
            console.log('TOKEN ID:', id);
            userId = id;

            const user = await User.findById(id);
            if (!user) {
                console.log('❌ Пользователь не найден по ID:', id);
                return Response.json({ success: false, error: 'User not found' }, { status: 404 });
            }

            userName = user.name ;
            userPhone = user.phone ;

        } catch (e) {
            console.log('error',e)
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



