export interface IListCost {
  _id: string;
  dana: number;
  pengeluaran: Array<IListPengeluaran>;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IListPengeluaran {
  id: string;
  desc: string;
  amount: number;
  date: Date;
  colors: string;
}

export interface IApiResponsePengeluaran {
  data: IListCost;
}

export interface IFormPengeluaran {
  pengluaran: Array<IListPengeluaran> | undefined;
}

export interface IFormDana {
  dana: number;
}

export interface IFormLogin {
  username: string;
  password: string;
}

export interface IFormRegister {
  username: string;
  password: string;
  dana: number;
}

export interface IFormDelete {
  id: string;
}
