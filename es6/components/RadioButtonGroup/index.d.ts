import * as React from "react";
import { BoxProps } from '../Box' 

export interface RadioButtonGroupProps {
  disabled?: boolean;
  name: string;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void);
  options: (string | number | { disabled?: boolean, id?: string, label?: (string | React.ReactNode), value: string | number })[];
  value?: string | number | object;
}

declare const RadioButtonGroup: React.ComponentClass<RadioButtonGroupProps & BoxProps & JSX.IntrinsicElements['div']>;

export { RadioButtonGroup };
