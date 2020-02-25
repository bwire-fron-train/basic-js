module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members.filter(name => typeof name === 'string' && name.length !== 0)
      .map(name => name.trim()[0].toUpperCase())
      .sort()
      .join('');
  } else {
    return false;
  }
};