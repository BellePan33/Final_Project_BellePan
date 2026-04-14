import mongoose from 'mongoose';

const MakeupArtistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  convention: {
    type: String,
    required: true,
    trim: true
  },
  specialty: {
    type: String,
    trim: true
  },
  contact: {
    type: String,
    trim: true
  },
  availableSlots: [String],
  createdAt: { type: Date, default: Date.now }
});

const MakeupArtist = mongoose.model('MakeupArtist', MakeupArtistSchema);
export default MakeupArtist;