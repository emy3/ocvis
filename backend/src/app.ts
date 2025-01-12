import { Express, Request, Response } from "express";
import routes from "./routes";

const express = require('express');
const app = express();
const port = 3001;

// mount the routes on the /api patch
app.use('/api', routes);

app.get('/', (req: Request, res: Response) => {
    res.send('OceonView Miencraft Server Dash API')
});

app.listen(port, () => {
    console.log('Server is running at localhost:${port}')
});