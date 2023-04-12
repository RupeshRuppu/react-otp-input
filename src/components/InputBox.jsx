import { forwardRef, useImperativeHandle, useRef } from "react";

const InputBox = forwardRef(function (
	{ active, onChangeText, value, onKeyDownInput },
	ref
) {
	const inputRef = useRef(null);

	useImperativeHandle(ref, function () {
		return {
			focus() {
				inputRef.current.focus();
			},
		};
	});

	return (
		<input
			ref={inputRef}
			value={value}
			className={`w-10 h-12 border-2 border-slate-400 rounded-md text-center font-semibold text-xl caret-transparent bg-slate-400 border-none outline-none shadow-xl shadow-slate-100 ${
				active ? "animate-scale-up-down" : "animate-none"
			}`}
			maxLength={1}
			onKeyDown={onKeyDownInput}
			onChange={onChangeText}
		/>
	);
});

export default InputBox;
