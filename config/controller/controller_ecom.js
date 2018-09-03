const mongoose = require('mongoose');
const shortid = require('shortid');

// library usage declaration
const responses = require('./../../library/responseLib');
const time = require('./../../library/timeLib');
const check = require('./../../library/checkLib');
const logger = require('./../../library/loggerLib');
const other = require('./../../library/othersLib')
// Importing model_ecom 
const response_model = {
    basic: mongoose.model('basic'),
    watches: mongoose.model('watches'),
    mobiles: mongoose.model('mobiles')
}

// creating product info document in database
let create_response = (req, res) => {

    const reqBod = req.body;


    let source = {
        site: 'https://buytoo.in',
        site_section: `https://buytoo.in/${reqBod.type}/${reqBod.name}`,
        section_title: reqBod.section_title,
        country: 'India'
    }
    let rating = {
        mean_rating: reqBod.mean_rating,
        best_rating: reqBod.best_rating,
        worst_rating: reqBod.worst_rating,
        rating_count: reqBod.rating_count,
        reviews_count: reqBod.reviews_count
    }

    let desc = {
        Band_Color: reqBod.Band_Color,
        Band_Material: reqBod.Band_Material,
        Watch_Movement_Type: reqBod.Watch_Movement_Type,
        Watch_Display_Type: reqBod.Watch_Display_Type,
        Suitable: reqBod.Suitable
    }

    let Display_Features = {
        Display_Size: reqBod.Display_Size,
        Resolution: reqBod.Resolution,
        Resolution_Type: reqBod.Resolution_Type,
        GPU: reqBod.GPU,
        Display_Type: reqBod,
        Display_Colors: reqBod.Display_Colors
    }

    let Os_and_Processor_Features = {
        Operating_System: reqBod.Operating_System,
        Processor_Type: reqBod.Processor_Type,
        Processor_Core: reqBod.Processor_Core,
        Primary_Clock_Speed: reqBod.Primary_Clock_Speed
    }

    let Memory_and_Storage_Features = {
        Internal_Storage: reqBod.Internal_Storage,
        RAM: reqBod.RAM,
        Total_Memory: reqBod.Total_Memory,
        Expandable_Storage: reqBod.Expandable_Storage,
        Supported_Memory_Card_Type: reqBod.Supported_Memory_Card_Type,
        Memory_Card_Slot_Type: reqBod.Memory_Card_Slot_Type
    }

    let Connectivity_Features = {
        Network_Type: reqBod.Network_Type,
        Supported_Networks: reqBod.Supported_Networks,
        threeG: reqBod.threeG,
        Bluetooth_Support: reqBod.Bluetooth_Support,
        Bluetooth_Version: reqBod.Bluetooth_Support,
        Wi_Fi: reqBod.Wi_Fi,
        Audio_Jack: reqBod.Audio_Jack
    }

    let Multimedia_Features = {
        FM_Radio: reqBod.FM_Radio,
        FM_Radio_Recording: reqBod.FM_Radio_Recording,
        Audio_Formats: reqBod.Audio_Formats,
        Video_Formats: reqBod.Video_Formats
    }

    let Camera_Features = {
        Primary_Camera_Available: reqBod.Primary_Camera_Available,
        Primary_Camera: reqBod.Primary_Camera,
        Primary_Camera_Features: reqBod.Primary_Camera_Features,
        Secondary_Camera_Available: reqBod.Secondary_Camera_Available,
        Secondary_Camera: reqBod.Secondary_Camera,
        Flash: reqBod.Flash,
        Full_HD_Recording: reqBod.Full_HD_Recording,
        Frame_Rate: reqBod.Frame_Rate
    }

    let Battery_and_Power_Features = {
        Battery_Capacity: reqBod.Battery_Capacity
    }

    let Dimensions = {
        Width: reqBod.Width,
        Height: reqBod.Height,
        Depth: reqBod.Depth,
        Weight: reqBod.Weight
    }

    let Warranty_and_Gurantee = {
        Warranty_Summary: reqBod.Warranty_Summary,
        Gurantee_Summary: reqBod.Gurantee_Summary
    }
    let product_id = shortid.generate();
    let basic_response = {
        url: 'https://buytoo.in',
        uuid: shortid.generate(),
        source: {
            site: 'https://buytoo.in',
            site_section: `https://buytoo.in/${reqBod.type}/${reqBod.name}`,
            section_title: reqBod.section_title,
            country: 'India'
        },
        name: reqBod.name,
        description: {
            Band_Color: reqBod.Band_Color,
            Band_Material: reqBod.Band_Material,
            Watch_Movement_Type: reqBod.Watch_Movement_Type,
            Watch_Display_Type: reqBod.Watch_Display_Type,
            Suitable: reqBod.Suitable
        },
        brand: reqBod.brand,
        price: reqBod.price,
        currency: reqBod.currency,
        offer_price: reqBod.offer_price,
        model: reqBod.model,
        manufacturer: reqBod.manufacturer,
        in_stock: reqBod.in_stock,
        on_sale: reqBod.on_sale,
        product_id: product_id,
        Clasp: `${product_id}+clasp`,
        Item_Weight: reqBod.Item_Weight,
        rating_desc: {
            mean_rating: reqBod.mean_rating,
            best_rating: reqBod.best_rating,
            worst_rating: reqBod.worst_rating,
            rating_count: reqBod.rating_count,
            reviews_count: reqBod.reviews_count
        },
        images: reqBod.images,
        language: reqBod.language,
        Date_first_available_at_buytoo: reqBod.Date_first_available_at_buytoo,
        Last_bought: reqBod.Last_bought
    }

    let watches = new response_model.watches({
        watch_basic_info: {
            url: 'https://buytoo.in',
            uuid: shortid.generate(),
            source: {
                site: 'https://buytoo.in',
                site_section: `https://buytoo.in/${reqBod.type}/${reqBod.name}`,
                section_title: reqBod.section_title,
                country: 'India'
            },
            name: reqBod.name,
            description: {
                Band_Color: reqBod.Band_Color,
                Band_Material: reqBod.Band_Material,
                Watch_Movement_Type: reqBod.Watch_Movement_Type,
                Watch_Display_Type: reqBod.Watch_Display_Type,
                Suitable: reqBod.Suitable
            },
            brand: reqBod.brand,
            price: reqBod.price,
            currency: reqBod.currency,
            offer_price: reqBod.offer_price,
            model: reqBod.model,
            manufacturer: reqBod.manufacturer,
            in_stock: reqBod.in_stock,
            on_sale: reqBod.on_sale,
            product_id: product_id,
            Clasp: `${product_id}+clasp`,
            Item_Weight: reqBod.Item_Weight,
            rating_desc: {
                mean_rating: reqBod.mean_rating,
                best_rating: reqBod.best_rating,
                worst_rating: reqBod.worst_rating,
                rating_count: reqBod.rating_count,
                reviews_count: reqBod.reviews_count
            },
            images: reqBod.images,
            language: reqBod.language,
            Date_first_available_at_buytoo: reqBod.Date_first_available_at_buytoo,
            Last_bought: reqBod.Last_bought
        },
        Display_Type: reqBod.Display_Type,
        Dial_Colour: reqBod.Dial_Colour,
        categories: reqBod.categories,
        Warranty_and_Gurantee: {
            Warranty_Summary: reqBod.Warranty_Summary,
            Gurantee_Summary: reqBod.Gurantee_Summary
        }
    })

    let mobiles = new response_model.mobiles({
        mobile_basic_info: {
            url: 'https://buytoo.in',
            uuid: shortid.generate(),
            source: {
                site: 'https://buytoo.in',
                site_section: `https://buytoo.in/${reqBod.type}/${reqBod.name}`,
                section_title: reqBod.section_title,
                country: 'India'
            },
            name: reqBod.name,
            description: {
                Band_Color: reqBod.Band_Color,
                Band_Material: reqBod.Band_Material,
                Watch_Movement_Type: reqBod.Watch_Movement_Type,
                Watch_Display_Type: reqBod.Watch_Display_Type,
                Suitable: reqBod.Suitable
            },
            brand: reqBod.brand,
            price: reqBod.price,
            currency: reqBod.currency,
            offer_price: reqBod.offer_price,
            model: reqBod.model,
            manufacturer: reqBod.manufacturer,
            in_stock: reqBod.in_stock,
            on_sale: reqBod.on_sale,
            product_id: product_id,
            Clasp: `${product_id}+clasp`,
            Item_Weight: reqBod.Item_Weight,
            rating_desc: {
                mean_rating: reqBod.mean_rating,
                best_rating: reqBod.best_rating,
                worst_rating: reqBod.worst_rating,
                rating_count: reqBod.rating_count,
                reviews_count: reqBod.reviews_count
            },
            images: reqBod.images,
            language: reqBod.language,
            Date_first_available_at_buytoo: reqBod.Date_first_available_at_buytoo,
            Last_bought: reqBod.Last_bought
        },
        Browse_Type: reqBod.Browse_Type,
        SIM: reqBod.SIM,
        Hybrid_Sim_Slot: reqBod.Hybrid_Sim_Slot,
        Touchscreen: reqBod.Touchscreen,
        OTG_Compatible: reqBod.OTG_Compatible,
        Display_Features: {
            Display_Size: reqBod.Display_Size,
            Resolution: reqBod.Resolution,
            Resolution_Type: reqBod.Resolution_Type,
            GPU: reqBod.GPU,
            Display_Type: reqBod,
            Display_Colors: reqBod.Display_Colors
        },
        Os_and_Processor_Features: {
            Operating_System: reqBod.Operating_System,
            Processor_Type: reqBod.Processor_Type,
            Processor_Core: reqBod.Processor_Core,
            Primary_Clock_Speed: reqBod.Primary_Clock_Speed
        },
        Memory_and_Storage_Features:  {
            Internal_Storage: reqBod.Internal_Storage,
            RAM: reqBod.RAM,
            Total_Memory: reqBod.Total_Memory,
            Expandable_Storage: reqBod.Expandable_Storage,
            Supported_Memory_Card_Type: reqBod.Supported_Memory_Card_Type,
            Memory_Card_Slot_Type: reqBod.Memory_Card_Slot_Type
        }
    ,
        Camera_Features:  {
            Primary_Camera_Available: reqBod.Primary_Camera_Available,
            Primary_Camera: reqBod.Primary_Camera,
            Primary_Camera_Features: reqBod.Primary_Camera_Features,
            Secondary_Camera_Available: reqBod.Secondary_Camera_Available,
            Secondary_Camera: reqBod.Secondary_Camera,
            Flash: reqBod.Flash,
            Full_HD_Recording: reqBod.Full_HD_Recording,
            Frame_Rate: reqBod.Frame_Rate
        },
        Connectivity_Features: {
            Network_Type: reqBod.Network_Type,
            Supported_Networks: reqBod.Supported_Networks,
            threeG: reqBod.threeG,
            Bluetooth_Support: reqBod.Bluetooth_Support,
            Bluetooth_Version: reqBod.Bluetooth_Support,
            Wi_Fi: reqBod.Wi_Fi,
            Audio_Jack: reqBod.Audio_Jack
        },
        Multimedia_Features:  {
            FM_Radio: reqBod.FM_Radio,
            FM_Radio_Recording: reqBod.FM_Radio_Recording,
            Audio_Formats: reqBod.Audio_Formats,
            Video_Formats: reqBod.Video_Formats
        },
        Battery_and_Power_Features:  {
            Battery_Capacity: reqBod.Battery_Capacity
        },
        Dimensions:  {
            Width: reqBod.Width,
            Height: reqBod.Height,
            Depth: reqBod.Depth,
            Weight: reqBod.Weight
        }
    ,
        Smartphone: reqBod.Smartphone,
        SIM_Size: reqBod.SIM_Size,
        Removable_Battery: reqBod.Removable_Battery,
        Keypad: reqBod.Keypad,
        Graphics_PPI: reqBod.Graphics_PPI,
        Warranty_and_Gurantee: {
            Warranty_Summary: reqBod.Warranty_Summary,
            Gurantee_Summary: reqBod.Gurantee_Summary
        }
    })

    let request_resp = (reqBod.type === 'cellphone') ? mobiles : watches;

    request_resp.save(other.saveFunction(res, request_resp._id))



} // function ends

// seeing all product documents

let show_all = (req, res) => {

    let array_res = [response_model.basic, response_model.watches, response_model.mobiles]

    // dealing with err and response of ll product info
    let result_array = [];
    array_res.forEach((model, i) => model.find().select('-__v -_id').exec((err, result) => {
        if (!err) {
            result_array = [...result_array, ...result];
        }
        if (err) {
            result_array = [...result_array];
        }
        if (i == 2) {
            if (result_array.every(obj => check.isEmpty(res) === true)) {
                logger.captureError('product info can not be found', 'controller.js : show_all', 10);
                res.send(responses.generate(true, 'product info can not be found', 404, null));
            } else if (result_array === []) {
                logger.captureError("internal server error", 'controller.js : show_all ', 10)
                res.send(responses.generate(true, 'Failed to get', 500, null));
            } else {
                logger.captureInfo('All product infos found', 'controller.js : show_all ', 5);
                res.send(responses.generate(false, 'All blog details found', 200, result_array));
            }
        }


    }))

}

module.exports = {
    show_all: show_all,
    create_response: create_response,
}