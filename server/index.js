const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const json2csv = require('json2csv');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.post('/contest/submit', (req, res) => {
  var newLine = '\r\n';

  var fields = ['name', 'email'];

  var toCsv = {
    data: req.body,
    fields,
    hasCSVColumnTitle: false
  };

  fs.stat('./formList.csv', function(err, stat) {
    let csv = json2csv(toCsv) + newLine;

    if (err === null) {
      console.log('File exists');

      //write the actual data and end with newline
      fs.appendFile('./formList.csv', csv, function(err) {
        if (err) throw err;
        console.log('The data was appended to file!');
      });
    } else {
      console.log('New file, writing headers with data');
      fields = fields + newLine + csv;

      fs.writeFile('./formList.csv', fields, function(err, stat) {
        if (err) throw err;
        console.log('file saved');
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is up on port: ${PORT}`);
});
