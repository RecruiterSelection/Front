import { UseFormRegisterReturn } from "react-hook-form";
import { FieldStyled } from "./style";
import React, { useState } from "react";

export interface ISelect {
  label?: string;
  register: UseFormRegisterReturn<string>;
  listOption: any[]; // Certifique-se de ajustar o tipo conforme necessário
}

export const Select = ({ label, register, listOption }: ISelect) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    register.defaultValue || ""
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <select
        {...register}
        onChange={(e) => handleSelectChange(e)}
        value={selectedValue}
        id={label}
        name={label}
      >
        {listOption.map((option: any) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};
