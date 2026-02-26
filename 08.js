import {
  rightParamid,
  leftParamid,
  centerParamid,
  inverserightParamid,
  inverseleftParamid,
  inversecenterParamid
} from "./07.js";


function callPyramid(rows, symbol, type) {
  if (type === "rightParamid") {
    rightParamid(rows, symbol);
  }
  else if (type === "leftParamid") {
    leftParamid(rows, symbol);
  }
  else if (type === "centerParamid") {
    centerParamid(rows, symbol);
  }
  else if (type === "inverserightParamid") {
    inverserightParamid(rows, symbol);
  }
  else if (type === "inverseleftParamid") {
    inverseleftParamid(rows, symbol);
  }
  else if (type === "inversecenterParamid") {
    inversecenterParamid(rows, symbol);
  }
}
callPyramid(5, '$', "centerParamid");
callPyramid(5, '$', "inversecenterParamid");


