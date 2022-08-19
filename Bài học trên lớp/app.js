//Booleam (true/false)

//1. Khai báo
// let single = true;
// let bald = false;

//2. Mệnh đề so sánh
//Toán tử so sánh
// >, <, >=, <=, ==, !=
// console.log(1 == 1);// true
// 1 > 1 // false
// 1 >= 1 // true
// console.log(1 != 1); //false
// 1 == "1" //true -> chỉ so sánh giá trị
// 1 === "1" // false -> so sánh cả giá trị và kiểu dữ liệu -> ưu tiên
// 1 !== "1" // true


// So sánh giữa 2 string
// "a" > "b" // false
// "abc" > "aba" // true


// and (&&), or (||)
// 1 > 1 && 2 ===2 // false
// 1 > 1 || 2 ===2 // true


//Branching statements (Câu lệnh rẽ nhánh)
// if(condition1){
//     // do something1
// } else if (condition2){
//     // do something2
// } else if (condition3){
//     // do something3
// } else {
//     // do something4
// }

//Ex1:
//Cho nguời dùng nhập vào số n
//Kiểm tra xem đó là số chẵn hay lẻ và in ra kết quả
//ra màn hình console

// let n;
// n = prompt("Nhập vào số n:");
// if (n%2 ===0){
//     console.log("n là số chắn");
// } else {
//     console.log("n là số lẻ");
// }

//Ex2:
//Cho nguời dùng nhập vào 2 số a và b
//Kiểm tra xem số nào lớn hơn và in ra kết quả
//ra màn hình console

// let a;
// let b;
// a = prompt("Enter a = ");
// b = prompt("Enter b = ");
// if (a>b){
//     console.log("a lớn hơn b");
// } else if (a<b) {
//     console.log("a nhỏ hơn b");
// } else {
//     console.log("a bằng b");
// }

//Ex3:
//Cho nguời dùng nhập vào 3 số a,b và c
//Kiểm tra xem số nào là số lớn nhất (max) và in ra kết quả
//ra màn hình console

// let a;
// let b;
// let c;
// let max;
// a = prompt("Enter a = ");
// b = prompt("Enter b = ");
// c = prompt("Enter c = ");
// if (a>b && a>c){
//     max=a;
// } else if(b>a && b>c){
//     max=b;
// } else if (c>a && c>b){
//     max=c
// } else {
//     max="3 số bằng nhau"
// }
// console.log(max);

//Ex3:
//Cho nguời dùng nhập vào 3 số a,b và c
//Kiểm tra xem số nào là số nhỏ nhất (min) và in ra kết quả
//ra màn hình console

// let a;
// let b;
// let c;
// let min;
// a = prompt("Enter a = ");
// b = prompt("Enter b = ");
// c = prompt("Enter c = ");
// if (a<b&&a<c){
//     min=a;
// } else if(b<a&&b<c){
//     min=b;
// } else if (c<a&&c<b){
//     min=c
// } else {
//     min="3 số bằng nhau"
// }
// console.log(min);

//Ex4:
//Viết 1 ứng dụng cho người dùng nhập
//Vào chiều cao (m) và cân nặng (kg)
//Google bảng BMI
//Tính BMI và in ra kết quả cho người dùng

// let h;
// let w;
// let bmi;
// h = prompt("Enter height:");
// w = prompt("Enter weight:");
// bmi = w/(h*h);
// if(bmi<18.5){
//     console.log(`BIM = ${bmi} and you: underweight`);
// } else if (bmi>=18.5&&bmi<=24.9){
//     console.log(`BIM = ${bmi} and you: nomal`);
// } else if(bmi>=25){
//     if(bmi<29.9){
//         console.log(`BIM = ${bmi} and you: overweight`);
//     } else if(bmi>=30&&bmi<=34.9){
//         console.log(`BIM = ${bmi} and you: obese`);
//     } else if(bmi>35){
//         console.log(`BIM = ${bmi} and you: extremble obese`);
//     }
// }

//Ex5:
//Cho người dùng nhập vào 3 số a, b và c
//Tìm nghiệm của phương trình bậc 2 ax^2 + bx + c = 0

// let a;
// let b;
// let c;
// let del;
// let x1;
// let x2;
// a=prompt("Enter a:");
// console.log(`a=${a}`);
// b=prompt("Enter b:");
// console.log(`b=${b}`);
// c=prompt("Enter c:");
// console.log(`c=${c}`);
// if (a===0){
//     console.log(`Phuong trinh co 1 nghiem, x=${-c/b}`);
// } else if (a!==0){
//     del=(b*b)-(4*a*c);
//     if (del<0){
//         console.log("Phuong trinh vo nghiem!");
//     } else if (del==0){
//         console.log(`Phuong trinh co nghiem kep, x1=x2=${-b/(2*a)}`);
//     } else if (del>0){
//         console.log(`Phuong trinh 2 nghiem phân biệt, x1=${(-b-Math.sqrt(del))/(2*a)}, x2=${(-b+Math.sqrt(del))/(2*a)}`);
//     }
// }

//Ex7:
//Cho người dùng nhập vào tháng bất kỳ, xác đinh tháng
//đó thuộc mùa nào trong năm
//sử dụng switch case

// let m;
// let x;
// m = Number(prompt("Nhap thang:"));
// switch(m){
//     case 1:
//     case 2:
//     case 3:
//         x="xuan";
//         break;
//     case 4:
//     case 5:
//     case 6:
//         x="ha";
//         break;
//     case 7:
//     case 8:
//     case 9:
//         x="thu";
//         break;
//     case 10:
//     case 11:
//     case 12:
//         x="dong";
//         break;
//     default:
//        x="Khong co";
//        break;
// }
// console.log(`Thang ${m} la mua: ${x}`);


//========================================================
//BÀI TẬP TỰ LÀM TRÊN LỚP
//1.	Let/var/const
// Tìm hiểu về let, var, const
// -	Đọc các bài viết sau:
// -	var, let and const, what is the difference?
// -	var vs let vs const in JavaScript
		
// Trả lời các câu hỏi sau:
// 1.	Var, let, const là gì trong Javascript?
//Là cú pháp dùng để khai báo biến
// 2.	Sự khác nhau giữa let và var nằm ở đâu?
// let trong phạm vi hẹp, có thể được định nghĩa lại trong các câu lệnh sau nhưng không thay đổi giá trị ban đầu
// var trong phạm vi rộng, vừa có thể thay đổi vừa có thể khai báo lại
// 3.	Sự khác nhau giữa let và const nằm ở đâu?
// ???????????????????????????????????????????????????????????
// 4.	Trường hợp nào thì sử dụng từ khoá nào?
//Var khai báo biến và sau đó muốn thay đổi giá trị biến trong toàn bộ chương trình
//let giữ nguyên giá trị trong toàn bộ chương trình, chỉ thay đổi trong các block lệnh
//const ?????????????????????????????????????????????????????

// 2.	Boolean
// Tìm hiểu về boolean
// -	Đọc các bài viết sau:
// -	A Boolean (logical type) and Logical operators
// -	JavaScript Boolean explained
// -	Hoặc bài viết sau:
// -	https://bit.ly/3PA2vpO

// 	Trả lời các câu hỏi sau:
// 1.	Boolean là gì?
//Kiểu dữ liệu trả về 2 giá trị: true / false
// 2.	Có những kết quả nào trong boolean?
// true / false
// 3.	Boolean thường được sử dụng trong đâu? Cho ví dụ về các biến có kiểu giá trị là boolean
//Trong biểu thức so sánh, && ||

//1.Viết một đoạn mã cho phép người dùng nhập vào một số, kiểm tra xem số đó nằm trong
//khoảng nửa bé hơn của [0 - 9] hay nửa lớn hơn của [0 - 9]
// let n;
// n=Number(prompt("Enter n number"));
// if(n>=0&&n<=5){
//     console.log(`${n} nằm trong khoảng dưới`);
// } else if (n>5&&n<=9){
//     console.log(`${n} nằm trong khoảng trên`);
// } else {
//     console.log(`${n} không nằm trong khoảng từ 0-9`);
// }

//2.Viết một đoạn mã cho phép người dùng nhập vào một số n và một số x. Tiến hành kiểm
//tra xem số x thuộc nửa bé hơn của [0 - n] hay nửa lớn hơn của [0 - n]
// let n;
// let x;
// n=Number(prompt("Enter n number"));
// x=Number(prompt("Enter x number"));
// let k=n/2;
// if(x>=0&&x<=k){
//     console.log(`${x} thuộc nửa dưới`);
// } else if(x>k&&x<=n){
//     console.log(`${x} thuộc nửa trên`);
// } else {
//     console.log(`${x} không nằm trong khoảng từ 0-${n}`);
// }

//3.Viết một đoạn mã cho người dùng nhập vào một số x. Tiến hành kiểm tra xem số x đấy
//là chẵn hay lẻ và in kết quả kiểm tra được bằng câu lệnh alert

// let x;
// x=Number(prompt(`Nhap so x:`));
// if(x%2===0){
//     alert(`${x} la so chan`);
// } else alert(`${x} la so le`);

//4.Viết một đoạn mã tính chỉ số BMI (Body Mass Index) của một người, công thức tính như sau:
//BMI (Body Mass Index):
//BMI = mass (kg) / (height(m) x height(m))
//Note: Bạn phải tiến hành chuyển đổi đơn vị trước khi tính toán
//Tiến hành phân loại thông tin cơ thể của người dùng theo bảng phân loại dưới đây:
//●	“Mày là bộ xương à” BMI < 16
//●	“Mày là idol hàn quốc à” 16 and 18.5
//●	“Mày đẹp zai đấy” 18.5 and 25 
//●	“Mày béo quá rồi đấy” 25 and 30
//●	“Thôi ông không cần giảm nữa đâu”  > 30

// let m;
// let h;
// let bmi;
// m = Number(prompt(`Nhap can nang (kg)`));
// h = Number(prompt(`Nhap chieu cao (cm)`));
// bmi=m/(h*h/10000);
// console.log(`Chi so BMI la: ${bmi}`);
// if (bmi<16){
//     console.log(`May la bo xuong a`);
// }   else if (bmi>=16){
//         if(bmi<18.5){
//             console.log(`May la idol han quoc a`);
//         }else if (bmi>=18.5&&bmi<25){
//             console.log(`May dep zai day`);
//         }else if (bmi>=25&&bmi<30){
//             console.log(`May beo qua roi day`);
//         }else {
//             console.log(`Thoi ong khong can giam nua dau`);
//         }
// }

//5.Viết một đoạn mã cho phép người dùng nhập vào điểm của 5 môn học Toán, Lý, Hoá,
//Văn, Anh. Tính % Tổng điểm các môn trung bình cộng lại và so sánh với bảng bên
//dưới. Sau đó in ra cho người dùng xếp hạng của mình:
// -	Percentage >= 90% : Grade A
// -	Percentage >= 80% : Grade B
// -	Percentage >= 70% : Grade C
// -	Percentage >= 60% : Grade D
// -	Percentage >= 40% : Grade E
// -	Percentage < 40% : Grade F

// let toan;
// let ly;
// let hoa;
// let van;
// let anh;
// let tb;
// toan = Number(prompt(`Nhap diem toan`));
// ly = Number(prompt(`Nhap diem ly`));
// hoa = Number(prompt(`Nhap diem hoa`));
// van = Number(prompt(`Nhap diem van`));
// anh = Number(prompt(`Nhap diem anh`));
// console.log(`Diem toan: ${toan}`);
// console.log(`Diem ly: ${ly}`);
// console.log(`Diem hoa: ${hoa}`);
// console.log(`Diem van: ${van}`);
// console.log(`Diem anh: ${anh}`);
// tb=(100*(toan+ly+hoa+van+anh))/50;
// console.log(`Diem trung binh: ${tb}`);
// if (tb>=90){
//     console.log(`Grade A`);
// }   else if (tb>=80&&tb<90){
//     console.log(`Grade B`);
// }   else if (tb<80){
//     if (tb>=70){
//         console.log(`Grade C`);
//     }   else if (tb<70&&tb>=60){
//         console.log(`Grade D`);
//     }   else if (tb<60&&tb>=40){
//         console.log(`Grade E`);
// }       else {
//     console.log(`Grade F`);
// }
// }


// 6.	Viết một đoạn mã cho phép người dùng nhập vào một năm bất kỳ.
// -	Kiểm tra xem năm người dùng nhập vào có hợp lệ hay không.
// -	Sau khi đã hợp lệ thì kiểm tra xem năm đó có phải là năm nhuận hay không → Tiến hành in kết quả kiểm tra được ra màn hình console

// let y = Number(prompt(`Nhap so nam:`));
// x=Number.isInteger(y);
// if (x===false){
//     console.log(`${y} la nam khong hop le`);
// }
// else if(x===true && y%4===0){
//     console.log(`${y} la nam nhuan`);
// }else if (x===true && y%400===0){
//     console.log(`${y} la nam nhuan`);
// }else{
//     console.log(`${y} KHONG la nam nhuan`);
// }


// 7.	Viết một đoạn mã cho phép người dùng nhập vào 
// chiều cao của người đó ở cm. 
// Sau đó tiến hành phân loại người đó 
// theo hướng dẫn dưới đây
// -	Chiều cao < 150 cm: Mày là người lùn à
// -	Chiều cao trong khoảng 150 cm - 169 cm: 
//     Trông mày cũng tàm tạm. Cho 3 điểm
// -	Chiều cao >= 17 cm: Mày trông cũng được đấy

// let h;
// h = prompt(`Nhap chieu cao cua ban (cm)`);
// if (h<150){
//     console.log(`May la nguoi lun a`);
// } else if (h>=150 && h<=169){
//     console.log(`Trong may cung tam tam. Cho 3 diem`);
// } else if (h>=170){
//     console.log(`May trong cung duoc day`);
// } else {
//     console.log(`Nhap chieu cao khong chinh xac`);
// };


//8.Viết một đoạn mã cho phép người dùng nhập vào 2 số a và b. Tiến hành kiểm tra xem
//số nào lớn hơn và in số đó ra màn hình console.

// let a;
// let b;
// a=prompt('Enter a:');
// b=prompt('Enter b:');
// if (a>b){
//     console.log(`${a} lớn hơn ${b}`);
// } else if (a<b){
//     console.log(`${a} nhỏ hơn ${b}`);
// } else if (a===b){
//     console.log(`${a} bằng hơn ${b}`);
// }


// 9.Viết một đoạn mã cho phép người dùng nhập vào 2 số a và b và nhập vào phép tính
// toán (+, -, *, /,%,**). Sử dụng Switch-case mô phỏng lại chức năng của một máy tính
// cầm tay đơn giản và sau đó in kết quả ra màn hình console

// let a = Number(prompt('Enter a:'));
// let b = Number(prompt('Enter b:'));
// let m = prompt('Phép tính cho a và b:');
// let r;
// switch (m) {
//     case '+':
//         r=a+b;
//         break;
//     case '-':
//         r=a-b;
//         break;
//     case '*':
//         r=a*b;
//         break;
//     case '/':
//         if (b===0){
//             console.log('Không thể chia cho số 0');
//         } else {
//             r=a/b;
//         }
//         break;
//     case '%':
//         r=a%b;
//         break;
//     case '**':
//         r=a**b;
//         break; 
//     default:
//         break;
// }
// console.log(`${a} ${m} ${b} = ${r}`);


// 10.	Viết một đoạn mã cho phép người dùng nhập vào 3 số a, b và c. Tiến hành kiểm tra
// xem số nào là max và số nào là min. Sau đó in max và in ra màn hình console theo cú
// pháp “Max là - …” “Min là - …”.

// let a = Number(prompt('Enter a:'));
// let b = Number(prompt('Enter b:'));
// let c = Number(prompt('Enter c:'));
// let max;
// let min;
// if (a>b && a>c){
//     max=a;
// } else if (b>a && b>c){
//     max=b;
// } else if (c>a && c>b){
//     max=c;
// }
// if (a<b && a<c){
//     min=a;
// } else if (b<a && b<c){
//     min=b;
// } else if (c<a && c<b){
//     min=c;
// }
// console.log(`\"Max là - ${max}\" \"Min là - ${min}\"`);


//11.Viết một đoạn mã cho phép người dùng nhập vào một số. Tiến hành kiểm tra xem số đó
//có phải là số chính phương hay không. (Số chính phương là số có căn bậc 2 là một số nguyên)

// let n = Number(prompt('Nhap so n'));
// let a = Math.sqrt(n);
// if (a%1 === 0){
//     console.log(`${n} là số chính phương`);
// }else {
//     console.log(`${n} KHÔNG là số chính phương`);
// }


// 12.	Viết một đoạn mã cho phép người dùng nhập vào 2 đại lượng là ngày sinh (date) và
// tháng sinh (month). Tiến hành kiểm tra xem người dùng thuộc chòm sao nào trong cung
// hoàng đạo và in ra màn hình sử dụng câu lệnh alert. (Lưu ý sử dụng switch case)

// let date = Number(prompt('Ngay sinh cua ban la:'));
// let month = Number(prompt('Thang sinh cua ban la:'));
// let bachduong = date 
const d1 = new Date(06,31);
const d2 = new Date(07,31);
console.log(d1);
console.log(d2);
if(d1>d2){
    console.log("OK");
}
