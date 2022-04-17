export interface IImage {
  data: {
    id: number;
    attributes: {
      url: string;
    };
  };
}
export interface IComponent<T> {
  data: {
    id: number;
    attributes: T;
  };
}
export interface IComponentList<T> {
  data: IComponent<T>['data'][];
}
export interface IData<T> {
  data: {
    id: number;
    attributes: T;
  };
}
export interface IDataList<T> {
  data: IData<T>['data'][];
}
