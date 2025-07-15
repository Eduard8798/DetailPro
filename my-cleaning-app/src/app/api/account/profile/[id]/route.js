import {connectToDatabase} from "../../../../../../lib/mongodb";
import Request from "../../../../../../models/Request";
import {NextResponse} from "next/server";
import {verifyToken} from "../../../../../../lib/auth";

export async function DELETE(req, { params }) {
    try {
        await connectToDatabase();

        const { id,role } = verifyToken(req);
        const itemId = params.id;

        const item = await Request.findById(itemId);

        if (role !== 'admin' && item.user.toString() !== id) {
            return NextResponse.json({ success: false, message: 'Request not found' }, { status: 404 });
        }
        await Request.findByIdAndDelete(itemId)

        return NextResponse.json({ success: true, message: 'Request deleted' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
