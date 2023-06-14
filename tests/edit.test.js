import edit from '../src/modules/edittask.js';

describe('Testing edit function', () => {
  // Arrange of the test

  const mockUpdatedLocalStorage = {
    setItem: jest.fn(),
  };
  global.localStorage = mockUpdatedLocalStorage;

  // Arrange of the test
  const tasks = [
    { index: 1, description: 'Task 1', completed: false },
    { index: 2, description: 'Task 2', completed: false },
    { index: 3, description: 'Task 3', completed: false },
  ];
  test('editTask should edit the tasks', () => {
    // Act of the test
    edit(2, tasks, 'updated');

    // Assert of the test
    expect(tasks[1].description).toEqual('updated');
  });

  test('editTask update localstorage', () => {
    // Act of the test
    expect(mockUpdatedLocalStorage.setItem).toHaveBeenCalledTimes(1);

    // Assert of the test
    expect(mockUpdatedLocalStorage.setItem).toHaveBeenCalledWith(
      'tasks',
      JSON.stringify(tasks),
    );
  });
});
