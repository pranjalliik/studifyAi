import { boolean, pgTable, serial, varchar ,json , text ,integer} from "drizzle-orm/pg-core";

export const USER_TABLE =pgTable('users',{

id:serial().primaryKey(),

name:varchar().notNull(),

email:varchar().notNull(),

isMember:boolean().default(false)

})





export const STUDY_MATERIAL_TABLE=pgTable('studymaterial', {

    id:serial().primaryKey(),
    
    courseid: varchar().notNull(),
    
    coursetype:varchar().notNull(),
    
    topic:varchar().notNull(),
    
    difficultylevel:varchar().default('Easy'),
    
    courselayout:json(),
    
    createdby: varchar().notNull(),
    status: varchar().default('Generating')
    
    })


    export const CHAPTER_NOTES_TABLE=pgTable('chapternotes', {

        id:serial().primaryKey(),
        
        courseid:varchar().notNull(),
        
        chapterid: integer().notNull(),
        
        notes:text()
        
        })


        export const FLASHCARD_TABLE=pgTable('flashcards', {

            id:serial().primaryKey(),
            
            courseid:varchar().notNull(),
            
            flashcards: json(),
            status: varchar().default('Generating')
            
            })

            export const QUIZ_TABLE=pgTable('quiz', {

                id:serial().primaryKey(),
                
                courseid:varchar().notNull(),
                
                questions:text(),
                status: varchar().default('Generating')
                
                })  