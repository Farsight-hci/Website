const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelectorAll(".projectCard").forEach(el =>{
                el.classList.add("fadeUp")
            })
            console.log("Hello")
        }
    })
})

observer.observe(document.querySelector(".projectCardRow"))