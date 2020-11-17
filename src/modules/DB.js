const key = "5f9f25b9231ba42851b4a04d";
const endpoint = "https://stefflr-0d51.restdb.io/rest/cards";

export function showCards(cards) {
  console.log(cards);
}

export function _GET(callback) {
  fetch(endpoint, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": key,
      "cache-control": "no-cache",
    },
  })
    .then((e) => e.json())
    .then((data) => callback(data))
    .catch(function (error) {
      console.log("Request failed", error);
    });
}

export function _POST(payload, cards, callback) {
  fetch(endpoint, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": key,
      "cache-control": "no-cache",
    },
    body: JSON.stringify(payload),
  })
    .then((e) => e.json())
    .then((data) => {
      callback(cards.concat(data));
    })
    .catch(function (error) {
      console.log("Request failed", error);
    });
}
