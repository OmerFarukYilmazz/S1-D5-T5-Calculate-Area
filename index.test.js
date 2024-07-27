const totalArea = require('./index.js');
// const totalArea = require('./solution.js');

describe('Toplam Alan Hesabı Testleri', () => {
  test('[[3, 5],[2, 8],[3, 12]] için 67 dönüyor mu?', () => {
    expect(
      totalArea([
        [3, 5],
        [2, 8],
        [3, 12],
      ])
    ).toBe(67);
  });

  test('[[1,100], [2,10], [3,40]] için 240 dönüyor mu?', () => {
    expect(
      totalArea([
        [1, 100],
        [2, 10],
        [3, 40],
      ])
    ).toBe(240);
  });

  test('Fonksiyonun dönüş değeri number mı?', () => {
    const result = totalArea([
      [3, 5],
      [2, 8],
      [3, 12],
    ]);
    expect(typeof result).toBe('number');
  });
});
