import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IconSelected from "@/assets/feedback/shared/icon-check.svg";
import IconDownArrow from "@/assets/feedback/shared/icon-arrow-down.svg";
import IconUpArrow from "@/assets/feedback/shared/icon-arrow-up.svg";
import Image from "next/image";
import { ArrowDown, ArrowUp } from "../Icon/Arrow";

type OptionValue = {
  value: string;
  text: React.ReactNode;
};

interface ISelectFieldProps {
  showHideSelect: boolean;
  selectedValue: string;
  handleOptionChange: (value: OptionValue) => void;
}

const SelectFieldContext = React.createContext<ISelectFieldProps | null>(null);

function SelectField({
  label,
  description,
  value,
  children,
  defaultValue,
  onChange,
  iconColor,
  ...props
}: {
  label?: string;
  description?: string;
  value: string;
  children: React.ReactElement;
  defaultValue?: string;
  onChange: (value: string) => void;
  iconColor?: string;
  [x: string]: any;
}) {
  const [showHideSelect, setShowHideSelect] = useState(false);
  const [selectButtonVal, setSelectButtonVal] = useState(value || defaultValue);
  const selectedValue = value;

  const handleSelectClick = () => {
    setShowHideSelect(!showHideSelect);
  };

  const handleOptionChange = (value: OptionValue) => {
    if (value) {
      //@ts-ignore
      setSelectButtonVal(value.text);
      onChange(value.value);
      setShowHideSelect(false);
    }
  };

  return (
    <SelectFieldStyles className='select-field'>
      {label && (
        <label htmlFor={props.id}>
          {label}
          <span>{description}</span>
        </label>
      )}
      <button className='select' type='button' onClick={handleSelectClick}>
        {selectButtonVal}
        {showHideSelect ? (
          <ArrowUp stroke={iconColor} />
        ) : (
          <ArrowDown stroke={iconColor} />
        )}
      </button>
      <SelectFieldContext.Provider
        value={{ showHideSelect, handleOptionChange, selectedValue }}
      >
        {React.cloneElement(children, { label, ...props })}
      </SelectFieldContext.Provider>
    </SelectFieldStyles>
  );
}

function SelectFieldList({
  children,
  label,
}: {
  children: React.ReactNode;
  label?: string;
}) {
  const selectContext = React.useContext(SelectFieldContext);
  if (selectContext && selectContext.showHideSelect)
    return (
      <SelectFieldListStyles hasLabel={!!label}>
        <ul role='listbox'>{children}</ul>
      </SelectFieldListStyles>
    );
  return null;
}

function SelectFieldOption({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) {
  const selectContext = React.useContext(SelectFieldContext);
  return (
    <SelectFieldOptionStyles
      data-value={value}
      role='option'
      onClick={() =>
        selectContext?.handleOptionChange({ value: value, text: children })
      }
    >
      <span
        className={value === selectContext?.selectedValue ? "selected" : ""}
      >
        {children}{" "}
        {value === selectContext?.selectedValue && (
          <Image src={IconSelected} alt='selected' />
        )}
      </span>
    </SelectFieldOptionStyles>
  );
}

export { SelectField, SelectFieldList, SelectFieldOption };

const SelectFieldStyles = styled.div`
  position: relative;
  label {
    display: flex;
    flex-direction: column;
    padding-bottom: 16px;
    color: var(--feedback-gray-blue-600);
    font-weight: 700;
    font-size: 0.9rem;
    gap: 2px;
    span {
      font-weight: 400;
      color: var(--feedback-gray-blue-500);
    }
  }

  .select {
    background-color: var(--feedback-gray-blue-100);
    padding: 16px 24px;
    border: none;
    outline: none;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    color: var(--feedback-gray-blue-600);
    border-radius: 5px;
    text-align: left;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const SelectFieldListStyles = styled.div`
  background: var(--white);
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
  border-radius: 10px;
  position: absolute;
  top: ${({ hasLabel }: { hasLabel: boolean }) =>
    hasLabel ? "126px" : "66px"};
  width: 100%;
  z-index:8;
  ul {
    list-style: none;
  }
`;

const SelectFieldOptionStyles = styled.li`
  color: var(--feedback-gray-blue-500);
  cursor: pointer;
  span {
    display: flex;
    padding: 12px 24px;
    font-size: 1rem;
    align-items: center;
    justify-content: space-between;
  }

  &:hover,
  &:active,
  .selected {
    color: var(--feedback-pink);
  }

  &::after {
    background-color: var(--feedback-gray-blue-600);
    width: 100%;
    content: "";
    height: 1px;
    position: relative;
    display: block;
    opacity: 0.15;
    cursor: pointer;
  }
`;
