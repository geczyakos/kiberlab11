import { createQueue } from '../src/notificationQueue';

test('enqueues and dequeues in FIFO order', () => {
  const queue = createQueue();
  queue.enqueue('a');
  queue.enqueue('b');
  expect(queue.dequeue()).toBe('a');
  expect(queue.size()).toBe(1);
});