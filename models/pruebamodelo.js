const mongoose = require('mongoose');
const Trip = require ('../models/trip.model');

(async() =>{
    await mongoose.connect('mongodb://127.0.0.1/cruddani');

    const newTrip=await Trip.create({
        name: 'prueba de viaje',
        description:'prueba de descripcion',
        destination:'Dubai',
        category: 'familiar',
        star_date: '2023-11-21'
    });
    console.log(newTrip);
}) ();