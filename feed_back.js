let index =0;
function slide()
{
    ++index;
    if(index >2)
    {
        index =0; 
    }
    document.getElementById("table").style.marginLeft = `${-500*index}px`;
}
function submit()
{
    let counter_of_yes = 0;
    let radios = document.querySelectorAll("input");
    for(let i=0; i<radios.length ; i++)
    {
        if(radios[i].checked && radios[i].value == "yes")
        {
            counter_of_yes++;
        }
    }
    alert(`thank you for ur feed back!
    total "Yes" points : ${counter_of_yes}`);
    location.href= "mohamed_osama.html"
}