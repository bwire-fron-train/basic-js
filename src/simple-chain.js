const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (typeof value !== 'undefined') {
      this.chain.push('( ' + value + ' )'); 
    } else {
      this.chain.push('()');
    }
    return this;
  },
  removeLink(position) {
    console.log('Length:', this.chain.length);
    if (position <= 0 || position > this.chain.length || isNaN(position)) {
      this.chain = [];
      throw new Error;
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result; 
  }
};

module.exports = chainMaker;

//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4));