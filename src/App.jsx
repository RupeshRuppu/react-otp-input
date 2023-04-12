import React, { useState } from "react";
import CustomInput from "./components/CustomInput";

function App() {
	const [code, setCode] = useState("");

	console.log(code);

	return (
		<div className="w-screen h-screen flex justify-center items-center ">
			<CustomInput
				count={4}
				onFillEnd={() => console.log("filled")}
				onChangeInputValue={code => setCode(code)}
			/>
		</div>
	);
}

export default App;
