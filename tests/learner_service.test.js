import learnerService from "../services/learner.service.js";
import db from "../utils/db.js";

describe('getWordWithLetter', () => {
  test('should retrieve words matching the provided letter', async () => {
    // Test input values
    const user_id = '6a6e7163-c669-480c-a28a-980246b50b98'
    const letter = 'abdsad'

    // Call the function being tested
    const result = await learnerService.getWordWithLetter(user_id, letter)

    // Assert on the expected output
    // Example: Check if the result contains expected properties
    expect(result).toContainEqual(
      expect.objectContaining({
        wordname: expect.stringContaining(letter),
      })
    )
  });

  // Add more test cases for other scenarios as needed
});
