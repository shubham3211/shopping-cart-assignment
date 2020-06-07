let fs = require('fs');
let path = require('path');

let relativePath = path.join(module.filename, "../b.txt");
console.log(relativePath);

let data;

fs.readFile(relativePath, 'utf8', (err, output) => {
  data=output;
  console.log(typeof data);
  data = data.split("\n");
  data = data.join("");
  data = data.split(",");
  data.forEach((ele, i) => {
    ele=ele.split(":");
    let property = ele[0];
    property=property.split("");
    for(let i=0;i<property.length;i++){
      if(property[i].charCodeAt(0)>=65 && property[i].charCodeAt(0)<=90){
        property[i]="-"+String.fromCharCode(property[i].charCodeAt(0)+32)
      }
    }
    ele[0]=property.join("");
    data[i]=ele.join(":").trim();
  })
  data = data.join(";\n");
  console.log(data);
});
