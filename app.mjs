import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import './config.mjs';
import MakeupArtist from './models/MakeupArtist.mjs';

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
  res.render('artists', { artists });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
