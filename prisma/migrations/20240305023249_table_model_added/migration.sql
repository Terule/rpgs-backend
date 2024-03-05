-- AlterTable
ALTER TABLE `User` ADD COLUMN `imageUrl` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Table` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `imageUrl` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dmId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Table` ADD CONSTRAINT `Table_dmId_fkey` FOREIGN KEY (`dmId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
