import React from 'react';

export default function DataRequestInput(props: {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  id: string;
  value: string;
  translate: JSX.Element;
  optional?: boolean;
}): JSX.Element {
  return (
    <>
      <label htmlFor={props.id}>
        <strong className="margin-right--sm">{props.translate}</strong>
      </label>
      <br />
      <input
        id={props.id}
        type="text"
        className="input"
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}
