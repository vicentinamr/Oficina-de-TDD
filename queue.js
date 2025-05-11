class Queue {
  constructor() {
    this.elements = [];
  }

  // Retorna o número de elementos na fila
  size() {
    return this.elements.length;
  }

  // Adiciona um item ao final da fila
  add(item) {
    this.elements.push(item);
  }

  // Retorna o primeiro item da fila (sem removê-lo)
  peek() {
    return this.elements[0];
  }

  // Remove e retorna o primeiro item da fila
  dequeue() {
    return this.elements.shift();
  }
}

module.exports = Queue;
