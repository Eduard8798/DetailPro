import { connectToDatabase } from "@/lib/mongodb";
import Booking from "@/models/Booking";

export async function GET() {
    await connectToDatabase();
    const bookings = await Booking.find();
    return Response.json(bookings);
}

export async function POST(req) {
    await connectToDatabase();
    const data = await req.json();
    const newBooking = await Booking.create(data);
    return Response.json(newBooking);
}
