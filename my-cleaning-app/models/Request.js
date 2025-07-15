import mongoose from 'mongoose';
const { Schema } = mongoose;

const requestSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String },
    createdAt: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.models.Request || mongoose.model('Request', requestSchema);
