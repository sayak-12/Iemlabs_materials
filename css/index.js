const express = require("express");
const xlsx = require("xlsx");

const app = express();
const workbook = xlsx.readFile('data.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet);

app.get('/api/data', (req, res) => {
    res.json(data);
  });
  
  const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});