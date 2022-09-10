-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Coupon" (
    "slug" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "expiry" DATETIME,
    "code" TEXT NOT NULL,
    "header" TEXT,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "storeName" TEXT,
    CONSTRAINT "Coupon_storeName_fkey" FOREIGN KEY ("storeName") REFERENCES "Store" ("name") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Coupon" ("code", "created", "description", "expiry", "header", "slug", "storeName") SELECT "code", "created", "description", "expiry", "header", "slug", "storeName" FROM "Coupon";
DROP TABLE "Coupon";
ALTER TABLE "new_Coupon" RENAME TO "Coupon";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
