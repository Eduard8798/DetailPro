import {connectToDatabase} from "../../../../../../lib/mongodb";
import Request from "../../../../../../models/Request";
import {NextResponse} from "next/server";
import {verifyToken} from "../../../../../../lib/auth";

export async function DELETE(req, context) {
    try {
        const { params } = context; // <- нужно явно извлечь params
        const itemId = params.id;

        const { id: userId, role } = verifyToken(req);

        // const item = await Request.findById(itemId);
        //
        // if (role !== 'admin' && item.user.toString() !== userId) {
        //     return NextResponse.json({ success: false, message: 'Access denied' }, { status: 403 });
        // }

        await Request.findByIdAndDelete(itemId);

        return NextResponse.json({ success: true, message: 'Request deleted' });
    } catch (error) {
        console.error("DELETE error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

