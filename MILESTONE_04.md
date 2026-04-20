Milestone 04 - Final Project Documentation
===

NetID
---
dp3905

Name
---
Belle Pan

Repository Link
---
https://github.com/BellePan33/Final_Project_BellePan

URL for deployed site 
---
https://final-project-bellepan.onrender.com

URL for form 1 (from previous milestone) 
---
https://final-project-bellepan.onrender.com/artists/new

Special Instructions for Form 1
---
This form is for makeup artists. Fill out the artist profile form and submit. After submitting, the app redirects to the artist list page.

URL for form 2 (for current milestone)
---
https://final-project-bellepan.onrender.com/bookings/new/[ARTIST_ID]

Special Instructions for Form 2
---
To test the booking form, first open the artist list page and choose an artist. Then use the Book button for that artist to open the booking form. Fill in the customer name, cosplay character, and time slot, then submit.

URL for form 3 (from previous milestone) 
---
https://final-project-bellepan.onrender.com/customers/start

Special Instructions for Form 3
---
This page is the customer portal. A customer can enter their name, browse artists, and later view their own bookings.

First link to github line number(s) for constructor, HOF, etc.
---
https://github.com/BellePan33/Final_Project_BellePan/blob/main/app.mjs#L89-L93

Second link to github line number(s) for constructor, HOF, etc.
---
https://github.com/BellePan33/Final_Project_BellePan/blob/main/app.mjs#L45-L61

Short description for links above
---
1. I used Array.prototype.map in the /artists route to transform artist documents into formatted objects for rendering.
2. I generated booking slot objects in the booking route for the booking form, so the page could display formatted date and time-slot options.

Link to github line number(s) for schemas (db.js or models folder)
---
https://github.com/BellePan33/Final_Project_BellePan/blob/main/models/MakeupArtist.mjs
https://github.com/BellePan33/Final_Project_BellePan/blob/main/models/Booking.mjs

Description of research topics above with points
---
2 points - Bootstrap: used Bootstrap classes and customized page layout for the homepage, artist list, artist form, booking form, and bookings page.
3 points - Day.js: used Day.js to format displayed dates and generate booking date / time-slot values.
3 points - Unit testing with JavaScript: used test code in the repository for application testing.
2 points - Additional server-side JavaScript module usage / deployment-related environment configuration with dotenv.

Links to github line number(s) for research topics described above (one link per line)
---
https://github.com/BellePan33/Final_Project_BellePan/blob/main/views/home.hbs
https://github.com/BellePan33/Final_Project_BellePan/blob/main/views/artist-new.hbs
https://github.com/BellePan33/Final_Project_BellePan/blob/main/views/artists.hbs
https://github.com/BellePan33/Final_Project_BellePan/blob/main/views/booking-new.hbs
https://github.com/BellePan33/Final_Project_BellePan/blob/main/views/my-bookings.hbs
https://github.com/BellePan33/Final_Project_BellePan/blob/main/app.mjs
https://github.com/BellePan33/Final_Project_BellePan/blob/main/config.mjs
https://github.com/BellePan33/Final_Project_BellePan/blob/main/test/artist.test.mjs

Optional project notes 
--- 
This project is a cosplay makeup booking web application. The homepage separates the experience for makeup artists and customers. Makeup artists can create a profile. Customers can browse artists, make a booking, and view their own bookings. The deployed app may take some extra time to wake up because it is hosted on Render free tier.

Attributions
---
Bootstrap documentation for layout, forms, cards, buttons, and grid:
https://getbootstrap.com/docs/5.3/getting-started/introduction/
https://getbootstrap.com/docs/5.3/forms/overview/
https://getbootstrap.com/docs/5.3/components/card/
https://getbootstrap.com/docs/5.3/components/buttons/
https://getbootstrap.com/docs/5.3/layout/grid/

Day.js documentation for formatting and date/time handling:
https://day.js.org/docs/en/display/format
https://day.js.org/docs/en/parse/parse