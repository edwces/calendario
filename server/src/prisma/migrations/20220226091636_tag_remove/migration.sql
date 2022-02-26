/*
  Warnings:

  - You are about to drop the column `tagId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_tagId_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "tagId";

-- DropTable
DROP TABLE "Tag";
