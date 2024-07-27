function totalArea(size) {
  /* kodlar buraya */
  let area = 0;
  for (let i = 0; i < size.length; i++) {
    /*
    let array = size[i];
    area += array[0] * array[1];
    */
    let areaS = 1;
    for (let j = 0; j < size[i].length; j++) {
      areaS *= size[i][j];
    }
    area += areaS;
  }

  return area;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = totalArea;
