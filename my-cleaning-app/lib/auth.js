
import jwt from 'jsonwebtoken';

export function verifyToken(req) {
    const authHeader = req.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new Error('Unauthorized');
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        return decoded;
    } catch (error) {
        throw new Error('Invalid token');
    }
}
