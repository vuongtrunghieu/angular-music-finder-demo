export interface ModelAdapter<T> {
  adaptFrom(item: any): T;
}
