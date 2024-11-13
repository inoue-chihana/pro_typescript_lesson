export function lesson() {
    let i = 1
    while (i <= 100) {
        i++;
        // 剰余（余り）を計算
        if (i % 2 === 1) {
            continue;
        }
        console.log(`偶数：${i}`)
    }
}