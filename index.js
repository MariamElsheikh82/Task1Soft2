import express from 'express';
const app =express();
/*const students = [
    {
        id: 1,
        name: 'Ahmed',
        city: 'Tala'
    },
    {
        id: 2,
        name: 'Ali',
        city: 'Cairo'
    },
    {
        id: 3,
        name: 'Fatima',
        city: 'Alex'
    },
    {
        id: 4,
        name: 'Laith',
        city: 'Tanta'
    }
]*/

const students=["Mariam","Mostafa","Maram","Menna","Malika","Mohamed"];

const studentsFunction = ( request , response) =>
{
    let output = '<ul>';
    for(let i=0;i<students.length;i++)
    {
        /*const student = students[i];
        output+='<li>'+student.name+'</li>';*/

        output+='<li>'+students[i]+'</li>';
    }
    output+='</ul>';
    response.send(output);
}
app.get('/students',studentsFunction);
app.listen(5000);