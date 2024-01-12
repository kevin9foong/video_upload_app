# video_upload_app

## Quickstart

1. Create a file named `db_password.txt` in the /secrets folder.
This is used to define the postgreSQL account password.

Since we are spinning up our own postgreSQL database using Docker, we can define a password for the user account created.
The value of this txt file can be any password we want eg, 'password'.

2. To start the frontend, backend and database(postgreSQL) services (recommended).
```
docker compose up
```
3. Alternatively, you may start the services independently.

This configuration is based on default values set in the backend if the env variables do not exist.
```
cd web && npm run dev
docker run --name pgsql -p5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
cd server && npm start
```

4. To monitor the database:
```
pgcli -h localhost -p 5432 -u postgres
```

The uploaded videos are stored in /server/videos.

## Wireframes:
To build this project, I have created some low-fidelity wireframes to get a general idea of how the user would interact with the form. These wireframes are stored in the /assets folder.

## Demo screens:
![Home screen](/assets/screens/image.png)
![Upload thumbnail screen](/assets/screens/image-1.png)
![Validation in frontend](/assets/screens/image-2.png)
![Terms and conditions](/assets/screens/image-3.png)
![Upload bar](/assets/screens/image-4.png)

## Additional notes:
1. Handling duplicate file uploads. There is a date.now() appended to the uploaded file in the file system.
2. I added healthcheck to the database service to ensure it is ready to receive connections before starting the server service.
3. Users cannot progress forward in steps until prerequisite steps are completed.
4. pages.tsx contains the centralized app state.
