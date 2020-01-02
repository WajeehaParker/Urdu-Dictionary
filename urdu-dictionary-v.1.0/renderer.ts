// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import {View} from "./source/View";
import {Tester} from "./source/Tester";

//const fs = require("fs");
const app = require("electron").remote.app;
var view = new View();
let test = new Tester();
test.testTrans()
