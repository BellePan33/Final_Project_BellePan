import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true,
    trim: true
  },
  cosplayCharacter: {
    type: String,
    required: true,
    trim: true
  },
  slot: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'booked'
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MakeupArtist',
    required: true
  }
});

const Booking = mongoose.model('Booking', BookingSchema);

export default Booking;