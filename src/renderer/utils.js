const URL = "http://localhost:3000/";
export class Items {
    static deleteItem(num = 0) {
        return fetch(URL + "api/item/" + num, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    static getItems() {
        return fetch(URL)
            .catch(function (error) {
                const alert = new Alert("Проблема соединения с сервером");
                alert.showAlert();
            })
            .then((response) => response.json())
            .then(({ items }) => items);
    }
    static getJsonData() {
        return fetch(URL + "json/", {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .catch(function (error) {
                const alert = new Alert("Проблема соединения с сервером");
                alert.showAlert();
            })
            .then((response) => response.json())
            .then(({ items }) => {
                return items;
            });
    }
    static setItem(obj) {
        return fetch(URL + "api/item/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        }).catch(function (error) {
            const alert = new Alert("Проблема соединения с сервером");
            alert.showAlert();
        });
    }

    static renderList(items = {}, deleteI = true) {
        console.log(items);
        let html = "";
        if (items.length !== 0) {
            items.map((val, index) => {
                html += `<div class="list"><span>id: ${val.id}, text: ${val.text} </span>`;
                if (deleteI)
                    html += `<button  class="btn btn-outline-danger btn-sm delete-item" data-item-id="${val.id}">&#10006;</button>`;
                html += `</div>`;
            });
        } else html = "Данных нет";
        const dataList = document.getElementById("data");
        dataList.innerHTML = html;
    }
}

export class Alert {
    constructor(message, color = "warning") {
        this.message = `
        <div class="alert alert-${color} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        `;
    }

    showAlert() {
        const form = document.getElementById("form");
        const alert = document.createElement("div");
        alert.innerHTML = this.message;

        const oldAlert = form.querySelector("div.alert");
        if (oldAlert) oldAlert.outerHTML = "";
        form.prepend(alert);
        alert.querySelector(".close").addEventListener("click", (e) => {
            e.target.closest("div.alert").outerHTML = "";
        });
    }
}
