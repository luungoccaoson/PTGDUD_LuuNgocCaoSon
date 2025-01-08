console.log("Challenge #3");
// Data 1
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

// Data Bonus 1
const dolphinsScores2 = [97, 112, 101];
const koalasScores2 = [109, 95, 123];

// Data Bonus 2
const dolphinsScores3 = [97, 112, 101];
const koalasScores3 = [109, 95, 106];

// Hàm nhận mảng và tính điểm trung bình
const calculateAverage = (scores) => scores.reduce((a, b) => a + b, 0) / scores.length;

// Tính điểm trung bình
const dolphinsAvg1 = calculateAverage(dolphinsScores1);
const koalasAvg1 = calculateAverage(koalasScores1);

const dolphinsAvg2 = calculateAverage(dolphinsScores2);
const koalasAvg2 = calculateAverage(koalasScores2);

const dolphinsAvg3 = calculateAverage(dolphinsScores3);
const koalasAvg3 = calculateAverage(koalasScores3);

const minimumScore = 100;

const compareTeams = (dolphinsAvg, koalasAvg) => {
    if (dolphinsAvg >= minimumScore && koalasAvg >= minimumScore) {
        if (dolphinsAvg === koalasAvg) {
            return "Hòa! Cả hai đội đều đạt điểm trung bình là " + dolphinsAvg.toFixed(1);
        } else if (dolphinsAvg > koalasAvg) {
            return "Dolphins chiến thắng với số điểm trung bình là " + dolphinsAvg.toFixed(1);
        } else {
            return "Koalas chiến thắng với số điểm trung bình là " + koalasAvg.toFixed(1);
        }
    } else {
        return "Không có đội chiến thắng vì không đội nào đạt điểm tối thiểu 100.";
    }
}

// So sánh kết quả cho từng bộ dữ liệu
console.log("Data 1: " + compareTeams(dolphinsAvg1, koalasAvg1));
console.log("Data Bonus 1: " + compareTeams(dolphinsAvg2, koalasAvg2));
console.log("Data Bonus 2: " + compareTeams(dolphinsAvg3, koalasAvg3));
