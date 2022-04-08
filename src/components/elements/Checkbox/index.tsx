import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from "./styles";

interface CheckboxProps {
  onClick: () => void;
  checked: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onClick }) => {
  return (
    <CheckBoxWrapper>
      <CheckBox
        id="checkbox"
        type="checkbox"
        checked={checked}
        onClick={onClick}
      />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};
