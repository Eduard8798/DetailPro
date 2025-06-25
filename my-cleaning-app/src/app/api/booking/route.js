import { NextResponse} from "next/server";
const { connectToDatabase } = require('../../../../lib/mongodb');

import Booking from "../../../../models/Booking";

export async function GET() {
    await connectToDatabase();
    const bookings = await Booking.find();
    return NextResponse.json((bookings), {
        status: 200,
        headers: { "Content-Type": "application/json" }
    });
}

export async function POST(req) {
    await connectToDatabase();
    const data = await req.json();
    const newBooking = await Booking.create(data);
    return new Response(JSON.stringify(newBooking), {
        status: 201,
        headers: { "Content-Type": "application/json" }
    });
}
//todo посмотреть как добавить сюда (роут - контроллер + класс с обработкой ошибок)
