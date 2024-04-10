var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Prisca' });
});

module.exports = router;

//DATABASE_URL="postgresql://prisca2:ilunga2@localhost:5432/priscadb?schema=public"
// model User {
//   Id_User           Int @id @default (autoincrement())
//   nom               String
//   email             String @unique
//   MotDePasse        String
//   Age               Int
//   NiveauEtudes      String
//   Envois            Envoie[]
//   FormationsSuivies SuitFormation[]
// }

// model Message {
//   Id_Message Int @id @default (autoincrement())
//   Contenu    String
//   DateEnvoi  DateTime @default (now())
//   Envois     Envoie[]
// }

// model Formation {
//   Id_Formation      Int @id @default (autoincrement())
//   Titre             String
//   Description       String
//   NiveauRequis      String
//   FormationsSuivies SuitFormation[]
// }

// model Envoie {
//   Id_Envoi Int @id @default (autoincrement())
//   User     User @relation(fields: [Id_User], references: [Id_User])
//   Message  Message @relation(fields: [Id_Message], references: [Id_Message])

//   Id_User    Int
//   Id_Message Int
// }

// model SuitFormation {
//   Id_Formation Int @id @default (autoincrement())
//   User         User @relation(fields: [Id_User], references: [Id_User])
//   Formation    Formation @relation(fields: [Id_Formation], references: [Id_Formation])

//   Id_User      Int
// }
