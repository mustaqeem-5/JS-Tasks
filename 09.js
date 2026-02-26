import {
  rightParamid,
  leftParamid,
  centerParamid,
  inverserightParamid,
  inverseleftParamid,
  inversecenterParamid
} from "./07.js";

function callPyramids(rows, symbol, type) {
  switch (type) {
    case "rightParamid":
      rightParamid(rows, symbol);
      break;

    case "leftParamid":
      leftParamid(rows, symbol);
      break;

    case "centerParamid":
      centerParamid(rows, symbol);
      break;

    case "inverserightParamid":
      inverserightParamid(rows, symbol);
      break;

    case "inverseleftParamid":
      inverseleftParamid(rows, symbol);
      break;

    case "inversecenterParamid":
      inversecenterParamid(rows, symbol);
      break;

    default:
      console.log("Invalid pyramid type");
  }
}

callPyramids(5, "$", "inverseleftParamid");