const socket = io('http://localhost:8080');
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Servir les fichiers statiques depuis le dossier 'public'
app.use(express.static(path.join(__dirname, 'Avion-vs-rocher-version1.3')));

// Gestion des connexions Socket.IO
io.on('connection', (socket) => {
  console.log('Un client est connecté');

  socket.on('registerPlayer', (data) => {
    console.log(`Joueur enregistré: ${data.name}`);
    // Ajoutez ici la logique pour gérer l'enregistrement des joueurs
  });

  socket.on('disconnect', () => {
    console.log('Un client est déconnecté');
  });
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
