const CONFIG = {
    restaurantName: "Smyrna",
    tagline: "Kebab Haus",
    phone: "+4964413833488",
    whatsAppPhone: "4915735345875",
    pdfUrl: "Speisekarte.pdf",
    deliveryFee: 0,
    currency: "€",

 categories: [
    { id: "drehspiess_doener", name: "Drehspieß & Döner", icon: "fa-utensils" },
    { id: "salate", name: "Salate", icon: "fa-leaf" },
    { id: "nudeln", name: "Nudeln", icon: "fa-bowl-food" },
    { id: "pizza", name: "Pizza", icon: "fa-pizza-slice" },
    { id: "pide", name: "Pide", icon: "fa-bread-slice" },
    { id: "schnitzel", name: "Schnitzel vom Hähnchen", icon: "fa-drumstick-bite" },
    { id: "unsere_spezialitaeten", name: "Unsere Spezialitäten", icon: "fa-star" },
    { id: "tuerkische_spezialitaeten", name: "Türkische Spezialitäten", icon: "fa-heart" },
    { id: "suppen", name: "Suppen", icon: "fa-spoon" },
    { id: "beilagen", name: "Beilagen", icon: "fa-plus" },
    { id: "suessspeisen", name: "Süßspeisen", icon: "fa-cookie-bite" },
    { id: "getraenke", name: "Getränke", icon: "fa-glass-water" }
],


dishes: [
       // --- DREHSPIEß & DÖNER ---
    { id: 1, number: "1", name: "Drehspießfleisch", description: "Drehspießfleisch mit Salat und Soße in der Fladenbrot-Tasche", price: 7.50, category: "drehspiess_doener", image: "images/1.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "26"], hasSauces: true },
    { id: 2, number: "2", name: "Weichkäse-Sandwich (ohne Fleisch)", description: "Weichkäse, Salat und Soße in der Fladenbrot-Tasche", price: 6.00, category: "drehspiess_doener", image: "images/2.jpg", additivesAndAllergens: ["A", "C", "G","1","2","4"], hasSauces: true },
    { id: 3, number: "3", name: "Drehspießfleisch-Box Mini", description: "Mit Pommes Frites und Soße in der Box", price: 6.50, category: "drehspiess_doener", image: "images/3.jpg", additivesAndAllergens: ["A", "C", "G","1","2","4","26"], hasSauces: true },
    { id: 4, number: "4", name: "Drehspießfleisch-Box Maxi", description: "Mit Pommes Frites und Soße in der Box", price: 7.50, category: "drehspiess_doener", image: "images/4.jpg", additivesAndAllergens: ["A", "C", "G","1","2","4","26"], hasSauces: true },
    { id: 5, number: "5", name: "Falafel Sandwich (ohne Fleisch)", description: "Frittierte Erbsenteigbällchen, Salat und Soße in der Fladenbrot-Tasche", price: 6.50, category: "drehspiess_doener", image: "images/5.jpg", additivesAndAllergens: ["A", "C", "G","1","2","4","H"], hasSauces: true },
    { id: 6, number: "6", name: "Nuggets-Box", description: "6 Chicken Nuggets mit Pommes Frites in der Box", price: 7.50, category: "drehspiess_doener", image: "images/6.jpg", additivesAndAllergens: ["A","C","G","1","2","4"] },
    { id: 7, number: "7", name: "Nuggets", description: "7 Chicken Nuggets mit Soße", price: 6.50, category: "drehspiess_doener", image: "images/7.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"], hasSauces: true },
    { id: 8, number: "8", name: "Nuggets-Teller", description: "6 Chicken Nuggets mit Pommes, Salat und Soße", price: 12.00, category: "drehspiess_doener", image: "images/8.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"], hasSauces: true },
    { id: 9, number: "9", name: "Lahmacun", description: "Türkische Pizza gerollt mit Salat und Soße", price: 6.50, category: "drehspiess_doener", image: "images/9.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "16"], hasSauces: true },
    { id: 10, number: "10", name: "Lahmacun mit Fleisch", description: "Türkische Pizza mit Drehspießfleisch, Salat und Soße", price: 8.50, category: "drehspiess_doener", image: "images/10.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "16", "26"], hasSauces: true },
    { id: 11, number: "11", name: "Drehspießfleisch Dürüm", description: "Mit Salat und Soße im dünnen, gerollten Fladenbrot", price: 8.00, category: "drehspiess_doener", image: "images/11.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "16", "26"], hasSauces: true },
    // --- SALATE ---
    { id: 12, number: "12", name: "Azize Salat", description: "Gemischter Salat, Tomaten, Gurken, Mozzarella und Fleisch vom Hähnchendrehspieß", price: 12.50, category: "salate", image: "images/12.jpg", additivesAndAllergens: ["1", "2", "4", "C", "G"], hasSauces: true },
    { id: 13, number: "13", name: "Habisch Salat", description: "Gemischter Salat mit Drehspießfleisch, Tomaten, Gurken, Zwiebeln, Mais und Mozzarella", price: 12.50, category: "salate", image: "images/13.jpg", additivesAndAllergens: ["1", "2", "4", "C", "G", "26"], hasSauces: true },
    { id: 14, number: "14", name: "Italia Salat", description: "Gemischter Salat, Tomaten, Gurken, Edamer, Thunfisch, Zwiebeln und Ei", price: 10.00, category: "salate", image: "images/14.jpg", additivesAndAllergens: ["1", "2", "4", "C", "D", "G"], hasSauces: true },
    { id: 15, number: "15", name: "Vegetarisch Salat", description: "Gemischter Salat mit Tomaten, Gurken, gebratenen Pilzen, Zwiebeln und Paprika", price: 11.00, category: "salate", image: "images/15.jpg", additivesAndAllergens: ["1", "2", "4", "C", "G"], hasSauces: true },
    { id: 16, number: "16", name: "Fero Salat groß", description: "Gemischter Salat, Gurken, Tomaten, Zwiebel und Mais", price: 7.00, category: "salate", image: "images/16.jpg", additivesAndAllergens: ["1", "2" , "4", "C" ,"G"], hasSauces: true  },
    { id: 17, number: "17", name: "Fero Salat klein", description: "Gemischter Salat, Gurken, Tomaten, Zwiebel und Mais", price: 3.50, category: "salate", image: "images/17.jpg", additivesAndAllergens: ["1", "2", "4", "C", "G"], hasSauces: true },
    // --- NUDELN ---
    { id: 18, number: "18", name: "Spaghetti Napoli", description: "in Tomatensoße mit Basilikum, Grana Padano", price: 9.00, category: "nudeln", image: "images/18.jpg", additivesAndAllergens: ["A", "C" ,"G" ,"1", "2", "4"] },
    { id: 19, number: "19", name: "Penne Arrabiata", description: "In Tomatensoße mit Knoblauch, frischen Tomaten, Chili", price: 10.00, category: "nudeln", image: "images/19.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    { id: 20, number: "20", name: "Penne Carlotta", description: "In Tomatensoße mit Sahne, frischen Champignons, Zwiebeln, Knoblauch und hausgemachtem Pesto", price: 12.00, category: "nudeln", image: "images/20.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    { id: 21, number: "21", name: "Penne Thunfisch Gorgonzola", description: "In Tomatensoße mit Thunfisch, Gorgonzola und Sahnesoße", price: 12.00, category: "nudeln", image: "images/21.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    { id: 22, number: "22", name: "Penne Mozzarella", description: "In Tomatensoße mit frischen Tomaten, Sahnesoße, Mozzarella, Grana Padano, Knoblauch und hausgemachtem Pesto", price: 12.50, category: "nudeln", image: "images/22.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    { id: 23, number: "23", name: "Spaghetti Assassine", description: "In Tomatensoße mit Knoblauch, Zwiebel, Chili, frische Tomaten, Olivenöl", price: 10.00, category: "nudeln", image: "images/23.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    { id: 24, number: "24", name: "Penne alla Panna", description: "Mit Truthahnschinken in Sahnesoße", price: 10.00, category: "nudeln", image: "images/24.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "19"] },
    { id: 25, number: "25", name: "Penne Vegetaria", description: "In Tomatensoße mit Zwiebeln, Paprika, Zucchini, frischen Tomaten und Olivenöl", price: 11.50, category: "nudeln", image: "images/25.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    { id: 26, number: "26", name: "Spaghetti Hähnchen", description: "Mit frischen Champignons, Hähnchenbrust, frischen Tomaten, Pesto, Knoblauch in Sahnesoße, Grana Padano", price: 14.50, category: "nudeln", image: "images/26.jpg", additivesAndAllergens: ["A", "C","G", "1", "2", "4"] },
    { id: 27, number: "27", name: "Spaghetti Al Pesto", description: "Mit frischen Tomaten, hausgemachtem Pesto und Grana Padano", price: 10.00, category: "nudeln", image: "images/27.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    { id: 28, number: "28", name: "Penne Al Pesto", description: "Mit frischen Tomaten, Sahnesauce und hausgemachtem Pesto", price: 10.00, category: "nudeln", image: "images/28.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    { id: 29, number: "29", name: "Penne Döner", description: "In Tomatensoße mit Paprika, Zucchini, Knoblauch, Grana Padano, frischen Tomaten, Dönerfleisch", price: 14.50, category: "nudeln", image: "images/29.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "26"] },
    { id: 30, number: "30", name: "Penne Broccoli", description: "Penne mit Broccoli in Tomatensoße, frischen Tomaten, Sahnesoße und hausgemachtem Pesto mit Käse überbacken", price: 12.50, category: "nudeln", image: "images/30.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    { id: 31, number: "31", name: "Penne aus dem Ofen", description: "Mit Truthahnschinken, Broccoli in Sahnesoße mit Käse überbacken", price: 12.50, category: "nudeln", image: "images/31.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "19"] },

    // --- PIZZA ---
    { id: 32, number: "32", name: "Pizzabrot", description: "Mit Tomatensoße, Oregano und Knoblauch", price: 5.90, category: "pizza", image: "images/32.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    { id: 33, number: "33", name: "Pizzabrötchen mit Sour Cream", description: "Knusprige Pizzabrötchen serviert mit Sour Cream", price: 5.90, category: "pizza", image: "images/33.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    { id: 34, number: "34", name: "Pizza Margarita", description: "Mit Tomatensoße und Käse", price: 8.00, category: "pizza", image: "images/34.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    { id: 35, number: "35", name: "Pizza Salami", description: "Mit Tomatensoße, Rindersalami und Käse", price: 9.50, category: "pizza", image: "images/35.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "16"] },
    { id: 36, number: "36", name: "Pizza Schinken", description: "Mit Tomatensoße, Truthahnschinken und Käse", price: 9.50, category: "pizza", image: "images/36.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "19"] },
    { id: 37, number: "37", name: "Pizza Peperoniwurst", description: "Mit Tomatensoße, Peperoniwurst und Käse", price: 9.50, category: "pizza", image: "images/37.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "16"] },
    { id: 38, number: "38", name: "Pizza Hawaii", description: "Mit Tomatensoße, Truthahnschinken, Ananas und Käse", price: 11.00, category: "pizza", image: "images/38.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "10", "19"] },
    { id: 39, number: "39", name: "Pizza Tonno Cipolla", description: "Mit Tomatensoße, Thunfisch, Zwiebeln und Käse", price: 11.00, category: "pizza", image: "images/39.jpg", additivesAndAllergens: ["A", "C", "D", "G", "1", "2", "4"] },
    { id: 40, number: "40", name: "Pizza Prosciutto Funghi", description: "Mit Tomatensoße, Truthahnschinken, Pilzen und Käse", price: 10.50, category: "pizza", image: "images/40.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "19"] },
    { id: 41, number: "41", name: "Pizza Diavolo", description: "Mit Tomatensoße, Rindersalami, Chili, Paprika und Käse", price: 12.00, category: "pizza", image: "images/41.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "16"] },
    { id: 42, number: "42", name: "Pizza Vegetaria", description: "Mit Tomatensoße, Pilzen, Paprika, Zucchini und Käse", price: 13.50, category: "pizza", image: "images/42.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    { id: 43, number: "43", name: "Pizza Capricciosa", description: "Mit Tomatensoße, Truthahnschinken, Pilzen, Zwiebeln, Oliven und Käse", price: 12.00, category: "pizza", image: "images/43.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "6", "19"] },
    { id: 44, number: "44", name: "Pizza Bruschetta", description: "Mit Tomatensoße, frischen Tomaten, Knoblauch, Oliven, Rucola, Grana Padano, hausgemachtem Pesto und Käse", price: 12.50, category: "pizza", image: "images/44.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "6"] },
    { id: 45, number: "45", name: "Pizza Pasta", description: "Mit Tomatensoße, Spaghetti und Käse", price: 11.00, category: "pizza", image: "images/45.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    { id: 46, number: "46", name: "Pizza Hollandaise", description: "Mit Chili-Hollandaise-Soße, Brokkoli, Paprika, Hähnchenbrust, Rucola und Käse", price: 14.50, category: "pizza", image: "images/46.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    { id: 47, number: "47", name: "Pizza Happy", description: "Mit Chili-Hollandaise-Soße, Brokkoli, Rindersalami, Truthahnschinken, Pilzen, Paprika und Käse", price: 14.50, category: "pizza", image: "images/47.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "16", "19"] },
    { id: 48, number: "48", name: "Pizza Leonardo", description: "Mit Pestorahm, schwarzen Oliven, frischen Tomaten, Chili und Käse", price: 12.00, category: "pizza", image: "images/48.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"," 6"] },
    { id: 49, number: "49", name: "Pizza Smyrna", description: "Mit Pestorahm, Hähnchenbrust, frischen Tomaten, Rucola, Grana Padano und Käse", price: 14.50, category: "pizza", image: "images/49.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    { id: 50, number: "50", name: "Pizza Jadoo", description: "Mit Currysauce, Ananas, frischen Tomaten, schwarzen Oliven und Käse", price: 12.00, category: "pizza", image: "images/50.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "6", "10"] },
    { id: 51, number: "51", name: "Pizza Luan", description: "Mit Currysauce, Hähnchenbrust, Pilzen, Paprika, Brokkoli und Käse", price: 14.00, category: "pizza", image: "images/51.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "10"] },
    // --- PIDE ---
    { id: 52, number: "52", name: "Kiymali Pide", description: "Mit Hackfleisch und Ei", price: 11.00, category: "pide", image: "images/52.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    { id: 53, number: "53", name: "Peynirli Pide (ohne Fleisch)", description: "Mit Weichkäse und Ei", price: 11.00, category: "pide", image: "images/53.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    { id: 54, number: "54", name: "Ispanakli Pide (ohne Fleisch)", description: "Mit Spinat, Weichkäse und Ei", price: 12.00, category: "pide", image: "images/54.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    { id: 55, number: "55", name: "Karisik Peynirli Pide (ohne Fleisch)", description: "Mit vier verschiedenen Käsesorten", price: 13.00, category: "pide", image: "images/55.jpg", additivesAndAllergens: ["A", "C" ,"G", "1", "2", "4"] },
    { id: 56, number: "56", name: "Wetzlarer Pide", description: "Mit Hackfleisch und Pizzakäse", price: 12.00, category: "pide", image: "images/56.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "16"] },
    // --- SCHNITZEL VOM HÄHNCHEN ---
    { id: 57, number: "57", name: "Wiener Art", description: "Mit Pommes frites und Beilagensalat", price: 13.50, category: "schnitzel", image: "images/57.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    { id: 58, number: "58", name: "Schnitzel Amalfi", description: "Mit Zwiebeln, frischen Champignons, Pommes frites und Beilagensalat", price: 15.00, category: "schnitzel", image: "images/58.jpg", additivesAndAllergens: ["A","C", "G", "1", "2", "4"] },
    { id: 59, number: "59", name: "Schnitzel Hawaii", description: "Mit Truthahnschinken, Ananas, Pommes frites, Käse überbacken und Beilagensalat", price: 16.00, category: "schnitzel", image: "images/59.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "10", "19"] },
    { id: 60, number: "60", name: "Schnitzel Smyrna", description: "Mit einer cremigen Chili-Hollandaisesoße, dazu Pommes frites und Beilagensalat", price: 16.00, category: "schnitzel", image: "images/60.jpg", additivesAndAllergens: ["A","C", "G", "1", "2", "4"] },
    { id: 61, number: "61", name: "Schnitzel Toscana", description: "Mit Tomaten-Paprika-Zwiebelsoße, Käse überbacken, Pommes frites und Beilagensalat", price: 16.00, category: "schnitzel", image: "images/61.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },

    // --- UNSERE SPEZIALITÄTEN ---
    { id: 62, number: "62", name: "Gyros vom Hähnchen", description: "Mit Pommes frites, Sour Cream und Beilagensalat", price: 15.00, category: "unsere_spezialitaeten", image: "images/62.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    { id: 63, number: "63", name: "Geröstetes Gemüse", description: "Mit Grana Padano, hausgemachtem Pesto, Fleisch vom Hähnchendrehspieß und Balsamicocreme", price: 16.00, category: "unsere_spezialitaeten", image: "images/63.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "26"] },
    { id: 64, number: "64", name: "Pot Vegi", description: "Mit Ofenkartoffeln, Sour Cream und Salat", price: 10.00, category: "unsere_spezialitaeten", image: "images/64.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    { id: 65, number: "65", name: "Pot Hähnchen", description: "Mit Ofenkartoffeln, Sour Cream, Salat und Fleisch vom Hähnchendrehspieß", price: 13.50, category: "unsere_spezialitaeten", image: "images/65.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "26"] },
    { id: 66, number: "66", name: "Bruschetta Classic", description: "3 Stück, Brot mit frischen Tomaten, Knoblauch, hausgemachtem Pesto, Oliven, Grana Padano und Balsamicocreme", price: 8.00, category: "unsere_spezialitaeten", image: "images/66.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "6"] },
    { id: 67, number: "67", name: "Bruschetta Mozzarella", description: "3 Stück, Brot mit frischen Tomaten, Knoblauch, hausgemachtem Pesto, Oliven, Mozzarella, Grana Padano und Balsamicocreme", price: 9.50, category: "unsere_spezialitaeten", image: "images/67.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "6"] },

    // --- TÜRKISCHE SPEZIALITÄTEN ---
    { id: 68, number: "68", name: "Döner Teller", description: "Drehspießfleisch mit Pommes frites, Salat oder Reis", price: 13.00, category: "tuerkische_spezialitaeten", image: "images/68.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "26"], hasSauces: true },
    { id: 69, number: "69", name: "Lahmacunteller", description: "2 Stück türkische Pizza mit Salatbeilage", price: 12.00, category: "tuerkische_spezialitaeten", image: "images/69.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "16"], hasSauces: true },
    { id: 70, number: "70", name: "Drehspießfleisch Lahmacunteller", description: "2 Stück türkische Pizza mit Drehspießfleisch und Salatbeilage", price: 13.50, category: "tuerkische_spezialitaeten", image: "images/70.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "16", "26"], hasSauces: true },
    { id: 71, number: "71", name: "Falafelteller (ohne Fleisch)", description: "Frittierte Erbsenteigbällchen mit Salat und Soße", price: 12.00, category: "tuerkische_spezialitaeten", image: "images/71.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"], hasSauces: true },
    { id: 72, number: "72", name: "Menemen (ohne Fleisch)", description: "Traditionelle türkische Eierspeise mit frischen Tomaten und Peperoni", price: 12.00, category: "tuerkische_spezialitaeten", image: "images/72.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    // --- SUPPEN ---
    { id: 73, number: "73", name: "Orientalische Linsensuppe", description: "Mercimek Çorbası", price: 7.00, category: "suppen", image: "images/73.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4", "H"] },
    { id: 74, number: "74", name: "Tomatensuppe", description: "Klassische, heiße Tomatensuppe", price: 7.00, category: "suppen", image: "images/74.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },

    // --- BEILAGEN ---
    { id: 75, number: "75", name: "Reis", description: "Portion feiner Reis", price: 4.50, category: "beilagen", image: "images/75.jpg", additivesAndAllergens: [] },
    { id: 76, number: "76", name: "Pommes Frites", description: "Portion knusprige Pommes frites", price: 4.00, category: "beilagen", image: "images/76.jpg", additivesAndAllergens: ["1", "2", "3", "7"] },
    { id: 77, number: "77", name: "Pommes Frites Maxi", description: "Große Portion knusprige Pommes frites", price: 4.50, category: "beilagen", image: "images/77.jpg", additivesAndAllergens: ["1", "2", "3", "7"] },
    { id: 78, number: "78", name: "Kroketten", description: "Portion goldbraune Kroketten", price: 4.50, category: "beilagen", image: "images/78.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },
    { id: 79, number: "79", name: "Chili-Hollandaisesoße", description: "Würzige, cremige Chili-Hollandaisesoße", price: 4.00, category: "beilagen", image: "images/79.jpg", additivesAndAllergens: ["C", "G", "1", "2", "4", "3", "22", "25"] },
    { id: 80, number: "80", name: "Sauerrahm", description: "Portion frischer Sauerrahm", price: 4.00, category: "beilagen", image: "images/80.jpg", additivesAndAllergens: ["C", "G", "1", "2", "3", "4", "22", "25"] },
    { id: 81, number: "81", name: "Ketchup, Mayonnaise", description: "Portionsbeutel Ketchup oder Mayonnaise", price: 0.50, category: "beilagen", image: "images/81.jpg", additivesAndAllergens: ["C", "G", "1", "2", "3", "4", "10", "22", "25"] },
    { id: 82, number: "82", name: "Sigara Böregi", description: "Knusprig frittierte Teigröllchen mit Käsefüllung", price: 2.00, category: "beilagen", image: "images/82.jpg", additivesAndAllergens: ["A", "C", "G", "1", "2", "4"] },

    // --- SÜßSPEISEN ---
    { id: 83, number: "83", name: "Baklava", description: "3 Stück traditioneller, süßer Blätterteig mit Nussfüllung und Sirup", price: 4.50, category: "suessspeisen", image: "images/83.jpg", additivesAndAllergens: ["A", "C", "D", "H", "1", "2", "3", "4", "10", "22", "25"] },

    // --- GETRÄNKE ---
    { id: 84, number: "G1", name: "Eistee (0,33L)", description: "Erfrischender Eistee", price: 3.00, category: "getraenke", image: "images/84.jpg", additivesAndAllergens: [] },
    { id: 85, number: "G2", name: "Coca Cola (0,33L)", description: "Klassische Coca Cola", price: 2.50, category: "getraenke", image: "images/85.jpg", additivesAndAllergens: [] },
    { id: 86, number: "G3", name: "Coca Cola Light (0,33L)", description: "Zuckerfreie Coca Cola Light", price: 2.50, category: "getraenke", image: "images/86.jpg", additivesAndAllergens: [] },
    { id: 87, number: "G4", name: "Fanta (0,33L)", description: "Erfrischende Fanta", price: 2.50, category: "getraenke", image: "images/87.jpg", additivesAndAllergens: [] },
    { id: 88, number: "G5", name: "Mezzo-Mix (0,33L)", description: "Koffeinhaltiges Cola-Mix-Getränk", price: 2.50, category: "getraenke", image: "images/88.jpg", additivesAndAllergens: [] },
    { id: 89, number: "G6", name: "Uludag (0,33L)", description: "Traditionelle türkische Limonade", price: 2.50, category: "getraenke", image: "images/89.jpg", additivesAndAllergens: [] },
    { id: 90, number: "G7", name: "Ayran (0,33L)", description: "Erfrischendes türkisches Joghurtgetränk", price: 1.50, category: "getraenke", image: "images/90.jpg", additivesAndAllergens: [] },
    { id: 91, number: "G8", name: "Wasser (0,33L)", description: "Erfrischendes Mineralwasser", price: 2.00, category: "getraenke", image: "images/91.jpg", additivesAndAllergens: [] },
    { id: 92, number: "G9", name: "Red Bull (0,33L)", description: "Taurinhaltiges Energiegetränk", price: 3.50, category: "getraenke", image: "images/92.jpg", additivesAndAllergens: ["1", "13"] },
    { id: 93, number: "G10", name: "Coca Cola (1-Liter-Flasche)", description: "Nur für Gäste vor Ort erhältlich", price: 4.00, category: "getraenke", image: "images/93.jpg", additivesAndAllergens: [] },
    { id: 94, number: "G11", name: "Fanta (1-Liter-Flasche)", description: "Nur für Gäste vor Ort erhältlich", price: 4.00, category: "getraenke", image: "images/94.jpg", additivesAndAllergens: [] },
    { id: 95, number: "G12", name: "Wasser (1-Liter-Flasche)", description: "Nur für Gäste vor Ort erhältlich", price: 3.50, category: "getraenke", image: "images/95.jpg", additivesAndAllergens: [] },
    { id: 96, number: "G13", name: "Uludag (1-Liter-Flasche)", description: "Nur für Gäste vor Ort erhältlich", price: 4.00, category: "getraenke", image: "images/96.jpg", additivesAndAllergens: [] }
]

};

let cart = [];
let activeCategory = "all";
let currentOrderType = "Lieferung";
window.onload = function() {
    
    document.getElementById('restaurant-name').innerText = CONFIG.restaurantName;
    document.getElementById('restaurant-tagline').innerText = CONFIG.tagline;
    document.getElementById('pdf-iframe').src = CONFIG.pdfUrl;
    document.getElementById('pdf-download-link').href = CONFIG.pdfUrl;
    document.getElementById('modal-phone-num').innerText = CONFIG.phone;


    const now = new Date();
    now.setMinutes(now.getMinutes() + 45);
    const timeString = now.toTimeString().slice(0, 5);
    const popTimeField = document.getElementById('pop-cust-time');
    if (popTimeField) {
        popTimeField.value = timeString;
    }

    renderCategories();
    renderDishes();
    updateCartUI();
};

function getCategoryEmojiByName(catId, categoryName) {
    const idText = catId.toLowerCase();
    const nameText = categoryName.toLowerCase();
    
 
    if (window.innerWidth >= 768) {
        if (idText === 'all' || nameText.includes('alle') || nameText.includes('list')) return '✨';
        if (nameText.includes('döner') || nameText.includes('drehspieß') || nameText.includes('kebab')) return '🥙';
        if (nameText.includes('pizza')) return '🍕';
        if (nameText.includes('pide')) return '🍕';
        if (nameText.includes('schnitzel')) return '🥩';
        if (nameText.includes('vorspeisen') || nameText.includes('salat')) return '🥗';
        if (nameText.includes('getränke') || nameText.includes('cola') || nameText.includes('softdrink') || nameText.includes('dessert')) return '🥤';
        if (nameText.includes('snack') || nameText.includes('pommes')) return '🍟';
        if (nameText.includes('burger')) return '🍔';
        if (nameText.includes('pasta') || nameText.includes('nudeln')) return '🍝';
        return '✨';
    }

 
    if (idText === 'all' || nameText.includes('alle') || nameText.includes('list')) return '✨';
    if (nameText.includes('döner') || nameText.includes('drehspieß') || nameText.includes('kebab')) return '🥙';
    
 
    if (nameText.includes('beilage')) return '🍟'; 
    if (nameText.includes('süßspeise') || nameText.includes('dessert')) return '🍰'; 
    if (nameText.includes('spezialität') || nameText.includes('special')) return '👑'; 
    if (nameText.includes('suppe')) return '🥣'; 
    
    if (nameText.includes('pizza') || nameText.includes('pide')) return '🍕';
    if (nameText.includes('schnitzel')) return '🥩';
    if (nameText.includes('vorspeisen') || nameText.includes('salat')) return '🥗';
    if (nameText.includes('getränke') || nameText.includes('cola') || nameText.includes('softdrink')) return '🥤';
    if (nameText.includes('snack') || nameText.includes('pommes')) return '🍟';
    if (nameText.includes('burger')) return '🍔';
    if (nameText.includes('pasta') || nameText.includes('nudeln')) return '🍝';
    
    return '✨'; 
}


function overwriteMobileDonerIconOnly() {
    if (window.innerWidth >= 768) return;

    const elements = document.querySelectorAll('div, button, span, a');
    elements.forEach(el => {
        if (el.textContent && el.textContent.trim() === 'Drehspieß & Döner') {
            const parentContainer = el.closest('div');
            if (parentContainer) {
                parentContainer.innerHTML = parentContainer.innerHTML.replace('🥙', '<img src="Drehspies-Bild.png.png" alt="" style="display: inline-block !important; width: 20px !important; height: 20px !important; vertical-align: middle !important; margin-bottom: 4px !important;">');
            }
        }
    });
}


if (typeof renderCategories !== 'undefined') {
    const originalRenderCategories = renderCategories;
    renderCategories = function() {
        originalRenderCategories();
        if (window.innerWidth < 768) {
            setTimeout(overwriteMobileDonerIconOnly, 50);
        }
    };
}


function renderCategories() {
    const container = document.getElementById('category-tabs');
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        container.className = "flex items-center justify-start gap-4 overflow-x-auto pb-3 pt-1 w-full custom-scrollbar";
    }

    let html = '';
    if (isMobile) {
        html = `
            <button onclick="selectCategory('all')" id="cat-btn-all" class="cat-btn flex flex-col items-center space-y-1.5 group min-w-[75px] focus:outline-none bg-transparent border-0 p-0 shadow-none">
                <div class="w-14 h-14 rounded-full bg-slate-800 border-2 border-orange-500 flex items-center justify-center shadow-md overflow-hidden transition relative">
                    <img src="img/all.jpg" alt="Alle Gerichte" onerror="this.style.display='none'" class="w-full h-full object-cover absolute inset-0 z-10">
                    <span class="text-xl relative z-0">${getCategoryEmojiByName('all', 'alle')}</span> 
                </div>
                <!-- Sicherer Farbwert direkt gesetzt (Orange für Aktiv) -->
                <span class="cat-text text-[11px] font-bold tracking-tight text-center whitespace-normal leading-tight max-w-[75px]" style="color: #ea580c;">Alle Gerichte</span>
            </button>
        `;
    } else {
        html = `
            <button onclick="selectCategory('all')" id="cat-btn-all" class="cat-btn bg-orange-500 text-white font-medium text-xs px-3.5 py-2 rounded-xl whitespace-nowrap shadow-sm transition">
                <i class="fa-solid fa-list mr-1"></i> Alle Gerichte
            </button>
        `;
    }

    CONFIG.categories.forEach(cat => {
        if (isMobile) {
            html += `
                <button onclick="selectCategory('${cat.id}')" id="cat-btn-${cat.id}" class="cat-btn flex flex-col items-center space-y-1.5 group min-w-[75px] focus:outline-none bg-transparent border-0 p-0 shadow-none">
                    <div class="w-14 h-14 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center shadow-md overflow-hidden transition relative">
                        <img src="img/${cat.id}.jpg" alt="${cat.name}" onerror="this.style.display='none'" class="w-full h-full object-cover absolute inset-0 z-10">
                        <span class="text-xl relative z-0">${getCategoryEmojiByName(cat.id, cat.name)}</span> 
                    </div>
                    <!-- Standardfarbe für inaktive Buttons gesetzt (Dunkelgrau für Lesbarkeit) -->
                    <span class="cat-text text-[11px] font-semibold tracking-tight text-center whitespace-normal leading-tight max-w-[75px]" style="color: #64748b;">${cat.name}</span>
                </button>
            `;
        } else {
            html += `
                <button onclick="selectCategory('${cat.id}')" id="cat-btn-${cat.id}" class="cat-btn bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs px-3.5 py-2 rounded-xl whitespace-nowrap transition">
                    <i class="fa-solid ${cat.icon} mr-1 text-slate-500"></i> ${cat.name}
                </button>
            `;
        }
    });

    container.innerHTML = html;
}

function selectCategory(catId) {
    activeCategory = catId;
    const isMobile = window.innerWidth <= 768;

    document.querySelectorAll('.cat-btn').forEach(btn => {
        if (isMobile) {
            const circle = btn.querySelector('div');
            const text = btn.querySelector('.cat-text');
            if (circle) { circle.classList.replace('border-orange-500', 'border-slate-700'); }
            if (text) { 
                // Setzt inaktive Texte sauber auf die lesbare Standardfarbe zurück
                text.style.color = '#64748b';
                text.style.fontWeight = '600';
            }
        } else {
            btn.classList.remove('bg-orange-500', 'text-white', 'shadow-sm');
            btn.classList.add('bg-slate-100', 'text-slate-700');
        }
    });

    const activeBtn = document.getElementById(`cat-btn-${catId}`);
    if (activeBtn) {
        if (isMobile) {
            const circle = activeBtn.querySelector('div');
            const text = activeBtn.querySelector('.cat-text');
            if (circle) { circle.classList.replace('border-slate-700', 'border-orange-500'); }
            if (text) { 
                // Setzt die aktive Kategorie auf ein gut sichtbares, kräftiges Orange
                text.style.color = '#ea580c';
                text.style.fontWeight = '700';
            }
        } else {
            activeBtn.classList.remove('bg-slate-100', 'text-slate-700');
            activeBtn.classList.add('bg-orange-500', 'text-white', 'shadow-sm');
        }
    }

    renderDishes();
}

function renderDishes() {
    const container = document.getElementById('menu-container');
    const searchQuery = document.getElementById('search-input').value.toLowerCase();

    const filteredCategories = activeCategory === 'all' 
        ? CONFIG.categories 
        : CONFIG.categories.filter(c => c.id === activeCategory);

    let html = '';

    filteredCategories.forEach(cat => {
        const catDishes = CONFIG.dishes.filter(d => 
            d.category === cat.id && 
            (d.name.toLowerCase().includes(searchQuery) || d.number.toLowerCase().includes(searchQuery))
        );

        if (catDishes.length > 0) {
            html += `
                <div class="space-y-3">
                    <h2 class="font-bold text-slate-800 text-lg flex items-center space-x-2 border-b border-slate-200 pb-2">
                        <i class="fa-solid ${cat.icon} text-orange-500"></i>
                        <span>${cat.name}</span>
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${catDishes.map(dish => createDishCard(dish)).join('')}
                    </div>
                </div>
            `;
        }
    });

    if (html === '') {
        html = `
            <div class="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6">
                <i class="fa-solid fa-magnifying-glass text-4xl text-slate-300 mb-3"></i>
                <p class="text-slate-600 font-medium">Keine Gerichte gefunden.</p>
            </div>
        `;
    }

    container.innerHTML = html;
}


var lastScrolledDishId = null;

// Hilfsfunktion für die gegenseitige Saucen-Logik und das Styling
function handleSauceChange(input, dishId) {
    var isOhne = (input.value === "Ohne");
    var checkboxes = document.querySelectorAll('input[name="sauce-' + dishId + '"]');
    
    checkboxes.forEach(function(cb) {
        if (isOhne && cb.value !== "Ohne") {
            // Wenn "Ohne" gewählt wird, alle anderen abwählen
            cb.checked = false;
        } else if (!isOhne && cb.value === "Ohne" && input.checked) {
            // Wenn eine normale Sauce gewählt wird, "Ohne" abwählen
            cb.checked = false;
        }
        
        // Visuelles Styling (Rahmen und Hintergrund) für jedes Label aktualisieren
        var label = cb.parentElement;
        if (cb.checked) {
            label.classList.add('border-emerald-500', 'bg-emerald-50/30');
        } else {
            label.classList.remove('border-emerald-500', 'bg-emerald-50/30');
        }
    });
}

function createDishCard(dish) {
    var customImagePath = "img/" + dish.number + ".jpg";

    var allergenText = "";
    if (dish.additivesAndAllergens && dish.additivesAndAllergens.length > 0) {
        allergenText = ' <sup onclick="openAllergens(' + dish.id + ')" class="text-slate-400 hover:text-orange-500 font-normal text-[10px] ml-1 cursor-pointer select-none" title="Klicken für Erklärung">(' + dish.additivesAndAllergens.join(', ') + ')</sup>';
    }

    var sauceHtml = '';
    // ÄNDERUNG: Schaltet die Saucen jetzt individuell pro Gericht ein/aus
    if (dish.hasSauces === true) { 
        sauceHtml = 
            '<div class="flex flex-row items-center gap-2 w-full mt-1">' +
                '<span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex-shrink-0">Saucen:</span>' +
                '<div class="flex gap-1 items-center flex-1" style="display: flex !important; flex-wrap: nowrap !important;">' +
                    // Knoblauchsauce
                    '<label class="relative flex items-center border border-emerald-500 rounded px-1.5 py-0.5 text-[10px] font-medium cursor-pointer bg-emerald-50/30 text-slate-700 whitespace-nowrap">' +
                        '<input type="checkbox" name="sauce-' + dish.id + '" value="Knoblauchsauce" checked class="sr-only peer" onchange="handleSauceChange(this, ' + dish.id + ')">' +
                        '<span>Knoblauch</span>' +
                        '<i class="fa-solid fa-check text-emerald-500 ml-1 hidden peer-checked:inline"></i>' +
                    '</label>' +
                    // Joghurtsauce
                    '<label class="relative flex items-center border border-slate-200 rounded px-1.5 py-0.5 text-[10px] font-medium cursor-pointer bg-white text-slate-700 whitespace-nowrap">' +
                        '<input type="checkbox" name="sauce-' + dish.id + '" value="Joghurtsauce" class="sr-only peer" onchange="handleSauceChange(this, ' + dish.id + ')">' +
                        '<span>Joghurt</span>' +
                        '<i class="fa-solid fa-check text-emerald-500 ml-1 hidden peer-checked:inline"></i>' +
                    '</label>' +
                    // Scharfe Sauce
                    '<label class="relative flex items-center border border-slate-200 rounded px-1.5 py-0.5 text-[10px] font-medium cursor-pointer bg-white text-slate-700 whitespace-nowrap">' +
                        '<input type="checkbox" name="sauce-' + dish.id + '" value="Scharf" class="sr-only peer" onchange="handleSauceChange(this, ' + dish.id + ')">' +
                        '<span>Scharf</span>' +
                        '<i class="fa-solid fa-check text-emerald-500 ml-1 hidden peer-checked:inline"></i>' +
                    '</label>' +
                    // Ohne Sauce Option
                    '<label class="relative flex items-center border border-slate-200 rounded px-1.5 py-0.5 text-[10px] font-medium cursor-pointer bg-white text-slate-700 whitespace-nowrap">' +
                        '<input type="checkbox" name="sauce-' + dish.id + '" value="Ohne" class="sr-only peer" onchange="handleSauceChange(this, ' + dish.id + ')">' +
                        '<span>Ohne</span>' +
                        '<i class="fa-solid fa-check text-emerald-500 ml-1 hidden peer-checked:inline"></i>' +
                    '</label>' +
                '</div>' +
            '</div>';
    }

    var commentHtml = 
        '<div class="w-full mt-1.5">' +
            '<input type="text" id="comment-' + dish.id + '" placeholder="Anmerkung..." ' +
                   'class="w-full text-[10px] bg-slate-50 border border-slate-200 rounded px-2 py-0.5 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-300 transition">' +
        '</div>';

    return (
        '<div id="dish-card-' + dish.id + '" class="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col space-y-2 w-full max-w-full box-border overflow-hidden">' +
            
            '<!-- Zeile 1: Bild links, Beschreibung rechts -->' +
            '<div class="flex space-x-3 items-start">' +
                '<div class="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 flex items-center justify-center border border-slate-100 relative">' +
                    '<img src="' + customImagePath + '" alt="' + dish.name + '" class="w-full h-full object-cover" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">' +
                    '<div class="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-400 font-semibold text-[10px] select-none" style="display: none;">Lecker</div>' +
                '</div>' +
                '<div class="flex-1 min-w-0">' +
                    '<h3 class="font-bold text-sm text-slate-900 leading-snug break-words">' +
                        '<span class="text-orange-600 font-mono mr-1">#' + dish.number + '</span> ' + dish.name + allergenText +
                    '</h3>' +
                    '<p class="text-xs text-slate-500 line-clamp-2 mt-0.5">' + dish.description + '</p>' +
                '</div>' +
            '</div>' +

            '<!-- Zeile 2: Flex-col auf Mobilgeräten, flex-row auf größeren Bildschirmen -->' +
            '<div class="flex flex-col sm:flex-row sm:justify-between sm:items-end border-t border-slate-100 pt-2 w-full gap-2">' +
                
                '<!-- Unten Links: Saucen & Anmerkung -->' +
                '<div class="flex-1 min-w-0 w-full">' +
                    sauceHtml +
                    commentHtml +
                '</div>' +

                '<!-- Unten Rechts: Preis und Button -->' +
                '<div class="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-end gap-2 sm:space-y-1 flex-shrink-0 w-full sm:w-auto pt-1 sm:pt-0">' +
                    '<span class="font-bold text-slate-900 text-xs whitespace-nowrap">' + dish.price.toFixed(2).replace('.', ',') + ' ' + (typeof CONFIG !== "undefined" ? CONFIG.currency : '€') + '</span>' +
                    '<button onclick="addToCart(' + dish.id + ')" class="bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white border border-orange-200 hover:border-orange-500 font-semibold px-3 py-1 rounded-lg text-[10px] transition text-center whitespace-nowrap">' +
                        '<span>Hinzufügen</span>' +
                    '</button>' +
                '</div>' +

            '</div>' +
        '</div>'
    );
}


function openAllergens(dishId) {
    lastScrolledDishId = dishId;
    var detailsBox = document.getElementById('allergen-details');
    var backButton = document.getElementById('back-to-dish-btn');
    
    if (detailsBox) {
        detailsBox.open = true; 
        detailsBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    if (backButton) {
        backButton.classList.remove('hidden');
    }
}


function scrollBackToDish() {
    if (lastScrolledDishId) {
        var dishElement = document.getElementById('dish-card-' + lastScrolledDishId);
        if (dishElement) {
            dishElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            
            dishElement.classList.add('ring-2', 'ring-orange-500');
            setTimeout(function() {
                dishElement.classList.remove('ring-2', 'ring-orange-500');
            }, 1500);
        }
    }
}

function filterDishes() {
    renderDishes();
}

function addToCart(dishId) {
    // 1. Suche das Gericht über die numerische ID direkt aus deiner CONFIG.dishes-Liste
    const searchId = Number(dishId);
    
    
    const dish = (typeof CONFIG !== "undefined" && CONFIG.dishes) 
        ? CONFIG.dishes.find(item => Number(item.id) === searchId) 
        : null;

    if (!dish) {
        console.error("Gericht wurde in der Liste 'CONFIG.dishes' nicht gefunden! Gesuchte ID: " + dishId);
        return;
    }

    
    const allSaucesForDish = document.querySelectorAll(`input[name="sauce-${dishId}"]`);
    const checkedSauces = document.querySelectorAll(`input[name="sauce-${dishId}"]:checked`);
    
    let sauce = null;

    if (allSaucesForDish.length > 0) {
        if (checkedSauces.length === 0) {
            alert("Bitte wählen Sie mindestens eine Sauce aus!");
            return; 
        }
        const sauceArray = [];
        checkedSauces.forEach(checkbox => sauceArray.push(checkbox.value));
        sauce = sauceArray.join(" + ");
    }

    
    const commentElement = document.getElementById(`comment-${dishId}`);
    const comment = commentElement ? commentElement.value.trim() : "";

    
    const cartKey = `${dishId}-${sauce || ''}-${comment}`;
    const existingItem = cart.find(item => item.cartKey === cartKey);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            cartKey: cartKey,
            id: dish.id,
            name: dish.name,
            price: dish.price, 
            sauce: sauce,
            comment: comment,
            quantity: 1
        });
    }

    if (typeof saveCart === "function") saveCart();
    updateCartUI();
}

function updateQuantity(cartKey, change) {
    
    const itemIndex = cart.findIndex(item => item.cartKey === cartKey);
    
    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        
    
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        
    
        if (typeof saveCart === "function") saveCart();
        
    
        updateCartUI();
    }
}
function clearCart() {
    // 1. Array leeren
    cart = [];
    
    
    if (typeof saveCart === "function") {
        try {
            saveCart();
        } catch (e) {
            console.error("Fehler in saveCart():", e);
        }
    }
    
    
    if (typeof updateCartUI === "function") {
        try {
            updateCartUI();
        } catch (e) {
            console.error("Fehler in updateCartUI():", e);
            // NOTFALL-FALLBACK: Falls updateCartUI abstürzt, leeren wir die Box manuell
            const container = document.getElementById("cart-items-container");
            if (container) container.innerHTML = "";
            
            const total = document.getElementById("total-price");
            if (total) total.textContent = "0,00 €";
            
            const subtotal = document.getElementById("subtotal-price");
            if (subtotal) subtotal.textContent = "0,00 €";
        }
    }
}

function updateCartUI() {
    const container = document.getElementById('cart-items-container');
    let subtotal = 0;
    let totalItems = 0;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="text-center py-8 text-slate-400 space-y-2">
                <i class="fa-solid fa-basket-shopping text-3xl"></i>
                <p class="text-xs">Ihr Warenkorb ist leer.</p>
            </div>
        `;
    } else {
        let html = '';
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            totalItems += item.quantity;

            // Hier bauen wir den Text für die ausgewählten Extras zusammen
            let extrasHtml = '';
            if (item.sauce) extrasHtml += `<div>• Sauce: ${item.sauce}</div>`;
            if (item.side) extrasHtml += `<div>• Beilage: ${item.side}</div>`;
            if (item.comment) extrasHtml += `<div class="italic text-slate-400">• Anm.: "${item.comment}"</div>`;

            html += `
                <div class="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <div class="flex-1 pr-2">
                        <div class="font-semibold text-xs text-slate-800">${item.name}</div>
                        <!-- Hier werden die Extras klein darunter angezeigt -->
                        ${extrasHtml ? `<div class="text-[10px] text-slate-500 mt-0.5 space-y-px">${extrasHtml}</div>` : ''}
                        <div class="text-[11px] text-slate-400 mt-1">${item.price.toFixed(2).replace('.', ',')} ${CONFIG.currency}</div>
                    </div>
                    <div class="flex items-center space-x-2">
                        <div class="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden">
                            <!-- WICHTIG: Hier wird jetzt '${item.cartKey}' in Anführungszeichen übergeben -->
                            <button onclick="updateQuantity('${item.cartKey}', -1)" class="px-2 py-0.5 text-slate-600 hover:bg-slate-100 text-xs font-bold">-</button>
                            <span class="px-2 text-xs font-semibold text-slate-800">${item.quantity}</span>
                            <button onclick="updateQuantity('${item.cartKey}', 1)" class="px-2 py-0.5 text-slate-600 hover:bg-slate-100 text-xs font-bold">+</button>
                        </div>
                        <span class="text-xs font-bold text-slate-900 w-12 text-right">${itemTotal.toFixed(2).replace('.', ',')} ${CONFIG.currency}</span>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    }

    const fee = (cart.length > 0 && currentOrderType === "Lieferung") ? CONFIG.deliveryFee : 0;
    const total = subtotal + fee;

    document.getElementById('subtotal-price').innerText = `${subtotal.toFixed(2).replace('.', ',')} ${CONFIG.currency}`;
    document.getElementById('delivery-fee').innerText = `${fee.toFixed(2).replace('.', ',')} ${CONFIG.currency}`;
    document.getElementById('total-price').innerText = `${total.toFixed(2).replace('.', ',')} ${CONFIG.currency}`;

    const badge = document.getElementById('cart-badge');
    if (totalItems > 0) {
        badge.innerText = totalItems;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

let isWhatsAppFieldsVisible = false;

function openOrderModal(type) {
    if (cart.length === 0) {
        alert("Dein Warenkorb ist leer. Bitte füge zuerst Gerichte hinzu.");
        return;
    }

    currentOrderType = type;
    updateCartUI();

    const modal = document.getElementById('custom-order-modal');
    const subtitle = document.getElementById('modal-order-subtitle');
    const typeInput = document.getElementById('pop-order-type');
    const deliveryFields = document.getElementById('pop-delivery-fields');
    const addressInput = document.getElementById('pop-cust-address');
    const timeInput = document.getElementById('pop-cust-time');
    const phoneSummary = document.getElementById('pop-phone-summary');

    if (!modal) return;

    if (typeInput) typeInput.value = type;
    if (subtitle) subtitle.innerText = "Gewählte Art: " + type;

    let summaryHtml = "";
    let totalSum = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        const formattedPrice = itemTotal.toFixed(2).replace('.', ',') + " " + CONFIG.currency;
        summaryHtml += `
            <div class="flex justify-between items-center border-b border-neutral-800 pb-1 last:border-0">
                <span><strong class="font-mono text-brand-red">#${item.number}</strong> ${item.quantity}x ${item.name}</span>
                <span class="text-neutral-400 font-mono">${formattedPrice}</span>
            </div>`;
        totalSum += itemTotal;
    });

    const fee = (type === "Lieferung") ? CONFIG.deliveryFee : 0;
    const finalSum = totalSum + fee;
    
    if(fee > 0) {
        summaryHtml += `
            <div class="flex justify-between items-center text-[11px] text-neutral-400 pt-1">
                <span>Liefergebühr:</span>
                <span class="font-mono">${fee.toFixed(2).replace('.', ',')} ${CONFIG.currency}</span>
            </div>`;
    }

    summaryHtml += `
        <div class="flex justify-between items-center pt-1.5 mt-1 border-t border-neutral-700 font-bold text-white">
            <span>Gesamtsumme:</span>
            <span class="font-mono text-brand-red">${finalSum.toFixed(2).replace('.', ',')} ${CONFIG.currency}</span>
        </div>`;

    if (phoneSummary) phoneSummary.innerHTML = summaryHtml;

    modal.classList.remove('hidden');

    isWhatsAppFieldsVisible = false; 
    
    const whatsappBtn = document.querySelector('button[onclick="sendPopOrderWhatsApp()"]');
    if (whatsappBtn) {
        whatsappBtn.innerHTML = `<i class="fa-brands fa-whatsapp text-sm mr-1"></i> Per WhatsApp bestellen`;
    }

    const anrufBtn = document.querySelector('button[onclick="callRestaurantDirectly()"]');
    if (anrufBtn) {
        anrufBtn.style.display = "block";
    }

    const phoneInput = document.getElementById('pop-cust-phone');
    if (phoneInput && phoneInput.parentElement) {
        phoneInput.parentElement.style.display = "block"; // Telefonnummer-Container sichtbar machen
    }

    const nameInput = document.getElementById('pop-cust-name');
    if (nameInput && nameInput.parentElement) {
        nameInput.parentElement.style.display = "block"; 
    }

    
    if (type === "Lieferung") {
        if (deliveryFields) deliveryFields.style.display = "block"; 
        if (addressInput) {
            addressInput.parentElement.style.display = "block"; 
            addressInput.required = true;  
        }
    } else {
        
        if (deliveryFields) deliveryFields.style.display = "block"; 
        if (addressInput) {
            addressInput.parentElement.style.display = "none";  
            addressInput.required = false; 
            addressInput.value = "";       
        }
    }

    if (timeInput) timeInput.required = true; 
}

function closeOrderModal() {
    const modal = document.getElementById('custom-order-modal');
    if (modal) modal.classList.add('hidden');
}

 function sendPopOrderWhatsApp() {
    const orderType = document.getElementById('pop-order-type').value;
    const nameInput = document.getElementById('pop-cust-name');
    const addressInput = document.getElementById('pop-cust-address');
    const timeInput = document.getElementById('pop-cust-time');
    const noteInput = document.getElementById('pop-cust-note');
    
    const deliveryFields = document.getElementById('pop-delivery-fields');
    const whatsappBtn = document.querySelector('button[onclick="sendPopOrderWhatsApp()"]');
    
    let anrufBtn = document.querySelector('button[onclick*="callRestaurantDirectly"]');
    if (!anrufBtn) {
        const buttons = document.querySelectorAll('#custom-order-modal button');
        buttons.forEach(btn => {
            if (btn.textContent.toLowerCase().includes('telefon') || btn.textContent.toLowerCase().includes('anruf')) {
                anrufBtn = btn;
            }
        });
    }

    if (!isWhatsAppFieldsVisible) {
        if (deliveryFields) deliveryFields.style.display = "block";
        if (nameInput && nameInput.parentElement) nameInput.parentElement.style.display = "block";
        
        if (orderType === "Lieferung") {
            if (addressInput && addressInput.parentElement) {
                addressInput.parentElement.style.display = "block";
            }
        } else {
            if (addressInput && addressInput.parentElement) {
                addressInput.parentElement.style.display = "none";
            }
        }
        
        const phoneInput = document.getElementById('pop-cust-phone');
        if (phoneInput && phoneInput.parentElement) phoneInput.parentElement.style.display = "none";

        if (anrufBtn) {
            anrufBtn.style.setProperty('display', 'none', 'important');
        }

        if (whatsappBtn) {
            whatsappBtn.innerHTML = `<i class="fa-brands fa-whatsapp text-sm mr-1"></i> Jetzt über WhatsApp absenden`;
        }

        isWhatsAppFieldsVisible = true;
        return;
    }

    const name = nameInput ? nameInput.value.trim() : "";
    const address = addressInput ? addressInput.value.trim() : "";
    const time = timeInput ? timeInput.value.trim() : "";
    const note = noteInput ? noteInput.value.trim() : "";

    if (!name) {
        alert("Bitte trage deinen Namen ein.");
        return;
    }
    if (orderType === "Lieferung" && (!address || !time)) {
        alert("Bitte trage eine Lieferadresse und eine Wunschuhrzeit ein.");
        return;
    }
    if ((orderType === "Selbstabholung" || orderType === "Vorort essen") && !time) {
        alert("Bitte trage eine Wunschuhrzeit ein.");
        return;
    }

    let cartItemsText = "";
    let totalSum = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        const formattedPrice = itemTotal.toFixed(2).replace('.', ',') + " " + CONFIG.currency;
        
        // Hauptzeile für das Gericht (falls item.number nicht existiert, wird der Fall abgefangen)
        const dishNumber = item.number ? `[${item.number}] ` : "";
        cartItemsText += `• ${dishNumber}${item.quantity}x ${item.name} (${formattedPrice})\n`;
        
        // Saucen, Beilagen und Anmerkungen für WhatsApp formatieren
        if (item.sauce) {
            cartItemsText += ` ↳ Sauce: ${item.sauce}\n`;
        }
        if (item.side) {
            cartItemsText += ` ↳ Beilage: ${item.side}\n`;
        }
        if (item.comment) {
            cartItemsText += ` ↳ Anm.: "${item.comment}"\n`;
        }

        totalSum += itemTotal;
    });

    const fee = (orderType === "Lieferung") ? CONFIG.deliveryFee : 0;
    const finalSum = totalSum + fee;
    const formattedTotalSum = finalSum.toFixed(2).replace('.', ',') + " " + CONFIG.currency;

    let message = `🛒 *NEUE BESTELLUNG* 🛒\n\n`;
    message += `*Bestellart:* ${orderType}\n`;
    message += `*Name:* ${name}\n`;
    
    if (orderType === "Lieferung") {
        message += `*Adresse:* ${address}\n`;
        message += `*Wunschzeit:* ${time} Uhr\n`;
    } else {
        if (time) message += `*Uhrzeit:* ${time} Uhr\n`;
    }
    
    if (note) message += `*Anmerkung:* ${note}\n`;
    
    message += `\n📦 *BESTELLTE GERICHTE:*\n${cartItemsText}`;
    if (fee > 0) message += `*Liefergebühr:* ${fee.toFixed(2).replace('.', ',')} ${CONFIG.currency}\n`;
    message += `*Gesamtsumme:* *${formattedTotalSum}*`;

    const cleanNumber = CONFIG.whatsAppPhone.replace(/[^0-9]/g, ""); 
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    closeOrderModal();
    
    if (typeof clearCart === "function") {
        clearCart();
    }
}
function callRestaurantDirectly() {
    if (!CONFIG.phone) {
        alert("Es wurde keine Telefonnummer hinterlegt.");
        return;
    }
    
    
    window.location.href = `tel:${CONFIG.phone.trim()}`;
    
    // Schließt das Pop-up-Fenster
    closeOrderModal();
    
    
    if (typeof clearCart === "function") {
        clearCart();
    }
}

function togglePdfModal() {
    const modal = document.getElementById('pdf-modal');
    if (modal) modal.classList.toggle('hidden');
}
function toggleMobileCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const backBtn = document.getElementById('back-to-menu-btn');
    
    if (sidebar) {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('hidden');
            
            if (backBtn) {
                backBtn.style.setProperty('display', 'flex', 'important');
            }
            
            
            setTimeout(() => {
                const warenkorbZiel = document.getElementById('warenkorb-ziel');
                const zielElement = warenkorbZiel || sidebar;
                
                
                const elementPosition = zielElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset;
                
                
                const finalScrollPosition = offsetPosition - 180;
                
                window.scrollTo({
                    top: finalScrollPosition,
                    behavior: 'smooth'
                });
            }, 60); 

        } else {
            sidebar.classList.toggle('hidden');
        }
    }
}

function scrollToMenu() {
    const backBtn = document.getElementById('back-to-menu-btn');
    
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    
    if (backBtn) {
        backBtn.style.display = 'none';
    }
}

function clearCartUI() { clearCart(); }


function aktualisiereHeaderStatus() {
    const jetzt = new Date();
    const tag = jetzt.getDay(); // 0 = Sonntag, 1 = Montag, ..., 6 = Samstag
    const stunde = jetzt.getHours();
    const minute = jetzt.getMinutes();
    

    const aktuelleZeit = stunde + (minute / 60);

    const textElement = document.getElementById('oeffnungszeiten-text');
    if (!textElement) return;


    const startUhr = 10;
    const endeUhr = 22;
    const istRuhetag = (tag === 6);


    if (!istRuhetag && aktuelleZeit >= startUhr && aktuelleZeit < endeUhr) {
    
        textElement.innerHTML = 'Sonntag-Freitag geöffnet <strong class="text-white font-semibold">10 bis 22 Uhr</strong>';
    } else {

        let minutenBisOeffnung = 0;

        if (istRuhetag) {
            
            minutenBisOeffnung = ((24 - aktuelleZeit) + startUhr) * 60;
        } else if (aktuelleZeit < startUhr) {
            
            minutenBisOeffnung = (startUhr - aktuelleZeit) * 60;
        } else {

            const restHeute = 24 - aktuelleZeit;
            if (tag === 5) { 

                minutenBisOeffnung = (restHeute + 24 + startUhr) * 60;
            } else {
                
                minutenBisOeffnung = (restHeute + startUhr) * 60;
            }
        }


        const stundenVerbleibend = Math.floor(minutenBisOeffnung / 60);
        const minutenVerbleibend = Math.round(minutenBisOeffnung % 60);


        let anzeigeText = 'Geschlossen • öffnet in&nbsp;<strong class="text-orange-400 font-semibold">';
        
        if (stundenVerbleibend > 0) {
            anzeigeText += `${stundenVerbleibend} Std.`;
            if (minutenVerbleibend > 0) {
                anzeigeText += ` und ${minutenVerbleibend} Min.`;
            }
        } else {
            anzeigeText += `${minutenVerbleibend} Min.`;
        }
        
        anzeigeText += '</strong>';

        
        textElement.innerHTML = anzeigeText;
    }
}


if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        aktualisiereHeaderStatus();
        setInterval(aktualisiereHeaderStatus, 60000);
    });
} else {
    aktualisiereHeaderStatus();
    setInterval(aktualisiereHeaderStatus, 60000);
}


document.addEventListener("DOMContentLoaded", function () {
    if (!sessionStorage.getItem("page_has_loaded_once")) {
        // Seite wird zum ersten Mal geöffnet -> nach oben scrollen
        window.scrollTo(0, 0);
        // Im Speicher vermerken, dass der Erstaufruf erledigt ist
        sessionStorage.setItem("page_has_loaded_once", "true");
    }
});


if ('scrollRestoration' in history) {
    history.scrollRestoration = 'auto';
}



function fixDonerIcons() {
   
    const catButton = document.getElementById('cat-btn-drehspiess_doener');
    if (catButton) {
        catButton.style.display = 'inline-flex';
        catButton.style.alignItems = 'center';
        catButton.style.justifyContent = 'center';

        let iconElement = catButton.querySelector('i.fa-solid');
        if (iconElement) {
            
            iconElement.outerHTML = '<img src="Drehspies-Bild.png.png" alt="" style="display: inline-block !important; width: 20px !important; height: 20px !important; margin-right: 5px !important;">';
        } else {
            
            const imgElement = catButton.querySelector('img');
            if (imgElement) {
                imgElement.style.setProperty('margin-right', '5px', 'important');
                imgElement.style.setProperty('width', '20px', 'important');
                imgElement.style.setProperty('height', '20px', 'important');
            }
        }
    }

    
    const headings = document.querySelectorAll('h2');
    headings.forEach(h2 => {
        if (h2.textContent.includes('Drehspieß & Döner')) {
            let iconElement = h2.querySelector('i.fa-solid');
            if (iconElement) {
                iconElement.outerHTML = '<img src="Drehspies-Bild.png.png" alt="" style="display: inline-block !important; width: 24px !important; height: 24px !important; vertical-align: middle !important; margin-right: 8px !important;">';
            } else {
                const imgElement = h2.querySelector('img');
                if (imgElement) {
                    imgElement.style.setProperty('width', '24px', 'important');
                    imgElement.style.setProperty('height', '24px', 'important');
                    imgElement.style.setProperty('margin-right', '8px', 'important');
                    imgElement.style.setProperty('vertical-align', 'middle', 'important');
                }
            }
        }
    });
}


const originalRenderCategories = renderCategories;
renderCategories = function() {
    originalRenderCategories();
    fixDonerIcons();
};

const originalRenderDishes = renderDishes;
renderDishes = function() {
    originalRenderDishes();
    fixDonerIcons();
};
