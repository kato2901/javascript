// オブジェクトの作成

function Meter(
  arg1,   //m
  arg2,   //cm
  arg3,   //mm
) {
  this.m = arg1;
  this.cm = arg2;
  this.mm = arg3;

  this.toString = function() {
    var work = this.m + "m" + this.cm + "cm" + this.mm + "mm";
    return work;
  }
}

var long = new Meter(1,80,5);
document.write(long.toString());

// mmにして値を返す

function Meter(
  arg1,   //m
  arg2,   //cm
  arg3,   //mm
) {
  this.m = arg1;
  this.cm = arg2;
  this.mm = arg3;

  this.toString = function() {
    var work = this.m + "m" + this.cm + "cm" + this.mm + "mm";
    return work;
  }
  this.getMillimeter = function() {
    var work = 1000 * this.m + 10 * this.cm + this.mm;
    return work;
  }
}

var x = new Meter(1, 80, 5);
document.write(x.getMillimeter() + "mm");