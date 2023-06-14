import edit from '../src/modules/edittask.js';

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
  test('editTask should edit the tasks', () => {
    edit(2, tasks, 'updated');
    expect(tasks[1].description).toEqual('updated');
  });

  test('editTask update localstorage', () => {
    expect(mockUpdatedLocalStorage.setItem).toHaveBeenCalledTimes(1);
    expect(mockUpdatedLocalStorage.setItem).toHaveBeenCalledWith(
      'tasks',
      JSON.stringify(tasks),
    );
  });
});
