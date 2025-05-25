/*
  Warnings:

  - Added the required column `data_finalizacao` to the `Atividade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `atividade` ADD COLUMN `data_finalizacao` DATE NOT NULL;
