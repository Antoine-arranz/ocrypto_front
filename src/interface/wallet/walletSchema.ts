export interface WalletI {
  name: string;
  User_Id: number | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export interface WalletState {
  wallet: Array<WalletI>;
  loading: boolean;
}

export interface WalletState {
  wallet: Array<WalletI>;
  loading: boolean;
}

export type NewWalletAction = {
  type: string;
  payload: { params: { userId: number }; data: { name: string } };
};

export type DeleteWalletAction = {
  type: string;
  payload: { params: { userId: number; walletId: number } };
};

export type GetAllWalletAction = {
  type: string;
  payload: { userId: number };
};

export type UpdateWalletAction = {
  type: string;
  payload: {
    params: { userId: number; walleId: number };
    value: { name: string };
  };
};
