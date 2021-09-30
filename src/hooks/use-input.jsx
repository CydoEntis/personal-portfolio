import { useReducer } from 'react';

const initialInputState = {
	value: '',
	isTouched: false,
};

const inputReducer = (state, action) => {
	if (action.type === 'INPUT') {
		return {
			value: action.value,
			isTouched: state.isTouched,
		};
	}

	if (action.type === 'BLUR') {
		return {
			value: state.value,
			isTouched: true,
		};
	}

	if (action.type === 'RESET') {
		return {
			value: '',
			isTouched: false,
		};
	}

	return initialInputState;
};

const useInput = (validateValue) => {
	const [inputState, dispatchInputState] = useReducer(inputReducer, initialInputState);

	const valueIsValid = validateValue(inputState.value);
	let hasError = !valueIsValid && inputState.isTouched;

	if (!valueIsValid) {
		setTimeout(() => {
			hasError = true;
		}, 300);
	}

	const inputValueChangeHandler = (e) => {
		dispatchInputState({
			type: 'INPUT',
			value: e.target.value,
		});
	};

	const inputBlurHandler = (e) => {
		dispatchInputState({
			type: 'BLUR',
		});
	};

	const resetInputHandler = () => {
		dispatchInputState({
			type: 'RESET',
		});
	};

	return {
		value: inputState.value,
		isValid: valueIsValid,
		hasError,
		inputValueChangeHandler,
		inputBlurHandler,
		resetInputHandler,
	};
};

export default useInput;
