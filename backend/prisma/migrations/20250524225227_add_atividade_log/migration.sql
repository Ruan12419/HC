-- CreateTable
CREATE TABLE `AtividadeLog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `atividade_id` INTEGER NOT NULL,
    `acao` VARCHAR(25) NOT NULL,
    `dados_anteriores` JSON NULL,
    `dados_novos` JSON NULL,
    `usuario_id` INTEGER NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AtividadeLog` ADD CONSTRAINT `AtividadeLog_atividade_id_fkey` FOREIGN KEY (`atividade_id`) REFERENCES `Atividade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AtividadeLog` ADD CONSTRAINT `AtividadeLog_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
