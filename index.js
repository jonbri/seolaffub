#!/usr/bin/env node

var i = 0,
  num = process.argv[2],
  olaffubString = "";

for (; i < num; i++) {
  olaffubString += "olaffub";
  if (i < (num - 1)) {
    olaffubString += " ";
  }
}

if (olaffubString !== "") {
  console.log(olaffubString);
}
