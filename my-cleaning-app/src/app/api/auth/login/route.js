import { connectToDatabase } from '../../../../../lib/mongodb';
// import { connectToDatabase } from '@/lib/mongodb'

import User from '../../../../../models/User'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(req) {
    await connectToDatabase();
    const { phone, password } = await req.json();

    const user = await User.findOne({ phone });
    if (!user) {
        return Response.json({ error: 'Invalid Login' }, { status: 401 });
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
        return Response.json({ error: 'Invalid password' }, { status: 401 });
    }

    const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );

    return Response.json({ token, role: user.role, phoneUser: user.phone, useName:user.name }, { status: 200 });
}
