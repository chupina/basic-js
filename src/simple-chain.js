const CustomError = require("../extensions/custom-error");

const chainMaker = {
 
 
  getLength(){
    if (this.chain){
      return this.chain.length; 
    }else {
      return 0;
    }
   
  },
  addLink(value = ''){
        if(!this.chain || this.chain.length==0){
      this.chain = []; 
    }
      this.chain.push('( ' + value + ' )');
        return this;
  },

  removeLink(position){
    if(this.chain[position-1]){
     this.chain.splice(position-1, 1);
     return this; 
    }else{
      this.beforeError = this.chain;
      this.chain=[];
      throw new Error;
    }
   },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.chain.join('~~');
    this.chain = [];
    return res;
    }
};


module.exports = chainMaker;
