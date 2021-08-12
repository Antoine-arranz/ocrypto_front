export interface Action {
  type: string;
}
export interface Dispatch<S> {
  <A extends Action>(action: A): A;
}
