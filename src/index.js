class Sorter {
  constructor() {
    this.array=[];
    this.comparator = function(a,b){ return a - b; }
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
      return this.array;
  }

  sort(indices) {
    var tempArr=[]
    for(var i = 0; i < indices.length; i++){
      tempArr.push(this.array[indices[i]]);
    }

    tempArr.sort(this.comparator);

    for(var i = 0; i < indices.sort().length; i++){
      this.array[indices[i]]=tempArr[i];
      }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;