window.addEventListener("load", function () {
    $.ajax({
        type: "GET",
        url: "/products",
        success: function (response) {
            const container = document.getElementById("container");
            let products = response;
            let ul = document.createElement('ul');
            for (let i = 0; i < 4; i++) {
                let li = document.createElement('li');
                li.innerHTML = `<div class="productCard">
                                    <div class="image">
                                        <img src=${products[i].pic} />
                                    </div>
                                    <div class="card">
                                        <h4>${products[i].title}</h4>
                                        <p>${products[i].author}</p>
                                        <p>Цена: ${products[i].price} р.</p>
                                        <p>Аннотация: <span style="font-size: 0.8em;">${products[i].description}</span></p>
                                    </div>
                </div>`;
                ul.appendChild(li)
            };
            container.appendChild(ul);
        },
    });
});


function getMore() {
    $.ajax({
        type: "GET",
        url: "/products",
        success: function (response) {
            const container = document.getElementById("container");
            let products = response.splice(4);
            console.log(products);
            let ul = document.createElement('ul');
            for (let i = 0; i < 4; i++) {
                let li = document.createElement('li');
                li.innerHTML = `<div class="productCard">
                                    <div class="image">
                                        <img src=${products[i].pic} />
                                    </div>
                                    <div class="card">
                                        <h4>${products[i].title}</h4>
                                        <p>${products[i].author}</p>
                                        <p>Цена: ${products[i].price} р.</p>
                                        <p>Аннотация: <span style="font-size: 0.8em;">${products[i].description}</span></p>
                                    </div>
                </div>`;
                ul.appendChild(li)
            };
            container.appendChild(ul);
        },
    });
};
