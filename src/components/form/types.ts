export interface SignUpFormState {
  name: string;
  email: string;
  message: string;
}


export type InputTypeProps = {
  name: string;
  type: string;
  placeHolder: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};