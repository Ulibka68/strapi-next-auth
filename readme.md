# Тестовый проект User Authentication in Next.js with Strapi
https://strapi.io/blog/user-authentication-in-next-js-with-strapi  

https://github.com/ghoshnirmalya/nextjs-authentication-using-strapi-and-next-auth

# Построить backend - strapi+postgress

### 1. запусти
docker-compose up

### 2. перейди по адресу, заполни форму
http://localhost:1337/admin

### 3. необходимо включить google provider в приложении

#### 3.1 Нажмите settings
![image info](https://github.com/Ulibka68/strapi-next-auth/blob/master/backend/assets/1.png?raw=true)

#### 3.2 Нажмите Providers
![image info](https://github.com/Ulibka68/strapi-next-auth/blob/master/backend/assets/2.png?raw=true)

#### 3.2 Выберите Google и заполните форму как показано ниже
Значения Client ID и Client Secret соержатся в файле frontend/.env
![image info](https://github.com/Ulibka68/strapi-next-auth/blob/master/backend/assets/3.png?raw=true)

# Построить фронт
cd frontend  
yarn  
yarn dev  
запустите  
http://localhost:3000/

# Запустить docker для front
cd frontend
docker build -t nextjs-for-strapi .
