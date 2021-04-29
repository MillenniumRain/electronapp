const { Items, Alert } = require("./utils");

Items.getItems().then((items) => Items.renderList(items));

const getFromTornado = document.getElementById("get");
getFromTornado.addEventListener("click", (e) => {
    Items.getItems().then((items) => {
        Items.renderList(items);
        const alert = new Alert("Данные из items получены", "primary");
        alert.showAlert();
    });
});

const clearAll = document.getElementById("clear");
clearAll.addEventListener("click", (e) => {
    Items.deleteItem(0)
        .then(Items.getItems)
        .then((items) => {
            Items.renderList(items);
            const alert = new Alert("Все записи удалены", "danger");
            alert.showAlert();
        });
});

const postItem = document.getElementById("post");
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    Items.getItems().then((data) => {
        if (postItem.value.trim())
            Items.setItem({
                id: data.length + 1,
                text: postItem.value.trim(),
            })
                .then(Items.getItems)
                .then((items) => Items.renderList(items));
        postItem.value = "";
        postItem.focus();
    });
});

const getJsonDataFromFile = document.getElementById("json");
getJsonDataFromFile.addEventListener("click", (e) => {
    Items.getJsonData().then((items) => {
        Items.renderList(items, false);
        const alert = new Alert(
            "Данные из JSON файла были получены",
            "success"
        );
        alert.showAlert();
    });
});

const dataList = document.getElementById("data");
dataList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-item")) {
        Items.deleteItem(e.target.dataset.itemId)
            .then(Items.getItems)
            .then((items) => Items.renderList(items));
    }
});
