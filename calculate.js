let a = 100 // You can adjust the size of 'a' as needed
let digit = 2
let totalDiskSize = a * a * 1.618
let currentBlockSize = a * a
let remainingArea = totalDiskSize

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        // Calculate remaining area after spawning a block
        remainingArea -= currentBlockSize

        // Log the remaining area
        console.log(`Remaining area: ${remainingArea.toFixed(digit)}`)
        // console.log(digit)

        // Update the size for the next block
        currentBlockSize *= 0.618 * 0.618
    }
})
