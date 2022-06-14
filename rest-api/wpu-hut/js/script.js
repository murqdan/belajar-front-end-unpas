function tampilkanSemuaMenu() {
    fetch('data/pizza.json')
        .then(response => response.json())
        .then(response => {
            let menu = response.menu;

            let daftarMenu = document.getElementById('daftar-menu');
            daftarMenu.innerHTML = '';

            menu.forEach((data, i) => {
                let daftarMenu = document.getElementById('daftar-menu');
                daftarMenu.innerHTML += `
                <div class="col-md-4"> 
                 <div class="card mb-3">
                  <img src="img/menu/${data.gambar}" class="card-img-top">
                  <div class="card-body">
                    <h5 class="card-title">${data.nama}</h5>
                    <p class="card-text">${data.deskripsi}</p>
                    <h5 class="card-title">${data.harga}<h5>
                    <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                  </div>
                 </div>
                </div>`;
            })
        });
}

tampilkanSemuaMenu();



let navLink = document.querySelectorAll('.nav-link');

navLink.forEach(nav => {
    nav.addEventListener('click', function () {
        navLink.forEach(nv => nv.classList.remove('active'));
        this.classList.add('active');

        let kategori = this.innerHTML;
        let hSatu = document.querySelector('h1');
        hSatu.innerHTML = kategori;

        if (kategori == 'All Menu') {
            tampilkanSemuaMenu();
            return;
        }

        fetch('data/pizza.json')
            .then(response => response.json())
            .then(response => {
                let menu = response.menu;
                let content = '';

                menu.forEach((data, i) => {
                    if (data.kategori == kategori.toLowerCase()) {
                        content += `
                        <div class="col-md-4"> 
                         <div class="card mb-3">
                          <img src="img/menu/${data.gambar}" class="card-img-top">
                          <div class="card-body">
                            <h5 class="card-title">${data.nama}</h5>
                            <p class="card-text">${data.deskripsi}</p>
                            <h5 class="card-title">${data.harga}<h5>
                            <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                          </div>
                         </div>
                        </div>`;
                    }
                });

                let dfMenu = document.getElementById('daftar-menu');
                dfMenu.innerHTML = content;
            });
    });
});