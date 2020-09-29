function Candidate(_name, idi, dob, score) {
    this._name = _name;
    this.idi = idi ;
    this.dob = dob ;
    this.score = score;

    this.showInfor = function () {
        let a = "";
        a += "Tên:" + this._name + '     Id:' + this.idi +'     Ngày sinh:' + this.dob +'     Điểm Toán Văn Anh:' +this.score;
        return a ;
    }

    this.setScore = function (mat, lit, eng) {
        let Score = [];
        let index = 0;
        Score[index] = [mat, lit, eng];
        index++;
    }

    this.getAverageScore = function () {
        return (this.score[0]+this.score[1]+this.score[2])/3;
    }
}

let can1 = new Candidate( 'Nguyễn Thị Thu Uyên',101,"15/07/02",[7,8,9]);
let can2 = new Candidate( 'Dương Hoài Thương',102,"21/05/02",[8,9,10]);
let can3 = new Candidate( 'Lê Hoàng Đức',103,"12/04/02",[8,8,8.5]);
can1.getAverageScore();
can1.showInfor();
can1.setScore(9,9,9);
document.getElementById("p1").innerHTML = (can1.showInfor() + '<br>'+ can2.showInfor() + '<br>' +can3.showInfor() ) ;