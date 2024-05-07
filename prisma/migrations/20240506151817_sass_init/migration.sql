-- CreateTable
CREATE TABLE `Entreprise` (
    `ID_Entreprise` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `siege_social` VARCHAR(191) NOT NULL,
    `date_creation` DATETIME(3) NOT NULL,
    `identifiant_fiscal` VARCHAR(191) NOT NULL,
    `capital` DOUBLE NOT NULL,
    `nb_employes` INTEGER NOT NULL,
    `ville` VARCHAR(191) NOT NULL,
    `responsable` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Entreprise_nom_key`(`nom`),
    UNIQUE INDEX `Entreprise_siege_social_key`(`siege_social`),
    UNIQUE INDEX `Entreprise_identifiant_fiscal_key`(`identifiant_fiscal`),
    UNIQUE INDEX `Entreprise_tel_key`(`tel`),
    UNIQUE INDEX `Entreprise_email_key`(`email`),
    PRIMARY KEY (`ID_Entreprise`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Client` (
    `ID_Client` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `ville` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Client_nom_key`(`nom`),
    UNIQUE INDEX `Client_tel_key`(`tel`),
    UNIQUE INDEX `Client_email_key`(`email`),
    PRIMARY KEY (`ID_Client`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produit` (
    `ID_Produit` INTEGER NOT NULL AUTO_INCREMENT,
    `prix_achat` DOUBLE NOT NULL,
    `prix_vente` DOUBLE NOT NULL,
    `taille` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ID_Produit`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Facture` (
    `ID_Facture` INTEGER NOT NULL AUTO_INCREMENT,
    `date_facture` DATETIME(3) NOT NULL,
    `montant` DOUBLE NOT NULL,
    `ID_Client` INTEGER NOT NULL,

    PRIMARY KEY (`ID_Facture`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Facture` ADD CONSTRAINT `Facture_ID_Client_fkey` FOREIGN KEY (`ID_Client`) REFERENCES `Client`(`ID_Client`) ON DELETE RESTRICT ON UPDATE CASCADE;
