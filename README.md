# ADMIN_UI
docker build -t admin-ui .
docker run --name admin-ui-container -d -p 8090:80 admin-ui