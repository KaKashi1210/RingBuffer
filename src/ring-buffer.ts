export class RingBuffer<T> {
  public capacity: number;
  private head: number;
  private tail: number;
  private circularArray: T[] | number[];

  constructor(capacity: number) {
    this.capacity = capacity;
    this.circularArray = [];
    this.head = this.tail = -1;
  }

  enqueue(data: T): void {
    if (this.tail === -1) {
      this.head = this.tail = 0;
      this.circularArray[this.tail] = data;
      return;
    }

    if (this.tail >= this.capacity - 1) {
      this.tail = 0;
      this.circularArray[this.tail] = data;
      return;
    }
    this.tail++;
    this.circularArray[this.tail] = data;
    return;
  }

  deque(): void {
    if (this.head === -1) {
      throw new Error("Cannot Deque Empty Buffer");
    }

    this.circularArray[this.head] = -1;

    if (this.head === this.capacity - 1) {
      this.head = 0;
    } else {
      this.head++;
    }
    return;
  }

  clearBuffer(): void {
    this.circularArray = [];
    this.head = this.tail = 0;
  }

  state(): void {
    console.log(this.circularArray, this.head, this.tail);
  }
}
