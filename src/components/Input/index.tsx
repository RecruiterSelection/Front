import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldStyled } from './style';

export interface IInput {
  label?: string;
  type: string;
  register: UseFormRegisterReturn<string>;
  placeholder: string;
}

export const Input = ({
  label,
  type,
  register,
  placeholder
}: IInput) => {

  return (
    <FieldStyled>
      <label htmlFor={register.name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
      />
    </FieldStyled>
  );
};
