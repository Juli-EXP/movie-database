import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar

val ktorVersion: String by project
val kotlinVersion: String by project
val logbackVersion: String by project

plugins {
    application
    kotlin("jvm") version "1.5.0"
    kotlin("plugin.serialization") version "1.5.0"
    id("com.github.johnrengelman.shadow") version "6.1.0"
}

group = "tk.lampi"
version = "0.0.1"


application {
    mainClass.set("tk.lampi.ApplicationKt")
    @Suppress("DEPRECATION")
    mainClassName = "tk.lampi.ApplicationKt"
}

//Task to create a jar
tasks.withType<ShadowJar> {
    manifest {
        attributes(
            mapOf(
                "Main-Class" to application.mainClass
            )
        )
    }
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("io.ktor:ktor-server-core:$ktorVersion")
    implementation("io.ktor:ktor-server-netty:$ktorVersion")
    implementation("ch.qos.logback:logback-classic:$logbackVersion")
    implementation("io.ktor:ktor-serialization:$ktorVersion")

    implementation("mysql:mysql-connector-java:5.1.6")

    testImplementation("io.ktor:ktor-server-tests:$ktorVersion")
}