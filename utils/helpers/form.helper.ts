type TFormData = Record<string, string>;

export class FormHelper {
  static canSubmit = (formData: unknown, requiredFields: string[]) =>
    Object.entries(formData as TFormData).filter(
      ([name, value]) =>
        requiredFields.includes(name) && String(value).trim().length > 0
    ).length === requiredFields.length;

  static isDirty = <T>(formData: unknown) => {
    let newFormData: TFormData = {};
    Object.entries(formData as TFormData).filter(([name, value]) => {
      if (String(value).trim().length > 0 && ![-1, "-1"].includes(value))
        newFormData[name] = value;
    });
    return newFormData as T;
  };
}
