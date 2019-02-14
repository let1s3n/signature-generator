
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
    ...styles
  }),
  placeholder: styles => ({
    ...styles
  }),
  singleValue: styles => ({
    ...styles
  }),
  indicatorSeparator: styles => ({
    display: 'none'
  }),
  DropdownIndicator: styles => ({
    color: '#000000'
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
  input: styles => ({ ...styles }),
  placeholder: styles => ({
    ...styles
  }),
  singleValue: styles => ({ ...styles }),
  indicatorSeparator: styles => ({ display: 'none' }),
  DropdownIndicator: styles => ({
    border: '1px solid red'
  })
};

export const DropdownIndicator = ( props: ElementConfig<typeof components.DropdownIndicator> ) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={require('./dropdown.png')} alt="" />
    </components.DropdownIndicator>
  );
};
