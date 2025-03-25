const destinations = [
    {
        id: "1",
        title: "Machu Picchu",
        location: "Cusco",
        date: "Lunes 30, 10:00 am",
        amount: "199",
        image: require("../assets/images/cusco.jpg"),
        description: "Una de las maravillas del mundo. Un viaje increíble.",
        history: "Construida en el siglo XV por el emperador inca Pachacútec, Machu Picchu sirvió como un centro religioso, residencial y astronómico para la civilización inca. Descubierta en 1911 por Hiram Bingham, sigue siendo un símbolo de la grandeza del Imperio Inca.",
        fechaGlobal: "Marzo, 2025",
        reviews: {
            rating: 5,
            totalReviews: 115,
        },
        extraImages: [
            require("../assets/images/machu1.jpg"),
            require("../assets/images/machu2.jpg"),
            require("../assets/images/machu3.jpg"),
        ],
        flights: [
            {
                departure: "5:30 am",
                arrival: "7:15 am",
                from: "Lima",
                to: "Cusco",
            },
            {
                departure: "8:10 am",
                arrival: "9:50 am",
                from: "Lima",
                to: "Cusco",
            },
        ],
        travelDates: ["Sab, 22 Mar", "Dom, 23 Mar"],
    },
    {
        id: "2",
        title: "Cristo Blanco",
        location: "Lima - Juliaca",
        date: "Lunes 31, 08:00 am",
        amount: "299",
        image: require("../assets/images/cristo-blanco.jpeg"),
        description: "El salar más grande del mundo.",
        fechaGlobal: "Abril, 2025",
        reviews: {
            rating: 4.5,
            totalReviews: 98,
        },
        flights: [
            {
                departure: "6:00 am",
                arrival: "8:00 am",
                from: "Lima",
                to: "Juliaca",
            },
            {
                departure: "9:30 am",
                arrival: "11:00 am",
                from: "Lima",
                to: "Juliaca",
            },
        ],
        travelDates: ["Lun, 24 Abr", "Mar, 25 Abr"],
    },
];

export default destinations;