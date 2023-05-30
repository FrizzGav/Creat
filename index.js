function readCSV(filename) {
    const fileData = fs.readFileSync(filename, 'utf-8');
    const rows = fileData.trim().split('\n');
    const headers = rows[0].split(',');
    const data = [];
  
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i].split(',');
      const obj = {};
  
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = row[j];
      }
  
      data.push(obj);
    }
  
    return data;
  }
  
  // Загрузка данных из файла
  const filename = 'table.csv';
  const data = readCSV(filename);
  
  // 1. Вывод числа видов существ
  const numSpecies = data.length;
  console.log(Число видов существ: ${numSpecies});
  
  // 2.
  console.log('За 10 сильнейших')
  const sortedCreatures = data.sort((a, b) => b['Сила'] - a['Сила']);
  const ilit = sortedCreatures[0];
  const values = Object.values(ilit);
  const pipiska = values.join('').split('|');
  const price = Number(pipiska[7])*10;
  console.log(price);
  
  //3.
  console.log('За жирного');
  const sortedSquad = data.sort((a,b) => b['Здоровье'] - a['Здоровье']);
  const orkSquad = sortedSquad[0];
  const valuesOrk = Object.values(orkSquad);
  const popa = valuesOrk.join('').split('|');
  const priceSquad = Number(popa[5])*500;
  console.log(priceSquad);