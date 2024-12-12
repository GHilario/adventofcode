import fs from 'fs'

try {
    let result = 0
    const leftList = []
    const rightList = []
    const data = fs.readFileSync('inputs/day2.txt', 'utf8');
    const lines = data.match(/[^\r\n]+/g);
    lines.forEach(line => {
        const l = line.split('   ')
        leftList.push(Number(l[0]))
        rightList.push(Number(l[1]))
    })

    leftList.forEach(l => {
        const appears = rightList.filter(r => r === l).length
        result = result + (appears * l)
    })

    console.log(result)
} catch(e) {
    console.log('Error:', e.stack);
}