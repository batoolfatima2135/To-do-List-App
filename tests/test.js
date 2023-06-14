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
  const tasks = [{ index: 1, description: 'existing task', completed: false }];
  add(tasks);
  test('add should add a task and update localStorage', () => {
    expect(mockDocument.getElementById).toHaveBeenCalledTimes(1);
    expect(mockDocument.getElementById).toHaveBeenCalledWith('task');
  });
  test('Update local storage', () => {
    expect(mockLocalStorage.setItem).toHaveBeenCalledTimes(1);
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
  const tasks = [
    { index: 1, description: 'Task 1', completed: false },
    { index: 2, description: 'Task 2', completed: false },
    { index: 3, description: 'Task 3', completed: false },
  ];
  test('deleteTask should remove a task', () => {
    deleteTask(2, tasks);

    expect(tasks).toEqual([
      { index: 1, description: 'Task 1', completed: false },
      { index: 2, description: 'Task 3', completed: false },
    ]);

    tasks.forEach((item, i) => {
      expect(item.index).toEqual(i + 1);
    });
    expect(mockLocalStorage.setItem).toHaveBeenCalledTimes(1);
  });
  test('deleteTask update localStorage', () => {
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
      'tasks',
      JSON.stringify(tasks),
    );
  });
});
