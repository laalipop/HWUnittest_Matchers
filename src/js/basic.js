export default function sortByHealth(obj) {
  obj.sort((a, b) => (a.health < b.health ? 1 : -1));
  return obj;
}
