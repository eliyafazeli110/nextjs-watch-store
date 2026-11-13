-- CreateTable
CREATE TABLE "Category" (
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "parentSlug" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("slug")
);

-- CreateTable
CREATE TABLE "Brand" (
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("slug")
);

-- CreateIndex
CREATE INDEX "Category_parentSlug_idx" ON "Category"("parentSlug");

-- CreateIndex
CREATE INDEX "Product_createdAt_id_idx" ON "Product"("createdAt", "id");

-- CreateIndex
CREATE INDEX "Product_price_id_idx" ON "Product"("price", "id");

-- CreateIndex
CREATE INDEX "Product_brandSlug_idx" ON "Product"("brandSlug");

-- CreateIndex
CREATE INDEX "Product_categorySlug_idx" ON "Product"("categorySlug");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_brandSlug_fkey" FOREIGN KEY ("brandSlug") REFERENCES "Brand"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categorySlug_fkey" FOREIGN KEY ("categorySlug") REFERENCES "Category"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parentSlug_fkey" FOREIGN KEY ("parentSlug") REFERENCES "Category"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
