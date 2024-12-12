import fs from 'fs'

try {
    let result = 0
    const leftList = []
    const rightList = []
    const data = fs.readFileSync('inputs/day1.txt', 'utf8');
    const lines = data.match(/[^\r\n]+/g);
    lines.forEach(line => {
        const l = line.split('   ')
        leftList.push(Number(l[0]))
        rightList.push(Number(l[1]))
    })

    leftList.sort()
    rightList.sort()
    for (let index = 0; index < leftList.length; index++) {
        result = result + Math.abs(leftList[index] - rightList[index])
    }

    console.log(result)
} catch(e) {
    console.log('Error:', e.stack);
}