--------------SET UP--------------
-------setup mongodb by docker-------
1. สร้างไฟล์ docker-compose.yml
2. set image เป็น mongo
3. กำหนด username และ passwod ของ root mongo
4. กำหนด ports เป็น 27017 (เป็นพท้นฐาน)
5. run services docker โดยคำสั่ง docker-compose up -d

--------------Command--------------
-------setup mongodb by docker-------
//gen controller
nest generate controller <name>

//gen service
nest generate service <name>

//gen module
generate module <name>

//gen all
nest g resource <name>
