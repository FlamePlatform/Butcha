import "source-map-support/register";
import Butcha from "../dist/butcha";

var b = new Butcha();



b.describe("First Benchmark of Array", function() {
  let container;
  let index = 0;
  let size = 1000000;

  let b2 = new Butcha();
  b2.describe("String concat", function() {
    let str = "";
    let str_array = [];
    let size = 1000000;

    b2.it("using +=", function() {
      str += " ";
    }, size)

    b2.it("using +", function() {
      str = str + " ";
    }, size)

    b2.it("using array", function() {
      str_array.push(" ")
    }, size)
  })

  b.before(function() {
    container = [];
  })

  b.it("using push method on array", function() {
    container.push(index);
  }, size)


  b.it("using pop method on array", function() {
    container.pop();
  }, size);

})
b.run();
b.reporter.print()
