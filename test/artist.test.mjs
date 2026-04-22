import { expect } from 'chai';
import MakeupArtist from '../models/MakeupArtist.mjs';

describe('MakeupArtist Model', () => {
  it('should create a new artist with valid fields', () => {
    const artist = new MakeupArtist({
      name: 'Test Artist',
      city: 'NY',
      convention: 'Anime Expo',
      specialty: 'Fantasy makeup',
      contact: '@testartist'
    });

    expect(artist.name).to.equal('Test Artist');
    expect(artist.city).to.equal('NY');
    expect(artist.convention).to.equal('Anime Expo');
  });

  it('should be invalid without a name', () => {
    const artist = new MakeupArtist({
      city: 'NY',
      convention: 'Anime Expo'
    });

    const err = artist.validateSync();
    expect(err.errors.name).to.exist;
  });

  it('should be invalid without a city', () => {
    const artist = new MakeupArtist({
      name: 'Test Artist',
      convention: 'Anime Expo'
    });

    const err = artist.validateSync();
    expect(err.errors.city).to.exist;
  });

  it('should be invalid without a convention', () => {
    const artist = new MakeupArtist({
      name: 'Test Artist',
      city: 'NY'
    });

    const err = artist.validateSync();
    expect(err.errors.convention).to.exist;
  });
});