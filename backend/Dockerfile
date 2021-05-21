FROM openjdk:17-jdk-alpine

#Run gradle clean build first
COPY ./build/libs/movie-database-backend-0.0.1-all.jar /backend.jar

EXPOSE 4000

CMD ["java", "-jar", "backend.jar"]