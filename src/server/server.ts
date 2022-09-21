import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';
import routes from './routes';
import { configurePassport } from './middlewares/passport-strategies.mw';


const app = express();


//middleware

configurePassport(app);
app.use(express.static('public'));
app.use(morgan('dev')); //remember to do 'npm i morgan @types/morgan' 
app.use(express.json()); //body parser
app.use( routes); //this was originally /api, routes
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));  //this is really only necessary for fullstack


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));

