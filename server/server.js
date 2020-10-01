const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const championsRouter = require('./routes/champions.router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('build'));

// ROUTES!
app.use('/api/champions', championsRouter);
//

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT: ${PORT}`);
});
