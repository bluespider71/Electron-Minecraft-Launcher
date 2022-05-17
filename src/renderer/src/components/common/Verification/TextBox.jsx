import { Input, Grid } from "@material-ui/core";
import React from "react";
import * as S from './styles';


const TextBox = () => {
    const boxArray = [];
    const KEY_CODE = {
        BACKSPACE: 8,
        ARROW_LEFT: 37,
        ARROW_RIGHT: 39,
        DELETE: 46,
    };
    const placeholder = ".";
    const length = 6;
    const pValue = "";
    const isCodeRegex = new RegExp(`^[0-9]{${length}}$`);
    const codeInputRef = React.createRef(null);
    const [activeIndex, setActiveIndex] = React.useState(-1);
    const dataCy = "verification-code";
    const emptyValue = new Array(length).fill(placeholder);
    const [value, setValue] = React.useState(pValue ? pValue.split('') : emptyValue);
    const type = "text";
    const itemsRef = React.useMemo(
        () =>
            new Array(length).fill(null).map(() => React.createRef(null)),
        [length]
    );
    const getItem = (index) => itemsRef[index]?.current;
    const focusItem = (index) => getItem(index)?.focus();
    const blurItem = (index) => getItem(index)?.blur();
    React.useEffect(() => {
        const codeInput = codeInputRef.current;
        if (!codeInput) return;

        const onPaste = (e) => {
            e.preventDefault();

            const pastedString = e.clipboardData?.getData('text');
            if (!pastedString) return;

            const isNumber = !Number.isNaN(+pastedString);
            if (isNumber) setValue(pastedString.split('').slice(0, length));
        };

        codeInput.addEventListener('paste', onPaste);
        return () => codeInput.removeEventListener('paste', onPaste);
    }, []);

    // handle mobile autocompletion
    const onInputChange = (e) => {
        const { value: changeValue } = e.target;
        const isCode = isCodeRegex.test(changeValue);

        if (!isCode) return;

        setValue(changeValue.split(''));
        blurItem(activeIndex);
    };

    const onInputKeyUp = ({ key, keyCode }) => {
        const newValue = [...value];
        const nextIndex = activeIndex + 1;
        const prevIndex = activeIndex - 1;

        const codeInput = codeInputRef.current;
        const currentItem = getItem(activeIndex);

        const isLast = nextIndex === length;
        const isDeleting =
            keyCode === KEY_CODE.DELETE || keyCode === KEY_CODE.BACKSPACE;

        // keep items focus in sync
        onItemFocus(activeIndex);

        // on delete, replace the current value
        // and focus on the previous item
        if (isDeleting) {
            newValue[activeIndex] = placeholder;
            setValue(newValue);

            if (activeIndex > 0) {
                setActiveIndex(prevIndex);
                focusItem(prevIndex);
            }

            return;
        }

        // if the key pressed is not a number
        // don't do anything
        if (Number.isNaN(+key)) return;

        // reset the current value
        // and set the new one
        if (codeInput) codeInput.value = '';
        newValue[activeIndex] = key;
        setValue(newValue);

        if (!isLast) {
            setActiveIndex(nextIndex);
            focusItem(nextIndex);
            return;
        } onInputKeyUp

        if (codeInput) codeInput.blur();
        if (currentItem) currentItem.blur();

        setActiveIndex(-1);
    };

    const renderItemText = (itemValue) => {
        if (itemValue === placeholder) return placeholder;
        return type === 'password' ? passwordMask : itemValue;
    };

    const onItemFocus = (index) => () => {
        setActiveIndex(index);
        if (codeInputRef.current) codeInputRef.current.focus();
    };

    const onInputBlur = () => {
        // https://github.com/ugogo/react-input-verification-code/issues/1
        if (activeIndex === -1) return;

        blurItem(activeIndex);
        setActiveIndex(-1);
    };



    // const generateTextFields = () => {
    //     for (let i = 0; i < 6; i++) {
    //         boxArray.push(
    //             <Input
    //                 className="text-box"
    //                 key={i}
    //                 type="number"
    //                 inputProps={{
    //                     style: { textAlign: "center", },
    //                     maxlength: "1",
    //                     "aria-label": "description",
    //                 }}
    //             />
    //         );
    //     }
    // };

    // generateTextFields();
    return (
        <React.Fragment>
            <S.Container
                className="ReactInputVerificationCode__container text-box-container"
                // needed for styling
                itemsCount={length}
            >
                <S.Input
                    ref={codeInputRef}
                    className="ReactInputVerificationCode__input"
                    autoComplete="one-time-code"
                    type="text"
                    inputMode="decimal"
                    id="one-time-code"
                    // use onKeyUp rather than onChange for a better control
                    // onChange is still needed to handle the autocompletion
                    // when receiving a code by SMS
                    onChange={onInputChange}
                    onKeyUp={onInputKeyUp}
                    onBlur={onInputBlur}
                    // needed for styling
                    activeIndex={activeIndex}
                    data-cy={`${dataCy}-otc-input`}
                />

                {itemsRef.map((ref, i) => (
                    <S.Item
                        key={i}
                        ref={ref}
                        role="button"
                        tabIndex={0}
                        className={`ReactInputVerificationCode__item ${value[i] !== placeholder ? 'is-filled' : ''
                            } ${i === activeIndex ? 'is-active' : ''}`}
                        onFocus={onItemFocus(i)}
                        data-cy={`${dataCy}-${i}-item`}
                    >
                        {renderItemText(value[i])}
                    </S.Item>
                ))}
            </S.Container>
        </React.Fragment>
    );
};

export default TextBox;
