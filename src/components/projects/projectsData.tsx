
export type ImagesProps = {
    id:number,
    title:string,
    subTitle:string,
    color:string,
    image?:any
}

export const Data : Array<ImagesProps>= [

    {
        id:1,
        title:"Mind",
        subTitle:"Mind",
        color:'rgba(252,163,17)',
    },

    {
        id:2,
        title:"Hawker",
        subTitle:"Hawker",
        color:'rgba(1,191,112)',
    },

    {
        id:3,
        title:"Traveller",
        subTitle:"Traveller",
        color:'rgba(206,33,120)'
    },

    {
        id:4,
        title:"Move-It",
        subTitle:"Move-It",
        color:'rgba(89,101,224)'
    },
    
    {
        id:5,
        title:"Dev Finances",
        subTitle:"Dev Finances",
        color:'rgba(73,170,38)'
    },
]