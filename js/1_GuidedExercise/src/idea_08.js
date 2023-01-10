// Task: Task: A little harder. Move the lines so you can abstract a single function that you call twice.
const moveAndExtract = (plate1, plate2) => {
    plate1 = formatPlateText(plate1);
    plate2 = formatPlateText(plate2);

    return plate1 === plate2
}

function formatPlateText(plate) {
    return plate
    .replace(/ /g, '')
    .replace(/A/g, '4')
    .replace(/B/g, '8')
    .replace(/D/g, '0')
    .replace(/G/g, '6')
    .replace(/I/g, '1')
    .replace(/O/g, '0')
    .replace(/T/g, '7')
    .replace(/Y/g, '7')
    .replace(/Z/g, '2')
}

module.exports = {moveAndExtract}
