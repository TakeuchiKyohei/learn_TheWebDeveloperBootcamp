const fakeReq = (url) => {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        setTimeout(() => {
            if(random < 0.7) {
                resolve("ダミーデータ");
            }else {
                reject("タイムアウト");
            }
        }, 1000);
    });
}

fakeReq("/hoge")
    .then((data) => {
        console.log("成功", data)
    })
    .catch((err) => {
        console.log("失敗", err)
    })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}

// delayedColorChange("red", 1000)
//     .then(() => delayedColorChange("orange", 1000))
//     .then(() => delayedColorChange("yellow", 1000))
//     .then(() => delayedColorChange("green", 1000))
//     .then(() => delayedColorChange("blue", 1000))
//     .then(() => delayedColorChange("indigo", 1000))
//     .then(() => delayedColorChange("violet", 1000))

async function rainbow(){
    await delayedColorChange("red", 1000);
    delayedColorChange("orange", 1000);
}

rainbow();

async function makeReq() {
    try {
        let data1 = await fakeReq("/hoge");
        console.log(data1);
    }catch(e){
        console.log("エラーが発生しました", e);
    }
}
makeReq()
