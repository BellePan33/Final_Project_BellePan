import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import './config.mjs';
import MakeupArtist from './models/MakeupArtist.mjs';
import Booking from './models/Booking.mjs';
import dayjs from 'dayjs';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose.connect(process.env.DSN);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/artists/new', (req, res) => {
  res.render('artist-new');
});

app.get('/customers/start', (req, res) => {
  res.render('customer-start');
});

app.get('/artists/portal', (req, res) => {
  res.render('artist-portal');
});

app.get('/bookings/new/:artistId', async (req, res) => {
  const artist = await MakeupArtist.findById(req.params.artistId);
  const customerName = req.query.customerName || '';

  const bookingDate = dayjs().format('YYYY-MM-DD');

  const slots = [];
  let current = dayjs().hour(5).minute(0).second(0);
  const end = dayjs().hour(12).minute(0).second(0);

  while (
    current.add(40, 'minute').isBefore(end) ||
    current.add(40, 'minute').isSame(end)
  ) {
    const next = current.add(40, 'minute');

    slots.push({
      value: `${bookingDate} ${current.format('h:mm A')} - ${next.format('h:mm A')}`,
      label: `${bookingDate} | ${current.format('h:mm A')} - ${next.format('h:mm A')}`
    });

    current = next;
  }

  res.render('booking-new', {
    artist,
    bookingDate,
    slots,
    customerName
  });
});

app.post('/artists', async (req, res) => {
  const { name, city, convention, specialty, contact } = req.body;

  await MakeupArtist.create({
    name,
    city,
    convention,
    specialty,
    contact
  });

  res.redirect('/artists');
});

app.get('/artists', async (req, res) => {
  const artists = await MakeupArtist.find({});
  const customerName = req.query.customerName || '';

  const formattedArtists = artists.map(artist => {
    const doc = artist.toObject();
    doc.formattedDate = dayjs(doc.createdAt).format('YYYY-MM-DD');
    return doc;
  });

  res.render('artists', {
    artists: formattedArtists,
    customerName
  });
});


app.post('/bookings', async (req, res) => {
  const { clientName, cosplayCharacter, slot, artistId } = req.body;

  await Booking.create({
    clientName,
    cosplayCharacter,
    slot,
    artist: artistId,
    status: 'booked'
  });

  res.redirect(`/my-bookings?clientName=${encodeURIComponent(clientName)}`);
});

  app.get('/my-bookings', async (req, res) => {
  const clientName = req.query.clientName || '';

  const bookings = await Booking.find({ clientName }).populate('artist');

  res.render('my-bookings', {
    clientName,
    bookings
  });
});



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
