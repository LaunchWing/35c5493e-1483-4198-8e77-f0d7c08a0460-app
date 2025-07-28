export type FeedbackRequest = {
  resumeContent: string;
};

export type FeedbackResponse = {
  suggestions: string[];
};

export function validateFeedbackRequest(requestBody: any): string | null {
  if (!requestBody || typeof requestBody !== 'object') {
    return 'Invalid request body';
  }

  if (typeof requestBody.resumeContent !== 'string' || requestBody.resumeContent.trim() === '') {
    return 'Resume content is required and must be a non-empty string';
  }

  return null;
}

export async function processFeedback(request: FeedbackRequest): Promise<FeedbackResponse> {
  // Simulate AI processing logic
  const suggestions = ['Consider adding more action verbs', 'Include quantifiable achievements', 'Optimize for ATS with keywords'];
  return { suggestions };
}