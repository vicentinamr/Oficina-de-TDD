const Queue = require('./queue');

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue();
    expect(queue).toEqual({ elements: [] });
  });

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue();
    queue.add('item1');
    queue.add('item2');
    expect(queue.size()).toBe(2);
  });

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue();
    queue.add('item1');
    expect(queue.elements).toEqual(['item1']);
  });

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue();
    queue.add('item1');
    queue.add('item2');
    expect(queue.peek()).toBe('item1');
  });

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue();
    queue.add('item1');
    queue.add('item2');
    const removed = queue.dequeue();
    expect(removed).toBe('item1');
    expect(queue.elements).toEqual(['item2']);
  });
});
