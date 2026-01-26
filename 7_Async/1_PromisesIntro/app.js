// コールバック版
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('コネクションタイムアウト')
        } else {
            success(`ダミーデータ(${url})`)
        }
    }, delay)
}
// Promise版
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('コネクションタイムアウト')
            } else {
                resolve(`ダミーデータ(${url})`)
            }
        }, delay)
    })
}

// fakeRequestCallback('books.com',function(res){
//     console.log('成功！！');
//     console.log(res);
//     fakeRequestCallback('books.com2',function(res){
//         console.log('成功2！！');
//         console.log(res);
//         fakeRequestCallback('books.com3',function(res){
//             console.log('成功3！！');
//             console.log(res);
//         }, function(err){
//             console.log('エラー3！！！');
//             console.log(err);
//         })
//     }, function(err){
//         console.log('エラー2！！！');
//         console.log(err);
//     })
// }, function(err){
//     console.log('エラー！！！');
//     console.log(err);
// })

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log('成功1！！！');
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log('成功2！！！');
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log('成功3！！！');
//                     })
//                     .catch(() => {
//                         console.log('失敗3！！！！');
//                     });
//             })
//             .catch(() => {
//                 console.log('失敗2！！！！');
//             });
//     })
//     .catch(() => {
//         console.log('失敗1！！！！');
//     });

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log('成功1！！！');
//         console.log(data);
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log('成功2！！！');
//         console.log(data);
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log('成功3！！！');
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log('失敗！！！！');
//         console.log(err);
//     });

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log('成功1！！！');
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then(() => {
        console.log('成功2！！！');
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then(() => {
        console.log('成功3！！！');
    })
    .catch((err) => {
        console.log('失敗！！！！');
        console.log(err);
    })
