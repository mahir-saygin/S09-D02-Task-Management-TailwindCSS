# Gün Projesi: Task Yönetimi -> Tailwindcss Geçişi

Çalıştığın şirkette güvenlik açığı bulunan kütüphaneler yenileri ile değiştirilmeye başlanmıştı.
Hazır projeler elden geçirilir iken, "modern kütüphaneler ile yenileme çalışmaları" yeni sprint hedefi olarak belirlendi.

Bu kapsamda senden projede `date-fns` ve `tailwindcss` kütüphanelerini eklemeni istiyorlar.

Bu 2 kütüphane de projeye install edildi:
[ ] date-fns'deki gerekli metodları ve localization ayarını ekleyerek kullanabilirsin.
[ ] tailwindcss dokümantasyonunda "get started" bölümündeki ilk adım yapıldı. 2. ve 3. adımı yaparak kurulumu tamamlayabilirsin.

Sana düşen sadece Task.jsx component'indeki dönüşümü yapmak:
[ ] `Task.jsx`component'inde kullanılan task.css dosyasına bakarak oradaki class'ları tailwind class'ları ile yazabilirsin. Renkleri css'de geçtiği şekilde kullanmalısın. tailwind class'ları eğer istediğin değeri sağlamıyorsa, arbitrary olarak yazabilirsin( bg-[#ccc] v.b)
[ ] css dosyasındaki .urgent ve .normal renkleri sürekli kullanılacağı için bunu config dosyasında theme altında aynı isimde(normal, urgent) custom renkler olarak tanımlaman isteniyor.
[ ] component içindeki deadline'lar direk data'dan gelen değeri yazıyor. date-fns kütüphanesindeki metodları kullanarak "1 gün sonra", "4 gün kaldı" gibi metin halinde yazman isteniyor.
[ ] eğer deadline'a 3 günden az kaldı ise deadline metninin arka planı custom tanımladığın urgent rengini, 3 günden fazla var ise normal değerini kullanmalı.

- İpucu: dokümantasyonda customizing your theme'den destek alabilirsin.
- İpucu: formatDistanceToNow, differenceInDays metodları işine yarayabilir.

## Önemli Notlar

- Proje dizinindeki `user.json` dosyasını bulun ve `user_id` alanını NextGen proje ekranında görünen kendi `user_id` değeriniz ile güncelleyin.
- Geliştirme sırasında testleri izlemek için `npm test` komutunu kullanın.
- Testleri çalıştırıp skoru NextGen'e kaydetmek için `npm run sendresults` komutunu kullanın.
