RUN_BACKEND:
	echo "Run backend"
	cd ./backend &&\
 	npm run dev


RUN_FRONTEND:
	echo "Run Frontend"
	cd ./keyclock-public-client &&\
 	npm run dev


RUN_DEV:
	echo "Run App"
	make RUN_BACKEND | \
	make RUN_FRONTEND

