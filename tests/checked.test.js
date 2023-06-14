import { checked, unchecked } from '../src/modules/checked.js';

describe('Testing edit function', () => {
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
  test('checked should update the tasks status', () => {
    checked(tasks, 2);
    expect(tasks[1].completed).toEqual(true);
  });
  test('unchecked should update the tasks status', () => {
    unchecked(tasks, 2);
    expect(tasks[1].completed).toEqual(false);
  });

  test('editTask update localstorage', () => {
    expect(mockUpdatedLocalStorage.setItem).toHaveBeenCalledTimes(2);
    expect(mockUpdatedLocalStorage.setItem).toHaveBeenCalledWith(
      'tasks',
      JSON.stringify(tasks),
    );
  });
});