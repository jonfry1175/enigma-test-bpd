# SETUP SERVER EXPRESS WITH SEQUELIZE ORM

1. pnpm init -y
- untuk membuat package.json, package.json berfungsi untuk menyimpan informasi package/modul dalam aplikasi kita.
- NPM = node package manager

2. pnpm install <package_name>
- untuk menginstall modul dari pnpm
- pnpm install express pg sequelize dotenv cors bcrypt jsonwebtoken
- pnpm install nodemon sequelize-cli --save-dev

3. Membuat file app.js dan .gitignore, .env
- gitignore berfungsi untuk tidak memasukkan node_modules ke dalam GitHub repository.
- env berfungsi untuk meletakan variable yang akan di gunakan dalam environment tertentu.

4. Membuat _routing dan controllers__

5. npx nodemon app.js
- untuk menjalankan


KONFIGURASI POSTGRES MENGGUNAKAN SEQUELIZE

1. pnpx sequelize-cli init
- untuk membuat initiation awal sequelize

2. Konfigurasi database di dalam config.json

3. pnpx sequelize-cli db:create
- untuk membuat database lewat sequelize tanpa query manual

4. pnpx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string,roleId:integer,rewardsPoint:integer



4. pnpx sequelize-cli model:generate --name Role --attributes name:string
4. pnpx sequelize-cli model:generate --name Product --attributes name:string,price:integer,merchantId:integer
4. pnpx sequelize-cli model:generate --name Reward --attributes name:string,pointsRequired:integer
4. pnpx sequelize-cli model:generate --name Reedem --attributes customerId:integer,rewardId:integer,redeemDate:date
4. pnpx sequelize-cli model:generate --name Transaction --attributes totalPrice:integer,productId:integer,userId:integer,rewardPointsEarned:integer




- untuk membuat class dan juga migrations


5. pnpx sequelize-cli db:migrate 
- untuk melakukan migrations
- agar table di buat

6. pnpx sequelize-cli db:seed --seed <nama-file-seeder>
pnpx sequelize-cli db:seed:all
- untuk melakukan seed data


![diagram](/server/docs/ERD.png)