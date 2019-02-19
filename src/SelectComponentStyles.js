import React, { type ElementConfig } from 'react';
import {components} from 'react-select';

export const colourStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    color: '#000000',
    fontFamily: 'roboto',
    fontSize: '16px',
    lineHeight: '19px',
    height: '10px',
    borderRadius: 0,
    backgroundColor: 'white',
    border: isFocused ? 0 : 0,
    boxShadow: isFocused ? 0 : 0,

    '&:hover': {
      border: isFocused ? 0 : 0,
      borderBottom: '2px solid #3c3c3c'
    },
    borderBottom: isFocused ? '2px solid #f89937' : '2px solid #3c3c3c'
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      color: '#000000',
      fontFamily: 'roboto',
      fontSize: '16px',
      lineHeight: '19px',
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? 'orange'
        : isFocused
        ? 'orange'
        : null,

      cursor: isDisabled ? 'not-allowed' : 'default'
    };
  },
  input: styles => ({
    ...styles,
    padding:0
  }),
  placeholder: styles => ({
    ...styles,
    position:'static'
  }),
  singleValue: styles => ({
    ...styles,
    position:'static'
  }),
  valueContainer: styles =>({
    ...styles,
    padding:0
  }),
  indicatorSeparator: styles => ({
    ...styles,
    display:'none',
    position:'absolute'
  }),
  indicators: styles =>({
    ...styles,
    color:'red'
  }),
  indicator: styles => ({
    ...styles,
    color:'red'
  }),
  dropdownIndicator: styles => ({
    ...styles,
    position:'relative',
    padding:0,
    top:'-5px',
    right:'15px'
  })
};

export const selectLocationsStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    color: '#000000',
    fontFamily: 'roboto',
    fontSize: '16px',
    lineHeight: '19px',
    height: '44.5px',
    borderRadius: 0,
    backgroundColor: 'white',
    border: isFocused ? 0 : 0,
    boxShadow: isFocused ? 0 : 0,

    '&:hover': {
      border: isFocused ? 0 : 0,
      borderBottom: '2px solid #3c3c3c'
    },
    borderBottom: isFocused ? '2px solid #f89937' : '2px solid #3c3c3c'
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      color: '#000000',
      fontFamily: 'roboto',
      fontSize: '16px',
      lineHeight: '19px',

      backgroundColor: isDisabled
        ? null
        : isSelected
        ? 'orange'
        : isFocused
        ? 'orange'
        : null,

      cursor: isDisabled ? 'not-allowed' : 'default'
    };
  },
  input: styles => ({ 
    ...styles
  }),
  placeholder: styles => ({
    ...styles,
    position:'static'
  }),
  singleValue: styles => ({ 
    ...styles,
    position:'static',
    padding: '0 !important'
  }),
  valueContainer:styles =>({
    ...styles,
    padding:0
  }),
  indicators:styles =>({
    ...styles,
    padding:0
  }),
  indicatorSeparator: styles => ({ 
    ...styles,
    display: 'none',
    padding:0
  }),
  indicator:styles => ({
    ...styles,
    padding:0
    }),
  dropdownIndicator: styles => ({
    ...styles,
    position:'relative',
    padding:0,
    top:'-5px',
    right:'15px'
  })
};

export const DropdownIndicator = ( props: ElementConfig<typeof components.DropdownIndicator> ) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={require('./images/dropdown.png')} alt="" />
    </components.DropdownIndicator>
  );
};
