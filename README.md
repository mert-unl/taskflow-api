# TASKFLOW 
 TASKFLOW, Node.js ve Express.js kullanılarak hazırlanmış basit bir görev yönetimi REST API projesidir.
 Projede görev oluşturma, görevleri listeleme, görev detayını görüntüleme, görev güncelleme ve görev silme işlemleri yapılabilir.

## Kullanılan Teknolojiler
- Node.js
- Express.js
- JavaScript
- REST API
- JSON
- Nodeman

## Proje Yapısı
src
├── controllers
│   ─ taskControllers.js
├── data
│   ─ taskData.js
├── middleware
│   ─ logger.js
├── routes
│   ─ taskRoutes.js
├── app.js
├── request.http
└── server.js


## Kurulum
- Gerekli paketleri yüklemek için 
 "npm install"
 
- Projeyi normal şekilde çalıştırmak için
 "npm start"

- Geliştirme sırasında Nodeman ile çalıştırmak için
 "npm run dev"

- Varsayılan sunucu olarak 3000 portunda çalışır
 http://localhost:3000


## API Endpontleri
- Get /tasks
 Tüm görevleri getirir

- Get /tasks/:id
 İlgili ID'li görevi getirir 

- Post /tasks	
 Yeni bir görev oluşturur

- Put /tasks/:id	
 Görevi günceller

- Delete /tasks/:id	
 ID'si verilen görevi siler

- Delete /tasks
 Tüm görevleri topluca siler

## İstekleri Test Etme
 API isteklerini test etmek için VS Code içerisindeki REST Client eklentisi kullanılabilir. Eklentiyi kurup "/src/request.http" dosyasından istediğiniz istekleri kullanabilirsiniz. Yeni istek üretip var olan istekleri deneyebilirsiniz.

## Logger - Middleware
 Projede gelen HTTP isteklerini takip etmek için bir logger middleware bulunmaktadır. İstek geldiğinde terminalde HTTP methodu, endpoint ve istek zamanı gösterilir. Örn: GET /tasks || 20.9.2026 20:45:25

## Not
 Görev verileri bu projede geçici olarak "/src/data/taskData.js" içerisinde tutulmaktadır. Projede henüz bir veritabanı kullanılmamıştır.