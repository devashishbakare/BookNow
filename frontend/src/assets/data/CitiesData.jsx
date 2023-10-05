const cities = [
  {
    id: 1,
    cityName: "Delhi",
    backgroundImage: "https://i.ibb.co/dK3FMhC/delhi-Special-Place.jpg",
    rooms: [
      {
        roomImages: [
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491253791.jpg?k=4bada1cfbd1b42b9f9ed7fe9595434eaa2884f28632f18d92dc4cea3b1cedfde&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491253787.jpg?k=7fec7240a1a27bf11b396bd44c79f44296a40339386e9047ecacd86739596331&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491253835.jpg?k=03d496e907cfe22dd5b8899d3989ab746ee538b9682d808d51c603e7ee588129&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491253799.jpg?k=a2a4751b080df2dbd23a4705a112d35faf2ed2ba07904783eabf1a4ddc8e680f&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491253842.jpg?k=6f16d991fc3149f85fa9a40baa195fda733065c41a48550bd4da9343f60b6aa9&o=&hp=1",
        ],

        name: "Hotel Fabstay",
        price: 3999,
        rating: 4.3,
        availableDates: [],
        reviews: [
          "Staff and service is on point Very helpful and exceptional manners",
          "This hotel has got exceptional hotel staff who are attentive to guests needs and respond promptly to their requests. Whether it's providing towels arranging transportation or addressing any concern",
          "The hotel is very nice. All amenities were great. The staff of the hotel is very cooperative and welcoming. The rooms are nice and clean. The morning breakfast layout is very lavish",
        ],
        address: "B 14 Captain Gaur Marg, 110065 New Delhi, India",
        roomInfo: "1 Room, 2 Adults, 1 Bathroom",
        Description:
          "Located in New Delhi, 5.5 km from Humayun's Tomb, Hotel FabStays - South Delhi provides accommodation with a garden, free private parking and a terrace. This 4-star hotel offers room service, a 24-hour front desk and free WiFi. The property is non-smoking and is situated 7.6 km from India Gate.At the hotel, all rooms include a wardrobe. Complete with a private bathroom equipped with a shower and free toiletries, all units at Hotel FabStays - South Delhi have a flat-screen TV and air conditioning, and selected rooms include a balcony. At the accommodation every room is equipped with bed linen and towels. Pragati Maidan is 7.7 km from the hotel, while Lodhi Gardens is 8.3 km away. The nearest airport is Delhi International Airport, 21 km from Hotel FabStays - South Delhi.",
        fasility: [0, 1, 1, 0, 1, 0, 1, 1],
        selectedDates: [],
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
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/474518643.jpg?k=48a7413569eaa4008cd4ac82baf3effb7e42a1e29816f463f9c71f36464e9b93&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/474518915.jpg?k=a81f25382e48c23ba519a5961f842c82c8be6ab4765f98f35e4fc45de4bbab57&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/474518918.jpg?k=11c442412c757333d877a16eb273f5f1382c967a066e7a4d7e71193a852eeda5&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/474518926.jpg?k=0f41d498d966d504b508bd4e3e6640b5168411b0e2bbcb876c58de947b03d854&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/474518954.jpg?k=3f9946bf2966013c5bd7e1eee58157d1dfebcb74e11e66727465f41a54076026&o=&hp=1",
        ],
        name: "Hindustan by Backpackers Heaven",
        price: 2999,
        rating: 4.5,
        availableDates: [],
        reviews: [
          "I really enjoyed staying at this, very comfortable place and the cleanliness is really appreciated",
          "Excellent staff and very helping in nature. There desk is always ready for any info.",
          "Best staff so far experienced. Always ready to help. Quick service.",
        ],
        address:
          "1518, Ranjeet Gali, Sangatrashan, Paharganj, New Delhi, 110055, Paharganj, 110055 New Delhi",
        roomInfo: "1 Room, 2 Adults, 1 Bathroom",
        Description:
          "Conveniently located in New Delhi, Hindustan by Backpackers Heaven Near New Delhi Railway Station offers air-conditioned rooms, free bikes, free WiFi and a shared lounge. Boasting room service, this property also has a restaurant and a terrace. The accommodation provides a 24-hour front desk, a concierge service and currency exchange for guests.Every room includes a flat-screen TV, and some units at the hotel have a city view. At Hindustan by Backpackers Heaven Near New Delhi Railway Station all rooms include bed linen and towels.Gurudwara Bangla Sahib is 2.5 km from the accommodation, while Jantar Mantar is 3.4 km from the property. The nearest airport is Delhi International, 15 km from Hindustan by Backpackers Heaven Near New Delhi Railway Station, and the property offers a paid airport shuttle service. Hindustan by Backpackers Heaven Near New Delhi Railway Station has been welcoming Booking.com guests since 15 Feb 2018.Distance in property description is calculated using © OpenStreetMap",
        fasility: [0, 1, 1, 0, 1, 0, 1, 1],
        selectedDates: [],
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
    backgroundImage: "https://i.ibb.co/M6gBW0G/banglore-famous-places.jpg",
    rooms: [
      {
        roomImages: [
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/453496181.jpg?k=25e151ad419462ce99c983c395a67cc74248d655a2a83453232d101230888538&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/449376481.jpg?k=c4a97e60bcc32d0af3acb8be558f65b081bc1eee8517cbca86e39ab2bc0dce04&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/449376512.jpg?k=1de9d320c478d44bba6b703e18be400d1fd526e7adc6a47771986f7d72faa60d&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/449376567.jpg?k=f1da1dcf783793eac54a43cf614abae206df90a3d5b38000318139e23d4af8f7&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/449376509.jpg?k=8205137d193a54d3336edcd06730c6c691b678ac9ed2d4b808a66ce28222c10b&o=&hp=1",
        ],

        name: "Hotel BNS Comforts by Agira Hotels",
        price: 2599,
        rating: 4.6,
        availableDates: [],
        reviews: [
          "Location was quite close to main road. Large room. Clean room and bathroom. Iron available. Medical shop and bakery downstairs",
          "Well maintained property. The staff is very helpful, the service is prompt and excellent",
          "first of all I would like to say thank you for all the staff’s who all are part of this property for the hospitality and caring and the support which I felt from my experience",
        ],
        address:
          "SV Plaza, 1325/85, Arakere Bannerghatta Rd, Venugopal Reddy Layout, Arekere, Bengaluru, Karnataka 560076, 560076 Bangalore, India",
        roomInfo: "1 Room, 2 Adults, 1 Bathroom",
        Description:
          "Offering city views, Hotel BNS Comforts by Agira Hotels is an accommodation located in Bangalore, 8.6 km from ISKCON Hare Krishna Temple and 11 km from Bull Temple. The air-conditioned accommodation is 7.9 km from Forum Mall, Koramangala, and guests benefit from private parking available on site and free WiFi.",
        fasility: [0, 1, 1, 0, 1, 0, 1, 1],
        selectedDates: [],
        map: (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.36333743242!2d77.60156731156347!3d12.884342587370597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15424762cc1d%3A0x2323d35b59d8bb62!2sHotel%20BNS%20Comforts%20by%20Agira%20Hotels!5e0!3m2!1sen!2sin!4v1695983297761!5m2!1sen!2sin"
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
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/489114076.jpg?k=3e67d67c56bb08635752e79ade84db781e3adccbecdc32f3578a0386c322b6c7&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/489114115.jpg?k=afe6e961e597e49c0938d1aa4076083a6ecb7c00b1da6bc877fbff5d838ce1f3&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/489114112.jpg?k=b9f2fa5393913b530b1274cb9109aa891bdf3ff1b114130ac25ad35a58877e89&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/489114014.jpg?k=5afc0800f9627e1f9d7ed966dd6aa194dcdfc9b3e4cdddecbc0c5681df97c110&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/480415285.jpg?k=8eeb000c7280b8eef9284a3afb73c563b37d0d81c597805804fc57efdbea28f6&o=&hp=1",
        ],
        name: "SPOT ON Helloworld Dom",
        price: 1599,
        rating: 4.3,
        availableDates: [],
        reviews: [
          "We couldn't have asked for a better hotel experience. From the cozy room to the delicious breakfast, everything was perfect",
          "We appreciated the personalized touches that made us feel valued.",
          "Excellent Wi-Fi connectivity throughout the property",
        ],
        address:
          "301, Ammanamma Layout Rustam Bagh Main Road, Bangalore, 560017 Bangalore, India",
        roomInfo: "1 Room, 2 Adults, 1 Bathroom",
        Description:
          "SPOT ON Helloworld Dom features free WiFi throughout the property and rooms with air conditioning in Bangalore. The property is situated 3.9 km from The Heritage Centre & Aerospace Museum, 6.5 km from Brigade Road and 7.6 km from Commercial Street. Forum Mall, Koramangala is 7.8 km away and Chinnaswamy Stadium is 8.1 km from the hotel.",
        fasility: [0, 1, 1, 0, 1, 0, 1, 1],
        selectedDates: [],
        map: (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.294602762751!2d77.65093587520128!3d12.952990987360682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1569710368d1%3A0xfa1fbe3b393644ba!2sSPOT%20ON%20Helloworld%20Dom!5e0!3m2!1sen!2sin!4v1695996100577!5m2!1sen!2sin"
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
    id: 3,
    cityName: "Mumbai",
    backgroundImage: "",
    rooms: [
      {
        roomImages: [
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/101834007.jpg?k=263d03927074e577b2210e37602d0dbb87d2f8404c28a9e340d4e08296c92df9&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/103556980.jpg?k=a43c0911b20e3acf817ca25657e485bb637b8fc4dd82d0db8ec2584c8cc7ca75&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/176113777.jpg?k=982b8710d50b0e5b6e2db2b275928784748b993a039a1c3b1257e58b19a235fc&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/103556882.jpg?k=b97773ac9d16d032990d528f2b9fc697e2a76eca4f62152b979f1fc47548f021&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/103705035.jpg?k=513519ce602528df999333f5cc1a33cf2709c5b50412e71f9295a2c42bf84d0d&o=&hp=1",
        ],

        name: "The Taj Mahal Palace, Mumbai",
        price: 19999,
        rating: 5.0,
        availableDates: [],
        reviews: [
          "Reception staff very polite and cooperativr must say mr Amir was excellent and need to be awarded",
          "The Staff (Abeer) were so fabulous, friendly and helpful. Also the hotel room was clean, nice and spacious. the location is also perfect",
          "The rooms, the friendly helpful staff, the food, and excellent Heritage walk with Mr. Hameed",
        ],
        address:
          "Apollo Bunder Road The Taj Mahal Palace, Colaba, 400001 Mumbai, India",
        roomInfo: "1 Room, 2 Adults, 1 Bathroom",
        Description:
          "Built in 1903, the iconic Taj Mahal Palace stands majestically opposite the Gateway of India, overlooking the Arabian Sea. Sprawled over 2.6 acres, this 5-star deluxe hotel boasts 9 restaurants and a variety of traditional Indian therapies at J Wellness. Guests are spoiled for choice in dining options – the famous Wasabi by Morimoto offers innovative Japanese cuisine, while other culinary highlights include the Golden Dragon Chinese Restaurant and the poolside Aquarius Lounge.  An exclusive private dining experience can be arranged at Chef’s Studio.",
        fasility: [1, 1, 1, 1, 1, 1, 1, 1],
        selectedDates: [],
        map: (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.219791940365!2d72.83062787532307!3d18.921663082251406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c06fffffff%3A0xc0290485a4d73f57!2sThe%20Taj%20Mahal%20Palace%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1695997274599!5m2!1sen!2sin"
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
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/28761174.jpg?k=b1cb46fc6fa3fa483ede2910af83783cec710fb23e10a0b833acd90242fac556&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/28759741.jpg?k=d5ae0ac2637cae40b7e01e1aac798eebc76fcd80311d58f81f4871beadacc37f&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/25339753.jpg?k=42a6601d184ad9e3fe25ec0d15a8605b7e135142479ae42a6265231dca33191f&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/28759877.jpg?k=2a55f07571f83aebc71e9f658a7a2fef4b92fd2d56d91eb8b27e51543def76aa&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/28759044.jpg?k=4a3e476214895d86a0e71808d9eb5b85acaebe0cbff06bbd2ecdbb3054d98600&o=&hp=1",
        ],
        name: "The Oberoi Mumbai",
        price: 15999,
        rating: 4.9,
        availableDates: [],
        reviews: [
          "There is nothing to say, like all other hotels of the group this too was super",
          "Amazing ambiance Amazing food Great service by the staff",
          "Great Hospitality and the upgrade to the room with the sea view was a bonus!",
        ],
        address: "Nariman Point, 400021 Mumbai, India",
        roomInfo: "1 Room, 2 Adults, 1 Bathroom",
        Description:
          "Centrally located in Mumbai's business district, close to South Mumbai's shopping and entertainment areas, The Oberoi offers luxury and convenience with its outdoor heated pool, 24-hour spa, fitness and concierge service. It also features 5 food and beverage options offering a variety of cuisines. Complimentary WiFi is available in all rooms. The hotel's elegant rooms feature wooden floors, large windows offering beautiful views and en suite bathroom separated by a glass panel with electronic blinds. Rooms are equipped with an LCD TV, tea/coffee maker and iPod docking station.",
        fasility: [1, 1, 1, 1, 1, 1, 1, 1],
        selectedDates: [],
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
    cityName: "Mumbai",
    rooms: [
      {
        roomImages: [
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/101834007.jpg?k=263d03927074e577b2210e37602d0dbb87d2f8404c28a9e340d4e08296c92df9&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/103556980.jpg?k=a43c0911b20e3acf817ca25657e485bb637b8fc4dd82d0db8ec2584c8cc7ca75&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/176113777.jpg?k=982b8710d50b0e5b6e2db2b275928784748b993a039a1c3b1257e58b19a235fc&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/103556882.jpg?k=b97773ac9d16d032990d528f2b9fc697e2a76eca4f62152b979f1fc47548f021&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/103705035.jpg?k=513519ce602528df999333f5cc1a33cf2709c5b50412e71f9295a2c42bf84d0d&o=&hp=1",
        ],

        name: "The Taj Mahal Palace, Mumbai",
        price: 19999,
        rating: 5.0,
        availableDates: [],
        reviews: [
          "Reception staff very polite and cooperativr must say mr Amir was excellent and need to be awarded",
          "The Staff (Abeer) were so fabulous, friendly and helpful. Also the hotel room was clean, nice and spacious. the location is also perfect",
          "The rooms, the friendly helpful staff, the food, and excellent Heritage walk with Mr. Hameed",
        ],
        address:
          "Apollo Bunder Road The Taj Mahal Palace, Colaba, 400001 Mumbai, India",
        roomInfo: "1 Room, 2 Adults, 1 Bathroom",
        Description:
          "Built in 1903, the iconic Taj Mahal Palace stands majestically opposite the Gateway of India, overlooking the Arabian Sea. Sprawled over 2.6 acres, this 5-star deluxe hotel boasts 9 restaurants and a variety of traditional Indian therapies at J Wellness. Guests are spoiled for choice in dining options – the famous Wasabi by Morimoto offers innovative Japanese cuisine, while other culinary highlights include the Golden Dragon Chinese Restaurant and the poolside Aquarius Lounge.  An exclusive private dining experience can be arranged at Chef’s Studio.",
        fasility: [1, 1, 1, 1, 1, 1, 1, 1],
        selectedDates: [],
        map: (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.219791940365!2d72.83062787532307!3d18.921663082251406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c06fffffff%3A0xc0290485a4d73f57!2sThe%20Taj%20Mahal%20Palace%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1695997274599!5m2!1sen!2sin"
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
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/28761174.jpg?k=b1cb46fc6fa3fa483ede2910af83783cec710fb23e10a0b833acd90242fac556&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/28759741.jpg?k=d5ae0ac2637cae40b7e01e1aac798eebc76fcd80311d58f81f4871beadacc37f&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/25339753.jpg?k=42a6601d184ad9e3fe25ec0d15a8605b7e135142479ae42a6265231dca33191f&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/28759877.jpg?k=2a55f07571f83aebc71e9f658a7a2fef4b92fd2d56d91eb8b27e51543def76aa&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/28759044.jpg?k=4a3e476214895d86a0e71808d9eb5b85acaebe0cbff06bbd2ecdbb3054d98600&o=&hp=1",
        ],
        name: "The Oberoi Mumbai",
        price: 15999,
        rating: 4.9,
        availableDates: [],
        reviews: [
          "There is nothing to say, like all other hotels of the group this too was super",
          "Amazing ambiance Amazing food Great service by the staff",
          "Great Hospitality and the upgrade to the room with the sea view was a bonus!",
        ],
        address: "Nariman Point, 400021 Mumbai, India",
        roomInfo: "1 Room, 2 Adults, 1 Bathroom",
        Description:
          "Centrally located in Mumbai's business district, close to South Mumbai's shopping and entertainment areas, The Oberoi offers luxury and convenience with its outdoor heated pool, 24-hour spa, fitness and concierge service. It also features 5 food and beverage options offering a variety of cuisines. Complimentary WiFi is available in all rooms. The hotel's elegant rooms feature wooden floors, large windows offering beautiful views and en suite bathroom separated by a glass panel with electronic blinds. Rooms are equipped with an LCD TV, tea/coffee maker and iPod docking station.",
        fasility: [1, 1, 1, 1, 1, 1, 1, 1],
        selectedDates: [],
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
    id: 5,
    cityName: "Chennai",
    rooms: [
      {
        roomImages: [
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/118504872.jpg?k=90c12d2104859c74cd1940f3125208d36beeb810afce37ade4e2607e42bdf1f8&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/185996798.jpg?k=366eb76f3224f8db29f41201b7e003a3bdc3279ffdb387efb1541a795b7b77f0&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/217059789.jpg?k=4ea2db4ed3fb13cc0d7e40606007dd5a46d15e831bfba7f4840f405636072210&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/204471821.jpg?k=d1ba5ece279add68d91e6d74c4fc16ba2f951ca8fc2bc1b90abd8c3cb4030727&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/118504656.jpg?k=5c7ebed9e15b99137f1d2a7e94178c07acc98151c1f28ff38328c5b179751568&o=&hp=1",
        ],

        name: "Ibis Chennai OMR - An Accor Brand",
        price: 6999,
        rating: 4.7,
        availableDates: [],
        reviews: [
          "The breakfast options were great, staff knows their job well, they were courteous and polite. The rooms were clean, toiletries provided were up to the mark. Worth the money you pay!!",
          "Liked the breakfast spread and online counter Room and sleeping quality was good",
          "The room is pretty tidy and clean. Breakfast had good options and ease of location",
        ],
        address:
          "Opp. Elcot Sez, IT Expressway, Old Mahabalipuram Rd, Sholinganallurur, Sholinganallur, 600119 Chennai, India",
        roomInfo: "1 Room, 2 Adults, 1 Bathroom",
        Description:
          "Ibis Chennai OMR is located in the IT corridor, Sholinganallur on Rajiv Gandhi IT expressway and is 7 minutes from the ECR beaches. This pet-friendly hotel features a fitness centre, garden, terrace, and free WiFi throughout the property. Rooms feature LCD TV, tea and coffee making facilities, minibar, walk in shower with fair trade range of bathroom amenities. HEPA filters and ozonizers ensure enhanced indoor air quality.",
        fasility: [1, 1, 1, 1, 1, 1, 1, 1],
        selectedDates: [],
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
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/269787164.jpg?k=2bb34381cec40c6ba115ff3bb0a8a2c34ebc46d5ab6a8f425d8e28cdb08c0523&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/269800030.jpg?k=4bf5bea8bbe741447e3ccffb0d6049e290198ca29d066658fc99b5718e1a0fe4&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/269789660.jpg?k=212ce7168d6d2f616c0e414741f570851f628a8f5470b1208de3b23c7b3b96d3&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/4611391.jpg?k=2e950a9f99edb398c2164383f0d56c0aaf7268e67764e22514b31e86899d9090&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/269807347.jpg?k=71ea74c6b755de3a481f76aaa3fd2196d16ce07da0cb81bfdad317e8e1c49e48&o=&hp=1",
        ],
        name: "The Park Chennai",
        price: 4699,
        rating: 4.9,
        availableDates: [],
        reviews: [
          "There is nothing to say, like all other hotels of the group this too was super",
          "Amazing ambiance Amazing food Great service by the staff",
          "Great Hospitality and the upgrade to the room with the sea view was a bonus!",
        ],
        address:
          "601, Near US Embassy, Anna Salai, Nungambakkam, T - Nagar, 600006 Chennai, India ",
        roomInfo: "1 Room, 2 Adults, 1 Bathroom",
        Description:
          "Located in Chennai’s business district, standing on the historic premises of the erstwhile Gemini Film Studios, The Park offers rooms with a flat-screen TV and rainshower facilities. The hotel’s 5-star facilities include free parking, an outdoor pool and 4 dining options.Modern décor and hardwood flooring feature throughout the air-conditioned guestrooms at The Park, Chennai. Each well-appointed room is fitted with a minibar and private bathroom with a bathtub.",
        fasility: [1, 1, 1, 1, 1, 1, 1, 1],
        selectedDates: [],
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
    id: 6,
    cityName: "Pune",
    backgroundImage:
      "https://cf.bstatic.com/xdata/images/city/1680x560/684820.webp?k=d39c1142b83721b8a0dbf38372e401fc97bdb693537cbe4e7818ac0a20aad63b&o=",
    rooms: [
      {
        roomImages: [
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/252004905.jpg?k=69522f1462cbcc701c40921d8920876240fc5e7b0ef85a165180bc7806a689ea&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/26434847.jpg?k=a055ae0ce214eccc79261c0fa4c991ec8dc35fc2349ce1fc3f84649184d4f57a&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/446885374.jpg?k=ad51b03a3e63aedfe5d6bda38790c0623eb2a281fdf09418965b8387f2ddefb4&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/26443573.jpg?k=1f5515b8c7936658ca14d1a726ab6550013e1986f91b09a9ff9ea446ad7dea62&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/400711401.jpg?k=eaf9c69b92eca0942c50da696a774349b195f85a5b8d00292f49ad49c926722a&o=&hp=1",
        ],

        name: "Novotel Pune Viman Nagar Road",
        price: 5999,
        rating: 4.9,
        availableDates: [],
        reviews: [
          "The breakfast options were great, staff knows their job well, they were courteous and polite. The rooms were clean, toiletries provided were up to the mark. Worth the money you pay!!",
          "Liked the breakfast spread and online counter Room and sleeping quality was good",
          "The room is pretty tidy and clean. Breakfast had good options and ease of location",
        ],
        address:
          "Weikfield IT City Infopark, Survey No. 30/3, Ramwadi, Viman Nagar, 411014 Pune, India –",
        roomInfo: "1 Room, 2 Adults, 1 Bathroom",
        Description:
          "Featuring an open-air swimming pool, and a fitness centre. It is just an 8-minute drive from the Pune Airport and 850 meters from the Phoenix Market City. Free WiFi access is available. The property offers free parking. Shirdi is 3.5 hours away from the property.Air-conditioned rooms here will provide you with a flat-screen satellite TV and a seating area. It also has a minibar and tea/coffee maker. Featuring a shower, private bathrooms also come with free toiletries and slippers.",
        fasility: [1, 1, 1, 1, 1, 1, 1, 1],
        selectedDates: [],
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
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/411991028.jpg?k=1a86b12631121eaa761fe1f8c312045007a19351cbf319bb1a51810f482a98ce&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/481481709.jpg?k=092226e9949f6300fef153efab66617053a71a24b4608a05df123d65065cf256&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/481481762.jpg?k=13741d405da37ad351d2cd85a8868ab07a1633dca44ea7dd79c316f2a95facf5&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/423624114.jpg?k=794a13b27d534f0e3cf8466ec6b6115d2d7784ffb52b7c3ebc1292e81b9a7323&o=&hp=1",
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/411991019.jpg?k=ab83e8c37a6ad20f09efff83eff4d1d654cc4203ad20c6074df3d3fb377ca468&o=&hp=1",
        ],
        name: "Hyatt Pune",
        price: 5499,
        rating: 4.9,
        availableDates: [],
        reviews: [
          "The food was great. Peaple were kind and helpful and overall great experience",
          "The breakfast options were one of the best I have ever had and the highlight of the stay.",
          "Cleanliness was immaculate and staff was very prompt to respond to your concerns. Highly recommended",
        ],
        address:
          "Kalyani Nagar, 88 Nagar Road (Adj. Aga Khan Palace), Kalyani Nagar, 411006 Pune, India –",
        roomInfo: "1 Room, 2 Adults, 1 Bathroom",
        Description:
          "Hyatt Pune is a part of the incredible world of Hyatt. Located just 10 minutes from Pune Airport, 5 minutes from Phoenix Market City, and 15 minutes from the IT hub, Hyatt Pune has the perfect location, whether you’re traveling for work or leisure. Take advantage of our world-class spa or Ayurvedic treatments, reiki, and yoga to relax and re-energize yourself. There’s something for everyone, with a scenic outdoor pool, garden suites, and round-the-clock room service, you will be spoilt for choice.",
        fasility: [1, 1, 1, 1, 1, 1, 1, 1],
        selectedDates: [],
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
