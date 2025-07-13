import { connectToDatabase } from '../../../../../lib/mongodb';
// import { connectToDatabase } from '@/lib/mongodb'
import User from '../../../../../models/User'
import bcrypt from 'bcrypt';


export async function POST (req) {
    await connectToDatabase();
    const {name,phone,password} = await req.json();

    const existingUser = await User.findOne({ phone });
    if (existingUser) {
        return Response.json({ error: 'User already exists' }, { status: 400 });
    }

    const passwordHash = await bcrypt.hash(password, 3);
    const newUser = await User.create({ name,phone, passwordHash });
    return Response.json({ message: 'Registration successful',user: newUser }, { status: 201 });
}
