export interface ContainErrors {
  validationErrors: ValidationErrors;
}

export interface ValidationErrors {
  [key: string]: string[];
}
