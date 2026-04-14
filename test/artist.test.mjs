import { expect } from 'chai';
import MakeupArtist from '../models/MakeupArtist.mjs';

describe('MakeupArtist Model', () => {
  it('should create a new artist with valid fields', () => {
    const artist = new MakeupArtist({
      name: 'Test Artist',
      city: 'NY',
      convention: 'Anime Expo'
    });
    expect(artist.name).to.equal('Test Artist');
  });
});