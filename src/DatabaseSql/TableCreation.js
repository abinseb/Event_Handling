import { openDatabase } from "expo-sqlite";
const db = openDatabase('Event.db');

export const EventDataTable =()=>{
    db.transaction(tx =>{
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS event_table (Id INTEGER PRIMARY KEY ,name TEXT );',
            [],
            ()=> console.log('event table created '),
            error => console.error('Error created table :',error)
        );
    });
}


