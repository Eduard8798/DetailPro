import {connectToDatabase} from "../../../../../../lib/mongodb";
import Request from "../../../../../../models/Request";
import {NextResponse} from "next/server";
import {verifyToken} from "../../../../../../lib/auth";

export async function DELETE(req, context) {
    try {
        const { params } = context; 
        const itemId = params.id;

        const { id: userId, role } = verifyToken(req);

        await Request.findByIdAndDelete(itemId);

        return NextResponse.json({ success: true, message: 'Request deleted' });
    } catch (error) {
        console.error("DELETE error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

