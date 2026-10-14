# TASKFLOW 
 TASKFLOW, Node.js ve Express.js kullanılarak hazırlanmış basit bir görev yönetimi REST API projesidir.
 Projede görev oluşturma, görevleri listeleme, görev detayını görüntüleme, görev güncelleme, görev silme ve gelişmiş filtreleme yapılabilir.

## Kurulum
- Gerekli paketleri yüklemek için 
 "npm install"
 
- Projeyi normal şekilde çalıştırmak için
 "npm start"

- Geliştirme sırasında Nodeman ile çalıştırmak için
 "npm run dev"

- Varsayılan sunucu olarak 3000 portunda çalışır
 http://localhost:3000


## Kullanılan Teknolojiler ve Kütüphaneler
- Node.js
- Express.js
- Middleware
- REST API
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


- Get	/tasks?completed=true	
Tamamlanmış görevleri getirir

- Get	/tasks?completed=false	
Tamamlanmamış görevleri getirir

- Get	/tasks?priority=Önemli

	Belirtilen önceliğe sahip görevleri getirir

- Get	/tasks/search?keyword=express	
Başlıkta veya açıklamada kelime arar

- Get	/tasks/assignee/Mert%20Ünal
	Belirtilen kullanıcıya atanmış görevleri getirir

- Get	/tasks?sort=createDate&order=asc	
En eski oluşturulan görevleri önce getirir

- Get	/tasks?sort=createDate&order=desc	
En yeni oluşturulan görevleri önce getirir


## İstekleri Test Etme
 API isteklerini test etmek için VS Code içerisindeki REST Client eklentisi kullanılabilir. Eklentiyi kurup "/src/request.http" dosyasından istediğiniz istekleri kullanabilirsiniz. Yeni istek üretip var olan istekleri deneyebilirsiniz.

## Logger - Middleware
 Projede gelen HTTP isteklerini takip etmek için bir logger middleware bulunmaktadır. İstek geldiğinde terminalde HTTP methodu, endpoint ve istek zamanı gösterilir. 
 Örn: GET /tasks || 20.9.2026 20:45:25

 Body olan istekler için body ile beraber gözükür.
 Örn: 
 POST /tasks || 20.9.2026 21:0:51
    Body: {
    title: 'Post ile Görev oluştur',
    desc: 'ilk görevi oluştur',
    priority: 'Orta',
    assignee: 'Mert Ünal',
    completed: false
    }

## Not
 Görev verileri bu projede geçici olarak "/src/data/taskData.js" içerisinde tutulmaktadır. Projede henüz bir veritabanı kullanılmamıştır.