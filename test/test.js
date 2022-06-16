import HPSorting from '../src/HPSorting';

test('test HPSorting', () => {
  const persons = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const sortedPersons = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = HPSorting(persons);
  expect(result).toEqual(sortedPersons);
});
