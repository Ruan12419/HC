-- CreateTable
CREATE TABLE `Atividade` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `residente_id` INTEGER NOT NULL,
    `setor_id` INTEGER NOT NULL,
    `descricao` VARCHAR(255) NOT NULL,
    `data_atividade` DATE NOT NULL,
    `criado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Atividade_residente_id_idx`(`residente_id`),
    INDEX `Atividade_setor_id_idx`(`setor_id`),
    UNIQUE INDEX `Atividade_residente_id_data_atividade_descricao_key`(`residente_id`, `data_atividade`, `descricao`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Atividade` ADD CONSTRAINT `Atividade_residente_id_fkey` FOREIGN KEY (`residente_id`) REFERENCES `Residente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Atividade` ADD CONSTRAINT `Atividade_setor_id_fkey` FOREIGN KEY (`setor_id`) REFERENCES `Setor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
