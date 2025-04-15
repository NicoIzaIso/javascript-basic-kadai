// 体重と身長を編集に代入
let weight = 68; //例：68kg
let height_cm = 170; //例：175cm

//身長をメートルに変換
let height_m = height_cm / 100;

// BMI　を計算する関数
function calculateBMI(weight, height) {
    return weight / (height * height);
}

// BMI　の値を計算
let bmi = calculateBMI(weight, height_m);

//　結果をコンソールに出力
console.log('体重: '+ weight + 'kg');
console.log('身長：'+ height_cm + 'cm');
console.log('BMI: ' + bmi.toFixed(2)); //小数点以下2桁まで表示ｓ
