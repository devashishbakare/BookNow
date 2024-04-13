// while adding each room, keep in mind add a city in each hotel

const cities = [
  {
    id: 1,
    cityName: "Delhi",
    backgroundImage: [
      "http://res.cloudinary.com/djgouef8q/image/upload/v1712976069/todiqyelzqpbi95tk77w.jpg",
      "http://res.cloudinary.com/djgouef8q/image/upload/v1712976322/bwqv2ouly981h1pc6n7c.png",
    ],
    rooms: [
      {
        roomImages: [
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982563/lmlpyqw6yzsw6rs7tjja.jpg",
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982582/pbxdlly1aoywdoxkrtzu.jpg",
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982597/llag6zrf1kjvycag4mb8.jpg",
        ],

        name: "Hotel Fabstay",
        price: 3999,
        rating: 4.3,
        availableDates: [1, 2, 3, 4, 5, 6, 7, 25, 26, 27, 28, 29],
        reviews: [
          {
            name: "chinmay dhole",
            date: "02/10/2022",
            review:
              "Staff and service is on point Very helpful and exceptional manners",
            rating: 4,
          },
          {
            name: "san logan",
            date: "22/12/2022",
            review:
              "This hotel has got exceptional hotel staff who are attentive to guests needs and respond promptly to their requests. Whether it's providing towels arranging transportation or addressing any concern",
            rating: 5,
          },
          {
            name: "deva bakare",
            date: "31/12/2022",
            review:
              "The hotel is very nice. All amenities were great. The staff of the hotel is very cooperative and welcoming. The rooms are nice and clean. The morning breakfast layout is very lavish",
            rating: 4,
          },
        ],
        address: "B 14 Captain Gaur Marg, 110065 New Delhi, India",
        roomInfo: "1 Room, 2 Adults, 1 Bathroom",
        description:
          "Located in New Delhi, 5.5 km from Humayun's Tomb, Hotel FabStays - South Delhi provides accommodation with a garden, free private parking and a terrace. This 4-star hotel offers room service, a 24-hour front desk and free WiFi. The property is non-smoking and is situated 7.6 km from India Gate.At the hotel, all rooms include a wardrobe. Complete with a private bathroom equipped with a shower and free toiletries, all units at Hotel FabStays - South Delhi have a flat-screen TV and air conditioning, and selected rooms include a balcony. At the accommodation every room is equipped with bed linen and towels. Pragati Maidan is 7.7 km from the hotel, while Lodhi Gardens is 8.3 km away. The nearest airport is Delhi International Airport, 21 km from Hotel FabStays - South Delhi.",
        facility: [0, 1, 1, 0, 1, 0, 1, 1, 1, 1],
        selectedDates: [],
        hostedBy: {
          name: "Mrutyunjay Bandwane",
          joinDate: "31/12/2021",
          contactNumber: "+91989898123",
        },
        map: (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.26645037551!2d77.25310881189691!3d28.561760575602264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b9100d985b%3A0x85e1b603aea77e85!2sHOTEL%20Fabstays-South%20Delhi!5e0!3m2!1sen!2sin!4v1695982692756!5m2!1sen!2sin"
            width="400"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        ),
      },
      {
        roomImages: [
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982628/iwfdouzkeq83yp45r3zh.jpg",
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982639/tbnmifletsi3olpmz23i.jpg",
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982652/shcdxsgwzhgtmcvvigqx.jpg",
        ],
        name: "Hindustan by Backpackers Heaven",
        price: 2999,
        rating: 4.5,
        availableDates: [],
        reviews: [
          {
            name: "chinmay dhole",
            date: "02/10/2022",
            review:
              "Staff and service is on point Very helpful and exceptional manners",
            rating: 4,
          },
          {
            name: "san logan",
            date: "22/12/2022",
            review:
              "This hotel has got exceptional hotel staff who are attentive to guests needs and respond promptly to their requests. Whether it's providing towels arranging transportation or addressing any concern",
            rating: 5,
          },
          {
            name: "deva bakare",
            date: "31/12/2022",
            review:
              "The hotel is very nice. All amenities were great. The staff of the hotel is very cooperative and welcoming. The rooms are nice and clean. The morning breakfast layout is very lavish",
            rating: 4,
          },
        ],
        address:
          "1518, Ranjeet Gali, Sangatrashan, Paharganj, New Delhi, 110055, Paharganj, 110055 New Delhi",
        roomInfo: "1 Room, 2 Adults, 1 Bathroom",
        description:
          "Conveniently located in New Delhi, Hindustan by Backpackers Heaven Near New Delhi Railway Station offers air-conditioned rooms, free bikes, free WiFi and a shared lounge. Boasting room service, this property also has a restaurant and a terrace. The accommodation provides a 24-hour front desk, a concierge service and currency exchange for guests.Every room includes a flat-screen TV, and some units at the hotel have a city view. At Hindustan by Backpackers Heaven Near New Delhi Railway Station all rooms include bed linen and towels.Gurudwara Bangla Sahib is 2.5 km from the accommodation, while Jantar Mantar is 3.4 km from the property. The nearest airport is Delhi International, 15 km from Hindustan by Backpackers Heaven Near New Delhi Railway Station, and the property offers a paid airport shuttle service. Hindustan by Backpackers Heaven Near New Delhi Railway Station has been welcoming Booking.com guests since 15 Feb 2018.Distance in property description is calculated using © OpenStreetMap",
        facility: [0, 1, 1, 0, 1, 0, 1, 1, 1, 1],
        selectedDates: [],
        hostedBy: {
          name: "Mrutyunjay Bandwane",
          joinDate: "31/12/2021",
          contactNumber: "+91989898123",
        },
        map: (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.581767442376!2d77.2115982!3d28.642294399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd43db4d3ecf%3A0x188ca845cdb01b90!2sHindustan%20By%20Backpackers%20Heaven!5e0!3m2!1sen!2sin!4v1695982565216!5m2!1sen!2sin"
            width="400"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        ),
      },
    ],
  },

  {
    id: 2,
    cityName: "Banglore",
    backgroundImage: [
      "https://res.cloudinary.com/djgouef8q/image/upload/v1712976816/ebydschuyjlhthyh1rug.jpg",
      "http://res.cloudinary.com/djgouef8q/image/upload/v1712977084/hlwriwkipirak51ojfqw.jpg",
    ],
    rooms: [
      {
        roomImages: [
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982563/lmlpyqw6yzsw6rs7tjja.jpg",
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982582/pbxdlly1aoywdoxkrtzu.jpg",
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982597/llag6zrf1kjvycag4mb8.jpg",
        ],

        name: "Hotel BNS Comforts by Agira Hotels",
        price: 2599,
        rating: 4.6,
        availableDates: [],
        reviews: [
          {
            name: "chinmay dhole",
            date: "02/10/2022",
            review:
              "Staff and service is on point Very helpful and exceptional manners",
            rating: 4,
          },
          {
            name: "san logan",
            date: "22/12/2022",
            review:
              "This hotel has got exceptional hotel staff who are attentive to guests needs and respond promptly to their requests. Whether it's providing towels arranging transportation or addressing any concern",
            rating: 5,
          },
          {
            name: "deva bakare",
            date: "31/12/2022",
            review:
              "The hotel is very nice. All amenities were great. The staff of the hotel is very cooperative and welcoming. The rooms are nice and clean. The morning breakfast layout is very lavish",
            rating: 4,
          },
        ],
        address:
          "SV Plaza, 1325/85, Arakere Bannerghatta Rd, Venugopal Reddy Layout, Arekere, Bengaluru, Karnataka 560076, 560076 Bangalore, India",
        roomInfo: "1 Room, 2 Adults, 1 Bathroom",
        description:
          "Offering city views, Hotel BNS Comforts by Agira Hotels is an accommodation located in Bangalore, 8.6 km from ISKCON Hare Krishna Temple and 11 km from Bull Temple. The air-conditioned accommodation is 7.9 km from Forum Mall, Koramangala, and guests benefit from private parking available on site and free WiFi.",
        facility: [0, 1, 1, 0, 1, 0, 1, 1, 1, 1],
        selectedDates: [],
        hostedBy: {
          name: "Mrutyunjay Bandwane",
          joinDate: "31/12/2021",
          contactNumber: "+91989898123",
        },
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.36333743242!2d77.60156731156347!3d12.884342587370597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15424762cc1d%3A0x2323d35b59d8bb62!2sHotel%20BNS%20Comforts%20by%20Agira%20Hotels!5e0!3m2!1sen!2sin!4v1695983297761!5m2!1sen!2sin",
      },
      {
        roomImages: [
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982628/iwfdouzkeq83yp45r3zh.jpg",
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982639/tbnmifletsi3olpmz23i.jpg",
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982652/shcdxsgwzhgtmcvvigqx.jpg",
        ],
        name: "SPOT ON Helloworld Dom",
        price: 1599,
        rating: 4.3,
        availableDates: [],
        reviews: [
          {
            name: "chinmay dhole",
            date: "02/10/2022",
            review:
              "Staff and service is on point Very helpful and exceptional manners",
            rating: 4,
          },
          {
            name: "san logan",
            date: "22/12/2022",
            review:
              "This hotel has got exceptional hotel staff who are attentive to guests needs and respond promptly to their requests. Whether it's providing towels arranging transportation or addressing any concern",
            rating: 5,
          },
          {
            name: "deva bakare",
            date: "31/12/2022",
            review:
              "The hotel is very nice. All amenities were great. The staff of the hotel is very cooperative and welcoming. The rooms are nice and clean. The morning breakfast layout is very lavish",
            rating: 4,
          },
        ],
        address:
          "301, Ammanamma Layout Rustam Bagh Main Road, Bangalore, 560017 Bangalore, India",
        roomInfo: "1 Room, 2 Adults, 1 Bathroom",
        description:
          "SPOT ON Helloworld Dom features free WiFi throughout the property and rooms with air conditioning in Bangalore. The property is situated 3.9 km from The Heritage Centre & Aerospace Museum, 6.5 km from Brigade Road and 7.6 km from Commercial Street. Forum Mall, Koramangala is 7.8 km away and Chinnaswamy Stadium is 8.1 km from the hotel.",
        facility: [0, 1, 1, 0, 1, 0, 1, 1, 1, 1],
        selectedDates: [],
        hostedBy: {
          name: "Mrutyunjay Bandwane",
          joinDate: "31/12/2021",
          contactNumber: "+91989898123",
        },
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.294602762751!2d77.65093587520128!3d12.952990987360682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1569710368d1%3A0xfa1fbe3b393644ba!2sSPOT%20ON%20Helloworld%20Dom!5e0!3m2!1sen!2sin!4v1695996100577!5m2!1sen!2sin",
      },
    ],
  },
  {
    id: 3,
    cityName: "Mumbai",
    backgroundImage: [
      "http://res.cloudinary.com/djgouef8q/image/upload/v1712810682/bdoqokjay13cuiem0yqh.jpg",
      "http://res.cloudinary.com/djgouef8q/image/upload/v1712977291/u1dmijpbovoabwoamx3x.jpg",
    ],
    rooms: [
      {
        roomImages: [
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982563/lmlpyqw6yzsw6rs7tjja.jpg",
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982582/pbxdlly1aoywdoxkrtzu.jpg",
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982597/llag6zrf1kjvycag4mb8.jpg",
        ],

        name: "The Taj Mahal Palace, Mumbai",
        price: 19999,
        rating: 5.0,
        availableDates: [],
        reviews: [
          {
            name: "chinmay dhole",
            date: "02/10/2022",
            review:
              "Staff and service is on point Very helpful and exceptional manners",
            rating: 4,
          },
          {
            name: "san logan",
            date: "22/12/2022",
            review:
              "This hotel has got exceptional hotel staff who are attentive to guests needs and respond promptly to their requests. Whether it's providing towels arranging transportation or addressing any concern",
            rating: 5,
          },
          {
            name: "deva bakare",
            date: "31/12/2022",
            review:
              "The hotel is very nice. All amenities were great. The staff of the hotel is very cooperative and welcoming. The rooms are nice and clean. The morning breakfast layout is very lavish",
            rating: 4,
          },
        ],
        address:
          "Apollo Bunder Road The Taj Mahal Palace, Colaba, 400001 Mumbai, India",
        roomInfo: "1 Room, 2 Adults, 1 Bathroom",
        description:
          "Built in 1903, the iconic Taj Mahal Palace stands majestically opposite the Gateway of India, overlooking the Arabian Sea. Sprawled over 2.6 acres, this 5-star deluxe hotel boasts 9 restaurants and a variety of traditional Indian therapies at J Wellness. Guests are spoiled for choice in dining options – the famous Wasabi by Morimoto offers innovative Japanese cuisine, while other culinary highlights include the Golden Dragon Chinese Restaurant and the poolside Aquarius Lounge.  An exclusive private dining experience can be arranged at Chef’s Studio.",
        facility: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        selectedDates: [],
        hostedBy: {
          name: "Mrutyunjay Bandwane",
          joinDate: "31/12/2021",
          contactNumber: "+91989898123",
        },
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.219791940365!2d72.83062787532307!3d18.921663082251406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c06fffffff%3A0xc0290485a4d73f57!2sThe%20Taj%20Mahal%20Palace%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1695997274599!5m2!1sen!2sin",
      },
      {
        roomImages: [
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982628/iwfdouzkeq83yp45r3zh.jpg",
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982639/tbnmifletsi3olpmz23i.jpg",
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982652/shcdxsgwzhgtmcvvigqx.jpg",
        ],
        name: "The Oberoi Mumbai",
        price: 15999,
        rating: 4.9,
        availableDates: [],
        reviews: [
          {
            name: "chinmay dhole",
            date: "02/10/2022",
            review:
              "Staff and service is on point Very helpful and exceptional manners",
            rating: 4,
          },
          {
            name: "san logan",
            date: "22/12/2022",
            review:
              "This hotel has got exceptional hotel staff who are attentive to guests needs and respond promptly to their requests. Whether it's providing towels arranging transportation or addressing any concern",
            rating: 5,
          },
          {
            name: "deva bakare",
            date: "31/12/2022",
            review:
              "The hotel is very nice. All amenities were great. The staff of the hotel is very cooperative and welcoming. The rooms are nice and clean. The morning breakfast layout is very lavish",
            rating: 4,
          },
        ],
        address: "Nariman Point, 400021 Mumbai, India",
        roomInfo: "1 Room, 2 Adults, 1 Bathroom",
        description:
          "Centrally located in Mumbai's business district, close to South Mumbai's shopping and entertainment areas, The Oberoi offers luxury and convenience with its outdoor heated pool, 24-hour spa, fitness and concierge service. It also features 5 food and beverage options offering a variety of cuisines. Complimentary WiFi is available in all rooms. The hotel's elegant rooms feature wooden floors, large windows offering beautiful views and en suite bathroom separated by a glass panel with electronic blinds. Rooms are equipped with an LCD TV, tea/coffee maker and iPod docking station.",
        facility: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        selectedDates: [],
        hostedBy: {
          name: "Mrutyunjay Bandwane",
          joinDate: "31/12/2021",
          contactNumber: "+91989898123",
        },
        map: (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.103618594295!2d72.81592808119974!3d18.926807136473098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1eeddf513cf%3A0x7473fb0fe1a06f53!2sOberoi%20Hotel%2C%20Nariman%20Point%2C%20Mumbai%2C%20400021!5e0!3m2!1sen!2sin!4v1695997706314!5m2!1sen!2sin"
            width="400"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        ),
      },
    ],
  },
  {
    id: 4,
    cityName: "Chennai",
    backgroundImage: [
      "http://res.cloudinary.com/djgouef8q/image/upload/v1712810709/ra9lx3zpjfxrgvzcmqib.jpg",
      "http://res.cloudinary.com/djgouef8q/image/upload/v1712810709/ra9lx3zpjfxrgvzcmqib.jpg",
    ],
    rooms: [
      {
        roomImages: [
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982563/lmlpyqw6yzsw6rs7tjja.jpg",
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982582/pbxdlly1aoywdoxkrtzu.jpg",
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982597/llag6zrf1kjvycag4mb8.jpg",
        ],

        name: "Ibis Chennai OMR - An Accor Brand",
        price: 6999,
        rating: 4.7,
        availableDates: [],
        reviews: [
          {
            name: "chinmay dhole",
            date: "02/10/2022",
            review:
              "Staff and service is on point Very helpful and exceptional manners",
            rating: 4,
          },
          {
            name: "san logan",
            date: "22/12/2022",
            review:
              "This hotel has got exceptional hotel staff who are attentive to guests needs and respond promptly to their requests. Whether it's providing towels arranging transportation or addressing any concern",
            rating: 5,
          },
          {
            name: "deva bakare",
            date: "31/12/2022",
            review:
              "The hotel is very nice. All amenities were great. The staff of the hotel is very cooperative and welcoming. The rooms are nice and clean. The morning breakfast layout is very lavish",
            rating: 4,
          },
        ],
        address:
          "Opp. Elcot Sez, IT Expressway, Old Mahabalipuram Rd, Sholinganallurur, Sholinganallur, 600119 Chennai, India",
        roomInfo: "1 Room, 2 Adults, 1 Bathroom",
        description:
          "Ibis Chennai OMR is located in the IT corridor, Sholinganallur on Rajiv Gandhi IT expressway and is 7 minutes from the ECR beaches. This pet-friendly hotel features a fitness centre, garden, terrace, and free WiFi throughout the property. Rooms feature LCD TV, tea and coffee making facilities, minibar, walk in shower with fair trade range of bathroom amenities. HEPA filters and ozonizers ensure enhanced indoor air quality.",
        facility: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        selectedDates: [],
        hostedBy: {
          name: "Mrutyunjay Bandwane",
          joinDate: "31/12/2021",
          contactNumber: "+91989898123",
        },
        map: (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0382490694333!2d80.22657171156376!3d12.905262087351526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c7dcb664bb7%3A0xe404a35bf75645d3!2sibis%20Chennai%20OMR!5e0!3m2!1sen!2sin!4v1695998990136!5m2!1sen!2sin"
            width="400"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        ),
      },
      {
        roomImages: [
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982628/iwfdouzkeq83yp45r3zh.jpg",
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982639/tbnmifletsi3olpmz23i.jpg",
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982652/shcdxsgwzhgtmcvvigqx.jpg",
        ],
        name: "The Park Chennai",
        price: 4699,
        rating: 4.9,
        availableDates: [],
        reviews: [
          {
            name: "chinmay dhole",
            date: "02/10/2022",
            review:
              "Staff and service is on point Very helpful and exceptional manners",
            rating: 4,
          },
          {
            name: "san logan",
            date: "22/12/2022",
            review:
              "This hotel has got exceptional hotel staff who are attentive to guests needs and respond promptly to their requests. Whether it's providing towels arranging transportation or addressing any concern",
            rating: 5,
          },
          {
            name: "deva bakare",
            date: "31/12/2022",
            review:
              "The hotel is very nice. All amenities were great. The staff of the hotel is very cooperative and welcoming. The rooms are nice and clean. The morning breakfast layout is very lavish",
            rating: 4,
          },
        ],
        address:
          "601, Near US Embassy, Anna Salai, Nungambakkam, T - Nagar, 600006 Chennai, India ",
        roomInfo: "1 Room, 2 Adults, 1 Bathroom",
        description:
          "Located in Chennai’s business district, standing on the historic premises of the erstwhile Gemini Film Studios, The Park offers rooms with a flat-screen TV and rainshower facilities. The hotel’s 5-star facilities include free parking, an outdoor pool and 4 dining options.Modern décor and hardwood flooring feature throughout the air-conditioned guestrooms at The Park, Chennai. Each well-appointed room is fitted with a minibar and private bathroom with a bathtub.",
        facility: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        selectedDates: [],
        hostedBy: {
          name: "Mrutyunjay Bandwane",
          joinDate: "31/12/2021",
          contactNumber: "+91989898123",
        },
        map: (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7275179571084!2d80.24764461156575!3d13.053008387216803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526750254dc027%3A0xc23f757c839f6fed!2sThe%20Park%20Chennai!5e0!3m2!1sen!2sin!4v1695999279560!5m2!1sen!2sin"
            width="400"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        ),
      },
    ],
  },
  {
    id: 5,
    cityName: "Pune",
    backgroundImage: [
      "http://res.cloudinary.com/djgouef8q/image/upload/v1712811618/pw6vbuwjriu8xvwyv9ou.jpg",
      "http://res.cloudinary.com/djgouef8q/image/upload/v1712811618/pw6vbuwjriu8xvwyv9ou.jpg",
    ],
    rooms: [
      {
        roomImages: [
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982563/lmlpyqw6yzsw6rs7tjja.jpg",
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982582/pbxdlly1aoywdoxkrtzu.jpg",
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982597/llag6zrf1kjvycag4mb8.jpg",
        ],

        name: "Novotel Pune Viman Nagar Road",
        price: 5999,
        rating: 4.9,
        availableDates: [],
        reviews: [
          {
            name: "chinmay dhole",
            date: "02/10/2022",
            review:
              "Staff and service is on point Very helpful and exceptional manners",
            rating: 4,
          },
          {
            name: "san logan",
            date: "22/12/2022",
            review:
              "This hotel has got exceptional hotel staff who are attentive to guests needs and respond promptly to their requests. Whether it's providing towels arranging transportation or addressing any concern",
            rating: 5,
          },
          {
            name: "deva bakare",
            date: "31/12/2022",
            review:
              "The hotel is very nice. All amenities were great. The staff of the hotel is very cooperative and welcoming. The rooms are nice and clean. The morning breakfast layout is very lavish",
            rating: 4,
          },
        ],
        address:
          "Weikfield IT City Infopark, Survey No. 30/3, Ramwadi, Viman Nagar, 411014 Pune, India –",
        roomInfo: "1 Room, 2 Adults, 1 Bathroom",
        description:
          "Featuring an open-air swimming pool, and a fitness centre. It is just an 8-minute drive from the Pune Airport and 850 meters from the Phoenix Market City. Free WiFi access is available. The property offers free parking. Shirdi is 3.5 hours away from the property.Air-conditioned rooms here will provide you with a flat-screen satellite TV and a seating area. It also has a minibar and tea/coffee maker. Featuring a shower, private bathrooms also come with free toiletries and slippers.",
        facility: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        selectedDates: [],
        hostedBy: {
          name: "Mrutyunjay Bandwane",
          joinDate: "31/12/2021",
          contactNumber: "+91989898123",
        },
        map: (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.333769742496!2d73.90823521165619!3d18.558985282469145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13f953dc837%3A0xb6782032b34e422e!2sNovotel%20Pune%20Nagar%20Road!5e0!3m2!1sen!2sin!4v1696000396867!5m2!1sen!2sin"
            width="400"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        ),
      },
      {
        roomImages: [
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982628/iwfdouzkeq83yp45r3zh.jpg",
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982639/tbnmifletsi3olpmz23i.jpg",
          "http://res.cloudinary.com/djgouef8q/image/upload/v1712982652/shcdxsgwzhgtmcvvigqx.jpg",
        ],
        name: "Hyatt Pune",
        price: 5499,
        rating: 4.9,
        availableDates: [],
        reviews: [
          {
            name: "chinmay dhole",
            date: "02/10/2022",
            review:
              "Staff and service is on point Very helpful and exceptional manners",
            rating: 4,
          },
          {
            name: "san logan",
            date: "22/12/2022",
            review:
              "This hotel has got exceptional hotel staff who are attentive to guests needs and respond promptly to their requests. Whether it's providing towels arranging transportation or addressing any concern",
            rating: 5,
          },
          {
            name: "deva bakare",
            date: "31/12/2022",
            review:
              "The hotel is very nice. All amenities were great. The staff of the hotel is very cooperative and welcoming. The rooms are nice and clean. The morning breakfast layout is very lavish",
            rating: 4,
          },
        ],
        address:
          "Kalyani Nagar, 88 Nagar Road (Adj. Aga Khan Palace), Kalyani Nagar, 411006 Pune, India –",
        roomInfo: "1 Room, 2 Adults, 1 Bathroom",
        description:
          "Hyatt Pune is a part of the incredible world of Hyatt. Located just 10 minutes from Pune Airport, 5 minutes from Phoenix Market City, and 15 minutes from the IT hub, Hyatt Pune has the perfect location, whether you’re traveling for work or leisure. Take advantage of our world-class spa or Ayurvedic treatments, reiki, and yoga to relax and re-energize yourself. There’s something for everyone, with a scenic outdoor pool, garden suites, and round-the-clock room service, you will be spoilt for choice.",
        facility: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        selectedDates: [],
        hostedBy: {
          name: "Mrutyunjay Bandwane",
          joinDate: "31/12/2021",
          contactNumber: "+91989898123",
        },
        map: (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.439572042338!2d73.89993439678955!3d18.554211000000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c116f67257dd%3A0x3cfb9881ad224c0!2sHyatt%20Pune!5e0!3m2!1sen!2sin!4v1696000702562!5m2!1sen!2sin"
            width="400"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        ),
      },
    ],
  },
];

export default cities;
