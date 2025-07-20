
import jwt from 'jsonwebtoken';
import {cookies} from "next/headers";

export async function verifyToken(req) {
    const token = (await cookies()).get('token')?.value;

    if (!token) {
        throw new Error('Unauthorized');
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        return decoded;
    } catch (error) {
        throw new Error('Invalid token');
    }
}
