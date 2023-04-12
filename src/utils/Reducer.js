function Reducer(currState, action) {
	const state = JSON.parse(JSON.stringify(currState));
	const { type, payload } = action;

	if (type === "MOVE_FORWARD" || type === "MOVE_BACKWARD") {
		const item = state[payload.index];
		item.value = payload.text;
	}

	return state;
}

export { Reducer };
