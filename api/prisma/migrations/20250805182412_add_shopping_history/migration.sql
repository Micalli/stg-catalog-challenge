-- CreateTable
CREATE TABLE "public"."ShoppingHistory" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "products" JSONB NOT NULL,
    "total_price" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShoppingHistory_pkey" PRIMARY KEY ("id")
);
