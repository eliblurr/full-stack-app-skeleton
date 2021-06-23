sed -i "s~API_BASE_HOST_URL~$API_BASE_URL~g" ./src/environment/env.prod.js && \
sed -i "s~API_BASE_HOST_PORT~$API_BASE_PORT~g" ./src/environment/env.prod.js && \
npm run build
# npm start