import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";


const CreateBookingService = async(payLoad:TBooking)=>{
    const totalAmount = '2000 tk'
    payLoad.totalAmount = totalAmount

    const result = await Booking.create(payLoad);
    return result;
}

const getAllBookings= async()=>{
    const result = await Booking.find();
    return result;
}

const getSingleBooking = async(id:string)=>{
    const result = await Booking.findById(id);
    return result;
}

const updateBooking = async(id:string,payLoad:TBooking)=>{
    const result = await Booking.findByIdAndUpdate(id,payLoad);
    return result;
}

const deleteBooking = async(id:string)=>{
    const result = await Booking.findByIdAndDelete(id);
    return result;
}





export const BookingServices = {
    CreateBookingService,
    getAllBookings,
    getSingleBooking,
    updateBooking,
    deleteBooking,
}