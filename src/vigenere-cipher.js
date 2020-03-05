class VigenereCipheringMachine {
    constructor(direct) {
      this.reverse = direct === undefined ? false : !direct;
    }

    alphabet() {
      return 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();  
    }
    table() {
      function shift(str, idx) {
        return str.substr(idx) + str.substr(0, idx);
      }

      const a = this.alphabet();
      return a.split('').map(l => shift(a, a.indexOf(l)));
    }

    normalizeKey(key, msg) {
      const a = this.alphabet();
      const k = key.toUpperCase();
      let idx = 0;
      return msg.split('').map(l => a.includes(l) ? k[idx++ % k.length] : l).join('');
    }

    encrypt(message, key) {
      if (!message || !key) throw new Error; 
      const a = this.alphabet();
      const m = message.toUpperCase();
      const k = this.normalizeKey(key, m);
      const r = m.toUpperCase()
        .split('')
        .map((l, i) => a.includes(l) ? this.table()[a.indexOf(k[i])][a.indexOf(l)] : l);
      return (this.reverse ? r.reverse() : r).join('');
    }

    decrypt(message, key) {
      if (!message || !key) throw new Error; 
      const a = this.alphabet();
      const m = message.toUpperCase();
      const k = this.normalizeKey(key, m);
      const r = k.split('')
        .map((l, i) => a.includes(l) ? a[this.table()[a.indexOf(l)].indexOf(m[i])] : l);
        return (this.reverse ? r.reverse() : r).join(''); 
    }
}

module.exports = VigenereCipheringMachine;