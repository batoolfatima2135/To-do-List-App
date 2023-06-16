import updateChecked from '../src/modules/checked.js';

describe('Testing edit function', () => {
  // Arrange of the test
  const mockUpdatedLocalStorage = {
    setItem: jest.fn(),
  };
  global.localStorage = mockUpdatedLocalStorage;

  const tasks = [
    { index: 1, description: 'Task 1', completed: false },
    { index: 2, description: 'Task 2', completed: false },
    { index: 3, description: 'Task 3', completed: false },
  ];
  test('checked should update the tasks status', () => {
    // Act of the test
    updateChecked(tasks, 2);

    // Assert of the test
    expect(tasks[1].completed).toEqual(true);
  });
  test('unchecked should update the tasks status', () => {
    // Act of the test
    updateChecked(tasks, 2);

    // Assert of the test
    expect(tasks[1].completed).toEqual(false);
  });

  test('editTask update localstorage', () => {
    // Act of the test
    expect(mockUpdatedLocalStorage.setItem).toHaveBeenCalledTimes(2);

    // Assert of the test
    expect(mockUpdatedLocalStorage.setItem).toHaveBeenCalledWith(
      'tasks',
      JSON.stringify(tasks),
    );
  });
});