const eventArray=[];
function addEventList(){
    const event=document.querySelector(".event");
    console.log(event.value);
    const eventDate=document.querySelector(".eventDate");
    eventArray.push({event:event.value,eventDate:eventDate.value});
    event.value='';
    console.log(eventArray);
    renderEventList();
}
function renderEventList(){
    let todoList1='';
    eventArray.forEach(function(eventObject,i){
        const event=eventObject.event;
        const eventDate=eventObject.eventDate;
        let event1=`<div class="events" >${event}</div>
                    <div>${eventDate}</div>
                    <button class="deleteButton" onclick="eventArray.splice(${i},1);renderEventList()">Delete</button>`;
        todoList1+=event1;
    })
    for(let i=0;i<eventArray.length;i++){
        
    }
    document.querySelector(".todoList").innerHTML=todoList1;
    
}