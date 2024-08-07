export interface Venue {
    name: string;
    image: string;
    street: string;
    price: string;
    infrastructure: string;
    square_footage: string;
  }

export interface NewVenueData{
      id: string,
      name: string,
      street: string,
      city: string,
      price: string,
      image: string,
      description: string,
      infrastructure: string,
      square_footage: string,
}