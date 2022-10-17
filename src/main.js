
const app=()=>{

    

    
    const elm_container_pw = document.getElementById('container_pw')
    const elm_container_error = document.getElementById('container_error')
    const btn_close_error = document.getElementById('error_close')




    let errorisActive=false
    function toggleError(){
        if(errorisActive){
            elm_container_pw.style.display='inline flex'
            elm_container_error.style.display='none'
            errorisActive=false
        }
        else{
            elm_container_pw.style.display='none'
            elm_container_error.style.display='inline flex'
            errorisActive=true
        }
    }



    const btn_pw = document.getElementById("password_button")
    const inp_pw = document.getElementById("input_password")



    //close-error
    btn_close_error.addEventListener('click',()=>{
        toggleError()
    })

    btn_pw.addEventListener('click',()=>{
        btn_pw.style.background = "grey";
    })

    btn_pw.addEventListener('mousedown',()=>{
        verify()
    })
    
    async function loadLogin(){
        function sleep(s = 0.1) {
            return new Promise(resolve => setTimeout(resolve, s * 1000));
        }
        const a = document.createElement('div')
        const img = document.createElement('img')
        a.id="ovl_load"
        img.id="ovl_img"
        a.appendChild(img)
        document.body.appendChild(a)
        
        setTimeout(()=>{
            window.location='../Game/index.html'
        },4000)
    }
        
    
    function verify() {
        const pw = '123'
        var pass = inp_pw.value;
        if(pass=='')return

        if (pass === pw) {
            loadLogin()
        }else{
            toggleError()
        }
    }
    

    function next(ev) {
        if (ev.key == "Enter") {
            verify();
        }
    }
    document.addEventListener("keyup", next)
}

app()
