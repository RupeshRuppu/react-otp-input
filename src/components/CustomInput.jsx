import { useEffect, useReducer, useRef, useState } from "react";
import InputBox from "./InputBox";
import { Reducer } from "../utils/Reducer";

function CustomInput({ count, onChangeInputValue, onFillEnd }) {
	const [inputs, dispatch] = useReducer(
		Reducer,
		new Array(count).fill(0).map((_, idx) => ({
			index: idx,
			value: "",
			ref: useRef(null),
		}))
	);

	let [activeIndex, setActiveIndex] = useState(0);
	const keyType = useRef(null);

	useEffect(() => {
		inputs[activeIndex].ref.current.focus();

		/* call onFillEnd callback function  */
		if (activeIndex === count - 1 && inputs[activeIndex].value) {
			onFillEnd();
		}

		const text = inputs.reduce(function (acc, object) {
			return (acc += object.value);
		}, "");

		onChangeInputValue(text);
	}, [inputs]);

	function handleChangeText(e) {
		const numberInput = e === "Backspace" || /[0-9]/.test(e.target.value);

		if (numberInput) {
			dispatch({
				type:
					keyType.current === "Backspace" ? "MOVE_BACKWARD" : "MOVE_FORWARD",
				payload: {
					text: keyType.current === "Backspace" ? "" : e.target.value,
					index:
						e === "Backspace" && !inputs[activeIndex].value && activeIndex > 0
							? activeIndex - 1
							: activeIndex,
				},
			});

			if (keyType.current === "Backspace") {
				setActiveIndex(
					activeIndex === 0
						? 0
						: inputs[activeIndex].value
						? activeIndex
						: activeIndex - 1
				);
			} else
				setActiveIndex(
					activeIndex === count - 1 ? activeIndex : activeIndex + 1
				);
		}
	}

	function onKeyDownInput(e) {
		keyType.current = e.key;

		if (e.key === "Backspace") {
			handleChangeText(e.key);
		}
	}

	return (
		<div className="space-x-3">
			{inputs.map((input, index) => {
				return (
					<InputBox
						ref={input.ref}
						value={input.value}
						key={`index-${input.index}`}
						onChangeText={handleChangeText}
						onKeyDownInput={onKeyDownInput}
						active={index === activeIndex && !input.value}
					/>
				);
			})}
		</div>
	);
}

export default CustomInput;
