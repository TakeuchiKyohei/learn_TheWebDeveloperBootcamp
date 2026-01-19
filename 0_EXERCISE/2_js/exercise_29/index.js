// オブジェクトを使う演習問題
// index.jsにrestaurantオブジェクトを用意していて、name, address, city, state, zipcodeが定義されています。

// restaurantの情報を使ってfullAddressという変数に住所を代入してください

// fullAddressはStringであり、中身は例えば以下のような内容になります(address, city, state, zipcodeの順番です)

// '64 Johnson Ave, Brooklyn, NY 11206'

//下のコードは編集しないでください
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//この下にコードを書いてください
const fullAddress = restaurant.address+restaurant.city+restaurant.state+restaurant.zipcode

console.log(fullAddress)
