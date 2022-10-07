# Green Room
Team Members: Chris Ou, Jordan Jennings, and Eric Jubera
</br>
Phase 3: Ruby
</br>
</br>
![](./src/plantspage.gif)

## Overview
Green Room is an interactive plant expirience that allows users to search for plants, add plants to their rooms, and see when their plants were watered. The motivation behind this project was to create a fun visual for plants owners to easily keep track of their many plants. Green room is meant to act as a replica of your own plant set up at home!
</br>
</br>
![this is an image](./src/roomspage.gif)

## What It Does
The frontend of this project is built with React. Plants can be searched by name and filtered by difficulty of care. Plants can be added to room of choice. On the bottom of the Plant page, a new plant can be added and saved to the database. Within the Rooms page, a user can keep track of when their plants were last watered and choose to water their plants. Users also have the options to add new rooms, delete rooms, and delete plants inside of rooms.
</br>
</br>

![this is an image](./src/ezgif.com-gif-maker.gif)
</br>
</br>

## How It Functions
The main functionality is built using fetch requests to our backend server to handle all CRUD capabilities. The three tables being interacted with by the frontend are Rooms, Plants, and Added_Plants. These three tables represent a many-to-many relationship in our database. The database and routes are being handle by Active Records, Rake, and Sinatra. 
</br>
</br>

## How to Run the Project
The app requires you to install dependencies and run a local server. Read directions on how to get the backend started at: https://github.com/jordanje/green-room-backend. Fork and download both repositories to your computer to get the site fully functioning.

```
$ npm install 
$ npm start
```

</br>
