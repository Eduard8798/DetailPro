
import jwt from 'jsonwebtoken';
import {cookies} from "next/headers";

// export async function verifyToken() {
//     const token = (await cookies()).get('token')?.value;
//
//     if (!token) {
//         throw new Error('Unauthorized');
//     }
//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//
//         return decoded;
//     } catch (error) {
//         throw new Error('Invalid token');
//     }
// }
export async function verifyToken() {
    const token = (await cookies()).get('token')?.value;
    console.log('💬 TOKEN FROM COOKIES:', token);

    if (!token) {
        throw new Error('Unauthorized');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('✅ TOKEN PAYLOAD:', decoded);
        return decoded;
    } catch (error) {
        console.error('❌ JWT Error:', error);
        throw new Error('Invalid token');
    }
}
