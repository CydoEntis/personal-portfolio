import { useReducer } from "react";

const initialInputState = {
	value: "",
	isTouched: "",
};

const inputReducer = (state, action) => {
	if (action.type === "INPUT") {
		return { value: action.value, isTouched: state.isTouched };
	}

	if (action.type === "BLUR") {
		return { value: state.value, isTouched: state.isTouched };
	}

	if (action.type === "RESET") {
		return initialInputState;
	}

	return initialInputState;
};

const useInput = (inputValidation) => {
	const [inputState, dispatchInput] = useReducer(inputReducer, initialInputState);

	const isValueValid = inputValidation(inputState.value);
	const hasError = !isValueValid && inputState.isTouched;

	const inputChangeHandler = (e) => {
		dispatchInput({
			type: "INPUT",
			value: e.target.value,
		});
	};

	const inputBlurHandler = (e) => {
		dispatchInput({
			type: "BLUR",
		});
	};

	const resetHandler = (e) => {
		dispatchInput({
			type: "RESET",
		});
	};

	return {
		value: inputState.value,
		isValid: isValueValid,
		hasError,
		inputChangeHandler,
		inputBlurHandler,
		resetHandler,
	};
};

export default useInput;
