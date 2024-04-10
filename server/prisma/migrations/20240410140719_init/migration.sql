-- CreateTable
CREATE TABLE "User" (
    "Id_User" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "MotDePasse" TEXT NOT NULL,
    "Age" INTEGER NOT NULL,
    "NiveauEtudes" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id_User")
);

-- CreateTable
CREATE TABLE "Message" (
    "Id_Message" SERIAL NOT NULL,
    "Contenu" TEXT NOT NULL,
    "DateEnvoi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("Id_Message")
);

-- CreateTable
CREATE TABLE "Formation" (
    "Id_Formation" SERIAL NOT NULL,
    "Titre" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "NiveauRequis" TEXT NOT NULL,

    CONSTRAINT "Formation_pkey" PRIMARY KEY ("Id_Formation")
);

-- CreateTable
CREATE TABLE "Envoie" (
    "Id_Envoi" SERIAL NOT NULL,
    "Id_User" INTEGER NOT NULL,
    "Id_Message" INTEGER NOT NULL,

    CONSTRAINT "Envoie_pkey" PRIMARY KEY ("Id_Envoi")
);

-- CreateTable
CREATE TABLE "SuitFormation" (
    "Id_Formation" SERIAL NOT NULL,
    "Id_User" INTEGER NOT NULL,

    CONSTRAINT "SuitFormation_pkey" PRIMARY KEY ("Id_Formation")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Envoie" ADD CONSTRAINT "Envoie_Id_User_fkey" FOREIGN KEY ("Id_User") REFERENCES "User"("Id_User") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Envoie" ADD CONSTRAINT "Envoie_Id_Message_fkey" FOREIGN KEY ("Id_Message") REFERENCES "Message"("Id_Message") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuitFormation" ADD CONSTRAINT "SuitFormation_Id_User_fkey" FOREIGN KEY ("Id_User") REFERENCES "User"("Id_User") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuitFormation" ADD CONSTRAINT "SuitFormation_Id_Formation_fkey" FOREIGN KEY ("Id_Formation") REFERENCES "Formation"("Id_Formation") ON DELETE RESTRICT ON UPDATE CASCADE;
