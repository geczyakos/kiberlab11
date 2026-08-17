export function createQueue() {
  const items = [];
  return {
    enqueue(notification) {
      items.push(notification);
    },
    dequeue() {
      return items.shift();
    },
    size() {
      return items.length;
    },
  };
}