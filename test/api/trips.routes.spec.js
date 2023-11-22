const request= require('supertest');
const mongoose = require('mongoose');
const app = require('../../app')

describe('pruebas sobre la API', () =>{
    beforeAll(async () => {
        await mongoose.connect('mongodb://127.0.0.1/cruddani');
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });
    describe ('GET /api/trips', ()=>{

        let response;
        beforeEach(async()=>{
            response= await request(app).get('api/trips').send();
        })
    
        it('la ruta funciona',async () =>{
           
            
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })

        it('la peticion nos devuelve un array de trips',async () =>{
            expect(response.body).toBeInstanceOf (Array)
        })

    })
})