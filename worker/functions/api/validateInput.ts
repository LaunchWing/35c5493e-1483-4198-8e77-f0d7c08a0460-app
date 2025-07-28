export function validateInput(input: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (typeof input !== 'object' || input === null) {
    errors.push('Input must be a valid JSON object.');
    return { isValid: false, errors };
  }

  if (!input.resumeContent || typeof input.resumeContent !== 'string') {
    errors.push('Missing or invalid resumeContent field.');
  }

  if (!input.industry || typeof input.industry !== 'string') {
    errors.push('Missing or invalid industry field.');
  }

  if (!input.role || typeof input.role !== 'string') {
    errors.push('Missing or invalid role field.');
  }

  return { isValid: errors.length === 0, errors };
}
