import add from '../src/modules/addTask.js';
import deleteTask from '../src/modules/deleteTask.js';

const mockDocument = {
  getElementById: jest.fn().mockReturnValue({ value: 'task' }),
};

const mockLocalStorage = {
  setItem: jest.fn(),
};
global.document = mockDocument;
global.localStorage = mockLocalStorage;

describe('test for the addTask', () => {
  // Arrange of test
  const tasks = [{ index: 1, description: 'existing task', completed: false }];
  add(tasks);
  test('addTask should add a task', () => {
    // Act of the test
    expect(mockDocument.getElementById).toHaveBeenCalledTimes(1);

    // Assert of test
    expect(mockDocument.getElementById).toHaveBeenCalledWith('task');
  });
  test('addTask should update local storage', () => {
    // Act of the test
    expect(mockLocalStorage.setItem).toHaveBeenCalledTimes(1);

    // Assert of the test
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
      'tasks',
      JSON.stringify(tasks),
    );
  });
});

describe('test for deleteTask', () => {
  const mockLocalStorage = {
    setItem: jest.fn(),
  };

  global.localStorage = mockLocalStorage;

  // Arrange of the test
  const tasks = [
    { index: 1, description: 'Task 1', completed: false },
    { index: 2, description: 'Task 2', completed: false },
    { index: 3, description: 'Task 3', completed: false },
  ];
  test('deleteTask should remove a task', () => {
    // Act of the test
    deleteTask(2, tasks);

    // Assert of the test
    expect(tasks).toEqual([
      { index: 1, description: 'Task 1', completed: false },
      { index: 2, description: 'Task 3', completed: false },
    ]);

    tasks.forEach((item, i) => {
      expect(item.index).toEqual(i + 1);
    });
  });
  test('deleteTask update localStorage', () => {
    // Act of the test
    expect(mockLocalStorage.setItem).toHaveBeenCalledTimes(1);

    // Assert of test
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
      'tasks',
      JSON.stringify(tasks),
    );
  });
});
