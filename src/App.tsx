import React from "react";
import { Provider as ReduxProvider } from "react-redux";

import store from './redux/configureStore';

import "./styles.css";

import JobDataEntryPage from "./JobDataEntry/JobDataEntryPage";

export default function App(): React.ReactElement {
  return (
		<ReduxProvider store={store}>
   	 <div className="App">
   	   <JobDataEntryPage />
			</div>
		</ReduxProvider>
  );
}
