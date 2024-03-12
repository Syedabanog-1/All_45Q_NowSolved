/* 20.	Think of something you could store in a array. For example,
you could make a list of mountains, rivers, countries, cities, 
languages, or anything else you’d like. Write a program that creates 
a list containing these items.*/

let Entity: string[] = ['mountains','rivers','countires','cities','languages','currency'];

for( let I_entity = 0;I_entity<Entity.length; I_entity++){
    console.log(Entity[I_entity]);
}