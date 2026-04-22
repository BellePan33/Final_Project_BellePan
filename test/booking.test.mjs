import { expect } from 'chai';
import mongoose from 'mongoose';
import Booking from '../models/Booking.mjs';

describe('Booking Model', () => {
  it('should create a booking with valid fields', () => {
    const booking = new Booking({
      clientName: 'Iris',
      cosplayCharacter: 'Frieren',
      slot: '2026-04-20 5:00 AM - 5:40 AM',
      artist: new mongoose.Types.ObjectId()
    });

    expect(booking.clientName).to.equal('Iris');
    expect(booking.cosplayCharacter).to.equal('Frieren');
    expect(booking.status).to.equal('booked');
  });

  it('should be invalid without a clientName', () => {
    const booking = new Booking({
      cosplayCharacter: 'Frieren',
      slot: '2026-04-20 5:00 AM - 5:40 AM',
      artist: new mongoose.Types.ObjectId()
    });

    const err = booking.validateSync();
    expect(err.errors.clientName).to.exist;
  });

  it('should be invalid without a cosplayCharacter', () => {
    const booking = new Booking({
      clientName: 'Iris',
      slot: '2026-04-20 5:00 AM - 5:40 AM',
      artist: new mongoose.Types.ObjectId()
    });

    const err = booking.validateSync();
    expect(err.errors.cosplayCharacter).to.exist;
  });

  it('should be invalid without an artist', () => {
    const booking = new Booking({
      clientName: 'Iris',
      cosplayCharacter: 'Frieren',
      slot: '2026-04-20 5:00 AM - 5:40 AM'
    });

    const err = booking.validateSync();
    expect(err.errors.artist).to.exist;
  });
});