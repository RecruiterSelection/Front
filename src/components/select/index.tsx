import { UseFormRegisterReturn } from "react-hook-form";
import { FieldStyled } from "./style";

export interface ISelect {
  label?: string;
  register?: UseFormRegisterReturn<string>;
  listOption: string[];
}

export const Select = ({ label, register, listOption }: ISelect) => {
  return (
    <FieldStyled>
      <label htmlFor={label}>{label}</label>
      <select name={label} id={label}>
        {listOption.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </FieldStyled>
  );
};
