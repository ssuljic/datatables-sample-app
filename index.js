const express = require('express')
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/data', (req, res) => {
  res.json((
    {
      "draw": 1,
      "recordsTotal": 4,
      "recordsFiltered": 4,
      "data": [
        {
          DT_RowId: 1,
          first_name: "Airi",
          last_name: "Satou",
          position: "Accountant",
          office: "Tokyo",
          start_date: "28th Nov 08",
          salary: "$162,700"
        },
        {
          DT_RowId: 2,
          first_name: "Airi",
          last_name: "Satou",
          position: "Accountant",
          office: "Tokyo",
          start_date: "28th Nov 08",
          salary: "$162,700"
        },
        {
          DT_RowId: 3,
          first_name: "Airi",
          last_name: "Satou",
          position: "Accountant",
          office: "Tokyo",
          start_date: "28th Nov 08",
          salary: "$162,700"
        },
        {
          DT_RowId: 4,
          first_name: "Airi",
          last_name: "Satou",
          position: "Accountant",
          office: "Tokyo",
          start_date: "28th Nov 08",
          salary: "$162,700"
        },
      ]
    }
  ))
});

app.use('/assets', express.static('assets'))

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
