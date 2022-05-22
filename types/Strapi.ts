type Data<T> = {
  id: number;
  attributes: T;
};
export type IData<T, isList = false> = {
  data: isList extends true ? Array<Data<T>> : Data<T>;
};
export type IImage<isList = false> = IData<{ url: string }, isList>;
