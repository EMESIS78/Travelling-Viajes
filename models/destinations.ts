//destinations
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
        title: "Sacsayhuamán",
        location: "Cusco",
        date: "Lunes 31, 08:00 am",
        amount: "250",
        image: require("../assets/images/destination/sacsayhuaman.jpg"),
        description: "Un impresionante complejo arqueológico inca con enormes muros de piedra.",
        history: "Sacsayhuamán fue un importante centro militar y religioso para los incas, conocido por sus enormes piedras encajadas con precisión.",
        fechaGlobal: "Abril, 2025",
        reviews: {
<<<<<<< Updated upstream
            rating: 4.5,
            totalReviews: 98,
=======
            rating: 4.8,
            totalReviews: 120,
            reviews: [
                {
                    username: 'Carlos G.',
                    review: '¡Excelente servicio! Muy puntual y el vehículo muy cómodo.',
                    rating: 5,
                },
                {
                    username: 'Ana L.',
                    review: 'Buen servicio, aunque la espera fue un poco larga.',
                    rating: 4,
                },
                {
                    username: "Juan M.",
                    review: "El conductor fue muy amable, pero el coche no estaba tan limpio como esperaba.",
                    rating: 3,
                },
                {
                    username: "Laura S.",
                    review: "Me encantó el servicio, ¡definitivamente lo volveré a usar!",
                    rating: 5,
                },
                {
                    username: "Pedro R.",
                    review: "No estuvo mal, pero la app podría mejorar la información de los horarios.",
                    rating: 3,
                },
            ],
>>>>>>> Stashed changes
        },
        extraImages: [
            require("../assets/images/destination/sacsayhuaman1.jpg"),
            require("../assets/images/destination/sacsayhuaman2.jpg"),
        ],
        flights: [
            {
                departure: "6:00 am",
                arrival: "8:00 am",
                from: "Lima",
                to: "Cusco",
            },
            {
                departure: "9:30 am",
                arrival: "11:00 am",
                from: "Lima",
                to: "Cusco",
            },
        ],
        travelDates: ["Lun, 24 Abr", "Mar, 25 Abr"],
    },
    {
        id: "3",
        title: "Lago Titicaca",
        location: "Puno - Juliaca",
        date: "Martes 1, 09:00 am",
        amount: "349",
        image: require("../assets/images/destination/titicaca.jpg"),
        description: "El lago navegable más alto del mundo, hogar de las islas flotantes de los Uros.",
        history: "El Lago Titicaca, ubicado a 3,812 metros sobre el nivel del mar, es considerado la cuna de la civilización Inca.",
        fechaGlobal: "Abril, 2025",
        reviews: {
            rating: 4.8,
            totalReviews: 120,
            reviews: [
                {
                    username: 'Carlos G.',
                    review: '¡Excelente servicio! Muy puntual y el vehículo muy cómodo.',
                    rating: 5,
                },
                {
                    username: 'Ana L.',
                    review: 'Buen servicio, aunque la espera fue un poco larga.',
                    rating: 4,
                },
                {
                    username: "Juan M.",
                    review: "El conductor fue muy amable, pero el coche no estaba tan limpio como esperaba.",
                    rating: 3,
                },
                {
                    username: "Laura S.",
                    review: "Me encantó el servicio, ¡definitivamente lo volveré a usar!",
                    rating: 5,
                },
                {
                    username: "Pedro R.",
                    review: "No estuvo mal, pero la app podría mejorar la información de los horarios.",
                    rating: 3,
                },
            ],
        },
        extraImages: [
            require("../assets/images/destination/titicaca1.jpg"),
            require("../assets/images/destination/titicaca2.jpg"),
        ],
        flights: [
            {
                departure: "7:00 am",
                arrival: "8:30 am",
                from: "Lima",
                to: "Juliaca",
            },
            {
                departure: "10:30 am",
                arrival: "12:00 pm",
                from: "Lima",
                to: "Juliaca",
            },
        ],
        travelDates: ["Mie, 26 Abr", "Jue, 27 Abr"],
    },
    {
        id: "4",
        title: "Valle Sagrado",
        location: "Cusco",
        date: "Miércoles 2, 10:00 am",
        amount: "250",
        image: require("../assets/images/destination/valle-sagrado.jpg"),
        description: "Un hermoso valle lleno de historia y paisajes impresionantes.",
        history: "El Valle Sagrado fue un lugar de cultivo y residencia para los incas.",
        fechaGlobal: "Mayo, 2025",
        reviews: {
            rating: 4.7,
            totalReviews: 85,
            reviews: [
                {
                    username: 'Carlos G.',
                    review: '¡Excelente servicio! Muy puntual y el vehículo muy cómodo.',
                    rating: 5,
                },
                {
                    username: 'Ana L.',
                    review: 'Buen servicio, aunque la espera fue un poco larga.',
                    rating: 4,
                },
                {
                    username: "Juan M.",
                    review: "El conductor fue muy amable, pero el coche no estaba tan limpio como esperaba.",
                    rating: 3,
                },
                {
                    username: "Laura S.",
                    review: "Me encantó el servicio, ¡definitivamente lo volveré a usar!",
                    rating: 5,
                },
                {
                    username: "Pedro R.",
                    review: "No estuvo mal, pero la app podría mejorar la información de los horarios.",
                    rating: 3,
                },
            ],
        },
        extraImages: [
            require("../assets/images/destination/valle1.jpg"),
            require("../assets/images/destination/vall2.jpg"),
        ],
        flights: [
            {
                departure: "6:30 am",
                arrival: "8:00 am",
                from: "Lima",
                to: "Cusco",
            },
            {
                departure: "9:00 am",
                arrival: "10:30 am",
                from: "Lima",
                to: "Cusco",
            },
        ],
        travelDates: ["Jue, 28 Abr", "Vie, 29 Abr"],
    },
    {
        id: "5",
        title: "Líneas de Nazca",
        location: "Nazca",
        date: "Jueves 3, 11:00 am",
        amount: "400",
        image: require("../assets/images/destination/nazca.jpg"),
        description: "Las famosas líneas de Nazca, un misterio arqueológico.",
        history: "Las líneas de Nazca son geoglifos antiguos que representan figuras de animales y plantas.",
        fechaGlobal: "Junio, 2025",
        reviews: {
            rating: 4.9,
            totalReviews: 150,
            reviews: [
                {
                    username: 'Carlos G.',
                    review: '¡Excelente servicio! Muy puntual y el vehículo muy cómodo.',
                    rating: 5,
                },
                {
                    username: 'Ana L.',
                    review: 'Buen servicio, aunque la espera fue un poco larga.',
                    rating: 4,
                },
                {
                    username: "Juan M.",
                    review: "El conductor fue muy amable, pero el coche no estaba tan limpio como esperaba.",
                    rating: 3,
                },
                {
                    username: "Laura S.",
                    review: "Me encantó el servicio, ¡definitivamente lo volveré a usar!",
                    rating: 5,
                },
                {
                    username: "Pedro R.",
                    review: "No estuvo mal, pero la app podría mejorar la información de los horarios.",
                    rating: 3,
                },
            ],
        },
        extraImages: [
            require("../assets/images/destination/nazca1.jpg"),
            require("../assets/images/destination/nazca2.jpg"),
        ],
        flights: [
            {
                departure: "7:00 am",
                arrival: "8:30 am",
                from: "Lima",
                to: "Nazca",
            },
            {
                departure: "10:00 am",
                arrival: "11:30 am",
                from: "Lima",
                to: "Nazca",
            },
        ],
        travelDates: ["Sab, 5 Jun", "Dom, 6 Jun"],
    },
    {
        id: "6",
        title: "Cañón del Colca",
        location: "Arequipa",
        date: "Viernes 4, 08:00 am",
        amount: "350",
        image: require("../assets/images/destination/canon-colca.jpg"),
        description: "Uno de los cañones más profundos del mundo, ideal para el avistamiento de cóndores.",
        history: "El Cañón del Colca es un destino popular para el trekking y la observación de la fauna.",
        fechaGlobal: "Julio, 2025",
        reviews: {
            rating: 4.6,
            totalReviews: 90,
            reviews: [
                {
                    username: 'Carlos G.',
                    review: '¡Excelente servicio! Muy puntual y el vehículo muy cómodo.',
                    rating: 5,
                },
                {
                    username: 'Ana L.',
                    review: 'Buen servicio, aunque la espera fue un poco larga.',
                    rating: 4,
                },
                {
                    username: "Juan M.",
                    review: "El conductor fue muy amable, pero el coche no estaba tan limpio como esperaba.",
                    rating: 3,
                },
                {
                    username: "Laura S.",
                    review: "Me encantó el servicio, ¡definitivamente lo volveré a usar!",
                    rating: 5,
                },
                {
                    username: "Pedro R.",
                    review: "No estuvo mal, pero la app podría mejorar la información de los horarios.",
                    rating: 3,
                },
            ],
        },
        extraImages: [
            require("../assets/images/destination/colca1.jpg"),
            require("../assets/images/destination/colca2.jpg"),
        ],
        flights: [
            {
                departure: "6:00 am",
                arrival: "8:00 am",
                from: "Lima",
                to: "Arequipa",
            },
        ],
        travelDates: ["Sab, 10 Jul", "Dom, 11 Jul"],
    },
    {
        id: "7",
        title: "Huacachina",
        location: "Ica",
        date: "Sábado 5, 10:00 am",
        amount: "150",
        image: require("../assets/images/destination/huacachina.jpg"),
        description: "Un oasis en medio del desierto, famoso por sus dunas y deportes de aventura.",
        history: "Huacachina es un destino popular para practicar sandboarding y paseos en buggy.",
        fechaGlobal: "Agosto, 2025",
        reviews: {
            rating: 4.5,
            totalReviews: 75,
            reviews: [
                {
                    username: 'Carlos G.',
                    review: '¡Excelente servicio! Muy puntual y el vehículo muy cómodo.',
                    rating: 5,
                },
                {
                    username: 'Ana L.',
                    review: 'Buen servicio, aunque la espera fue un poco larga.',
                    rating: 4,
                },
                {
                    username: "Juan M.",
                    review: "El conductor fue muy amable, pero el coche no estaba tan limpio como esperaba.",
                    rating: 3,
                },
                {
                    username: "Laura S.",
                    review: "Me encantó el servicio, ¡definitivamente lo volveré a usar!",
                    rating: 5,
                },
                {
                    username: "Pedro R.",
                    review: "No estuvo mal, pero la app podría mejorar la información de los horarios.",
                    rating: 3,
                },
            ],
        },
        extraImages: [
            require("../assets/images/destination/huacachina1.jpg"),
            require("../assets/images/destinationextra/huacachina2.jpg"),
        ],
        flights: [
            {
                departure: "7:00 am",
                arrival: "9:00 am",
                from: "Lima",
                to: "Ica",
            },
        ],
        travelDates: ["Lun, 15 Ago", "Mar, 16 Ago"],
    },
    {
        id: "8",
        title: "Paracas",
        location: "Ica",
        date: "Domingo 6, 09:00 am",
        amount: "200",
        image: require("../assets/images/destination/paracas.jpg"),
        description: "Un hermoso parque nacional conocido por su biodiversidad marina y playas.",
        history: "Paracas es famoso por las Islas Ballestas y su rica vida silvestre.",
        fechaGlobal: "Septiembre, 2025",
        reviews: {
            rating: 4.7,
            totalReviews: 80,
            reviews: [
                {
                    username: 'Carlos G.',
                    review: '¡Excelente servicio! Muy puntual y el vehículo muy cómodo.',
                    rating: 5,
                },
                {
                    username: 'Ana L.',
                    review: 'Buen servicio, aunque la espera fue un poco larga.',
                    rating: 4,
                },
                {
                    username: "Juan M.",
                    review: "El conductor fue muy amable, pero el coche no estaba tan limpio como esperaba.",
                    rating: 3,
                },
                {
                    username: "Laura S.",
                    review: "Me encantó el servicio, ¡definitivamente lo volveré a usar!",
                    rating: 5,
                },
                {
                    username: "Pedro R.",
                    review: "No estuvo mal, pero la app podría mejorar la información de los horarios.",
                    rating: 3,
                },
            ],
        },
        extraImages: [
            require("../assets/images/destinationextra/paracas1.jpg"),
            require("../assets/images/destinationextra/paracas2.jpg"),
        ],
        flights: [
            {
                departure: "8:00 am",
                arrival: "10:00 am",
                from: "Lima",
                to: "Paracas",
            },
        ],
        travelDates: ["Mie, 20 Sep", "Jue, 21 Sep"],
    },

];

export default destinations;