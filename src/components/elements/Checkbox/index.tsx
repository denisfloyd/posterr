import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from "./styles";

interface CheckboxProps {
  onClick: () => void;
  defaultChecked: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  defaultChecked,
  onClick,
}) => {
  return (
    <CheckBoxWrapper>
      <CheckBox
        id="checkbox"
        type="checkbox"
        defaultChecked={defaultChecked}
        onClick={onClick}
      />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};
