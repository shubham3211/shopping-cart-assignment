let fs = require('fs');
let path = require('path');

fs.readFile(path.join(module.filename, "../b.txt"), "utf-8", (err, data) => {
  data = data.split(";\n");
  data.forEach((ele, index) => {
    if(ele.split('-').length>1){
      ele = ele.split("-");
      ele[1]=String.fromCharCode(ele[1][0].charCodeAt(0)-32)+ele[1].split("").slice(1).join("");
      console.log(ele);
      ele=ele.join("");
    }
    data[index]=ele;
  })
  console.log(data);
})