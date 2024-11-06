const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value

    if(weight === "" || isNaN(weight)){
        return result.innerHTML = "กรุณาป้อนน้ำหนัก"
    }else if(height === "" || isNaN(height)){
        return result.innerHTML = "กรุณาป้อนส่วนสูง"
    }else{
        //cm=>m
        height = height/100
        let bmi = (weight/Math.pow(height,2)).toFixed(2)

        //บอกเกณฑ์
        if(bmi<18.55){
            showResult(bmi,"ผอมเกินไป","yellow")
        }else if(bmi>=18.55 && bmi<=24.9){
            showResult(bmi,"ปกติ","green")
        }else if(bmi>=25 && bmi<=29.9){
            showResult(bmi,"อ้วน","red")
        }else{
            showResult(bmi,"อ้วนเกินไป","purple")
        }
    }
function showResult(bmi,message,color){{
    result.style.backgroundColor = color
    return result.innerHTML = `ผลลัพธ์ = ${bmi} (${message})`
}}

})