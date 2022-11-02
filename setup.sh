#!/bin/bash
echo "[*] Running docker-compose , database container will be up ..";
docker-compose up -d;
echo "[*] Running migration ";
npm run migrate;

echo "[*] Installing dependencies ";
npm i;
npm i -g;
echo "[*] we are done ;) ";
