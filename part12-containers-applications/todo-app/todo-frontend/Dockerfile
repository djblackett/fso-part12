FROM node:16 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci


RUN npm run build



RUN CI=true npm test

RUN npm install -g serve

CMD ["serve", "build"]


# # This is a new stage, everything before this is gone, except the files we want to COPY
# FROM nginx
# # COPY the directory build from build-stage to /usr/share/nginx/html
# # The target location here was found from the Docker hub page
# # COPY --from=build-stage /usr/src/app/nginx.conf /etc/nginx/nginx.conf
# COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

# STOPSIGNAL SIGTERM
# CMD ["nginx", "-g", "daemon off;"]
