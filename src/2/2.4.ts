import { createInterface } from 'readline';

/**単項演算子 */
export function lessonTankoEnzanshi() {
    let num10_1 = 10;
    console.log(num10_1++);
    let num10_2 = 10;
    console.log(++num10_2);
    let num10_3 = 10;
    console.log(num10_3--);
    let num10_4 = 10;
    console.log(--num10_4);
}

/** 代入演算子 */
export function lessonDainyuEnzanshi() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('名前を入力して', (name) => {
        // 空文字、null、undefinedの場合は「名無し」
        if (name === '' || name == undefined) {
            name = '名無し';
        }

        console.log(`こんにちは、${name}さん`);
        rl.close();
    });
}
