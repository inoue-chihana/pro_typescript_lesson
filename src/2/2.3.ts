import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

export function lesson() {
    /** 数値 */
    const width5 = 5;
    const width7 = 7;
    const area = width5 + width7;
    console.log(width5);
    console.log(area);
    console.log(3.5 * 2);

    /** 文字列 */
    // テンプレートリテラル改行
    console.log(`Hello
        world!`);
    // エスケープシーケンス 改行
    console.log('Hello\nworld!');
    // エスケープシーケンス Unicodeコードポイント
    console.log('Hello \u796d world!');

    /**暗黙の型変換 */
    rl.question('文字列を入力してください：', (line) => {
        console.log(`${line}が入力されました。`);
        rl.close();
    });

    rl.question('数値を入力してネ。：', (num) => {
        const result = Number(num) + 2;
        console.log(result);
        rl.close();
    });
}
