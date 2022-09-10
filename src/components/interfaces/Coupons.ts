interface Coupons {
  name: String;
  description: String;
  isExpired: boolean;
  slug: String;
  img?: String;
}

interface CouponsData extends Coupons {
  code: String;
}

export type { Coupons, CouponsData };
