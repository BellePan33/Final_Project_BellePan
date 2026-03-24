Project Name: Anime Cosplay Makeup Booking Website

## Background and Sources of Inspiration: 
    My hobby is cosplay. Before every anime convention, as a cosplayer, I need to book a professional makeup artist to apply my "cosplay makeup." However, this process is currently quite cumbersome and lacks transparency. I have to direct message makeup artists individually to inquire about their current schedules—checking for available slots—before I can finally confirm whether to book their services. Given how tedious this procedure is, I now intend to design a streamlined booking website to simplify the process. My vision is to create a platform tailored specifically for makeup artists and clients (cosplayers). Upon entering the site, users would select their role. If you are a makeup artist, you can complete your profile specifying your city of operation and which specific conventions you are accepting bookings for—and then list your available time slots (including specific dates and times). For instance, if a makeup artist typically requires 40 minutes to complete a single look, and their total availability spans from 5:00 AM to 12:00 PM, the system could segment this block into individual 40-minute slots—e.g., 5:00–5:40 AM continuing in this manner until 12:00 PM. The website would then visually display which of these slots have already been booked and which remain available for reservation. For clients, the process would be equally intuitive: they could simply click to select a makeup artist working at a specific convention, visually identify the artist's available time slots, and proceed to book independently—starting by selecting their desired time slot and then clearly specifying the cosplay character they intend to portray.

## Requirements:
    ### Core Features:
        - A makeup artist can create a profile.
        - A makeup artist can enter their city.
        - A makeup artist can list which convention they are available for.
        - A makeup artist can add available appointment time slots.
        - A user can browse makeup artists.
        - A user can view a makeup artist’s profile.
        - A user can see which time slots are available.
        - A user can book one available time slot.
        - A booked time slot should no longer appear as available.
        - A booking should store the client’s name and cosplay character.

    ### Data Model:

        I plan to start with two mongoose schemas:

        1. `MakeupArtist`
        2. `Booking`

        ### Sample Document: MakeupArtist

        ```js
        {
            name: "Mika",
            city: "New York",
            convention: "Anime NYC",
            contact: "@mika_makeup",
            availableSlots: [
                "2026-11-20 05:00",
                "2026-11-20 05:40",
                "2026-11-20 06:20"
            ]
        }

    ### Sample Document: Booking:
        {
            clientName: "Belle",
            cosplayCharacter: "Makima in Chainsaw Man",
            convention: "Anime NYC",
            slot: "2026-11-20 05:40",
            status: "booked",
            artist: "ObjectId(MakeupArtist)"
        }

        This document represents one booking made by a client. It stores who booked the appointment, which cosplay character they plan to wear, the selected time slot, and which makeup artist the booking belongs to.

## Document References:
    Each Booking references one MakeupArtist.
    One MakeupArtist can have many Booking documents.
    This is a one-to-many relationship.


## User Stories:
    As a makeup artist, I want to create a profile so that cosplayers can find my service.
    As a makeup artist, I want to list my convention and city so that clients know where I will be working.
    As a makeup artist, I want to add available appointment time slots so that clients can see when I am free.
    As a cosplayer, I want to browse makeup artists so that I can find someone for my convention.
    As a cosplayer, I want to view available time slots so that I can choose a convenient appointment.
    As a cosplayer, I want to submit a booking request so that I can reserve a slot for my cosplay makeup.
    As a cosplayer, I want to include my cosplay character so that the makeup artist knows what kind of look I need.

## Research Topics:
    1. Bootstrap (2 points)
    2. Dayjs or Date-fns (a JavaScript date and time library).(not sure but maybe 3 points in my final project)
    3. Mocha tests (3 points)
    4. FullCalendar or custom slot display (Use a client-side JavaScript library or module that we did not cover in class)(maybe 2 points)