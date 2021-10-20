let divs = document.querySelectorAll("div")

const options = {
    rootMargin: "0px 0px -430px 0px",
};

const observer = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const nodes = entry.target.childNodes;
            nodes.forEach(node=>{
                node.src = node.getAttribute("data-src");
                observer.unobserve(entry.target);
            })
        }
    });
},options);

divs.forEach(div=>observer.observe(div));