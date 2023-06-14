import remove from '../src/modules/removeCompleted.js';
import displayTask from '../src/modules/display.js';
import deleteTask from '../src/modules/deleteTask.js';

jest.mock('../src/modules/deleteTask.js', () => jest.fn());
jest.mock('../src/modules/display.js', () => jest.fn());

describe('removeAllCompletedTask should remove completed task', () => {
  // Arrange of the test
  const tasks = [
    { index: 1, description: 'Task 1', completed: false },
    { index: 2, description: 'Task 2', completed: true },
    { index: 3, description: 'Task 3', completed: false },
  ];

  test('remove completed', () => {
    // Act of the test
    remove(tasks);
    expect(deleteTask).toHaveBeenCalledTimes(1);

    // Assert of the test
    expect(deleteTask).toHaveBeenCalledWith(2, tasks);

    // Act of the test
    expect(displayTask).toHaveBeenCalledTimes(1);
    // Assert of the test
    expect(displayTask).toHaveBeenCalledWith(tasks);
  });
});
