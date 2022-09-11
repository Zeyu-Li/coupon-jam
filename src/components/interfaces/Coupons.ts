interface Coupons {
  storeName: string;
  description: string;
  isExpired: boolean;
  slug: string;
  img?: string;
}

interface CouponsData extends Coupons {
  code: string;
}

export type { Coupons, CouponsData };
