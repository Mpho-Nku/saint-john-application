
import {defineType,schemaField,defineField,schemaDefinition} from "sanity";
export const circuit = defineType({
    name:"circuit",
    title:"Circuit",
    type:'document',
    fields:[

        defineField({
            name:'title',
            type:'string',
            
        }),

        defineField({
            name:'slug',
            type:'slug',
            options: {
                source:'title'
            }    
        }),
        defineField({
            name:'bishop',
            type:'string',
           
        }),
        defineField({
            name:'views',
            type:'number',
           
        }),

        defineField({
            name:'description',
            type:'text',
           
        }),
        defineField({
            name: "location",
            type: "string",
            validation: (Rule) =>
              Rule.min(1).max(20).required().error("Please enter a location"),
          }),
          defineField({
            name: "address",
            type: "string",
            validation: (Rule) =>
              Rule.min(1).max(100).required().error("Please enter address"),
          }),

          defineField({
            name:'image',
            type:'url',
            validation:(Rule)=>Rule.required(),
           
        }),
        defineField({
            name:'pitch',
            type:'markdown',
           
        }),
        
        
    ],
})