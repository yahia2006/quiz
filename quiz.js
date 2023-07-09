let qes={
    q2:"ما هو عدد الاسنان لدى القط؟ ",
    q3:"ما هو الطائر الاسرع في العالم؟",
    q4:`ما هو الحيوان الاسرع في العالم؟`,
    q5:`ما هو اكثر الكواكب خطورة؟`,
    q6:`ما هو عدد القلوب لدى حيوان الاخطبوط؟`,
    q7:`ما هو أثقل الحيوانات على كوكب الأرض؟`,
    q8:`متى وقع صُلح الحُديبية؟`,
    q9:`ما هي أطول سورة مدنية في عدد آياتها؟`,
    q10:`متى قامت أمريكا بأول رحلة فضائية؟`
}
let itemsli={
    li2:`
    <li>25</li>
    <li>40</li>
    <li>15</li>
    <li>39</li>
    
    
    `,
    li3:`
    <li>البغبغاء</li>
    <li>النعام</li>
    <li>الصقر</li>
    <li>النسر</li>
    
    `,
    li4:`
    <li>الاسد</li>
    <li>الفيل</li>
    <li>الفهد</li>
    <li>الكلب</li>
    
    `,
    li5:`
    <li>عطارد</li>
    <li>المشتري</li>
    <li>زحل</li>
    <li>الارض</li>
    
    `,
    li6:`
    <li>4</li>
    <li>3</li>
    <li>2</li>
    <li>1</li>
    `,
    li7:`
    <li>الفيل</li>
    <li>الحوت الازرق</li>
    <li>الخرتيت</li>
    <li>القرش</li>
    `,
    li8:`
    <li>عام 8 هجرية</li>
    <li>عام 6 هجرية</li>
    <li>هام 2 هجرية</li>
    <li>عام 1 هجرية</li>
    `,
    li9:`
    <li>النساء</li>
    <li>البقرة</li>
    <li>المؤمنون</li>
    <li>ال عمران</li>
    `,
    li10:`
    <li>1962</li>
    <li>2010</li>
    <li>2000</li>
    <li>1999</li>

    
    `
}
let soundtrue=new Audio('sounds/true.mp3')
let soundfalse=new Audio('sounds/wrong.mp3')
let gameover=new Audio('sounds/gameover.mp3')
let winsound=new Audio('sounds/win.mp3')
let ul=document.getElementById('ulitems')
let res=document.getElementById('res')
let score=document.getElementById('sc')
let qusetion=document.getElementById('user')
let li=document.getElementsByTagName('li')
let num=0
const btn=document.getElementById('check')
let rscore=0
function reload(){
    for(let i=0;i<li.length;i++){
        li[i].addEventListener('click',function(){
            res.value=li[i].textContent
        })
      
    
    }
    

}
reload()

btn.addEventListener('click',function(){
    if(res.value==='عمرو بن العاص' || res.value==='Amr Bin Al , Aas'){
        soundtrue.play()
        rscore+=100
        score.innerHTML=rscore
        qusetion.textContent=qes.q2
        ul.innerHTML=itemsli.li2
        res.value=""
        reload()
        return
       
     
       

        
    }
    if(res.value=='40'){
        soundtrue.play()
        rscore+=100
        score.innerHTML=rscore
        qusetion.textContent=qes.q3
        ul.innerHTML=itemsli.li3
        res.value=""
        reload()
        return

    }
    if(res.value==='النعام' || res.value==='Ostrich'){
        soundtrue.play()
        rscore+=100
        score.innerHTML=rscore
        qusetion.textContent=qes.q4
        res.value=""
        ul.innerHTML=itemsli.li4
        reload()
        return

    }
    if(res.value=='الفهد' || res.value=='Cheetah'){
        soundtrue.play()
        rscore+=100
        score.innerHTML=rscore
        qusetion.textContent=qes.q5
        res.value=""
        ul.innerHTML=itemsli.li5
        reload()
        return

    }
    if(res.value=='المشتري' || res.value=='Buyer'){
        soundtrue.play()
        rscore+=100
        score.innerHTML=rscore
        qusetion.textContent=qes.q6
        res.value=""
        ul.innerHTML=itemsli.li6
        reload()
        return

    }
    if(res.value=='3'){
        soundtrue.play()
        rscore+=100
        score.innerHTML=rscore
        qusetion.textContent=qes.q7
        res.value=""
        ul.innerHTML=itemsli.li7
        reload()
        return

    }
    if(res.value=='الحوت الازرق' ||res.value=='Blue Whale'){
        soundtrue.play()
        rscore+=100
        score.innerHTML=rscore
        qusetion.textContent=qes.q8
        res.value=""
        ul.innerHTML=itemsli.li8
        reload()
        return

    }
    if(res.value=='عام 6 هجرية' || res.value=='Year 6 Hijri'){
        soundtrue.play()
        rscore+=100
        score.innerHTML=rscore
        qusetion.textContent=qes.q9
        res.value=""
        ul.innerHTML=itemsli.li9
        reload()
        return

    }
    if(res.value=='البقرة'){
        soundtrue.play()
        rscore+=100
        score.innerHTML=rscore
        qusetion.textContent=qes.q10
        ul.innerHTML=itemsli.li10
        res.value=""
        reload()
        return

    }
    if(res.value=='1962'){
        soundtrue.play()
        rscore+=100
        score.innerHTML=rscore
        qusetion.textContent=qes.q10
        ul.innerHTML=itemsli.li10
        res.value=""
        reload()
        document.getElementById('gameover').innerHTML=`
        <img src="sounds/win.png">
        
        `
        winsound.play()
        return


    }
   
   
    else{
        soundfalse.play()
        res.style.transform='translateX(-20px)'
        num++
        document.getElementById('try').innerHTML=num
        if(num==3){
            gameover.play()
            document.getElementById('gameover').innerHTML=`<h2>Game Over<h2>
            <button class='tr' id='again'>Play again</butto>
            
            `
            document.getElementById('again').addEventListener('click',function(){
                window.location.reload()
            })

        }
        setTimeout(res.style.transform='translateX(0px)',500)
    }
})
