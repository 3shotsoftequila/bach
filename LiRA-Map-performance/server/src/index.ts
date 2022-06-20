
import express, { Express } from "express";

import databaseQuery from './database'

import { RideData, RideMeta } from "./models";
import { getRides, getTest, getMeasurementData } from './queries'

import measurements from './measurements.json';
import fs from 'fs'

const PORT = process.env.PORT || 3001;

const app: Express = express();

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json({
  type: ['application/json', 'text/plain']
}))


app.get('/measurements', async (req: any, res: any) => {
	console.log("[GET /measurements]" );
    res.json( measurements );
} )



app.get("/trip_measurement", async (req: any, res: any) => {
  const tripID = req.query.tripID
  const measurement = req.query.measurement
  console.log("[GET /trip_measurement] Requested measurement ", measurement, " for id", tripID);
  const data: RideData = await databaseQuery<RideData>(getMeasurementData, tripID, measurement)
  res.json( data );
} )

app.get("/rides", async (req: any, res: any) => {
  console.log("[GET /all rides]");
  const data: RideMeta[] = await databaseQuery<RideMeta[]>(getRides, '')
  res.json( data )
} )




app.listen(PORT, () => {
  	console.log(`Server listening on ${PORT}`);
});