export interface ValidationError {
  field: string;
  message: string;
}

export class Validator {
  private errors: ValidationError[] = [];

  required(value: any, field: string): Validator {
    if (!value || value.trim() === "") {
      this.errors.push({
        field,
        message: `${field} is required`,
      });
    }
    return this;
  }

  email(value: string, field: string): Validator {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      this.errors.push({
        field,
        message: `Please enter a valid email address`,
      });
    }
    return this;
  }

  phone(value: string, field: string): Validator {
    const phoneRegex = /^\+?\d{10,15}$/;
    const digitsOnly = value.replace(/\s/g, "");

    if (value && !phoneRegex.test(digitsOnly)) {
      this.errors.push({
        field,
        message: `Please enter a valid phone number (e.g. +905321234567)`,
      });
    }
    return this;
  }

  date(value: string, field: string): Validator {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (value && !dateRegex.test(value)) {
      this.errors.push({
        field,
        message: `Please enter a valid date (YYYY-MM-DD)`,
      });
    }
    return this;
  }

  hasErrors(): boolean {
    return this.errors.length > 0;
  }

  getErrors(): ValidationError[] {
    return this.errors;
  }

  clearErrors() {
    this.errors = [];
  }
}
