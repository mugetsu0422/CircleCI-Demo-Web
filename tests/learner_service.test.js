import { calcStreak } from "../utils/learner.helper.js";

describe('calcStreak', () => {
  test('should increment streak when last login was yesterday ' + 
  '(timestamp and last login are in the same time zone)', () => {
    const timestamp = new Date('2023-07-05');
    const streakinfo = {
      lastlogindate: new Date('2023-07-04'),
      streak: 3,
    };

    const result = calcStreak(timestamp, streakinfo);

    expect(result).toBe(4);
  });

  test('should not change streak when last login was today ' + 
  '(timestamp and last login are in the same time zone)', () => {
    const timestamp = new Date('2023-07-05');
    const streakinfo = {
      lastlogindate: new Date('2023-07-05'),
      streak: 3,
    };

    const result = calcStreak(timestamp, streakinfo);

    expect(result).toBe(3);
  });

  test('should reset streak to 1 when last login was not yesterday ' + 
  '(timestamp and last login are in the same time zone)', () => {
    const timestamp = new Date('2023-07-05');
    const streakinfo = {
      lastlogindate: new Date('2023-07-03'),
      streak: 3,
    };

    const result = calcStreak(timestamp, streakinfo);

    expect(result).toBe(1);
  });

  test('should reset streak to 1 when last login as last month ' + 
  '(timestamp and last login are in the same time zone)', () => {
    const timestamp = new Date('2023-07-05');
    const streakinfo = {
      lastlogindate: new Date('2023-06-05'),
      streak: 3,
    };

    const result = calcStreak(timestamp, streakinfo);

    expect(result).toBe(1);
  });

  test('should reset streak to 1 when last login as last year ' + 
  '(timestamp and last login are in the same time zone)', () => {
    const timestamp = new Date('2023-07-05');
    const streakinfo = {
      lastlogindate: new Date('2022-07-05'),
      streak: 3,
    };

    const result = calcStreak(timestamp, streakinfo);

    expect(result).toBe(1);
  });

  test('should increment when last login as yesterday (2020-02-28) in non-leap year ' + 
  '(timestamp and last login are in the same time zone)', () => {
    const timestamp = new Date('2023-03-01');
    const streakinfo = {
      lastlogindate: new Date('2023-02-28'),
      streak: 3,
    };

    const result = calcStreak(timestamp, streakinfo);

    expect(result).toBe(4);
  });

  test('should increment when last login as yesterday (2020-02-29) in leap year ' + 
  '(timestamp and last login are in the same time zone)', () => {
    const timestamp = new Date('2020-03-01');
    const streakinfo = {
      lastlogindate: new Date('2020-02-29'),
      streak: 3,
    };

    const result = calcStreak(timestamp, streakinfo);

    expect(result).toBe(4);
  });

  test('should not change streak when last login was yesterday ' + 
  '(timestamp and last login are in different time zones)', () => {
    const timestamp = new Date('2023-07-05T00:00:00Z');
    const streakinfo = {
      lastlogindate: new Date('2023-07-04T10:00:00-05:00'), // Last login date in GMT-5 time zone
      streak: 3,
    };

    const result = calcStreak(timestamp, streakinfo);

    expect(result).toBe(4);
  });

  test('should not change streak when last login was today ' + 
  '(timestamp and last login are in different time zones)', () => {
    const timestamp = new Date('2023-07-05T00:00:00Z');
    const streakinfo = {
      lastlogindate: new Date('2023-07-04T23:00:00-05:00'), // Last login date in GMT-5 time zone
      streak: 3,
    };

    const result = calcStreak(timestamp, streakinfo);

    expect(result).toBe(3);
  });

  test('should reset streak to 1 when last login was not yesterday ' + 
  '(timestamp and last login are in different time zones)', () => {
    const timestamp = new Date('2023-07-05T00:00:00Z');
    const streakinfo = {
      lastlogindate: new Date('2023-07-03T10:00:00-05:00'), // Last login date in GMT-5 time zone
      streak: 3,
    };

    const result = calcStreak(timestamp, streakinfo);

    expect(result).toBe(1);
  });
});
