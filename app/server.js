import cors from 'cors';
import express from 'express';

const PORT = process.env.PORT ? process.env.PORT : 9000;
const app = express();

app.use(cors());
app.use(express.static('public'));
app.listen(PORT);

console.log('Listening on port ' + PORT);
