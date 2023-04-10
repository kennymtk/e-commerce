export type AddCartType = {
  name: string;
  id: string;
  image: string;
  unit_amount: number | null;
  quantity?: number | 1;
};
