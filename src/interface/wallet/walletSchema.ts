import { UserI } from '../user';

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

export type WalletPropsI = {
  user: UserI;
  wallets: Array<WalletI>;
  loading: boolean;
  getWallets: (data: { userId: number }) => any;
  deleteWallet: (params: any) => void;
};

export type UpdateWallerPropsI = {
  userId: number;
  open: boolean;
  handleClose: () => void;
  walletName: string | null;
  updateWallet: (data: {
    params: { userId: number; walleId: number };
    value: { name: string };
  }) => void;
  walletId: number | null;
};

export type NewWalletPropsI = {
  addNewWallet: (data: {
    params: { userId: number };
    data: { name: string };
  }) => void;
  user: UserI;
  open: boolean;
  handleClose: () => void;
};
