# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
1241  rails new apartment_app -d postgresql -T
 1242  cd apartment_app
 1243  rails dl:create
 1244  rails db:create
 1245  git remote add origin https://github.com/learn-academy-2021-delta/apartment-app-BlueMemfis.git
 1246  git checkout -b main
 1247  git push origin main
 1248  git add .
 1249  git commit - "initial commit"
 1250  git commit -m "initial commit"
 1251  git push origin main
 1252  bundle add rspec-rails
 1253  rails generate rspec:install
 1254  bundle add devise
 1255  rails generate devise:install
 1256  rails generate devise User
 1257  rails db:migrate
 1258  code .
 1259  rails s
 1260* ls
 1261* cd Desktop
 1262* cd learn
 1263* ls
 1264* cd apartment_app
 1265* rails routes
 1266* rails c
 1267  rails s
 1268  rails g resource Apartment street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:integer pets:string user_id:integer
 1269  rails db:migrate
 1270  bundle add react-rails
 1271  rails webpacker:install
 1272  rails webpacker:install:react
 1273  rails generate react:install
 1274  history
 1275  rails generate react:component App
 1276  rails generate controller Home
       yarn add react-router-dom


config/initializers/devise.rb
# Find this line:
config.sign_out_via = :delete
# and replace it with this:
config.sign_out_via = :get