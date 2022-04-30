export interface CarInterface {
    id: string,
    brand: string,
    name: string,
    about: string,
    //rent: {
    //  period: string,
    //  price: number
    //},
    period: string,
    price: number
    fuel_type: string,
    thumbnail: string
    accessories: 
      {
        id: string,
        type: string,
        name: string
      }[],
    photos: {
      id: string,
      photo: string,
    }[]
};
