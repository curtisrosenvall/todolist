import React from "react";
import { render } from "react-dom";
import {App} from "./App";
import './App.scss'
import {HashRouter} from 'react-router-dom'

render(<HashRouter><App /></HashRouter>, document.getElementById("root"));
