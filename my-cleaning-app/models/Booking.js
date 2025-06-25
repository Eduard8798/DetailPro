import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    time: { type: String, required: true },
    workType: { type: String, required: true }, // Полная/частичная чистка
    carType: { type: String, required: true }, // Тип кузова
    number: { type: String, required: true },
    interiorMaterial: { type: String, required: true }, // Материал салона
}, { timestamps: true });

export default mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
