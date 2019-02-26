import React from 'react';

class FixRequiredSelect extends React.Component {

  selectRef = null;
  setSelectRef = ref => {
    this.selectRef = ref;
  };

  onChange = (value, actionMeta) => {
    this.props.onChange(value, actionMeta);
  };

  getValue = () => {
    if (this.props.value != undefined) return this.props.value;
  };

  render() {
    const { SelectComponent, required, ...props } = this.props;
    const { isLoading, isDisabled } = this.props;
    const enableRequired = !isDisabled;

    return (
      <div>
        <SelectComponent
          {...props}
          ref={this.setSelectRef}
          onChange={this.onChange}
        />
        {enableRequired && (
          <input
            tabIndex={-1}
            autoComplete="off"
            style={{
              opacity: 0,
              width: '100%',
              height: 0,
              position: 'absolute'
            }}
            value={this.getValue()}
            onFocus={() => this.selectRef.focus()}
            required={required}
          />
        )}
      </div>
    );
  }
}

export default FixRequiredSelect;
