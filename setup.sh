#!/bin/bash
echo "[*] Running docker-compose , database container will be up ..";
docker-compose up -d;


echo "[*] Installing dependencies ";
npm i;

echo "[*] Running migration ";
npm run migrate;

npm i -g;
echo "[*] we are done ;) ";
