export default function HPSorting(list) {
  return list.sort((a, b) => b.health - a.health);
}
