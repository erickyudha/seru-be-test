# seru-be-test

Backend test PT SERU

Erick Yudha Pratama Sukku

Postman Collecion: https://www.postman.com/avionics-operator-15039293/workspace/public-ws/collection/15723881-c7c2a3b4-ac6a-4719-8edd-37d2b558ce5e?action=share&creator=15723881

Docker Image: https://drive.google.com/file/d/15JYL2NThfwajNxHL7PkZtdskH0UcIvs8/view?usp=sharing

## Installation

Clone the repository and then run this command from project root folder:

        npm init


## Setup DB

Prerequsites:Installed postgresql and all node modules

Cofigure database credentials in database config.

After that run this command:

        npm run db:setup

This command will setup db and all tables + sample data

## Running application

Run this command:

        npm run start

For running in dev mode:

        npm run develop
